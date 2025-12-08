import React, { useState, useRef } from 'react';
import { Card, Button, Input } from './UI';
import { User } from '../types';
import { UserCircle, LogOut, Settings, Award, Camera, ChevronLeft, Trash2, Bell, Check } from 'lucide-react';

interface ProfileProps {
  user: User;
  onLogout: () => void;
  onUpdateUser: (user: User) => void;
  onClearData: () => void;
  savedCount: number;
}

export const Profile: React.FC<ProfileProps> = ({ user, onLogout, onUpdateUser, onClearData, savedCount }) => {
  const [showSettings, setShowSettings] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [newName, setNewName] = useState(user.name);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpdateUser({ ...user, profileImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveName = () => {
    if (newName.trim()) {
      onUpdateUser({ ...user, name: newName });
      setIsEditingName(false);
    }
  };

  const handleClearDataConfirm = () => {
    if (window.confirm("Are you sure you want to delete all your saved words? This action cannot be undone.")) {
      onClearData();
      alert("Saved words have been cleared.");
    }
  };

  if (showSettings) {
    return (
      <div className="max-w-xl mx-auto pt-6 px-4 animate-in fade-in duration-300">
        <div className="flex items-center gap-2 mb-4">
            <button onClick={() => setShowSettings(false)} className="p-2 hover:bg-white/10 rounded-full text-gray-300 transition-colors">
                <ChevronLeft className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold text-white">Settings</h2>
        </div>

        <Card className="p-6 space-y-6">
            {/* Edit Profile Section */}
            <div className="space-y-4 border-b border-white/10 pb-6">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Account</h3>
                
                <div className="space-y-2">
                    <label className="text-sm text-gray-400">Display Name</label>
                    <div className="flex gap-2">
                        <Input 
                            value={newName} 
                            onChange={(e) => setNewName(e.target.value)} 
                            disabled={!isEditingName}
                            className={!isEditingName ? "border-transparent bg-transparent pl-0 h-10 py-0" : "h-10 py-0"}
                        />
                        {isEditingName ? (
                            <Button onClick={handleSaveName} className="px-4 py-2 h-10 text-sm">Save</Button>
                        ) : (
                            <Button variant="secondary" onClick={() => setIsEditingName(true)} className="px-4 py-2 h-10 text-sm">Edit</Button>
                        )}
                    </div>
                </div>
            </div>

            {/* App Preferences */}
            <div className="space-y-4 border-b border-white/10 pb-6">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">App Settings</h3>
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${notificationsEnabled ? 'bg-primary/20 text-primary' : 'bg-white/5 text-gray-500'}`}>
                            <Bell className="w-5 h-5" />
                        </div>
                        <span className="text-gray-200 text-sm font-medium">Notifications</span>
                    </div>
                    <button 
                        onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                        className={`w-10 h-6 flex items-center rounded-full transition-colors duration-300 ${notificationsEnabled ? 'bg-primary' : 'bg-white/10'}`}
                    >
                        <div className={`w-3.5 h-3.5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${notificationsEnabled ? 'translate-x-5' : 'translate-x-1'}`} />
                    </button>
                </div>
            </div>

            {/* Data Management */}
            <div className="space-y-4">
                <h3 className="text-xs font-bold text-red-400/70 uppercase tracking-widest">Data & Storage</h3>
                
                <button 
                    onClick={handleClearDataConfirm}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 transition-colors group"
                >
                    <div className="flex items-center gap-3">
                        <Trash2 className="w-4 h-4 text-red-400" />
                        <span className="text-red-400 text-sm font-medium">Clear Saved Words</span>
                    </div>
                </button>
            </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto pt-6 px-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Card className="p-6 space-y-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative group">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-dark shadow-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              {user.profileImage ? (
                <img src={user.profileImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <span className="text-3xl font-bold text-white uppercase">{user.name.charAt(0)}</span>
              )}
            </div>
            
            {/* Hidden File Input */}
            <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageUpload} 
                accept="image/*" 
                className="hidden" 
            />
            
            <button 
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-0 right-0 p-2 bg-dark-lighter border border-white/20 rounded-full text-white shadow-lg hover:bg-white/10 transition-colors"
            >
                <Camera className="w-4 h-4" />
            </button>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">{user.name}</h2>
            <p className="text-gray-400 text-sm">{user.email}</p>
          </div>
        </div>

        {/* Stats Grid - Adjusted padding and gap for cleaner look */}
        <div className="grid grid-cols-2 gap-3">
           <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center hover:bg-white/10 transition-colors">
              <span className="block text-xl font-bold text-primary">0</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Contributions</span>
           </div>
           <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center hover:bg-white/10 transition-colors">
              <span className="block text-xl font-bold text-secondary">{savedCount}</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Saved Words</span>
           </div>
        </div>

        <div className="space-y-2 pt-2 border-t border-white/10">
          <button className="w-full flex items-center justify-between p-3 rounded-xl bg-dark hover:bg-white/5 transition-colors text-left group">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:text-blue-300">
                    <Award className="w-5 h-5" />
                </div>
                <span className="text-gray-300 text-sm font-medium group-hover:text-white">Achievements</span>
            </div>
            <span className="text-[10px] text-gray-600 font-medium bg-white/5 px-2 py-1 rounded">SOON</span>
          </button>
          
          <button 
            onClick={() => setShowSettings(true)}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-dark hover:bg-white/5 transition-colors text-left group"
          >
            <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 group-hover:text-purple-300">
                    <Settings className="w-5 h-5" />
                </div>
                <span className="text-gray-300 text-sm font-medium group-hover:text-white">Settings</span>
            </div>
            <ChevronLeft className="w-4 h-4 text-gray-600 rotate-180" />
          </button>
        </div>

        <Button variant="secondary" onClick={onLogout} className="w-full mt-2 border-red-500/20 hover:bg-red-500/10 hover:border-red-500/40 hover:text-red-400 text-red-400/80">
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </Card>
    </div>
  );
};