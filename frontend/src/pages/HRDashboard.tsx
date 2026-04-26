import React from 'react';
import { Users, FileText, CheckSquare, Plus, Search, Filter, ArrowUpRight, MoreHorizontal } from 'lucide-react';
import { Card, Badge, Button } from '../components/UI';
import { Link } from 'react-router-dom';

export const HRDashboard = () => {
  const stats = [
    { label: 'Active Jobs', value: 8, icon: <FileText size={20} />, color: 'text-primary-400' },
    { label: 'Total Applicants', value: 142, icon: <Users size={20} />, color: 'text-accent-yellow' },
    { label: 'Pending Reviews', value: 24, icon: <CheckSquare size={20} />, color: 'text-accent-green' },
  ];

  const recentJobs = [
    { id: 1, title: 'Hindi Transcription Project', apps: 45, status: 'Active', posted: '2 days ago' },
    { id: 2, title: 'AI Image Labeling', apps: 12, status: 'Draft', posted: '5 hours ago' },
  ];

  return (
    <div className="py-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-white">Management Console</h1>
          <p className="text-slate-400">Overview of your current projects and workforce performance.</p>
        </div>
        <Link to="/hr/jobs/create">
          <Button className="h-12 shadow-primary-500/20">
            <Plus size={18} className="mr-2" /> Create Job Post
          </Button>
        </Link>
      </div>

      {/* High Level Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className={`p-2 rounded-lg bg-slate-800 ${stat.color}`}>
                {stat.icon}
              </div>
              <Badge variant="default">+12% this week</Badge>
            </div>
            <div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content: Jobs Table */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">Active Jobs</h3>
            <div className="flex gap-2">
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input type="text" placeholder="Search..." className="bg-slate-900 border border-white/5 rounded-lg pl-8 pr-4 py-1.5 text-xs text-white focus:outline-none focus:border-primary-500/50" />
              </div>
              <Button variant="ghost" size="sm"><Filter size={14} /></Button>
            </div>
          </div>
          
          <Card className="p-0 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-950/50 border-b border-white/5">
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Project Title</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Applicants</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {recentJobs.map(job => (
                    <tr key={job.id} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="px-6 py-4">
                        <div className="font-bold group-hover:text-primary-400 transition-colors">{job.title}</div>
                        <div className="text-[10px] text-slate-500 mt-1">Posted {job.posted}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex -space-x-2">
                          {[1,2,3].map(i => (
                            <div key={i} className="w-6 h-6 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold">U</div>
                          ))}
                          <div className="w-6 h-6 rounded-full bg-primary-900 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold">+{job.apps - 3}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant={job.status === 'Active' ? 'success' : 'default'}>{job.status}</Badge>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0"><ArrowUpRight size={16} /></Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0"><MoreHorizontal size={16} /></Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Sidebar: New Applicants */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">New Applicants</h3>
          <Card className="p-0 overflow-hidden divide-y divide-white/5">
            {[1, 2, 3].map(i => (
              <div key={i} className="p-4 hover:bg-white/[0.02] transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary-500 to-primary-700 flex items-center justify-center font-bold text-white shadow-lg">JS</div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm truncate group-hover:text-primary-400 transition-colors">John Sharma</p>
                    <p className="text-[10px] text-slate-500 truncate mt-0.5">Applied for Hindi Transcription</p>
                  </div>
                  <div className="text-[10px] font-bold text-accent-green">98% Match</div>
                </div>
              </div>
            ))}
            <div className="p-4 text-center">
              <Button variant="ghost" className="text-xs w-full">View all applicants</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
