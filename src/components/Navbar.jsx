import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, Trees, ChevronRight, Clock } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top micro-bar */}
      <div className="bg-forest-900 text-forest-100 text-xs py-2 px-4 border-b border-forest-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6 flex-wrap justify-center sm:justify-start">
            <div className="flex items-center gap-1.5 text-forest-200">
              <MapPin className="w-3.5 h-3.5 text-forest-400" />
              <span>54 State Street, Ste 804, Albany, NY 12207</span>
            </div>
            <div className="flex items-center gap-1.5 text-forest-200">
              <Clock className="w-3.5 h-3.5 text-forest-400" />
              <span>Mon - Sat: 7:00 AM - 6:30 PM</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="mailto:info@gethls.com" 
              className="flex items-center gap-1.5 text-forest-200 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-forest-400" />
              <span>info@gethls.com</span>
            </a>
            <span className="hidden sm:inline text-forest-700">|</span>
            <span className="text-emerald-400 font-semibold tracking-wide">Albany Landscaping Specialists</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`bg-white/95 backdrop-blur-md transition-shadow duration-300 ${scrolled ? 'shadow-md border-b border-slate-100' : 'border-b border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <img 
                src="/logo_icon_transparent.png" 
                alt="Habitat Living Solutions" 
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform" 
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg sm:text-xl text-forest-950 tracking-tight leading-tight">
                  HABITAT LIVING SOLUTIONS
                </span>
                <span className="text-[11px] uppercase tracking-widest text-forest-700 font-semibold">
                  Landscaping & Grounds Care
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#services" className="hover:text-forest-700 transition-colors">Services</a>
              <a href="#why-us" className="hover:text-forest-700 transition-colors">Why Choose Us</a>
              <a href="#process" className="hover:text-forest-700 transition-colors">Process</a>
              <a href="#showcase" className="hover:text-forest-700 transition-colors">Work Showcase</a>
              <a href="#service-area" className="hover:text-forest-700 transition-colors">Service Area</a>
              <a href="#contact" className="hover:text-forest-700 transition-colors">Contact</a>
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-forest-700 hover:bg-forest-800 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow group"
              >
                <span>Get Free Quote</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-forest-50 hover:text-forest-800"
            >
              Services
            </a>
            <a
              href="#why-us"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-forest-50 hover:text-forest-800"
            >
              Why Choose Us
            </a>
            <a
              href="#process"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-forest-50 hover:text-forest-800"
            >
              Process
            </a>
            <a
              href="#showcase"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-forest-50 hover:text-forest-800"
            >
              Work Showcase
            </a>
            <a
              href="#service-area"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-forest-50 hover:text-forest-800"
            >
              Service Area
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md font-medium text-slate-700 hover:bg-forest-50 hover:text-forest-800"
            >
              Contact
            </a>
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-forest-700 hover:bg-forest-800 text-white px-5 py-3 rounded-lg font-semibold text-sm transition-all text-center"
              >
                <span>Request Free Estimate</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
