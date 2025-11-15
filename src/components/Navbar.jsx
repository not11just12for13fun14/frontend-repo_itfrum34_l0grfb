import React, { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-bold text-xl">YourBrand</a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-600 hover:text-gray-900">
                {item.label}
              </a>
            ))}
            <a href="#book" className="ml-2 inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
              Book Consultation
            </a>
          </nav>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="md:hidden p-2 rounded hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-gray-700">
                {item.label}
              </a>
            ))}
            <a href="#book" onClick={() => setOpen(false)} className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
