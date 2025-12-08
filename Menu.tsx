import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Edit3, Languages, Book, Info, HelpCircle, Mail, Heart, Shield, Bookmark } from 'lucide-react';
import { TabType } from '../types';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: TabType) => void;
  activeTab: TabType;
}

export const Menu: React.FC<MenuProps> = ({ isOpen, onClose, onNavigate, activeTab }) => {
  const menuItems = [
    {
      title: 'Dictionary',
      items: [
        { icon: <Home className="w-4 h-4" />, label: 'Home', id: 'dictionary' },
        { icon: <Bookmark className="w-4 h-4" />, label: 'Saved Words', id: 'saved' },
      ]
    },
    {
      title: 'Learn',
      items: [
        { icon: <Edit3 className="w-4 h-4" />, label: 'Contribute a Word', id: 'contribute' },
        { icon: <Languages className="w-4 h-4" />, label: 'Translate', id: 'translator' },
        { icon: <Book className="w-4 h-4" />, label: 'Grammar', id: 'grammar' },
      ]
    },
    {
      title: 'Information',
      items: [
        { icon: <Info className="w-4 h-4" />, label: 'About BMD', id: 'about' },
        { icon: <HelpCircle className="w-4 h-4" />, label: 'FAQ', id: 'faq' },
        { icon: <Mail className="w-4 h-4" />, label: 'Contact Us', id: 'contact' },
        { icon: <Shield className="w-4 h-4" />, label: 'Privacy Policy', id: 'about' },
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: <Heart className="w-4 h-4" />, label: 'Support Us / Donate', id: 'support' },
      ]
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-[280px] bg-dark-lighter border-r border-white/10 z-[70] overflow-y-auto"
          >
            <div className="pt-8 pb-4 px-5 flex items-center justify-between border-b border-white/5 bg-dark sticky top-0 z-10">
              <span className="font-heading font-bold text-xl text-white tracking-wide">Menu</span>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 space-y-8">
              {menuItems.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-xs font-bold text-primary/70 uppercase tracking-widest px-3">{section.title}</h3>
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => {
                          onNavigate(item.id as TabType);
                          onClose();
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all ${
                          activeTab === item.id 
                            ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                            : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
                        }`}
                      >
                        {item.icon}
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 text-center mt-auto border-t border-white/5">
                <p className="text-[10px] text-gray-600 font-mono">BMD v1.2.0</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};