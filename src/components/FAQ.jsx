import React from 'react'

const faqs = [
  {
    q: 'Who is this for?',
    a: 'Creators and businesses selling digital products or services who want predictable growth from paid ads.'
  },
  {
    q: 'Which platforms do you support?',
    a: 'Meta, Google, TikTok, YouTube, and LinkedIn. We choose channels based on your offer and audience.'
  },
  {
    q: 'Do you run the ads for me?',
    a: 'I provide strategy and advisory. If you need done‑for‑you execution, I can refer trusted partners.'
  },
  {
    q: 'What happens after the call?',
    a: 'You’ll receive a recording, notes, and a clear action plan with next steps.'
  }
]

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Frequently asked questions</h2>
        <div className="mt-10 divide-y divide-gray-200 rounded-xl border">
          {faqs.map((item) => (
            <details key={item.q} className="p-6 group">
              <summary className="cursor-pointer list-none flex items-center justify-between text-left">
                <span className="font-semibold text-gray-900">{item.q}</span>
                <span className="ml-4 text-gray-500 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-gray-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
