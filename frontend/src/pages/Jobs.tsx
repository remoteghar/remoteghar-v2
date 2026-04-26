import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, MapPin, Clock, ArrowRight, Briefcase } from 'lucide-react';
import { jobsApi } from '../api';
import { Card, Badge, Button } from '../components/UI';

export const Jobs = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await jobsApi.getAll();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-12 space-y-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Open Opportunities</h1>
        <p className="text-slate-400">Join our community and start contributing to global AI projects.</p>
      </div>

      {/* Search and Filters */}
      <div className="relative group max-w-xl">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-primary-400 transition-colors">
          <Search size={20} />
        </div>
        <input 
          type="text" 
          placeholder="Search jobs, skills, or projects..."
          className="w-full bg-slate-900/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary-500/50 focus:ring-4 focus:ring-primary-500/10 transition-all text-white placeholder-slate-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Job Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          Array(6).fill(0).map((_, i) => (
            <Card key={i} className="animate-pulse h-64 bg-slate-900/30" />
          ))
        ) : filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link to={`/jobs/${job.slug}`} className="block group">
                <Card className="h-full flex flex-col justify-between group-hover:bg-slate-800/50 transition-all border-white/5 group-hover:border-primary-500/30 group-hover:-translate-y-1">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="p-3 bg-primary-500/10 rounded-xl text-primary-400 group-hover:scale-110 transition-transform">
                        <Briefcase size={24} />
                      </div>
                      <Badge variant={job.modality === 'voice' ? 'warning' : 'success'}>
                        {job.modality}
                      </Badge>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary-400 transition-colors">{job.title}</h3>
                      <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                        <span className="flex items-center gap-1"><MapPin size={14} /> Remote</span>
                        <span className="flex items-center gap-1"><Clock size={14} /> Just now</span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-400 line-clamp-2">
                      {job.description.replace(/<[^>]*>/g, '')}
                    </p>
                  </div>

                  <div className="pt-6 flex items-center justify-between">
                    <div className="text-primary-400 font-bold">
                      {job.compensation_type === 'range' ? `₹${job.min_inr} - ${job.max_inr}` : 'Negotiable'}
                    </div>
                    <div className="text-slate-500 group-hover:text-white transition-colors">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center space-y-4">
            <div className="text-5xl text-slate-700">🔍</div>
            <h3 className="text-xl font-medium text-slate-400">No jobs found matching your search.</h3>
            <Button variant="ghost" onClick={() => setSearch('')}>Clear Search</Button>
          </div>
        )}
      </div>
    </div>
  );
};
