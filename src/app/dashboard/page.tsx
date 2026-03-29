'use client';

import { useState } from 'react';
import Link from 'next/link';

const sidebarItems = [
  { label: 'Overview', icon: '📊', active: true },
  { label: 'Pipeline', icon: '🔄', active: false },
  { label: 'Contacts', icon: '👤', active: false },
  { label: 'Sequences', icon: '✉️', active: false },
  { label: 'Reports', icon: '📈', active: false },
  { label: 'Team', icon: '👥', active: false },
  { label: 'Billing', icon: '💳', active: false },
  { label: 'Settings', icon: '⚙️', active: false },
];

const kpis = [
  { label: 'Total Revenue', value: '$2.4M', change: '+12.5%', up: true },
  { label: 'Active Deals', value: '147', change: '+8.3%', up: true },
  { label: 'Win Rate', value: '34.2%', change: '+2.1%', up: true },
  { label: 'Avg Deal Size', value: '$18.4K', change: '-1.2%', up: false },
];

const recentDeals = [
  { name: 'Acme Corp - Enterprise License', stage: 'Negotiation', value: '$145,000', rep: 'Sarah C.', probability: '75%' },
  { name: 'TechStart - Annual Plan', stage: 'Proposal', value: '$28,500', rep: 'James W.', probability: '60%' },
  { name: 'GlobalFin - Custom Deploy', stage: 'Discovery', value: '$320,000', rep: 'Priya P.', probability: '30%' },
  { name: 'MedHealth - Team Upgrade', stage: 'Closed Won', value: '$67,200', rep: 'Tom A.', probability: '100%' },
  { name: 'CloudNet - Migration', stage: 'Qualification', value: '$89,000', rep: 'Maria G.', probability: '20%' },
];

const teamMembers = [
  { name: 'Sarah Chen', role: 'Sr. AE', deals: 24, revenue: '$892K', avatar: 'SC' },
  { name: 'James Whitfield', role: 'AE', deals: 18, revenue: '$654K', avatar: 'JW' },
  { name: 'Priya Patel', role: 'Sr. AE', deals: 21, revenue: '$780K', avatar: 'PP' },
  { name: 'Tom Andersson', role: 'AE', deals: 15, revenue: '$445K', avatar: 'TA' },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-60 bg-white border-r border-gray-200 py-6">
        <div className="px-4 mb-6">
          <div className="bg-primary-50 rounded-lg p-3">
            <p className="text-xs text-primary-600 font-medium">Current Plan</p>
            <p className="text-sm font-bold text-primary-800">Business</p>
            <p className="text-xs text-primary-600 mt-1">14 of 25 seats used</p>
          </div>
        </div>
        <nav className="flex-1 px-2 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === item.label
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="px-4 pt-4 border-t border-gray-200">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">← Back to site</Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-8 overflow-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
              <p className="text-sm text-gray-500 mt-1">Welcome back. Here&apos;s what&apos;s happening with your pipeline.</p>
            </div>
            <div className="flex items-center gap-3">
              <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white">
                <option>This Quarter</option>
                <option>Last Quarter</option>
                <option>This Year</option>
              </select>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="bg-white rounded-xl border border-gray-200 p-5">
                <p className="text-sm text-gray-500 mb-1">{kpi.label}</p>
                <div className="flex items-end justify-between">
                  <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
                  <span className={`text-sm font-medium ${kpi.up ? 'text-green-600' : 'text-red-500'}`}>
                    {kpi.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Chart Placeholder */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h2>
            <div className="h-64 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg flex items-end justify-between px-6 pb-4 gap-2">
              {[35, 42, 38, 55, 48, 62, 58, 70, 65, 78, 82, 90].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full bg-gradient-to-t from-primary-700 to-primary-400 rounded-t-sm"
                    style={{ height: `${h}%` }}
                  ></div>
                  <span className="text-[10px] text-gray-400">{['J','F','M','A','M','J','J','A','S','O','N','D'][i]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Deals */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Recent Deals</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-xs text-gray-500 uppercase tracking-wider">
                      <th className="px-6 py-3">Deal</th>
                      <th className="px-6 py-3">Stage</th>
                      <th className="px-6 py-3">Value</th>
                      <th className="px-6 py-3">Rep</th>
                      <th className="px-6 py-3">Prob.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {recentDeals.map((deal) => (
                      <tr key={deal.name} className="hover:bg-gray-50">
                        <td className="px-6 py-3 text-sm font-medium text-gray-900">{deal.name}</td>
                        <td className="px-6 py-3">
                          <span className={`inline-flex px-2 py-1 text-xs rounded-full font-medium ${
                            deal.stage === 'Closed Won'
                              ? 'bg-green-100 text-green-700'
                              : deal.stage === 'Negotiation'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {deal.stage}
                          </span>
                        </td>
                        <td className="px-6 py-3 text-sm text-gray-700">{deal.value}</td>
                        <td className="px-6 py-3 text-sm text-gray-500">{deal.rep}</td>
                        <td className="px-6 py-3 text-sm text-gray-500">{deal.probability}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Team */}
            <div className="bg-white rounded-xl border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Team Leaderboard</h2>
              </div>
              <div className="p-4 space-y-3">
                {teamMembers.map((member, i) => (
                  <div key={member.name} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50">
                    <span className="text-sm font-bold text-gray-400 w-4">{i + 1}</span>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-xs text-white font-medium">
                      {member.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{member.name}</p>
                      <p className="text-xs text-gray-500">{member.deals} deals · {member.revenue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
