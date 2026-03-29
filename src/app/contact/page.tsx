'use client';

import { useState } from 'react';
import Link from 'next/link';

const offices = [
  { city: 'San Francisco', address: '100 Market Street, Suite 400', region: 'Americas HQ', phone: '+1 (415) 555-0100' },
  { city: 'London', address: '30 Finsbury Square, EC2A 1AG', region: 'EMEA HQ', phone: '+44 20 7946 0200' },
  { city: 'Sydney', address: '1 Martin Place, Level 20', region: 'APAC HQ', phone: '+61 2 8006 0300' },
  { city: 'New York', address: '350 Fifth Avenue, Suite 4500', region: 'East Coast', phone: '+1 (212) 555-0400' },
];

const salesTeam = [
  { name: 'Lisa Morgan', role: 'Head of Sales, Americas', initials: 'LM' },
  { name: 'Oliver Smith', role: 'Head of Sales, EMEA', initials: 'OS' },
  { name: 'Yuki Tanaka', role: 'Head of Sales, APAC', initials: 'YT' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', subject: '', message: '',
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Whether you&apos;re ready to buy, want to partner, or just have a question — we&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">We&apos;ll get back to you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text" required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                  />
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none bg-white"
                  >
                    <option value="">Select a topic</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="press">Press & Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea
                    required rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Sales Team */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sales Team</h2>
              <div className="space-y-3">
                {salesTeam.map((person) => (
                  <div key={person.name} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-sm">
                      {person.initials}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{person.name}</p>
                      <p className="text-sm text-gray-500">{person.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Partner Program */}
            <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
              <h3 className="font-semibold text-primary-800 mb-2">Partner Program</h3>
              <p className="text-sm text-primary-700 mb-4">
                Join our partner ecosystem. Resellers, consultants, and technology partners welcome.
              </p>
              <Link href="/demo" className="text-sm font-semibold text-primary-700 hover:text-primary-800">
                Learn about partnerships →
              </Link>
            </div>

            {/* Support Portal */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Support Portal</h3>
              <p className="text-sm text-gray-600 mb-4">
                Existing customers can access our help center, documentation, and submit tickets.
              </p>
              <Link href="/faq" className="text-sm font-semibold text-primary-700 hover:text-primary-800">
                Visit Help Center →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Offices</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office) => (
              <div key={office.city} className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">{office.city}</h3>
                <p className="text-xs text-primary-600 font-medium mb-2">{office.region}</p>
                <p className="text-sm text-gray-500 mb-1">{office.address}</p>
                <p className="text-sm text-gray-500">{office.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
