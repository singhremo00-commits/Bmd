import React from 'react';
import { Card } from './UI';

export const About: React.FC = () => (
  <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <h2 className="text-3xl font-heading font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">About BMD</h2>
    <Card className="p-8 space-y-6">
      <p className="text-lg font-medium text-white leading-relaxed">
        BMD (Bishnupriya Manipuri Dictionary) is a simple and powerful dictionary app created to support the Bishnupriya Manipuri community.
      </p>
      <p className="text-gray-300">
        Our goal is to make language learning easy, fast, and accessible for everyone.
      </p>
      <div className="bg-white/5 p-6 rounded-xl border border-white/5 space-y-3">
        <h3 className="text-xl font-bold text-secondary">BMD includes:</h3>
        <ul className="space-y-2 text-gray-300 list-disc list-inside marker:text-gray-500">
          <li>20,000+ words</li>
          <li>Fast unlimited search</li>
          <li>Meanings in Bishnupriya Manipuri, English & Bengali</li>
          <li>Offline access</li>
          <li>Clean and simple interface</li>
          <li>User-contributed word system</li>
        </ul>
      </div>
      <p className="text-primary italic text-center text-sm border-t border-white/10 pt-4">
        BMD will always remain free for everyone, with regular updates and improvements to keep the language alive digitally.
      </p>
    </Card>
  </div>
);