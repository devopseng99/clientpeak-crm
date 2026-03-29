import Link from 'next/link';

const stats = [
  { value: '47%', label: 'Increase in close rates' },
  { value: '3.2x', label: 'Pipeline velocity boost' },
  { value: '68%', label: 'Faster deal cycles' },
  { value: '99.99%', label: 'Platform uptime' },
];

const logos = ['Acme Corp', 'TechFlow', 'Meridian', 'Vertex AI', 'NovaBridge', 'Cloudline', 'SynapseHQ', 'Pinnacle'];

const features = [
  {
    title: 'Pipeline Management',
    description: 'Visual deal pipeline with drag-and-drop stages, weighted forecasting, and real-time collaboration across your entire sales org.',
    icon: '📊',
  },
  {
    title: 'Contact Enrichment',
    description: 'Automatically enrich contact profiles with firmographic data, technographic signals, and buying intent from 50+ data sources.',
    icon: '👤',
  },
  {
    title: 'Email Sequences',
    description: 'Multi-touch sequences with AI-optimized send times, A/B testing, and automatic follow-up triggers based on engagement.',
    icon: '✉️',
  },
  {
    title: 'Revenue Forecasting',
    description: 'ML-powered forecasting with scenario modeling, pipeline coverage analysis, and executive-ready reporting dashboards.',
    icon: '📈',
  },
  {
    title: 'Integration Hub',
    description: 'Native integrations with Salesforce, HubSpot, Slack, Zoom, and 200+ tools via our open API and webhook framework.',
    icon: '🔗',
  },
  {
    title: 'Advanced Reporting',
    description: 'Custom dashboards, cohort analysis, rep performance scorecards, and automated weekly/monthly executive summaries.',
    icon: '📋',
  },
];

const industries = [
  { name: 'SaaS & Technology', description: 'Product-led growth meets enterprise sales', color: 'from-blue-600 to-blue-800' },
  { name: 'Financial Services', description: 'Compliance-first CRM for regulated industries', color: 'from-emerald-600 to-emerald-800' },
  { name: 'Healthcare', description: 'HIPAA-compliant relationship management', color: 'from-purple-600 to-purple-800' },
  { name: 'Manufacturing', description: 'Complex deal cycles, simplified', color: 'from-amber-600 to-amber-800' },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-gray-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse"></span>
              <span className="text-sm text-white/90">Now with AI-powered forecasting</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Close More Deals.<br />
              <span className="text-accent-400">Grow Revenue Faster.</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
              ClientPeak is the enterprise CRM platform built for B2B sales teams. Pipeline management, contact enrichment, email sequences, and revenue forecasting — all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/demo"
                className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-3.5 rounded-lg text-center transition-colors"
              >
                Request a Demo
              </Link>
              <Link
                href="/solutions"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-3.5 rounded-lg text-center transition-colors"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-center text-sm text-gray-500 mb-6">Trusted by 2,000+ B2B sales teams worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {logos.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center w-28 h-10 rounded bg-gray-100 text-xs font-semibold text-gray-400"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Results That Matter</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our customers consistently see measurable improvements across their entire sales operation.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-700 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything Your Sales Team Needs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From first touch to closed-won, ClientPeak gives your team the tools to manage every stage of the buyer journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl border border-gray-200 hover:border-primary-200 hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built for Your Industry</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pre-configured workflows and compliance frameworks for the industries that need them most.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <div key={industry.name} className="group relative overflow-hidden rounded-xl">
              <div className={`h-48 bg-gradient-to-br ${industry.color} p-6 flex flex-col justify-end`}>
                <h3 className="text-lg font-bold text-white mb-1">{industry.name}</h3>
                <p className="text-sm text-white/80">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Peak Your Pipeline?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 2,000+ sales teams already using ClientPeak to close more deals and grow revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/pricing"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
