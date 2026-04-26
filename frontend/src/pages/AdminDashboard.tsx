import React from 'react';
import { Shield, Activity, Settings, Database, AlertTriangle, UserCheck, Trash2 } from 'lucide-react';
import { Card, Badge, Button } from '../components/UI';

export const AdminDashboard = () => {
  const logs = [
    { id: 1, user: 'Admin', action: 'Approved Job', target: 'Hindi Transcription', time: '10 mins ago' },
    { id: 2, user: 'System', action: 'Payout Processed', target: 'Contributor #442', time: '2 hours ago' },
    { id: 3, user: 'HR Manager', action: 'Created User', target: 'Project Lead', time: '1 day ago' },
  ];

  return (
    <div className="py-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Shield className="text-primary-500" /> System Administration
          </h1>
          <p className="text-slate-400">Manage platform health, security, and global settings.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline"><Database size={16} className="mr-2" /> Backup DB</Button>
          <Button variant="secondary"><Settings size={16} className="mr-2" /> Settings</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="text-center space-y-2">
          <p className="text-3xl font-bold">1.2k</p>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Total Users</p>
        </Card>
        <Card className="text-center space-y-2">
          <p className="text-3xl font-bold">45</p>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Pending KYC</p>
        </Card>
        <Card className="text-center space-y-2">
          <p className="text-3xl font-bold text-accent-red">2</p>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">System Alerts</p>
        </Card>
        <Card className="text-center space-y-2">
          <p className="text-3xl font-bold text-accent-green">99.9%</p>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Uptime</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Audit Logs */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2"><Activity size={20} /> Audit Logs</h3>
          <Card className="p-0 overflow-hidden divide-y divide-white/5">
            {logs.map(log => (
              <div key={log.id} className="p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                <div className="flex items-center gap-4">
                  <div className="text-xs font-bold text-slate-500 w-24">{log.time}</div>
                  <div>
                    <span className="font-bold text-white">{log.user}</span>
                    <span className="text-slate-400 mx-2">{log.action}</span>
                    <span className="text-primary-400 font-medium">{log.target}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">Details</Button>
              </div>
            ))}
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">System Health</h3>
          <Card className="space-y-6">
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                   <AlertTriangle className="text-accent-yellow" size={16} />
                   <span>Storage Usage</span>
                </div>
                <span className="text-xs font-bold">78%</span>
             </div>
             <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-accent-yellow w-[78%]" />
             </div>

             <div className="space-y-2">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Platform Controls</p>
                <div className="space-y-2">
                   <Button variant="outline" className="w-full justify-start text-xs"><UserCheck size={14} className="mr-2" /> Bulk Verify Users</Button>
                   <Button variant="outline" className="w-full justify-start text-xs text-accent-red hover:bg-accent-red/10 border-accent-red/20"><Trash2 size={14} className="mr-2" /> Prune Old Logs</Button>
                </div>
             </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
