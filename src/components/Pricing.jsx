import React from 'react'

const tiers = [
  {
    name: 'Strategy Intensive',
    price: '$299',
    features: ['90‑minute deep dive', 'Recording + action plan', '7‑day support window']
  },
  {
    name: 'Funnel Audit',
    price: '$499',
    features: ['Full funnel review', 'Tracking & CRO checklist', 'Prioritized fixes']
  },
  {
    name: 'Monthly Advisory',
    price: '$1,200',
    features: ['Weekly consults', 'Creative & copy feedback', 'Roadmaps & reports']
  }
]

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold text-gray-900">Simple pricing</h2>
          <p className="mt-2 text-gray-600">Pick the format that fits where you are right now.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-xl border bg-white p-6 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold text-gray-900">{t.name}</h3>
              <div className="mt-2 text-3xl font-extrabold">{t.price}</div>
              <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside flex-1">
                {t.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#book" className="mt-6 inline-flex px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Book Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
