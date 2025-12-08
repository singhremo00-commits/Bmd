import React from 'react';
import { Card } from './UI';
import { Mail, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => (
  <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="text-center space-y-2">
      <MessageSquare className="w-12 h-12 text-secondary mx-auto opacity-80" />
      <h2 className="text-3xl font-heading font-bold text-white">Contact Us</h2>
    </div>

    <Card className="p-8 text-center space-y-8" gradientBorder>
      <p className="text-gray-300 text-lg">
        For any suggestions, feedback, corrections, or support, feel free to reach out to us.
      </p>
      
      <div className="flex flex-col items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
        <div className="p-3 bg-secondary/20 rounded-full">
            <Mail className="w-8 h-8 text-secondary" />
        </div>
        <div className="space-y-1">
            <span className="block text-sm text-gray-500 uppercase tracking-widest font-bold">Email Us At</span>
            <span className="block text-2xl font-mono text-white select-all">yourmail@example.com</span>
        </div>
      </div>

      <p className="text-sm text-gray-400 italic">
        (Replace with your email)
      </p>

      <div className="pt-4 border-t border-white/10">
        <p className="text-primary font-medium">
            We appreciate your feedback and will try to respond as soon as possible.
        </p>
      </div>
    </Card>
  </div>
);