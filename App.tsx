import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Languages, Menu as MenuIcon, Bookmark, UserCircle } from 'lucide-react';
import { TabType, User } from './types';
import { Dictionary } from './components/Dictionary';
import { Translator } from './components/Translator';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Support } from './components/Support';
import { Contribute } from './components/Contribute';
import { SavedWords } from './components/SavedWords';
import { Menu } from './components/Menu';
import { Auth } from './components/Auth';
import { Profile } from './components/Profile';

const BMDLogo = () => (
  <svg width="60" height="28" viewBox="0 0 60 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg filter">
    <text x="0" y="22" fontFamily="serif" fontWeight="bold" fontSize="24" fill="#ffffff" letterSpacing="0">BM</text>
    {/* The D overlaps the M slightly */}
    <text x="42" y="22" fontFamily="serif" fontWeight="bold" fontSize="24" fill="#ffffff" style={{ mixBlendMode: 'normal' }}>D</text>
  </svg>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('dictionary');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // State for saved words
  const [savedWords, setSavedWords] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('bmd_saved_words');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Error parsing saved words:", e);
      return [];
    }
  });

  // Local State for User Authentication (Simulated)
  const [user, setUser] = useState<User | null>(() => {
    try {
      const savedUser = localStorage.getItem('bmd_user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (e) {
      console.error("Error parsing user:", e);
      return null;
    }
  });

  const handleLogin = (userData: User) => {
    setUser(userData);
    localStorage.setItem('bmd_user', JSON.stringify(userData));
    setActiveTab('profile');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('bmd_user');
    setActiveTab('dictionary');
  };

  const handleUpdateUser = (updatedUser: User) => {
    setUser(updatedUser);
    localStorage.setItem('bmd_user', JSON.stringify(updatedUser));
  };

  const handleClearSavedWords = () => {
    setSavedWords([]);
    localStorage.removeItem('bmd_saved_words');
  };

  const handleToggleSave = (wordKey: string) => {
    setSavedWords(prev => {
      const newSaved = prev.includes(wordKey)
        ? prev.filter(w => w !== wordKey)
        : [...prev, wordKey];
      
      localStorage.setItem('bmd_saved_words', JSON.stringify(newSaved));
      return newSaved;
    });
  };

  // Main tabs shown in bottom/top nav
  const mainTabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'dictionary', label: 'Dictionary', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'saved', label: 'Saved', icon: <Bookmark className="w-4 h-4" /> },
    { id: 'translator', label: 'Translator', icon: <Languages className="w-4 h-4" /> },
  ];

  const Placeholder = ({ title, icon: Icon }: { title: string, icon: any }) => (
    <div className="max-w-md mx-auto mt-20 text-center space-y-4">
      <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto">
        <Icon className="w-8 h-8 text-gray-500" />
      </div>
      <h2 className="text-2xl font-bold text-gray-300">{title}</h2>
      <p className="text-gray-500">This feature is coming soon in the next update!</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-dark text-white selection:bg-primary/30 selection:text-white font-sans overflow-x-hidden">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-secondary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[35%] h-[35%] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      {/* Hamburger Menu Sidebar */}
      <Menu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        onNavigate={setActiveTab} 
        activeTab={activeTab} 
      />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-dark/90 backdrop-blur-xl border-b border-white/5 pt-4 pb-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors active:scale-95"
              >
                <MenuIcon className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-2 select-none cursor-pointer" onClick={() => setActiveTab('dictionary')}>
                <BMDLogo />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
                {/* Desktop Tabs */}
                <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5 mr-4">
                {mainTabs.map((tab) => (
                    <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                        activeTab === tab.id ? 'text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                    >
                    {activeTab === tab.id && (
                        <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white/10 rounded-lg shadow-sm"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                        {tab.icon} {tab.label}
                    </span>
                    </button>
                ))}
                </div>

                {/* Profile Icon / Login Trigger */}
                <button 
                    onClick={() => setActiveTab(user ? 'profile' : 'login')}
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors overflow-hidden"
                >
                    {user && user.profileImage ? (
                        <img src={user.profileImage} alt={user.name} className="w-full h-full object-cover" />
                    ) : user ? (
                        <span className="font-bold text-sm text-primary">{user.name.charAt(0).toUpperCase()}</span>
                    ) : (
                        <UserCircle className="w-5 h-5 text-gray-400" />
                    )}
                </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 w-full z-50 bg-dark/95 backdrop-blur-xl border-t border-white/10 pb-safe shadow-2xl">
        <div className="flex justify-around items-center p-2">
          {mainTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                activeTab === tab.id ? 'text-primary' : 'text-gray-500'
              }`}
            >
              <div className={`${activeTab === tab.id ? 'bg-primary/20' : 'bg-transparent'} p-1.5 rounded-lg transition-colors`}>
                {React.cloneElement(tab.icon as React.ReactElement<any>, { className: "w-5 h-5" })}
              </div>
              <span className="text-[10px] font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 pt-28 pb-28 md:pt-28 md:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[85vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {/* Tools */}
            {activeTab === 'dictionary' && <Dictionary savedWords={savedWords} onToggleSave={handleToggleSave} />}
            {activeTab === 'translator' && <Translator />}
            {activeTab === 'saved' && <SavedWords savedWords={savedWords} onToggleSave={handleToggleSave} />}
            
            {/* Auth & User */}
            {activeTab === 'login' && <Auth onLogin={handleLogin} />}
            {activeTab === 'profile' && user && (
                <Profile 
                    user={user} 
                    onLogout={handleLogout} 
                    onUpdateUser={handleUpdateUser}
                    onClearData={handleClearSavedWords}
                    savedCount={savedWords.length}
                />
            )}
            
            {/* Pages */}
            {activeTab === 'contribute' && <Contribute user={user} onLoginRequest={() => setActiveTab('login')} />}
            {activeTab === 'about' && <About />}
            {activeTab === 'faq' && <FAQ />}
            {activeTab === 'contact' && <Contact />}
            {activeTab === 'support' && <Support />}
            
            {/* Placeholders */}
            {activeTab === 'grammar' && <Placeholder title="Grammar" icon={BookOpen} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="hidden md:block fixed bottom-4 w-full text-center z-10 pointer-events-none">
        <p className="text-xs text-gray-600">Powered by Google Gemini 2.5 Flash</p>
      </footer>
    </div>
  );
};

export default App;