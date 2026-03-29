import Link from 'next/link';

const footerSections = [
  {
    title: 'Product',
    links: [
      { href: '/solutions', label: 'Solutions' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/dashboard', label: 'Dashboard' },
      { href: '/demo', label: 'Request Demo' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/case-studies', label: 'Case Studies' },
      { href: '/blog', label: 'Resources' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Support',
    links: [
      { href: '/faq', label: 'FAQ' },
      { href: '/contact', label: 'Help Center' },
      { href: '/faq', label: 'Documentation' },
      { href: '/contact', label: 'Status Page' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/faq', label: 'Privacy Policy' },
      { href: '/faq', label: 'Terms of Service' },
      { href: '/faq', label: 'Security' },
      { href: '/about', label: 'Compliance' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">CP</span>
              </div>
              <span className="text-lg font-bold text-white">ClientPeak</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Enterprise CRM platform for B2B sales teams. Close more deals, faster.
            </p>
            <div className="flex gap-3">
              {['LinkedIn', 'Twitter', 'GitHub'].map((social) => (
                <span
                  key={social}
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs text-gray-400 hover:bg-gray-700 cursor-pointer transition-colors"
                >
                  {social[0]}
                </span>
              ))}
            </div>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">&copy; 2026 ClientPeak CRM. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
              All systems operational
            </span>
            <span className="text-xs text-gray-500">SOC 2 Type II</span>
            <span className="text-xs text-gray-500">GDPR Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
