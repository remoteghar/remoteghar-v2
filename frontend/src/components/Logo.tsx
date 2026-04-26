import React from 'react';

export const Logo = ({ className = "h-8 w-auto" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* House Body */}
        <path d="M16 2L2 14V28C2 29.1046 2.89543 30 4 30H28C29.1046 30 30 29.1046 30 28V14L16 2Z" fill="#3B82F6" />
        
        {/* Windows */}
        {/* Top Left - Yellow */}
        <rect x="11" y="13" width="4" height="4" rx="1" fill="#FBBF24" />
        {/* Top Right - Blue (Darker) */}
        <rect x="17" y="13" width="4" height="4" rx="1" fill="#2563EB" />
        {/* Bottom Left - Green */}
        <rect x="11" y="19" width="4" height="4" rx="1" fill="#10B981" />
        {/* Bottom Right - Red */}
        <rect x="17" y="19" width="4" height="4" rx="1" fill="#EF4444" />
      </svg>
    </div>
  );
};
