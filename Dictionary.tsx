import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { DICTIONARY_DATA } from '../constants';
import { Input } from './UI';
import { WordCard } from './WordCard';

interface DictionaryProps {
  savedWords: string[];
  onToggleSave: (key: string) => void;
}

export const Dictionary: React.FC<DictionaryProps> = ({ savedWords, onToggleSave }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter logic to find matches starting with the search term
  const results = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const lowerTerm = searchTerm.toLowerCase().trim();
    
    // Filter dictionary entries where the English word starts with the search term
    return Object.values(DICTIONARY_DATA)
      .filter(entry => entry.english.toLowerCase().startsWith(lowerTerm))
      // Sort alphabetically by English word
      .sort((a, b) => a.english.localeCompare(b.english));
  }, [searchTerm]);

  return (
    <div className="max-w-4xl mx-auto space-y-4">
       {/* Header Section */}
       <div className="text-center space-y-3 pt-6 pb-2 px-4">
         <motion.h1 
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, ease: "backOut" }}
           className="text-3xl md:text-5xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 leading-tight pb-1"
         >
           Explore Bishnupriya Manipuri Vocabulary
         </motion.h1>
         <motion.p 
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2, duration: 0.5 }}
           className="text-gray-400 text-sm md:text-lg max-w-xl mx-auto font-light"
         >
           Start typing to discover meanings, translations, and usage.
         </motion.p>
       </div>

       {/* Search Input - Compact */}
       <div className="sticky top-24 z-20 bg-dark/95 backdrop-blur-xl p-3 -mx-4 rounded-xl border border-white/5 shadow-2xl">
          <div className="relative max-w-2xl mx-auto">
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search English word..."
              className="pl-10 py-3 text-base bg-dark-lighter border-white/10 focus:border-primary/50 transition-all shadow-inner"
              autoFocus
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
          {searchTerm && (
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="text-[10px] text-gray-500 text-center mt-2 font-mono uppercase tracking-widest"
            >
              {results.length > 0 ? `${results.length} matches found` : 'No results found'}
            </motion.p>
          )}
       </div>

       {/* Results List */}
       <div className="space-y-2 pb-20">
         {results.map((entry, index) => (
           <WordCard 
             key={`${entry.english}-${index}`} 
             entry={entry} 
             index={index} 
             isSaved={savedWords.includes(entry.english)}
             onToggle={() => onToggleSave(entry.english)}
           />
         ))}
         
         {results.length === 0 && !searchTerm && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="text-center py-12 opacity-30"
           >
             <Search className="w-16 h-16 mx-auto mb-4 text-gray-500" />
             <p className="text-lg font-heading">Start typing to search</p>
           </motion.div>
         )}
       </div>
    </div>
  );
};