import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, type HTMLMotionProps } from 'framer-motion';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    const childrenNode = children as React.ReactNode;

    const variants = {
      primary: 'bg-white text-cosmic-950 hover:bg-slate-100 shadow-xl shadow-white/5',
      secondary: 'bg-transparent text-white border border-white/10 hover:bg-white/5',
      outline: 'bg-transparent border border-primary-500 text-primary-400 hover:bg-primary-500/10',
      ghost: 'bg-transparent hover:bg-white/5 text-slate-400 hover:text-white',
    };

    const sizes = {
      sm: 'px-4 py-2 text-xs tracking-wider uppercase',
      md: 'px-6 py-3 text-sm tracking-wide',
      lg: 'px-8 py-4 text-base tracking-wide',
    };

    return (
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium transition-all disabled:opacity-50 disabled:pointer-events-none font-sans',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-slate-500 border-t-cosmic-950" />
        ) : null}
        {childrenNode}
      </motion.button>
    );
  }
);

export const Card = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div 
    className={cn(
      'bg-cosmic-900/40 backdrop-blur-md border border-white/5 rounded-xl p-6 hover:border-white/10 transition-all duration-300',
      className
    )} 
    {...props}
  >
    {children}
  </div>
);

export const Badge = ({ className, children, variant = 'default' }: { className?: string; children: React.ReactNode; variant?: 'default' | 'success' | 'warning' | 'error' }) => {
  const variants = {
    default: 'bg-cosmic-800 text-slate-400 border-white/5',
    success: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    warning: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    error: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  };

  return (
    <span className={cn('px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-[0.1em] border font-sans', variants[variant], className)}>
      {children}
    </span>
  );
};
