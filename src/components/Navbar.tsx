import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    'Overview',
    'Services',
    'Market Intelligence',
    'Executive Team',
    'Connect',
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-black/60 backdrop-blur-md border-b border-white/10 pointer-events-auto">
      <div className="flex items-center gap-3 z-50">
        <img 
          src="/cdp-logo.png" 
          alt="CDP Partnership Logo" 
          className="h-10 w-auto object-contain" 
        />
        <span 
          className="text-white text-xl md:text-2xl hidden sm:block tracking-wide" 
          style={{ fontFamily: '"Algerian", serif' }}
        >
          CDP Partnership
        </span>
      </div>

      {/* Desktop Links (Center Pill) */}
      <div className="hidden lg:flex items-center bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 gap-8 shadow-xl">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-sm font-medium text-white/80 hover:text-white transition-colors tracking-wide"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Right Actions */}
      <div className="hidden md:flex items-center z-50">
        <button className="flex items-center gap-3 bg-red-700 hover:bg-red-600 transition-colors text-white px-5 py-2.5 rounded shadow-lg shadow-red-900/20 font-medium text-sm tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Request Consultation
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden text-white z-50"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/90 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-light text-white/90 hover:text-white tracking-widest uppercase transition-colors"
          >
            {link}
          </a>
        ))}
        <button className="mt-8 flex items-center gap-3 bg-red-700 hover:bg-red-600 transition-colors text-white px-8 py-4 rounded font-medium tracking-widest uppercase">
          Request Consultation
        </button>
      </div>
    </nav>
  );
}
