import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark } from 'lucide-react';
import { DictionaryEntry } from '../types';

interface WordCardProps {
  entry: DictionaryEntry;
  index: number;
  isSaved: boolean;
  onToggle: () => void;
}

export const WordCard: React.FC<WordCardProps> = ({ entry, index, isSaved, onToggle }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index < 10 ? index * 0.05 : 0 }}
      className="bg-dark-lighter/40 border border-white/5 px-4 py-3 hover:bg-white/5 hover:border-white/10 transition-all rounded-lg group relative"
    >
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        className="absolute top-3 right-3 p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none z-10"
        title={isSaved ? "Unsave" : "Save Word"}
      >
        <Bookmark className={`w-5 h-5 transition-colors ${isSaved ? "fill-secondary text-secondary" : "text-gray-600 group-hover:text-gray-400"}`} />
      </button>

      <div className="flex flex-col sm:flex-row gap-3 sm:items-center pr-10">
        
        {/* English - Main Focus */}
        <div className="sm:w-1/4 min-w-[120px] mb-1 sm:mb-0">
          <span className="text-lg font-bold text-white group-hover:text-primary transition-colors block">{entry.english}</span>
        </div>
        
        {/* Translations */}
        <div className="flex-1 grid grid-cols-3 gap-3">
          <div className="flex flex-col border-l-2 border-purple-500/20 pl-3">
            <span className="text-[10px] text-purple-400 uppercase tracking-widest font-bold opacity-70 mb-1">Bishnupriya</span>
            <span className="text-gray-200 text-sm font-medium leading-tight break-words">{entry.bishnupriya}</span>
          </div>
          
          <div className="flex flex-col border-l-2 border-green-500/20 pl-3">
            <span className="text-[10px] text-green-400 uppercase tracking-widest font-bold opacity-70 mb-1">Bangla</span>
            <span className="text-gray-300 text-sm leading-tight break-words">{entry.bangla}</span>
          </div>

          <div className="flex flex-col border-l-2 border-orange-500/20 pl-3">
            <span className="text-[10px] text-orange-400 uppercase tracking-widest font-bold opacity-70 mb-1">Hindi</span>
            <span className="text-gray-300 text-sm leading-tight break-words">{entry.hindi}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};