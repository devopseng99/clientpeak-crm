'use client';

import { useState } from 'react';

const contentTypes = ['All', 'Whitepapers', 'Webinars', 'Industry Analysis', 'Guides'];

const resources = [
  {
    title: 'The State of B2B Sales in 2026: AI, Automation & What\'s Next',
    type: 'Whitepapers',
    description: 'Our annual analysis of trends shaping enterprise sales, based on data from 2,000+ sales teams.',
    date: 'March 2026',
    readTime: '12 min read',
    gated: true,
    gradient: 'from-blue-600 to-indigo-700',
  },
  {
    title: 'Pipeline Management Masterclass: From Chaos to Clarity',
    type: 'Webinars',
    description: 'Replay of our most popular webinar with Sarah Chen, VP Sales at TechFlow Systems.',
    date: 'February 2026',
    readTime: '45 min watch',
    gated: false,
    gradient: 'from-purple-600 to-purple-800',
  },
  {
    title: 'Contact Enrichment ROI: A Data-Driven Analysis',
    type: 'Industry Analysis',
    description: 'How enrichment impacts conversion rates, deal sizes, and sales cycle length across industries.',
    date: 'February 2026',
    readTime: '8 min read',
    gated: true,
    gradient: 'from-emerald-600 to-teal-700',
  },
  {
    title: 'Email Sequence Playbook: 15 Templates That Convert',
    type: 'Guides',
    description: 'Proven email sequence templates for outbound prospecting, nurture, and re-engagement.',
    date: 'January 2026',
    readTime: '10 min read',
    gated: false,
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Revenue Forecasting: ML vs. Traditional Methods',
    type: 'Whitepapers',
    description: 'A comparative study of machine learning forecasts vs. weighted pipeline and rep commit methods.',
    date: 'January 2026',
    readTime: '15 min read',
    gated: true,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Scaling Sales Operations: Lessons from 50 to 500 Reps',
    type: 'Webinars',
    description: 'Panel discussion with sales leaders from NovaBridge Health and Vertex Manufacturing.',
    date: 'December 2025',
    readTime: '55 min watch',
    gated: false,
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    title: 'CRM Migration Guide: Moving Without Losing Data',
    type: 'Guides',
    description: 'Step-by-step guide to migrating from Salesforce, HubSpot, or Pipedrive to ClientPeak.',
    date: 'December 2025',
    readTime: '7 min read',
    gated: false,
    gradient: 'from-violet-500 to-violet-700',
  },
  {
    title: 'Financial Services Sales: Compliance & Performance',
    type: 'Industry Analysis',
    description: 'How top financial services firms balance regulatory requirements with sales velocity.',
    date: 'November 2025',
    readTime: '10 min read',
    gated: true,
    gradient: 'from-slate-500 to-slate-700',
  },
  {
    title: 'The Ultimate Guide to Multi-Threading Enterprise Deals',
    type: 'Guides',
    description: 'Strategies for engaging multiple stakeholders and navigating complex buying committees.',
    date: 'November 2025',
    readTime: '14 min read',
    gated: false,
    gradient: 'from-teal-500 to-teal-700',
  },
];

export default function BlogPage() {
  const [typeFilter, setTypeFilter] = useState('All');
  const [showGatedOnly, setShowGatedOnly] = useState(false);

  const filtered = resources.filter((r) => {
    if (typeFilter !== 'All' && r.type !== typeFilter) return false;
    if (showGatedOnly && !r.gated) return false;
    return true;
  });

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Resources & Insights</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Whitepapers, webinar recaps, industry analysis, and tactical guides to level up your sales operation.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {contentTypes.map((ct) => (
              <button
                key={ct}
                onClick={() => setTypeFilter(ct)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  typeFilter === ct ? 'bg-primary-700 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {ct}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showGatedOnly}
              onChange={(e) => setShowGatedOnly(e.target.checked)}
              className="rounded border-gray-300 text-primary-700 focus:ring-primary-500"
            />
            <span className="text-sm text-gray-600">Premium only</span>
          </label>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((resource) => (
            <article key={resource.title} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`h-40 bg-gradient-to-br ${resource.gradient} p-6 flex flex-col justify-between`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-white/80 bg-white/20 px-2.5 py-1 rounded-full">
                    {resource.type}
                  </span>
                  {resource.gated && (
                    <span className="text-xs font-medium text-white/80 bg-white/20 px-2.5 py-1 rounded-full">
                      Premium
                    </span>
                  )}
                </div>
                <div className="text-white/60 text-sm">{resource.readTime}</div>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-400 mb-2">{resource.date}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">{resource.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{resource.description}</p>
              </div>
            </article>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">No resources match your filters. Try adjusting your selection.</p>
          </div>
        )}
      </section>
    </div>
  );
}
