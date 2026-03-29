'use client';

import { useState } from 'react';

const tourSteps = [
  { title: 'Pipeline Dashboard', description: 'Visual drag-and-drop pipeline with real-time deal tracking.' },
  { title: 'Contact Intelligence', description: 'AI-enriched profiles with buying signals and engagement history.' },
  { title: 'Sequence Builder', description: 'Multi-touch email sequences with smart scheduling.' },
  { title: 'Revenue Forecasting', description: 'ML-powered forecasts with scenario modeling.' },
];

export default function DemoPage() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', company: '',
    companySize: '', useCase: '', timeline: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">See ClientPeak in Action</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Get a personalized demo tailored to your team size, industry, and specific sales challenges.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Your Demo</h2>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Demo Request Received!</h3>
                <p className="text-green-700">Our sales team will reach out within 24 hours to schedule your personalized demo.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <input
                      type="text" required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                    <input
                      type="text" required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Work Email *</label>
                  <input
                    type="email" required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company *</label>
                  <input
                    type="text" required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Size *</label>
                  <select
                    required
                    value={formData.companySize}
                    onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none bg-white"
                  >
                    <option value="">Select size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-1000">201-1,000 employees</option>
                    <option value="1000+">1,000+ employees</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Primary Use Case</label>
                  <select
                    value={formData.useCase}
                    onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none bg-white"
                  >
                    <option value="">Select use case</option>
                    <option value="pipeline">Pipeline Management</option>
                    <option value="enrichment">Contact Enrichment</option>
                    <option value="sequences">Email Sequences</option>
                    <option value="forecasting">Revenue Forecasting</option>
                    <option value="full-platform">Full Platform</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Timeline</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none bg-white"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (this month)</option>
                    <option value="quarter">This quarter</option>
                    <option value="evaluating">Just evaluating</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Anything else we should know?</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Request Demo
                </button>
                <p className="text-xs text-gray-500 text-center">No commitment required. We&apos;ll reach out within 24 hours.</p>
              </form>
            )}
          </div>

          {/* Product Tour Preview */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Tour Preview</h2>
            <div className="space-y-4 mb-8">
              {tourSteps.map((step, i) => (
                <div key={step.title} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-200">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-700 font-bold text-sm">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Calendar placeholder */}
            <div className="bg-gray-100 rounded-xl border border-gray-200 p-8 text-center">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="font-semibold text-gray-900 mb-2">Schedule Directly</h3>
              <p className="text-sm text-gray-600 mb-4">
                Prefer to pick a time yourself? Use our calendar to book a 30-minute demo.
              </p>
              <div className="h-48 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                <span className="text-sm text-gray-400">Calendar embed placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
