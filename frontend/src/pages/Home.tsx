import React from 'react';
import { motion } from 'framer-motion';
import { Button, Card, Badge } from '../components/UI';
import { ArrowRight, Sparkles, Shield, Zap, Globe } from 'lucide-react';

export const Home = () => {
  return (
    <div className="space-y-24 py-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Abstract Background Orbs */}
        <div className="absolute top-0 -left-20 w-72 h-72 bg-primary-600/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-accent-yellow/10 rounded-full blur-[120px]" />

        <div className="relative flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="success" className="mb-4">
              <Sparkles size={12} className="mr-1 inline" /> Now powered by AI
            </Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Scale your <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Workforce</span> <br />
              with precision.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl"
          >
            Data annotation, transcription, and QA workflows delivered by a global community of experts. 
            High quality, human-verified data for your AI models.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button size="lg" className="group">
              Get Started <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="secondary">
              Browse Jobs
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="flex flex-col gap-4">
          <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-400">
            <Shield size={24} />
          </div>
          <h3 className="text-xl font-bold">Trusted Quality</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Multi-layer verification ensures your data is accurate and reliable for mission-critical applications.
          </p>
        </Card>

        <Card className="flex flex-col gap-4">
          <div className="w-12 h-12 bg-accent-yellow/10 rounded-xl flex items-center justify-center text-accent-yellow">
            <Zap size={24} />
          </div>
          <h3 className="text-xl font-bold">Rapid Scaling</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Onboard hundreds of contributors in days, not weeks. Our platform manages the complexity of scale.
          </p>
        </Card>

        <Card className="flex flex-col gap-4">
          <div className="w-12 h-12 bg-accent-green/10 rounded-xl flex items-center justify-center text-accent-green">
            <Globe size={24} />
          </div>
          <h3 className="text-xl font-bold">Global Reach</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Access a diverse workforce across multiple timezones, languages, and cultural contexts.
          </p>
        </Card>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-white/5 flex flex-wrap justify-around gap-12 text-center">
        <div>
          <div className="text-4xl font-bold text-white mb-1">50k+</div>
          <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Active Contributors</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-white mb-1">1M+</div>
          <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Tasks Completed</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-white mb-1">99.9%</div>
          <div className="text-sm text-slate-500 uppercase tracking-widest font-semibold">Accuracy Rate</div>
        </div>
      </section>
    </div>
  );
};
