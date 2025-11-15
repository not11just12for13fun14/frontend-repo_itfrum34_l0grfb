import React from 'react'

const testimonials = [
  {
    name: 'Ava R.',
    role: 'Course Creator',
    quote: 'We went from scattered to systematic. 4.7x ROAS in month one. The clarity alone was worth 10x the fee.'
  },
  {
    name: 'Daniel K.',
    role: 'Agency Owner',
    quote: 'Clear frameworks, actionable steps, and honest feedback. Our team executes faster and smarter now.'
  },
  {
    name: 'Maya P.',
    role: 'Ecom Seller',
    quote: 'Our CAC dropped 32% while scaling spend. The funnel fixes were a game changer.'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">What clients say</h2>
          <p className="mt-2 text-gray-600">Real results from creators and brands I’ve helped.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border p-6 bg-gray-50">
              <p className="text-gray-700">“{t.quote}”</p>
              <div className="mt-4 text-sm text-gray-600">— {t.name}, {t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
