import Link from 'next/link';

const tiers = [
  {
    name: 'Starter',
    price: '$29',
    unit: 'per seat / month',
    description: 'For small teams getting started with structured sales.',
    cta: 'Start Free Trial',
    highlighted: false,
    features: [
      'Up to 10 seats',
      '1,000 contacts',
      'Basic pipeline management',
      'Email templates',
      '5 active sequences',
      'Standard reporting',
      'Email support',
      'Slack integration',
    ],
  },
  {
    name: 'Business',
    price: '$79',
    unit: 'per seat / month',
    description: 'For growing teams that need enrichment and automation.',
    cta: 'Start Free Trial',
    highlighted: true,
    features: [
      'Up to 50 seats',
      '25,000 contacts',
      'Advanced pipeline + multi-pipeline',
      'Contact enrichment (500/mo)',
      'Unlimited sequences',
      'Revenue forecasting',
      'Custom dashboards',
      'API access',
      'Priority support',
      'SSO & SCIM',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    unit: 'tailored to your org',
    description: 'For large organizations with complex requirements.',
    cta: 'Contact Sales',
    highlighted: false,
    features: [
      'Unlimited seats',
      'Unlimited contacts',
      'Everything in Business',
      'Unlimited enrichment credits',
      'AI forecasting with scenarios',
      'Custom integrations',
      'Dedicated CSM',
      'SLA guarantee (99.99%)',
      'SOC 2 Type II & GDPR',
      'On-premise option',
      'Custom training & onboarding',
    ],
  },
];

const featureMatrix = [
  { feature: 'Pipeline Management', starter: true, business: true, enterprise: true },
  { feature: 'Contact Enrichment', starter: false, business: '500/mo', enterprise: 'Unlimited' },
  { feature: 'Email Sequences', starter: '5 active', business: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Revenue Forecasting', starter: false, business: true, enterprise: 'AI-powered' },
  { feature: 'Custom Dashboards', starter: false, business: true, enterprise: true },
  { feature: 'API Access', starter: false, business: true, enterprise: true },
  { feature: 'SSO & SCIM', starter: false, business: true, enterprise: true },
  { feature: 'Dedicated CSM', starter: false, business: false, enterprise: true },
  { feature: 'SLA Guarantee', starter: '99.9%', business: '99.95%', enterprise: '99.99%' },
  { feature: 'Data Residency Options', starter: false, business: false, enterprise: true },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <span className="text-green-600">✓</span>;
  if (value === false) return <span className="text-gray-300">—</span>;
  return <span className="text-sm text-gray-700">{value}</span>;
}

export default function PricingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees, no long-term contracts.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 -mt-20">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-white rounded-2xl border-2 p-8 ${
                tier.highlighted ? 'border-primary-500 shadow-xl relative' : 'border-gray-200'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-700 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-1">{tier.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{tier.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                <span className="text-sm text-gray-500 ml-2">{tier.unit}</span>
              </div>
              <Link
                href={tier.name === 'Enterprise' ? '/contact' : '/demo'}
                className={`block text-center py-3 rounded-lg font-semibold transition-colors mb-8 ${
                  tier.highlighted
                    ? 'bg-primary-700 hover:bg-primary-800 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                {tier.cta}
              </Link>
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Matrix */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 text-sm font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-3 text-sm font-semibold text-gray-900">Starter</th>
                  <th className="text-center py-3 text-sm font-semibold text-primary-700">Business</th>
                  <th className="text-center py-3 text-sm font-semibold text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {featureMatrix.map((row) => (
                  <tr key={row.feature}>
                    <td className="py-3 text-sm text-gray-700">{row.feature}</td>
                    <td className="py-3 text-center"><CellValue value={row.starter} /></td>
                    <td className="py-3 text-center bg-primary-50/30"><CellValue value={row.business} /></td>
                    <td className="py-3 text-center"><CellValue value={row.enterprise} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Custom Quote CTA */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Plan?</h2>
          <p className="text-blue-100 mb-8">We build tailored packages for organizations with unique requirements.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary-700 font-semibold px-8 py-3.5 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Get a Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
