import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark } from 'lucide-react';
import { DICTIONARY_DATA } from '../constants';
import { WordCard } from './WordCard';

interface SavedWordsProps {
  savedWords: string[];
  onToggleSave: (key: string) => void;
}

export const SavedWords: React.FC<SavedWordsProps> = ({ savedWords, onToggleSave }) => {
  // Retrieve the full entry objects for the saved keys
  const savedEntries = savedWords
    .map(key => Object.values(DICTIONARY_DATA).find(entry => entry.english === key))
    .filter((entry): entry is typeof DICTIONARY_DATA[keyof typeof DICTIONARY_DATA] => !!entry);

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-2 pt-4">
        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2">
           <Bookmark className="w-6 h-6 text-secondary fill-secondary" />
        </div>
        <h2 className="text-3xl font-heading font-bold text-white">Saved Words</h2>
        <p className="text-gray-400">Your personal collection of vocabulary.</p>
      </div>

      {savedEntries.length > 0 ? (
        <div className="space-y-2 pb-20">
          {savedEntries.map((entry, index) => (
            <WordCard 
                key={entry.english} 
                entry={entry} 
                index={index} 
                isSaved={true}
                onToggle={() => onToggleSave(entry.english)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 opacity-50 space-y-4">
          <p className="text-lg text-gray-400">No words saved yet.</p>
          <p className="text-sm text-gray-500">Go to the dictionary and tap the bookmark icon to save words here.</p>
        </div>
      )}
    </div>
  );
};