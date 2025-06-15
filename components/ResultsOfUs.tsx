import React from 'react'

function ResultsOfUs() {
  return (
    <section className="w-full flex flex-row items-center justify-between min-h-[400px] white px-20 py-16 gap-8">
      {/* Left Side: Text and Bullets */}
      <div className="flex-1 flex flex-col justify-center items-start text-black max-w-lg">
        <h2 className="text-4xl font-extrabold mb-8 leading-tight">3x Faster Service with<br />Repair Shops</h2>
        <ul className="space-y-6 text-lg">
          <li className="flex items-start gap-3 text-gray-500">
            <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-full border-2 border-gray-400 text-gray-500">✓</span>
            <span>Service on Your Schedule</span>
          </li>
          <li className="flex items-start gap-3 text-gray-500">
            <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-full border-2 border-gray-400 text-gray-500">✓</span>
            <span>Transparent Pricing</span>
          </li>
          <li className="flex items-start gap-3 text-gray-500">
            <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-full border-2 border-gray-400 text-gray-500">✓</span>
            <span>Quality Mechanics</span>
          </li>
        </ul>
      </div>
      {/* Right Side: Cards and Chart */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        {/* Top Cards Row */}
        <div className="flex flex-row gap-6 w-full justify-end">
          {/* Budget Card */}
          <div className="bg-[#181828] rounded-2xl shadow-lg p-6 w-80 flex flex-col gap-4 border border-[#23233b]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full" />
              <span className="text-white font-semibold text-sm">Stay in full control of your budget</span>
            </div>
            <div className="text-gray-300 text-xs mb-2">Set up your budget:</div>
            <div className="flex items-center gap-2 mb-2">
              <select className="bg-[#23233b] text-white rounded px-2 py-1 text-xs border border-[#23233b]">
                <option>Daily budget</option>
                <option>Weekly budget</option>
              </select>
              <input type="number" value={5.00} className="bg-[#23233b] text-white rounded px-2 py-1 w-20 text-xs border border-[#23233b]" readOnly />
            </div>
            <div className="text-gray-300 text-xs mb-2">What is your time period?</div>
            <div className="flex items-center gap-2 mb-4">
              <input type="date" className="bg-[#23233b] text-white rounded px-2 py-1 text-xs border border-[#23233b]" value="2024-11-12" readOnly />
            </div>
            <button className="bg-[#2ecc71] hover:bg-[#27ae60] text-white font-semibold rounded-lg px-4 py-2 text-xs transition">Publish Campaign Job</button>
          </div>
          {/* Campaign Setup Card */}
          <div className="bg-[#181828] rounded-2xl shadow-lg p-6 w-64 flex flex-col gap-4 border border-[#23233b]">
            <div className="text-white font-semibold text-sm mb-2">Setup a Campaign</div>
            <div className="flex flex-col gap-3 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#23233b] text-blue-400">📋</span>
                <span>Campaign Name</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#23233b] text-pink-400">🎯</span>
                <span>Target Audience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#23233b] text-yellow-400">⏰</span>
                <span>Budget & Schedule</span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Cards Row */}
        <div className="flex flex-row gap-6 w-full justify-end">
          {/* Pie Chart (static) */}
          <div className="bg-[#181828] rounded-2xl shadow-lg p-6 w-40 flex flex-col items-center border border-[#23233b]">
            <svg width="60" height="60" viewBox="0 0 32 32">
              <circle r="16" cx="16" cy="16" fill="#23233b" />
              <path d="M16 16 L16 0 A16 16 0 0 1 32 16 Z" fill="#f7e06e" />
              <path d="M16 16 L32 16 A16 16 0 1 1 16 0 Z" fill="#2ecc71" />
            </svg>
            <span className="text-xs text-gray-300 mt-2">Budget Split</span>
          </div>
          {/* Conversion Rate Card */}
          <div className="bg-[#181828] rounded-2xl shadow-lg p-6 w-80 flex flex-col gap-4 border border-[#23233b]">
            <div className="text-white font-semibold text-sm mb-2">+500 Conversion Rate</div>
            <svg width="180" height="60" viewBox="0 0 180 60">
              <polyline
                fill="none"
                stroke="#2ecc71"
                strokeWidth="4"
                points="0,50 30,40 60,35 90,30 120,20 150,10 180,5"
              />
              <line x1="0" y1="50" x2="180" y2="50" stroke="#23233b" strokeWidth="2" />
              <line x1="0" y1="10" x2="0" y2="50" stroke="#23233b" strokeWidth="2" />
            </svg>
            <span className="text-xs text-gray-300">Conversion Rate</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResultsOfUs