import React from 'react'

const products = [
  {
    title: 'Ad Strategy Playbook',
    desc: 'Step-by-step system to plan and launch high-ROI campaigns.',
    price: '$49',
    badge: 'Best Seller',
  },
  {
    title: 'Creative Hooks Library',
    desc: '200+ ad angles and hooks organized by niche and offer type.',
    price: '$29',
    badge: 'New',
  },
  {
    title: 'Tracking & UTM Kit',
    desc: 'Clean analytics, better decisions. Templates and walkthrough.',
    price: '$19',
  },
]

const Products = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold text-gray-900">Digital Products</h2>
          <p className="mt-2 text-gray-600">Instant downloads to help you launch smarter and scale faster.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.title} className="rounded-xl border shadow-sm hover:shadow-md transition overflow-hidden">
              <div className="p-6">
                {p.badge && <span className="text-xs inline-block bg-purple-100 text-purple-700 px-2 py-1 rounded mb-3">{p.badge}</span>}
                <h3 className="text-xl font-bold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-gray-600">{p.desc}</p>
              </div>
              <div className="px-6 pb-6 flex items-center justify-between">
                <span className="text-lg font-semibold">{p.price}</span>
                <a href="#book" className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Buy Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
