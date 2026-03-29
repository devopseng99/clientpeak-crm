import Link from 'next/link';

const leaders = [
  { name: 'Alexandra Rhodes', role: 'CEO & Co-Founder', bio: 'Former VP Sales at Salesforce. 15+ years in enterprise SaaS.', initials: 'AR', gradient: 'from-blue-500 to-blue-700' },
  { name: 'Marcus Chen', role: 'CTO & Co-Founder', bio: 'Ex-Google engineer. Built ML systems at scale for 10+ years.', initials: 'MC', gradient: 'from-emerald-500 to-emerald-700' },
  { name: 'Sofia Andersson', role: 'CPO', bio: 'Former Product Lead at HubSpot. Obsessed with sales UX.', initials: 'SA', gradient: 'from-purple-500 to-purple-700' },
  { name: 'David Okafor', role: 'CRO', bio: 'Scaled 3 startups from $1M to $100M+ ARR.', initials: 'DO', gradient: 'from-amber-500 to-amber-700' },
  { name: 'Rachel Kim', role: 'VP Engineering', bio: 'Ex-Stripe. Infrastructure and security specialist.', initials: 'RK', gradient: 'from-pink-500 to-pink-700' },
  { name: 'James Torres', role: 'VP Customer Success', bio: 'Built CS orgs at Gainsight and Zendesk.', initials: 'JT', gradient: 'from-cyan-500 to-cyan-700' },
];

const investors = ['Sequoia Capital', 'Andreessen Horowitz', 'Accel Partners', 'Y Combinator', 'Tiger Global'];

const certifications = [
  { name: 'SOC 2 Type II', description: 'Annual audit of security controls and processes' },
  { name: 'GDPR Compliant', description: 'Full compliance with EU data protection regulation' },
  { name: 'ISO 27001', description: 'Information security management system certified' },
  { name: 'HIPAA Ready', description: 'BAA available for healthcare organizations' },
];

const pressItems = [
  { outlet: 'TechCrunch', headline: 'ClientPeak raises $45M Series B to bring AI to enterprise sales' },
  { outlet: 'Forbes', headline: 'Top 50 Enterprise Startups to Watch in 2026' },
  { outlet: 'Wall Street Journal', headline: 'How AI is reshaping B2B sales operations' },
  { outlet: 'Bloomberg', headline: 'ClientPeak valued at $500M after rapid enterprise adoption' },
];

const milestones = [
  { year: '2020', event: 'Founded in San Francisco by Alexandra Rhodes and Marcus Chen' },
  { year: '2021', event: 'Y Combinator W21 batch. Launched first product. 50 beta customers.' },
  { year: '2022', event: 'Series A led by Sequoia. 500+ customers. SOC 2 certified.' },
  { year: '2023', event: 'Launched AI forecasting. 1,000+ customers across 30 countries.' },
  { year: '2024', event: 'Series B. 2,000+ customers. Named in Forbes Top 50.' },
  { year: '2025', event: 'Expanded to EMEA & APAC. 200+ employees. ISO 27001 certified.' },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About ClientPeak</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            We&apos;re on a mission to make every B2B sales team as effective as the world&apos;s best. Founded in 2020, we&apos;re backed by top-tier investors and trusted by 2,000+ companies.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                ClientPeak was born from a frustration shared by every sales leader: CRM tools built for data entry, not deal-closing. Our founders, Alexandra and Marcus, spent years watching sales teams wrestle with bloated, unintuitive software.
              </p>
              <p>
                They set out to build a CRM that sales reps actually want to use — one that enriches contacts automatically, forecasts revenue with ML precision, and orchestrates multi-touch sequences without the busywork.
              </p>
              <p>
                Today, ClientPeak powers the revenue engine of 2,000+ B2B companies across SaaS, financial services, healthcare, and manufacturing.
              </p>
            </div>
          </div>
          <div className="h-80 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-4">🏢</div>
              <p className="text-gray-500 text-sm">ClientPeak HQ — San Francisco</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
          <div className="space-y-6">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-6 items-start">
                <div className="w-16 flex-shrink-0 text-right">
                  <span className="text-sm font-bold text-primary-700">{m.year}</span>
                </div>
                <div className="w-3 h-3 rounded-full bg-primary-700 mt-1.5 flex-shrink-0 ring-4 ring-primary-100"></div>
                <p className="text-gray-600">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Leadership Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <div key={leader.name} className="text-center">
              <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${leader.gradient} mx-auto mb-4 flex items-center justify-center`}>
                <span className="text-2xl font-bold text-white">{leader.initials}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{leader.name}</h3>
              <p className="text-sm text-primary-600 font-medium mb-2">{leader.role}</p>
              <p className="text-sm text-gray-500">{leader.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Investors */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Backed By the Best</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {investors.map((inv) => (
              <div
                key={inv}
                className="flex items-center justify-center h-16 px-8 rounded-xl border border-gray-200 bg-gray-50"
              >
                <span className="text-sm font-semibold text-gray-600">{inv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Certifications & Compliance</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div key={cert.name} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{cert.name}</h3>
              <p className="text-sm text-gray-500">{cert.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Press */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">In the Press</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pressItems.map((item) => (
              <div key={item.headline} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-20 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-gray-500">{item.outlet}</span>
                </div>
                <p className="text-sm font-medium text-gray-700">{item.headline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join the ClientPeak Team</h2>
          <p className="text-blue-100 mb-8">We&apos;re hiring across engineering, sales, and customer success.</p>
          <Link href="/contact" className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors">
            View Open Roles
          </Link>
        </div>
      </section>
    </div>
  );
}
