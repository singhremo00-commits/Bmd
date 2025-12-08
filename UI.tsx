import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';

// --- Card Component ---
interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  gradientBorder?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', gradientBorder = false, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative rounded-2xl bg-dark-lighter/50 backdrop-blur-md border border-white/10 overflow-hidden ${className} ${gradientBorder ? 'p-[1px]' : ''}`}
      {...props}
    >
      {gradientBorder && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-30 pointer-events-none" />
      )}
      <div className={`relative h-full w-full bg-dark-lighter/80 rounded-2xl ${gradientBorder ? 'bg-dark/90' : ''}`}>
        {children}
      </div>
    </motion.div>
  );
};

// --- Button Component ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  isLoading = false, 
  className = '', 
  disabled,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg shadow-primary/25",
    secondary: "bg-dark-lighter hover:bg-white/10 text-white border border-white/10",
    outline: "border-2 border-primary/50 text-primary hover:bg-primary/10",
    ghost: "text-gray-400 hover:text-white hover:bg-white/5"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
          Processing...
        </>
      ) : (
        children
      )}
    </button>
  );
};

// --- Input Component ---
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-400 mb-1.5">{label}</label>}
      <input
        className={`w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none transition-all ${className}`}
        {...props}
      />
    </div>
  );
};

// --- Select Component ---
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: string[];
}

export const Select: React.FC<SelectProps> = ({ label, options, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-400 mb-1.5">{label}</label>}
      <div className="relative">
        <select
          className={`w-full bg-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none appearance-none transition-all ${className}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-dark text-white">{opt}</option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
          ▼
        </div>
      </div>
    </div>
  );
};

// --- Badge Component ---
export const Badge: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = 'bg-primary/20 text-primary' }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${color}`}>
    {children}
  </span>
);