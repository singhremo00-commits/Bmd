import React, { useState } from 'react';
import { Card, Input, Button } from './UI';
import { Send, CheckCircle, Edit3, Lock } from 'lucide-react';
import { User } from '../types';

interface ContributeProps {
  user: User | null;
  onLoginRequest: () => void;
}

export const Contribute: React.FC<ContributeProps> = ({ user, onLoginRequest }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ word: '', meaning: '', example: '', name: user?.name || '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.word || !formData.meaning) return;
    setSubmitted(true);
  };

  if (!user) {
    return (
      <div className="max-w-xl mx-auto pt-10 px-4 text-center animate-in fade-in duration-500">
        <Card className="p-12 flex flex-col items-center space-y-6 border-dashed border-2 border-white/10 bg-transparent">
           <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto text-gray-400">
              <Lock className="w-8 h-8" />
           </div>
           <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Login Required</h3>
              <p className="text-gray-400">Please sign in to contribute words to the community dictionary.</p>
           </div>
           <Button onClick={onLoginRequest} className="px-8">
              Login / Signup
           </Button>
        </Card>
      </div>
    );
  }

  if (submitted) {
     return (
        <div className="max-w-xl mx-auto pt-10 text-center animate-in zoom-in duration-300">
            <Card className="p-12 flex flex-col items-center space-y-6" gradientBorder>
                <div className="p-4 bg-green-500/20 rounded-full mb-2">
                    <CheckCircle className="w-16 h-16 text-green-500" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-white">Thank You, {user.name}!</h3>
                <p className="text-gray-300 text-lg">Your word has been submitted for review.</p>
                <Button 
                    variant="secondary" 
                    onClick={() => {
                        setSubmitted(false);
                        setFormData({ word: '', meaning: '', example: '', name: user.name });
                    }}
                    className="mt-4"
                >
                    Contribute Another
                </Button>
            </Card>
        </div>
     )
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-indigo-400">
                <Edit3 className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-white">Contribute a Word</h2>
            <p className="text-gray-400 max-w-lg mx-auto">Help us improve the dictionary by adding new words or correcting existing ones.</p>
        </div>

        <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
                <Input 
                    label="Word (Required)" 
                    required 
                    placeholder="e.g. New Word"
                    value={formData.word}
                    onChange={e => setFormData({...formData, word: e.target.value})} 
                />
                <Input 
                    label="Meaning (Required)" 
                    required 
                    placeholder="Meaning in Bishnupriya/Bengali/English"
                    value={formData.meaning}
                    onChange={e => setFormData({...formData, meaning: e.target.value})} 
                />
                <Input 
                    label="Example Sentence (Optional)" 
                    placeholder="Usage example"
                    value={formData.example}
                    onChange={e => setFormData({...formData, example: e.target.value})} 
                />
                
                <div className="pt-2 text-sm text-gray-500 flex justify-between items-center">
                    <span>Contributing as <span className="text-white font-medium">{user.name}</span></span>
                </div>
                
                <Button type="submit" className="w-full mt-4" disabled={!formData.word || !formData.meaning}>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Contribution
                </Button>
            </form>
        </Card>
    </div>
  );
};