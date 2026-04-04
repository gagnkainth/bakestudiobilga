import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-darker/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Bake Studio Bilga Logo"
            className="h-12 md:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]"
          />
          <span className="font-script text-3xl text-white tracking-wider">Bake Studio Bilga</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-zinc-300 hover:text-white transition-colors font-medium">Home</a>
          <a href="#about" className="text-zinc-300 hover:text-white transition-colors font-medium">About</a>
          <a href="#work" className="text-zinc-300 hover:text-white transition-colors font-medium">Work</a>
          <a href="#review" className="text-zinc-300 hover:text-white transition-colors font-medium">Review</a>
          <a href="#contact" className="text-zinc-300 hover:text-white transition-colors font-medium">Contact</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-darker border-t border-zinc-800 py-4 px-6 flex flex-col gap-4 shadow-xl">
          <a href="#home" className="text-zinc-300 text-lg" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#about" className="text-zinc-300 text-lg" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#work" className="text-zinc-300 text-lg" onClick={() => setIsMobileMenuOpen(false)}>Work</a>
          <a href="#review" className="text-zinc-300 text-lg" onClick={() => setIsMobileMenuOpen(false)}>Review</a>
          <a href="#contact" className="text-zinc-300 text-lg" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
