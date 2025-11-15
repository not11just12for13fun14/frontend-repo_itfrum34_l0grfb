import React from 'react'

const services = [
  {
    title: '1:1 Strategy Intensive',
    desc: '90‑minute deep dive into your offer, audience, and funnel with a clear ad plan to execute.',
    items: ['Offer & audience mapping', 'Creative angles & hooks', 'Budget & channel plan']
  },
  {
    title: 'Funnel Audit',
    desc: 'Comprehensive review of your landing pages, tracking, and conversion flow with prioritized fixes.',
    items: ['Page speed & UX', 'Tracking health check', 'Conversion levers']
  },
  {
    title: 'Monthly Advisory',
    desc: 'Ongoing guidance, weekly reviews, and optimization support for your in‑house team.',
    items: ['Weekly consults', 'Creative & copy feedback', 'Action plans']
  }
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold text-gray-900">Consulting Services</h2>
          <p className="mt-2 text-gray-600">Hands‑on help to fix what matters and scale what works.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <a href="#book" className="mt-4 inline-flex px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Book Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
