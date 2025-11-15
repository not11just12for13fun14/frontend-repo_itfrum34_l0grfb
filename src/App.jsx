import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import LeadForm from './components/LeadForm'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Services />
        <Testimonials />
        <Pricing />
        <FAQ />
        <LeadForm />
      </main>
      <footer className="py-10 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} YourBrand — All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#book" className="text-blue-600 hover:text-blue-700 font-semibold">Book a Call</a>
            <a href="#products" className="text-gray-600 hover:text-gray-900">Products</a>
            <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
