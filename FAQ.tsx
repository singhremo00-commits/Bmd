import React from 'react';
import { Card } from './UI';
import { HelpCircle } from 'lucide-react';

const faqs = [
  { q: "What is BMD?", a: "BMD is a Bishnupriya Manipuri Dictionary app with 20,000+ words and offline search." },
  { q: "Does the app work offline?", a: "Yes, all dictionary features work completely offline." },
  { q: "How do I search for a word?", a: "Type any letter or word — the app instantly shows all matching results without any limit." },
  { q: "Can I contribute new words?", a: "Yes! Use the “Contribute a Word” option to submit new words or corrections." },
  { q: "How long does approval take?", a: "Usually within 24–48 hours." },
  { q: "Is the app free?", a: "Yes. BMD is 100% free and always will be." },
  { q: "How many words are included?", a: "More than 20,000 words, and more will be added regularly." },
  { q: "I found a mistake. How can I report it?", a: "You can report mistakes using the “Contact Us” section." },
  { q: "Why are so many results showing in search?", a: "Because the app shows all matching words—there is no limit—so users get full results." },
  { q: "Will the app get more updates?", a: "Yes, we keep improving the app with new words and features." }
];

export const FAQ: React.FC = () => (
  <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="text-center space-y-2">
      <HelpCircle className="w-12 h-12 text-primary mx-auto opacity-80" />
      <h2 className="text-3xl font-heading font-bold text-white">FAQ</h2>
      <p className="text-gray-400">Frequently Asked Questions</p>
    </div>
    
    <div className="grid gap-4">
      {faqs.map((item, i) => (
        <Card key={i} className="p-5 hover:bg-white/5 transition-colors duration-300">
          <h3 className="text-lg font-bold text-secondary mb-2 flex gap-2">
            <span className="opacity-50 text-sm mt-1">{i + 1}.</span> {item.q}
          </h3>
          <p className="text-gray-300 pl-6 leading-relaxed border-l-2 border-white/10 pl-3">{item.a}</p>
        </Card>
      ))}
    </div>
  </div>
);