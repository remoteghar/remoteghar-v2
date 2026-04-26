import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, MapPin, Calendar, DollarSign, Shield, FileText, ChevronRight } from 'lucide-react';
import { jobsApi } from '../api';
import { Card, Badge, Button } from '../components/UI';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const JobDetail = () => {
  const { slug } = useParams();
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const { data } = await jobsApi.getBySlug(slug!);
        setJob(data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [slug]);

  if (loading) return <div className="py-24 text-center">Loading project details...</div>;
  if (!job) return <div className="py-24 text-center">Project not found.</div>;

  const formatContent = (content: string) => {
    if (!content) return '';
    // Remove escaped \r\n and handle actual newlines for Markdown
    return content.replace(/\\r\\n/g, '\n').replace(/\r\n/g, '\n');
  };

  return (
    <div className="py-12 space-y-8">
      <Link to="/jobs" className="inline-flex items-center text-slate-400 hover:text-white transition-colors gap-1 group">
        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to Jobs
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Job Content */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="success" className="text-xs">{job.modality}</Badge>
              <Badge variant="default" className="text-xs">Remote</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{job.title}</h1>
            
            <div className="flex flex-wrap gap-6 text-slate-400 border-b border-white/5 pb-8">
              <div className="flex items-center gap-2"><Calendar size={18} /> Posted {new Date(job.created_at).toLocaleDateString()}</div>
              <div className="flex items-center gap-2"><MapPin size={18} /> Worldwide</div>
              <div className="flex items-center gap-2 font-bold text-primary-400">
                <DollarSign size={18} /> 
                {job.compensation_type === 'range' ? `₹${job.min_inr} - ${job.max_inr}` : 'Negotiable'}
              </div>
            </div>

            <div className="space-y-12">
              {/* Project Overview */}
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-primary-500 pl-4">Project Overview</h3>
                <div className="text-slate-300 leading-relaxed text-lg">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {formatContent(job.about_role || job.description)}
                  </ReactMarkdown>
                </div>
              </div>

              {/* Responsibilities */}
              {job.responsibilities && (
                <div className="prose prose-invert max-w-none">
                  <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-primary-500 pl-4">Key Responsibilities</h3>
                  <div className="text-slate-300 leading-relaxed text-lg">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {formatContent(job.responsibilities)}
                    </ReactMarkdown>
                  </div>
                </div>
              )}

              {/* Requirements */}
              {job.requirements && (
                <div className="prose prose-invert max-w-none">
                  <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-primary-500 pl-4">Requirements & Eligibility</h3>
                  <div className="text-slate-300 leading-relaxed text-lg">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {formatContent(job.requirements)}
                    </ReactMarkdown>
                  </div>
                </div>
              )}

              {!job.about_role && !job.description && !job.responsibilities && !job.requirements && (
                <p className="text-slate-500 italic">No detailed information provided for this project.</p>
              )}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Application Sidebar */}
        <div className="space-y-6">
          <Card className="sticky top-24 border-primary-500/20 shadow-xl shadow-primary-500/5">
            <h3 className="text-xl font-bold mb-6">Interested in this project?</h3>
            <div className="space-y-4">
              <Button className="w-full h-12" size="lg">Apply Now</Button>
              <Button variant="secondary" className="w-full h-12" size="lg">Save Project</Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-accent-green/10 rounded-lg text-accent-green"><Shield size={18} /></div>
                <div>
                  <p className="text-sm font-bold">Verified Client</p>
                  <p className="text-xs text-slate-500">Identity and payment verified</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary-500/10 rounded-lg text-primary-400"><FileText size={18} /></div>
                <div>
                  <p className="text-sm font-bold">NDA Required</p>
                  <p className="text-xs text-slate-500">Must sign a non-disclosure agreement</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-primary-600 to-primary-900 border-none">
            <h3 className="text-lg font-bold text-white mb-2">Need help?</h3>
            <p className="text-sm text-primary-100 mb-4">Our support team is available 24/7 for any project-related questions.</p>
            <Link to="/contact" className="text-sm font-bold text-white flex items-center gap-1 hover:underline">
              Contact Support <ChevronRight size={16} />
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};
