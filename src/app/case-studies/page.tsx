'use client';

import { useState } from 'react';

const caseStudies = [
  {
    company: 'TechFlow Systems',
    industry: 'SaaS',
    logo: 'TF',
    quote: 'ClientPeak transformed our sales process. We went from scattered spreadsheets to a unified pipeline that our entire team trusts.',
    author: 'Sarah Chen',
    role: 'VP of Sales',
    metrics: [
      { value: '156%', label: 'Revenue Growth' },
      { value: '43%', label: 'Shorter Deal Cycles' },
      { value: '2.8x', label: 'Pipeline Coverage' },
    ],
    gradient: 'from-blue-600 to-indigo-700',
  },
  {
    company: 'Meridian Financial',
    industry: 'Financial Services',
    logo: 'MF',
    quote: 'The compliance features alone justified the switch. But the forecasting accuracy has been a game-changer for our board reporting.',
    author: 'James Whitfield',
    role: 'CRO',
    metrics: [
      { value: '89%', label: 'Forecast Accuracy' },
      { value: '62%', label: 'More Qualified Leads' },
      { value: '$4.2M', label: 'New ARR in Q1' },
    ],
    gradient: 'from-emerald-600 to-teal-700',
  },
  {
    company: 'NovaBridge Health',
    industry: 'Healthcare',
    logo: 'NB',
    quote: 'HIPAA compliance was non-negotiable. ClientPeak delivered that plus the automation our team needed to scale from 50 to 200 reps.',
    author: 'Dr. Priya Patel',
    role: 'Head of Growth',
    metrics: [
      { value: '4x', label: 'Team Scaling' },
      { value: '71%', label: 'Less Admin Time' },
      { value: '98%', label: 'Rep Adoption' },
    ],
    gradient: 'from-purple-600 to-purple-800',
  },
  {
    company: 'Vertex Manufacturing',
    industry: 'Manufacturing',
    logo: 'VM',
    quote: 'Complex deal cycles with multiple stakeholders used to be our biggest challenge. ClientPeak made multi-threading deals intuitive.',
    author: 'Tom Andersson',
    role: 'Sales Director',
    metrics: [
      { value: '38%', label: 'Higher Win Rates' },
      { value: '52%', label: 'More Stakeholders Engaged' },
      { value: '$8.7M', label: 'Largest Deal Closed' },
    ],
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    company: 'Cloudline Networks',
    industry: 'SaaS',
    logo: 'CN',
    quote: 'The email sequences with AI-optimized send times doubled our reply rates overnight. ROI was immediate.',
    author: 'Maria Gonzalez',
    role: 'Director of SDR',
    metrics: [
      { value: '2x', label: 'Email Reply Rates' },
      { value: '34%', label: 'More Meetings Booked' },
      { value: '12 days', label: 'Time to ROI' },
    ],
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    company: 'Pinnacle Advisory',
    industry: 'Financial Services',
    logo: 'PA',
    quote: 'We evaluated 15 CRMs. ClientPeak was the only one that combined enterprise-grade security with a UX our reps actually enjoyed.',
    author: 'David Park',
    role: 'COO',
    metrics: [
      { value: '99.8%', label: 'Uptime SLA Met' },
      { value: '45%', label: 'Faster Onboarding' },
      { value: 'SOC 2', label: 'Certified' },
    ],
    gradient: 'from-pink-500 to-rose-600',
  },
];

const industries = ['All', 'SaaS', 'Financial Services', 'Healthcare', 'Manufacturing'];

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? caseStudies : caseStudies.filter((cs) => cs.industry === filter);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Customer Success Stories</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            See how leading B2B companies use ClientPeak to accelerate revenue growth and transform their sales operations.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setFilter(ind)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === ind
                    ? 'bg-primary-700 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((cs) => (
            <div key={cs.company} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`h-32 bg-gradient-to-br ${cs.gradient} p-6 flex items-center gap-4`}>
                <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{cs.logo}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{cs.company}</h3>
                  <span className="text-sm text-white/80">{cs.industry}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="text-lg font-bold text-primary-700">{m.value}</div>
                      <div className="text-xs text-gray-500">{m.label}</div>
                    </div>
                  ))}
                </div>
                <blockquote className="text-sm text-gray-600 italic mb-4 leading-relaxed">
                  &ldquo;{cs.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-xs text-white font-medium">
                    {cs.author.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{cs.author}</div>
                    <div className="text-xs text-gray-500">{cs.role}, {cs.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
