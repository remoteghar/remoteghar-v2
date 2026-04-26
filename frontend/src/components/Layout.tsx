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
    <div className="min-h-screen bg-cosmic-950 text-slate-200 flex flex-col font-sans selection:bg-primary-500/30">
      {/* Top Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-cosmic-950/50 backdrop-blur-xl border-b border-white/[0.03] px-6 py-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-3 group">
            <Logo className="group-hover:rotate-12 transition-transform duration-500" />
            <span className="font-serif text-2xl tracking-tight text-white">Remote<span className="text-primary-500">Ghar</span></span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-8 ml-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-white ${
                  location.pathname === link.path ? 'text-white' : 'text-slate-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4 pr-4 border-r border-white/5">
             <button className="text-sm font-medium text-slate-500 hover:text-white transition-colors">
              Sign Out
            </button>
          </div>
          <Button size="sm" variant="primary" className="hidden sm:flex">
            Get Started
          </Button>
          <button 
            className="p-2 hover:bg-white/5 rounded-lg lg:hidden text-white"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <>
          <div 
            className="fixed inset-0 bg-cosmic-950/80 backdrop-blur-md z-[60]"
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-cosmic-900 border-l border-white/5 z-[70] p-8 flex flex-col gap-8 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="font-serif text-2xl text-white">Remote<span className="text-primary-500">Ghar</span></span>
              <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-white/5 rounded-lg text-white">
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center gap-4 px-6 py-4 rounded-xl font-medium transition-all ${
                    location.pathname === link.path 
                      ? 'bg-white/10 text-white' 
                      : 'text-slate-500 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.icon}
                  <span className="text-lg">{link.name}</span>
                </Link>
              ))}
            </div>
            <div className="mt-auto pt-8 border-t border-white/5">
               <Button className="w-full" variant="primary">Sign Out</Button>
            </div>
          </div>
        </>
      )}

      {/* Main Content */}
      <main className="flex-1 pt-20 max-w-[1400px] mx-auto w-full px-6 relative">
        {/* Ambient Glows */}
        <div className="glow-mesh w-[500px] h-[500px] bg-primary-600/10 top-[10%] -left-[10%] animate-glow" />
        <div className="glow-mesh w-[600px] h-[600px] bg-accent-purple/5 bottom-[10%] -right-[10%] animate-glow" style={{ animationDelay: '-4s' }} />
        
        <div className="relative z-10">
          {children}
        </div>
      </main>

      {/* Modern Footer (Simple) */}
      <footer className="border-t border-white/[0.03] py-12 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <Logo className="w-8 h-8 opacity-50" />
            <span className="font-serif text-xl opacity-50">RemoteGhar</span>
          </div>
          <div className="text-slate-600 text-sm">
            © 2026 Remote Ghar. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
