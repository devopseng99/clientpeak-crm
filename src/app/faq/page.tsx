'use client';

import { useState } from 'react';

const faqCategories = [
  {
    category: 'Implementation',
    questions: [
      { q: 'How long does implementation typically take?', a: 'Most teams are fully onboarded within 2-4 weeks. Our dedicated implementation team handles data migration, SSO setup, and custom pipeline configuration. Enterprise deployments with complex integrations may take 6-8 weeks.' },
      { q: 'Can you migrate data from our existing CRM?', a: 'Yes. We have automated migration tools for Salesforce, HubSpot, Pipedrive, and Zoho. For other CRMs, our team handles custom migrations at no additional cost. All historical data, notes, and attachments are preserved.' },
      { q: 'Do you offer training for our sales team?', a: 'Every plan includes self-serve training resources and video tutorials. Business plans include live group training sessions. Enterprise plans include dedicated onboarding with custom training tailored to your workflows.' },
    ],
  },
  {
    category: 'Security',
    questions: [
      { q: 'What security certifications do you hold?', a: 'ClientPeak is SOC 2 Type II certified, ISO 27001 certified, and GDPR compliant. We undergo annual third-party audits and penetration testing. Our infrastructure runs on AWS with encryption at rest and in transit.' },
      { q: 'Where is our data stored?', a: 'By default, data is stored in AWS US regions. Enterprise customers can choose EU (Frankfurt), APAC (Sydney), or US data residency. We support data isolation requirements for regulated industries.' },
      { q: 'Do you support SSO and SCIM?', a: 'Yes. Business and Enterprise plans support SAML 2.0 SSO with providers like Okta, Azure AD, and Google Workspace. Enterprise plans also include SCIM for automated user provisioning and de-provisioning.' },
    ],
  },
  {
    category: 'Compliance',
    questions: [
      { q: 'Is ClientPeak HIPAA compliant?', a: 'Yes. We offer a signed BAA (Business Associate Agreement) for healthcare organizations on Enterprise plans. Our platform includes audit logging, access controls, and encryption required for HIPAA compliance.' },
      { q: 'How do you handle GDPR requirements?', a: 'We are fully GDPR compliant with a DPA available for all customers. Features include consent management, right-to-erasure workflows, data export, and configurable retention policies.' },
      { q: 'Do you support data retention policies?', a: 'Yes. Admins can configure custom retention periods for contacts, activities, and emails. Automated purging runs on schedule with full audit trails. Enterprise plans support legal hold capabilities.' },
    ],
  },
  {
    category: 'Integrations',
    questions: [
      { q: 'What integrations are available?', a: 'We offer 200+ native integrations including Salesforce, HubSpot, Slack, Zoom, Microsoft 365, Google Workspace, LinkedIn Sales Navigator, ZoomInfo, Gong, Outreach, Marketo, and Segment. Our REST API and webhook framework support custom integrations.' },
      { q: 'Is there an API for custom integrations?', a: 'Yes. All plans include REST API access with comprehensive documentation, SDKs for Python, Node.js, and Ruby, and webhook support for real-time events. Rate limits vary by plan.' },
      { q: 'Can I sync with my existing Salesforce instance?', a: 'Yes. Our bi-directional Salesforce sync keeps contacts, opportunities, and activities in real-time sync. Field mapping is fully customizable, and conflict resolution rules are configurable.' },
    ],
  },
  {
    category: 'Support SLAs',
    questions: [
      { q: 'What support is included?', a: 'Starter: email support (24hr response). Business: email + chat (4hr response) + dedicated Slack channel. Enterprise: all channels + phone + dedicated CSM + 1hr critical response SLA.' },
      { q: 'Do you offer 24/7 support?', a: 'Business plans include support during extended business hours (6am-10pm PT). Enterprise plans include true 24/7 support with on-call engineering escalation for critical issues.' },
      { q: 'What is your uptime guarantee?', a: 'Starter: 99.9% SLA. Business: 99.95% SLA. Enterprise: 99.99% SLA with financial credits. Current trailing 12-month uptime is 99.997%. Status page available at status.clientpeak.com.' },
    ],
  },
  {
    category: 'Data Migration',
    questions: [
      { q: 'What data can be migrated?', a: 'We migrate contacts, companies, deals, activities, notes, emails, attachments, custom fields, and pipeline configurations. Historical reporting data and user assignments are preserved.' },
      { q: 'Is there downtime during migration?', a: 'No. Migrations run in parallel — your existing CRM remains operational throughout. We do a final delta sync to capture any changes made during the migration window, typically with zero downtime.' },
      { q: 'Can we run both CRMs in parallel during transition?', a: 'Yes. We recommend a 2-4 week parallel run period. Bi-directional sync keeps both systems current during the transition. Our team monitors data integrity throughout.' },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Everything you need to know about ClientPeak — from implementation and security to integrations and support.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {faqCategories.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary-700 rounded-full"></span>
                {cat.category}
              </h2>
              <div className="space-y-2">
                {cat.questions.map((item) => {
                  const key = `${cat.category}-${item.q}`;
                  const isOpen = openItems[key];
                  return (
                    <div key={key} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full flex items-center justify-between px-6 py-4 text-left"
                      >
                        <span className="text-sm font-medium text-gray-900 pr-4">{item.q}</span>
                        <svg
                          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
