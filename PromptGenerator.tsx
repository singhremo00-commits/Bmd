import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Copy, Check, Sliders, Zap } from 'lucide-react';
import { PromptState, PromptTone, PromptLength } from '../types';
import { PROMPT_CATEGORIES, PROMPT_TONES, PROMPT_LENGTHS } from '../constants';
import { generateOptimizedPrompt } from '../services/geminiService';
import { Card, Button, Input, Select, Badge } from './UI';
import ReactMarkdown from 'react-markdown';

export const PromptGenerator: React.FC = () => {
  const [state, setState] = useState<PromptState>({
    category: '',
    types: [],
    tone: PromptTone.CASUAL,
    length: PromptLength.MEDIUM,
    generatedPrompt: '',
    isLoading: false,
    error: null,
  });

  const [copied, setCopied] = useState(false);

  const toggleType = (type: string) => {
    setState(prev => {
      const exists = prev.types.includes(type);
      return {
        ...prev,
        types: exists ? prev.types.filter(t => t !== type) : [...prev.types, type]
      };
    });
  };

  const handleGenerate = async () => {
    if (!state.category.trim()) return;

    setState(prev => ({ ...prev, isLoading: true, error: null, generatedPrompt: '' }));
    
    try {
      const prompt = await generateOptimizedPrompt(state.category, state.types, state.tone, state.length);
      setState(prev => ({ ...prev, generatedPrompt: prompt, isLoading: false }));
    } catch (err) {
      setState(prev => ({ ...prev, isLoading: false, error: 'Failed to generate prompt.' }));
    }
  };

  const handleCopy = () => {
    if (state.generatedPrompt) {
      navigator.clipboard.writeText(state.generatedPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan-400 to-primary">
          AI Prompt Engineer
        </h2>
        <p className="text-gray-400">Craft optimized prompts for better AI results</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <Card className="p-6 space-y-6">
            <div className="flex items-center gap-2 mb-4 text-accent">
              <Sliders className="w-5 h-5" />
              <h3 className="font-semibold">Configuration</h3>
            </div>
            
            <Input
              label="Main Goal / Category"
              placeholder="e.g. SEO Blog Post, Python Script"
              value={state.category}
              onChange={(e) => setState(prev => ({ ...prev, category: e.target.value }))}
            />

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Target Use Cases</label>
              <div className="flex flex-wrap gap-2">
                {PROMPT_CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => toggleType(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                      state.types.includes(cat) 
                        ? 'bg-accent/20 border-accent text-accent' 
                        : 'bg-dark border-white/10 text-gray-400 hover:border-white/30'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Select
                label="Tone"
                options={PROMPT_TONES}
                value={state.tone}
                onChange={(e) => setState(prev => ({ ...prev, tone: e.target.value as PromptTone }))}
              />
              <Select
                label="Length"
                options={PROMPT_LENGTHS}
                value={state.length}
                onChange={(e) => setState(prev => ({ ...prev, length: e.target.value as PromptLength }))}
              />
            </div>

            <Button 
              className="w-full" 
              onClick={handleGenerate} 
              isLoading={state.isLoading}
              disabled={!state.category.trim()}
              variant="outline"
            >
              <Zap className="w-5 h-5 mr-2" />
              Optimize Prompt
            </Button>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="h-full min-h-[500px] flex flex-col relative border-accent/20" gradientBorder={true}>
             <div className="p-4 border-b border-white/10 flex justify-between items-center bg-black/40">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-accent" />
                <span className="font-mono text-sm text-gray-300">Terminal Output</span>
              </div>
              {state.generatedPrompt && (
                <button
                  onClick={handleCopy}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  title="Copy Code"
                >
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-400" />}
                </button>
              )}
            </div>
            
            <div className="p-6 flex-grow overflow-y-auto max-h-[600px] font-mono text-sm bg-black/20">
              {state.isLoading ? (
                <div className="space-y-3 opacity-50">
                  <div className="h-4 bg-white/10 rounded w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-white/10 rounded w-1/2 animate-pulse"></div>
                  <div className="h-4 bg-white/10 rounded w-5/6 animate-pulse"></div>
                </div>
              ) : state.generatedPrompt ? (
                <div className="prose prose-invert max-w-none text-gray-300">
                  <ReactMarkdown>{state.generatedPrompt}</ReactMarkdown>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-gray-600">
                  <Terminal className="w-16 h-16 opacity-20 mb-4" />
                  <p>Configure parameters to generate an optimized prompt.</p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};