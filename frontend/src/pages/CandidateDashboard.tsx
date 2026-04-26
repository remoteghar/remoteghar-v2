import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle, Clock, DollarSign, ListTodo, User, ChevronRight, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Card, Badge, Button } from '../components/UI';
import { Link } from 'react-router-dom';

export const CandidateDashboard = () => {
  const { user } = useAuth();
  
  // Mock data for "Wow" demonstration - will be replaced by API in real usage
  const stats = [
    { label: 'Applications', value: 12, icon: <Briefcase size={20} />, color: 'text-primary-400', bg: 'bg-primary-500/10' },
    { label: 'Pending Tasks', value: 3, icon: <ListTodo size={20} />, color: 'text-accent-yellow', bg: 'bg-accent-yellow/10' },
    { label: 'Earnings', value: '₹4,500', icon: <DollarSign size={20} />, color: 'text-accent-green', bg: 'bg-accent-green/10' },
  ];

  const recentApps = [
    { id: 1, title: 'AI Training Specialist', status: 'In Review', date: 'Oct 24, 2025' },
    { id: 2, title: 'Hindi Transcriber', status: 'Applied', date: 'Oct 22, 2025' },
  ];

  return (
    <div className="py-8 space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Hello, {user?.name || 'Contributor'} 👋</h1>
          <p className="text-slate-400 font-medium">Welcome back to your workspace. You have <span className="text-white">3 tasks</span> requiring attention.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" className="bg-slate-900 border-white/5">Settings</Button>
          <Button className="shadow-primary-500/20">Find Work</Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="flex items-center gap-4 p-5">
            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Active Tasks Feed */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Current Assignments</h3>
              <Link to="/tasks" className="text-sm text-primary-400 hover:underline">View all</Link>
            </div>
            <Card className="p-0 overflow-hidden divide-y divide-white/5">
              {[1, 2].map((task) => (
                <div key={task} className="p-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400">
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold group-hover:text-primary-400 transition-colors">Hindi Sentence Validation</h4>
                      <p className="text-xs text-slate-500 mt-1">Due in 2 days • ₹50 per hour</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Start Task</Button>
                </div>
              ))}
            </Card>
          </div>

          {/* Recent Applications */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Recent Applications</h3>
            <div className="space-y-4">
              {recentApps.map((app) => (
                <Card key={app.id} className="flex items-center justify-between p-5 border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-400">
                      <Briefcase size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold">{app.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">Applied on {app.date}</p>
                    </div>
                  </div>
                  <Badge variant={app.status === 'In Review' ? 'warning' : 'default'}>{app.status}</Badge>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Sidebar Info */}
        <div className="space-y-8">
          {/* Profile Strength */}
          <Card className="bg-gradient-to-br from-slate-900 to-slate-950 border-white/10">
            <h4 className="font-bold mb-4">Profile Completeness</h4>
            <div className="space-y-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-400">85% Complete</span>
                <span className="text-accent-green font-bold text-xs uppercase tracking-widest">Level: Pro</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-accent-green w-[85%] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.4)]" />
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Add your verified ID to unlock high-paying premium projects.
              </p>
              <Button variant="secondary" className="w-full text-xs" size="sm">Complete Profile</Button>
            </div>
          </Card>

          {/* Quick Links */}
          <Card className="space-y-4">
            <h4 className="font-bold">Resource Center</h4>
            <div className="space-y-1">
              {['Quality Guidelines', 'Payment Schedule', 'Tutorials', 'Support'].map(link => (
                <button key={link} className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all flex items-center justify-between group">
                  {link}
                  <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
