import Link from 'next/link';

const solutions = [
  {
    title: 'Pipeline Management',
    description: 'Visualize and manage your entire sales pipeline with customizable stages, automated deal progression, and real-time forecasting.',
    capabilities: ['Drag-and-drop deal boards', 'Custom pipeline stages', 'Deal scoring & prioritization', 'Automated stage transitions', 'Multi-pipeline support', 'Pipeline health analytics'],
    gradient: 'from-blue-600 to-blue-800',
  },
  {
    title: 'Contact Enrichment',
    description: 'Automatically enrich every contact and company profile with firmographic, technographic, and intent data from 50+ sources.',
    capabilities: ['Real-time data enrichment', 'Firmographic profiling', 'Technographic signals', 'Buying intent detection', 'Duplicate merging', 'Data quality scoring'],
    gradient: 'from-emerald-600 to-teal-700',
  },
  {
    title: 'Email Sequences',
    description: 'Build multi-touch email sequences with AI-optimized send times, dynamic personalization, and engagement-based triggers.',
    capabilities: ['Multi-step sequences', 'AI send-time optimization', 'A/B testing built-in', 'Engagement tracking', 'Auto follow-ups', 'Template library'],
    gradient: 'from-purple-600 to-purple-800',
  },
  {
    title: 'Revenue Forecasting',
    description: 'ML-powered forecasting with scenario modeling, pipeline coverage ratios, and executive-ready dashboards.',
    capabilities: ['AI forecast models', 'Scenario planning', 'Pipeline coverage analysis', 'Commit vs. best case', 'Historical trend analysis', 'Board-ready reports'],
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Integrations Hub',
    description: 'Connect ClientPeak to your entire tech stack with native integrations, APIs, and bi-directional sync.',
    capabilities: ['200+ native integrations', 'Open REST API', 'Bi-directional sync', 'Custom webhooks', 'Zapier & Make support', 'SSO & SCIM'],
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    title: 'Analytics & Reporting',
    description: 'Custom dashboards, cohort analysis, rep scorecards, and automated executive summaries delivered on your schedule.',
    capabilities: ['Custom dashboards', 'Cohort analysis', 'Rep performance cards', 'Scheduled reports', 'Revenue attribution', 'Goal tracking'],
    gradient: 'from-cyan-500 to-blue-600',
  },
];

const integrations = [
  'Salesforce', 'HubSpot', 'Slack', 'Zoom', 'Microsoft 365', 'Google Workspace',
  'LinkedIn Sales Nav', 'ZoomInfo', 'Gong', 'Outreach', 'Marketo', 'Segment',
];

export default function SolutionsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-accent-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Solutions Built for<br />
              <span className="text-accent-400">Every Sales Challenge</span>
            </h1>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl">
              From pipeline visibility to revenue forecasting, ClientPeak provides the complete toolkit for modern B2B sales organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Suites */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-16">
          {solutions.map((solution, i) => (
            <div
              key={solution.title}
              className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
            >
              <div className="md:w-1/2">
                <div className={`h-64 md:h-80 rounded-2xl bg-gradient-to-br ${solution.gradient} p-8 flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="text-5xl mb-4 opacity-80">
                      {['📊', '👤', '✉️', '📈', '🔗', '📋'][i]}
                    </div>
                    <p className="text-white/80 text-sm font-medium">{solution.title} Interface</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {solution.capabilities.map((cap) => (
                    <div key={cap} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Integration Ecosystem</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with 200+ tools your team already uses. Bi-directional sync keeps everything in harmony.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {integrations.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center h-16 rounded-xl border border-gray-200 bg-gray-50 hover:border-primary-200 hover:bg-primary-50 transition-colors"
              >
                <span className="text-sm font-medium text-gray-700">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">See ClientPeak in Action</h2>
          <p className="text-blue-100 mb-8">Get a personalized demo tailored to your industry and use case.</p>
          <Link
            href="/demo"
            className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
          >
            Request a Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
