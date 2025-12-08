import React, { useState } from 'react';
import { Card, Input, Button } from './UI';
import { UserCircle, Mail, Lock, ArrowRight, AlertCircle, Chrome } from 'lucide-react';
import { User } from '../types';

interface AuthProps {
  onLogin: (user: User) => void;
}

export const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Simulated Authentication Delay
    setTimeout(() => {
        if (isLogin) {
            // Simulated Login validation
            if (formData.email && formData.password) {
                // Return a mock user based on email
                const mockName = formData.email.split('@')[0];
                onLogin({
                    name: mockName.charAt(0).toUpperCase() + mockName.slice(1),
                    email: formData.email,
                    profileImage: undefined
                });
            } else {
                setError("Please fill in all fields.");
                setIsLoading(false);
            }
        } else {
            // Simulated Signup
             if (formData.name && formData.email && formData.password) {
                onLogin({
                    name: formData.name,
                    email: formData.email,
                    profileImage: undefined
                });
             } else {
                 setError("Please fill in all fields.");
                 setIsLoading(false);
             }
        }
    }, 1000);
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
        onLogin({
            name: "Demo User",
            email: "demo@example.com",
            profileImage: undefined
        });
    }, 1000);
  }

  return (
    <div className="max-w-md mx-auto pt-8 px-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
          <UserCircle className="w-8 h-8 text-gray-300" />
        </div>
        <h2 className="text-2xl font-heading font-bold text-white">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>
        <p className="text-gray-400 text-sm mt-2">
          {isLogin 
            ? 'Sign in to contribute words and sync your data.' 
            : 'Join the community to help improve the dictionary.'}
        </p>
      </div>

      <Card className="p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <Input
              label="Full Name"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          )}
          
          <Input
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />

          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
          />

          {error && (
            <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
            </div>
          )}

          <Button type="submit" className="w-full mt-2" isLoading={isLoading}>
            {isLogin ? 'Sign In' : 'Create Account'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </form>

        <div className="my-6 flex items-center gap-3">
            <div className="h-px bg-white/10 flex-1" />
            <span className="text-xs text-gray-500 uppercase">Or continue with</span>
            <div className="h-px bg-white/10 flex-1" />
        </div>

        <button 
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 p-3 bg-white text-dark font-medium rounded-xl hover:bg-gray-100 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
            <Chrome className="w-5 h-5 text-blue-500" />
            Google
        </button>

        <div className="mt-6 text-center">
          <button
            onClick={() => {
                setIsLogin(!isLogin);
                setError(null);
            }}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
          </button>
        </div>
      </Card>
    </div>
  );
};