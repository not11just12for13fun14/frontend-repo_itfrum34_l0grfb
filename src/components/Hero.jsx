import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center text-blue-700 bg-blue-100 px-3 py-1 rounded-full text-xs font-semibold">Paid Ads Consultancy</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Convert clicks into clients with a high‑performing ads strategy
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            I help digital product creators and service businesses plan, launch, and scale profitable ad campaigns across Meta, Google, and TikTok.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#book" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 shadow">
              Book a Free Discovery Call
            </a>
            <a href="#products" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-gray-300 text-gray-800 hover:bg-gray-50">
              Browse Digital Products
            </a>
          </div>
          <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-4 opacity-80">
            {['Meta', 'Google', 'TikTok', 'YouTube', 'LinkedIn', 'X'].map((brand) => (
              <div key={brand} className="text-sm text-gray-600 bg-white/70 rounded border p-2 text-center">{brand} Ads</div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-blue-200 to-purple-200 shadow-inner border overflow-hidden flex items-center justify-center">
            <div className="p-6 text-center">
              <p className="text-gray-700 font-semibold">Case Study Snapshot</p>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">4.7x ROAS</p>
              <p className="text-sm text-gray-600 mt-1">for a digital course funnel in 30 days</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow p-4 border">
            <p className="text-sm text-gray-600">Trusted by 120+ clients</p>
            <p className="text-lg font-bold">$1.2M ad spend managed</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
