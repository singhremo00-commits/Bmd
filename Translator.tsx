import React, { useState } from 'react';
import { Languages, ArrowRight, Copy, Check, Sparkles } from 'lucide-react';
import { translateToBishnupriya } from '../services/geminiService';
import { Card, Button, Input } from './UI';

export const Translator: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleTranslate = async () => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    setTranslatedText('');
    
    try {
      const result = await translateToBishnupriya(inputText);
      setTranslatedText(result);
    } catch (error) {
      setTranslatedText("Error: Could not translate.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (translatedText) {
      navigator.clipboard.writeText(translatedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleTranslate();
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500">
          English to Bishnupriya
        </h2>
        <p className="text-gray-400">Instant sentence translation</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Input Side */}
        <div className="space-y-4">
            <div className="bg-dark-lighter/50 p-4 rounded-xl border border-white/10">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">English</label>
                <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type 'How are you' or 'What can I do?'..."
                    className="w-full bg-transparent text-white text-lg placeholder-gray-600 outline-none resize-none h-32"
                />
            </div>
            <Button 
                className="w-full" 
                onClick={handleTranslate} 
                isLoading={isLoading}
                disabled={!inputText.trim()}
            >
                Translate <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
        </div>

        {/* Output Side */}
        <Card className="h-full min-h-[200px] flex flex-col relative border-emerald-500/30" gradientBorder={true}>
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-emerald-900/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="font-medium text-emerald-100">Bishnupriya Manipuri</span>
              </div>
              {translatedText && (
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-xs text-emerald-400/80 hover:text-emerald-400 transition-colors"
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              )}
            </div>

            <div className="p-6 flex-grow flex items-center justify-center">
              {isLoading ? (
                <div className="space-y-3 w-full opacity-50">
                   <div className="h-2 bg-emerald-400/20 rounded-full w-2/3 animate-pulse mb-2"></div>
                   <div className="h-2 bg-emerald-400/20 rounded-full w-1/2 animate-pulse"></div>
                </div>
              ) : translatedText ? (
                <p className="text-2xl font-bold text-white text-center leading-relaxed">
                  {translatedText}
                </p>
              ) : (
                <div className="text-center text-gray-600">
                  <Languages className="w-12 h-12 mx-auto mb-2 opacity-20" />
                  <p className="text-sm">Translation will appear here</p>
                </div>
              )}
            </div>
        </Card>
      </div>

      <div className="flex justify-center gap-4 text-xs text-gray-500">
        <button 
            onClick={() => setInputText("How are you")} 
            className="hover:text-emerald-400 transition-colors"
        >
            Try: "How are you"
        </button>
        <span>•</span>
        <button 
            onClick={() => setInputText("What can I do?")} 
            className="hover:text-emerald-400 transition-colors"
        >
            Try: "What can I do?"
        </button>
      </div>
    </div>
  );
};