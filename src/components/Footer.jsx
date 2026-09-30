import React from 'react';
import { Trees, Mail, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-950 text-slate-300 pt-16 pb-12 border-t border-forest-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-forest-900">
          
          {/* Col 1: Brand info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo_icon_transparent.png" 
                alt="Habitat Living Solutions LLC" 
                className="h-10 w-auto object-contain bg-white/10 p-1 rounded-xl"
              />
              <span className="font-bold text-lg text-white tracking-tight">
                HABITAT LIVING SOLUTIONS LLC
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-forest-200/80 leading-relaxed max-w-md">
              Dedicated to speed, compliance, and quality for property owners, asset managers, and commercial clients in Albany, NY. High-standard landscaping and grounds preservation.
            </p>

            <div className="pt-2 space-y-2 text-xs text-forest-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>54 State Street, Ste 804, Albany, NY 12207</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:info@gethls.com" className="hover:text-white transition-colors">
                  info@gethls.com
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Licensed, Insured & Fully Compliant</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Landscaping Services</a></li>
              <li><a href="#why-us" className="hover:text-emerald-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#process" className="hover:text-emerald-400 transition-colors">Our 4-Step Process</a></li>
              <li><a href="#showcase" className="hover:text-emerald-400 transition-colors">Project Showcase</a></li>
              <li><a href="#service-area" className="hover:text-emerald-400 transition-colors">Albany Service Area</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Request Quote</a></li>
            </ul>
          </div>

          {/* Col 3: Landscaping Services */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-xs text-forest-200/90">
              <li>• Precision Lawn Mowing & Edging</li>
              <li>• Mulching & Garden Bed Edging</li>
              <li>• Landscape Design & Flower Beds</li>
              <li>• Spring & Fall Leaf Cleanups</li>
              <li>• Bush, Hedge & Shrub Trimming</li>
              <li>• Commercial Grounds Preservation</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-forest-400">
          <p>© {new Date().getFullYear()} HABITAT LIVING SOLUTIONS LLC. All rights reserved. Albany, NY.</p>
          <div className="flex items-center gap-6">
            <span>Specialized Landscaping & Grounds Care</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-emerald-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
