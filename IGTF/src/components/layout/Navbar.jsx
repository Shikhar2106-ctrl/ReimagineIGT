import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import navData from '../../data/navigation.json';
import siteData from '../../data/site.json';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-2xl border-b border-slate-200/80 py-2 shadow-md'
          : 'bg-white/65 backdrop-blur-xl border-b border-white/80 py-2.5 shadow-xs'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={siteData.logo.header || "/images/topbar-logo.png"}
              alt={siteData.logo.alt}
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden items-center gap-2">
              <div className="h-7 w-7 rounded-md bg-emerald-600 flex items-center justify-center font-bold text-white text-xs">
                IG
              </div>
              <span className="font-bold text-lg text-slate-900 tracking-tight">
                Intelli<span className="text-emerald-600">Green</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-0.5 rounded-full bg-white/70 border border-slate-200/80 px-3 py-1 shadow-xs backdrop-blur-xl">
            {navData.main.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button to="/contact" size="sm" variant="primary" className="text-xs px-3.5 py-1.5 shadow-sm">
              Consultation
              <ArrowRight size={13} />
            </Button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg bg-white/80 backdrop-blur-md border border-slate-200 text-slate-700 hover:text-slate-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[55px] bg-white/90 border-b border-slate-200 backdrop-blur-2xl p-5 shadow-xl transition-all">
          <nav className="flex flex-col gap-2">
            {navData.main.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-emerald-50 text-emerald-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-200">
              <Button to="/contact" size="sm" className="w-full">
                Book Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
