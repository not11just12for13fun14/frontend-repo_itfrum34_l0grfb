import React, { useState } from 'react'

const LeadForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    preferred_date: '',
    message: '',
    source: 'landing'
  })
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: 'Submitting...' })
    try {
      const res = await fetch(`${backend}/api/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus({ state: 'success', message: 'Thanks! We will be in touch within 24 hours.' })
      setForm({ name: '', email: '', phone: '', company: '', service: '', budget: '', preferred_date: '', message: '', source: 'landing' })
    } catch (err) {
      setStatus({ state: 'error', message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <section id="book" className="py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-extrabold">Book your discovery call</h2>
          <p className="mt-2 text-gray-300">Tell me about your goals and I’ll send a link to schedule a time that works for you.</p>
          <ul className="mt-6 space-y-2 text-gray-300 list-disc list-inside">
            <li>Honest, actionable advice</li>
            <li>No fluff. No long‑term commitment</li>
            <li>Focused on ROI and speed to results</li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="bg-white text-gray-900 rounded-xl p-6 shadow space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="w-full border rounded px-3 py-2" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full border rounded px-3 py-2" placeholder="jane@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="w-full border rounded px-3 py-2" placeholder="Optional" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Company</label>
              <input name="company" value={form.company} onChange={handleChange} className="w-full border rounded px-3 py-2" placeholder="Brand name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Service</label>
              <select name="service" value={form.service} onChange={handleChange} className="w-full border rounded px-3 py-2">
                <option value="">Select</option>
                <option>Strategy Intensive</option>
                <option>Funnel Audit</option>
                <option>Monthly Advisory</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Budget</label>
              <select name="budget" value={form.budget} onChange={handleChange} className="w-full border rounded px-3 py-2">
                <option value="">Select</option>
                <option>$0 - $1k/mo</option>
                <option>$1k - $5k/mo</option>
                <option>$5k - $20k/mo</option>
                <option>$20k+/mo</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1">Preferred Date</label>
              <input name="preferred_date" value={form.preferred_date} onChange={handleChange} className="w-full border rounded px-3 py-2" placeholder="e.g. next Tuesday afternoon" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full border rounded px-3 py-2" placeholder="Tell me about your offer, audience, and goals" />
            </div>
          </div>
          <button type="submit" className="w-full py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-60" disabled={status.state==='loading'}>
            {status.state === 'loading' ? 'Sending...' : 'Request Call'}
          </button>
          {status.state !== 'idle' && (
            <p className={`text-sm ${status.state==='success' ? 'text-green-600' : status.state==='error' ? 'text-red-600' : 'text-gray-600'}`}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default LeadForm
