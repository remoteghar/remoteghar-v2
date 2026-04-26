import React from 'react';
import { motion } from 'framer-motion';
import { Button, Card, Badge } from '../components/UI';
import { ArrowRight, Sparkles, Shield, Zap, Globe } from 'lucide-react';

export const Home = () => {
  return (
    <div className="space-y-32 py-20">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center space-y-12 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 max-w-5xl"
        >
          <Badge variant="success" className="mb-8">
            <Sparkles size={12} className="mr-2 inline text-primary-400" /> 
            Global Data Supply Chain
          </Badge>
          <h1 className="text-6xl md:text-8xl font-serif text-white leading-[1.1] tracking-tight">
            The Infrastructure for <br />
            <span className="text-primary-500 italic">Precision</span> AI Training.
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
            Remote Ghar provides the high-fidelity human feedback loop required to scale mission-critical AI models. 
            Trusted by the world's leading research labs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <Button size="lg" variant="primary" className="px-10 py-6 text-lg rounded-full">
            Start Scaling
          </Button>
          <Button size="lg" variant="secondary" className="px-10 py-6 text-lg rounded-full backdrop-blur-sm">
            Explore Opportunities
          </Button>
        </motion.div>

        {/* Hero Visual (Vertical Lines) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
          <div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
      </section>

      {/* Feature Bento Grid */}
      <section className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-serif text-white">Engineered for Quality</h2>
          <p className="text-slate-500">A decentralized network of thousands, managed by one platform.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <Card className="md:col-span-8 group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-500/10 to-transparent pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity" />
            <div className="space-y-4 relative z-10">
               <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-primary-400">
                <Shield size={20} />
              </div>
              <h3 className="text-2xl font-serif text-white">Decentralized Verification</h3>
              <p className="text-slate-400 max-w-md">
                Our multi-pass consensus algorithms ensure 99.9% accuracy across millions of data points. 
                Built for labs that can't afford noise.
              </p>
            </div>
          </Card>

          <Card className="md:col-span-4 bg-primary-600/5 border-primary-500/10">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-primary-400">
                <Zap size={20} />
              </div>
              <h3 className="text-2xl font-serif text-white">Rapid Onboarding</h3>
              <p className="text-slate-400">
                Deploy thousands of contributors in under 48 hours.
              </p>
            </div>
          </Card>

          <Card className="md:col-span-4 border-white/5">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-accent-purple">
                <Globe size={20} />
              </div>
              <h3 className="text-2xl font-serif text-white">Global Reach</h3>
              <p className="text-slate-400 text-sm">
                Access native speakers in 140+ languages across every continent.
              </p>
            </div>
          </Card>

          <Card className="md:col-span-8 bg-white/[0.02] border-white/5">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="space-y-4 flex-1">
                <h3 className="text-2xl font-serif text-white">Real-time Performance</h3>
                <p className="text-slate-400 text-sm">
                  Monitor throughput and quality metrics through our live dashboard. 
                  Full visibility into every contributor's output.
                </p>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4 w-full">
                <div className="p-4 bg-white/5 rounded-lg border border-white/5 text-center">
                  <div className="text-2xl font-bold text-white">1M+</div>
                  <div className="text-[10px] text-slate-500 uppercase">Tasks/Day</div>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/5 text-center">
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-[10px] text-slate-500 uppercase">Accuracy</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Trusted By (Logos Placeholder) */}
      <section className="py-20 text-center space-y-12">
        <p className="text-slate-600 uppercase tracking-widest text-[10px] font-bold">Trusted by leading AI laboratories</p>
        <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
           <div className="text-2xl font-serif">OpenAI</div>
           <div className="text-2xl font-serif">Anthropic</div>
           <div className="text-2xl font-serif">Mistral</div>
           <div className="text-2xl font-serif">Meta</div>
           <div className="text-2xl font-serif">DeepMind</div>
        </div>
      </section>
    </div>
  );
};
