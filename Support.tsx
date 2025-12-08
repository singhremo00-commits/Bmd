import React from 'react';
import { Card } from './UI';
import { Heart, Coffee } from 'lucide-react';

export const Support: React.FC = () => (
  <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="text-center space-y-2">
      <h2 className="text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500">Support BMD</h2>
      <p className="text-gray-400">Optional Donation</p>
    </div>

    <Card className="p-8 space-y-8 text-center" gradientBorder>
      <div className="flex justify-center">
        <div className="relative">
            <div className="absolute inset-0 bg-pink-500 blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative p-6 bg-gradient-to-br from-pink-500/20 to-rose-600/20 rounded-full border border-pink-500/30">
                <Heart className="w-16 h-16 text-pink-500 fill-pink-500/50" />
            </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <p className="text-xl font-medium text-white">BMD is completely free for everyone.</p>
        <p className="text-gray-300 leading-relaxed max-w-lg mx-auto">
            If you find this app helpful and wish to support its development, you can make a voluntary donation.
        </p>
      </div>
      
      <div className="bg-white/5 p-5 rounded-xl border-l-4 border-secondary text-left mx-auto max-w-lg">
         <p className="text-gray-300 text-sm flex gap-3">
           <Coffee className="w-5 h-5 text-secondary flex-shrink-0" />
           Your support helps us maintain the app, add new words, and continue improving the dictionary.
         </p>
      </div>

      <div className="space-y-4 pt-4">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Donation Options</h3>
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            {['UPI ID', 'PhonePe', 'Google Pay', 'Paytm'].map(opt => (
                <button key={opt} className="p-3 bg-dark-lighter border border-white/10 rounded-xl text-gray-300 text-sm hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-white transition-all duration-300">
                    {opt}
                </button>
            ))}
        </div>
      </div>

      <p className="text-sm text-gray-500 pt-6 border-t border-white/5">
        Your donation is optional — the app will always remain free.<br/>
        <span className="text-pink-400 font-medium mt-1 inline-block">Thank you for your support! 🙏</span>
      </p>
    </Card>
  </div>
);