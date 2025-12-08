import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Music, Copy, Check, Sparkles } from 'lucide-react';
import { LyricsState, LyricsType } from '../types';
import { LYRICS_TYPES } from '../constants';
import { generateBishnupriyaLyrics } from '../services/geminiService';
import { Card, Button, Input, Select, Badge } from './UI';
import ReactMarkdown from 'react-markdown';

export const LyricsGenerator: React.FC = () => {
  const [state, setState] = useState<LyricsState>({
    topic: '',
    type: LyricsType.TRADITIONAL,
    generatedLyrics: '',
    isLoading: false,
    error: null,
  });

  const [displayedLyrics, setDisplayedLyrics] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copied, setCopied] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async () => {
    if (!state.topic.trim()) return;

    setState(prev => ({ ...prev, isLoading: true, error: null, generatedLyrics: '' }));
    setDisplayedLyrics('');
    setIsTyping(false);
    
    try {
      const lyrics = await generateBishnupriyaLyrics(state.topic, state.type);
      setState(prev => ({ ...prev, generatedLyrics: lyrics, isLoading: false }));
    } catch (err) {
      setState(prev => ({ ...prev, isLoading: false, error: 'Failed to generate lyrics. Please try again.' }));
    }
  };

  // Typing Effect
  useEffect(() => {
    if (state.generatedLyrics) {
      setIsTyping(true);
      setDisplayedLyrics('');
      let index = 0;
      const text = state.generatedLyrics;
      
      const intervalId = setInterval(() => {
        setDisplayedLyrics(text.slice(0, index + 1));
        index++;
        
        // Auto scroll to bottom
        if (outputRef.current) {
          outputRef.current.scrollTop = outputRef.current.scrollHeight;
        }

        if (index >= text.length) {
          clearInterval(intervalId);
          setIsTyping(false);
        }
      }, 10); // Adjust typing speed here (lower is faster)

      return () => clearInterval(intervalId);
    }
  }, [state.generatedLyrics]);

  const handleCopy = () => {
    if (state.generatedLyrics) {
      navigator.clipboard.writeText(state.generatedLyrics);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-purple-500 to-primary">
          AI-Powered Bishnupriya Manipuri Lyrics Generator
        </h2>
        <p className="text-gray-400">Instantly get fresh, original lyrics with natural Bishnupriya expression.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6">
          <Card className="p-6 space-y-6">
            <Input
              label="Song Theme / Topic"
              placeholder="e.g., Rain in the village, A mother's love"
              value={state.topic}
              onChange={(e) => setState(prev => ({ ...prev, topic: e.target.value }))}
            />

            <Select
              label="Musical Style"
              options={LYRICS_TYPES}
              value={state.type}
              onChange={(e) => setState(prev => ({ ...prev, type: e.target.value as LyricsType }))}
            />

            <Button 
              className="w-full mt-4" 
              onClick={handleGenerate} 
              isLoading={state.isLoading}
              disabled={!state.topic.trim() || isTyping}
              variant="primary"
            >
              <Music className="w-5 h-5 mr-2" />
              {isTyping ? 'Typing...' : 'Generate Lyrics'}
            </Button>
            
            {!process.env.API_KEY && (
               <p className="text-xs text-red-400 mt-2 text-center">API Key missing. See README.</p>
            )}
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card className="h-full min-h-[400px] p-0 overflow-hidden flex flex-col relative" gradientBorder={true}>
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-black/20">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="font-medium text-gray-300">Generated Output</span>
              </div>
              {state.generatedLyrics && (
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                >
                  {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                  {copied ? 'Copied' : 'Copy Text'}
                </button>
              )}
            </div>

            <div 
              ref={outputRef}
              className="p-8 flex-grow overflow-y-auto max-h-[600px] custom-markdown scroll-smooth"
            >
              {state.isLoading ? (
                <div className="flex flex-col items-center justify-center h-full space-y-4 opacity-50">
                  <div className="w-12 h-12 border-4 border-secondary/30 border-t-secondary rounded-full animate-spin" />
                  <p className="text-sm animate-pulse">Composing poetry...</p>
                </div>
              ) : state.error ? (
                <div className="text-red-400 text-center mt-10">{state.error}</div>
              ) : displayedLyrics ? (
                <div className="prose prose-invert prose-lg max-w-none prose-headings:text-secondary prose-p:leading-relaxed prose-p:mb-6">
                  <ReactMarkdown 
                    components={{
                       h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-6 text-center text-white" {...props} />,
                       h2: ({node, ...props}) => <h2 className="text-2xl font-bold mb-6 text-secondary border-b border-white/10 pb-2" {...props} />,
                       h3: ({node, ...props}) => <h3 className="text-xl font-semibold mt-8 mb-4 text-purple-300 uppercase tracking-widest" {...props} />,
                    }}
                  >
                    {displayedLyrics + (isTyping ? '▍' : '')}
                  </ReactMarkdown>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-gray-500 space-y-4">
                  <Music className="w-16 h-16 opacity-20" />
                  <p>Enter a topic to generate lyrics</p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};