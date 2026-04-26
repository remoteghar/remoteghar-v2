import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check, Sparkles, Rocket, Settings, ShieldCheck } from 'lucide-react';
import { Button, Card, Badge } from '../components/UI';

export const CreateJob = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    modality: 'text',
    compensation_type: 'range',
    min_inr: '',
    max_inr: '',
    application_method: 'internal'
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const steps = [
    { id: 1, label: 'Basics', icon: <Sparkles size={16} /> },
    { id: 2, label: 'Requirements', icon: <Settings size={16} /> },
    { id: 3, label: 'Budget & Launch', icon: <Rocket size={16} /> },
  ];

  return (
    <div className="py-12 max-w-3xl mx-auto space-y-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Post a New Opportunity</h1>
        <p className="text-slate-400">Reach our global network of contributors in minutes.</p>
      </div>

      {/* Step Indicator */}
      <div className="flex items-center justify-between px-4">
        {steps.map((s, i) => (
          <React.Fragment key={s.id}>
            <div className="flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                step >= s.id ? 'bg-primary-600 border-primary-600 text-white shadow-lg shadow-primary-500/20' : 'bg-slate-900 border-white/5 text-slate-500'
              }`}>
                {step > s.id ? <Check size={18} /> : s.icon}
              </div>
              <span className={`text-xs font-bold uppercase tracking-wider ${step >= s.id ? 'text-white' : 'text-slate-500'}`}>{s.label}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-4 ${step > s.id ? 'bg-primary-600' : 'bg-white/5'}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      <Card className="min-h-[400px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300">Project Title</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Hindi Voice Collection for LLM Training"
                    className="w-full bg-slate-950 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500/50 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300">Description & Context</label>
                  <textarea 
                    rows={6}
                    placeholder="Describe the project requirements, scope, and expected outcomes..."
                    className="w-full bg-slate-950 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500/50 text-white resize-none"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300">Project Modality</label>
                  <select className="w-full bg-slate-950 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500/50 text-white">
                    <option value="text">Text / Translation</option>
                    <option value="voice">Voice / Speech</option>
                    <option value="image">Image / Vision</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300">Application Method</label>
                  <select className="w-full bg-slate-950 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500/50 text-white">
                    <option value="internal">Internal (RemoteGhar Workspace)</option>
                    <option value="external">External (Google Form / Link)</option>
                  </select>
                </div>
              </div>
              <div className="bg-primary-500/5 border border-primary-500/10 rounded-xl p-4 flex gap-4">
                <ShieldCheck className="text-primary-400 shrink-0" size={24} />
                <p className="text-sm text-slate-400">
                  Using <strong>Internal Application</strong> allows you to use our built-in Match Engine and task assignment tools.
                </p>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-6">
                <div className="space-y-4">
                   <label className="text-sm font-bold text-slate-300">Compensation Model</label>
                   <div className="grid grid-cols-2 gap-4">
                      <button className="p-4 rounded-xl border border-primary-500/50 bg-primary-500/10 text-left">
                        <p className="font-bold">Pay Scale / Range</p>
                        <p className="text-xs text-slate-400 mt-1">Specify min and max hourly rate</p>
                      </button>
                      <button className="p-4 rounded-xl border border-white/5 bg-slate-950 text-left hover:border-white/10 transition-colors">
                        <p className="font-bold">Negotiable</p>
                        <p className="text-xs text-slate-400 mt-1">Open to contributor bids</p>
                      </button>
                   </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300">Min Pay (INR/hr)</label>
                    <input type="number" placeholder="50" className="w-full bg-slate-950 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500/50 text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300">Max Pay (INR/hr)</label>
                    <input type="number" placeholder="200" className="w-full bg-slate-950 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500/50 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-between pt-8 border-t border-white/5">
          <Button variant="ghost" disabled={step === 1} onClick={prevStep}>
            <ChevronLeft size={18} className="mr-2" /> Back
          </Button>
          <Button onClick={step === 3 ? () => navigate('/hr/dashboard') : nextStep}>
            {step === 3 ? 'Publish Project' : 'Continue'} <ChevronRight size={18} className="ml-2" />
          </Button>
        </div>
      </Card>
    </div>
  );
};
