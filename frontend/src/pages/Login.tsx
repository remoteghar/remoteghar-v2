import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Button, Card } from '../components/UI';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await login({ email, password });
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <Card className="p-8 space-y-8 border-primary-500/10 shadow-2xl shadow-primary-500/5">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-slate-400">Log in to your RemoteGhar workspace</p>
          </div>

          {error && (
            <div className="bg-accent-red/10 border border-accent-red/20 text-accent-red p-4 rounded-xl flex items-center gap-3 text-sm">
              <AlertCircle size={20} />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary-400 transition-colors" size={18} />
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-white/5 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-primary-500/50 transition-all text-white"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-sm font-medium text-slate-300">Password</label>
                  <Link to="/forgot-password" className="text-xs text-primary-400 hover:text-primary-300">Forgot?</Link>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary-400 transition-colors" size={18} />
                  <input 
                    type="password" 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-950 border border-white/5 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-primary-500/50 transition-all text-white"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full h-12" isLoading={isLoading}>
              Sign In <ArrowRight size={18} className="ml-2" />
            </Button>
          </form>

          <div className="text-center text-sm text-slate-500">
            Don't have an account? <Link to="/signup" className="text-primary-400 font-bold hover:underline">Create one</Link>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};
