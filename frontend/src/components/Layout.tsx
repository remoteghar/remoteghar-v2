import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Briefcase, LayoutDashboard, User as UserIcon, LogOut } from 'lucide-react';
import { Logo } from './Logo';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'Jobs', path: '/jobs', icon: <Briefcase size={20} /> },
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Profile', path: '/profile', icon: <UserIcon size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      {/* Top Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/5 px-4 py-3 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            className="p-2 hover:bg-white/5 rounded-lg md:hidden"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>
          <Link to="/" className="flex items-center gap-3 font-bold text-xl tracking-tight group">
            <Logo className="group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Remote<span className="text-primary-500">Ghar</span></span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary-400 ${
                location.pathname === link.path ? 'text-primary-400' : 'text-slate-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-4 w-px bg-white/10" />
          <button className="text-sm font-medium text-slate-400 hover:text-white flex items-center gap-2">
            <LogOut size={18} />
            <span>Sign Out</span>
          </button>
        </div>

        <div className="md:hidden">
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-xs font-bold">
            U
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-[280px] bg-slate-900 border-r border-white/10 z-[70] p-6 flex flex-col gap-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xl">RemoteGhar</span>
              <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-white/5 rounded-lg">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                    location.pathname === link.path 
                      ? 'bg-primary-500/10 text-primary-400' 
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Main Content */}
      <main className="flex-1 pt-16 pb-24 md:pb-0 max-w-7xl mx-auto w-full px-4">
        {children}
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-slate-900 border-t border-white/10 z-50 px-6 py-3 flex justify-between items-center pb-8">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`flex flex-col items-center gap-1 transition-colors ${
              location.pathname === link.path ? 'text-primary-400' : 'text-slate-500'
            }`}
          >
            {link.icon}
            <span className="text-[10px] font-medium">{link.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};
