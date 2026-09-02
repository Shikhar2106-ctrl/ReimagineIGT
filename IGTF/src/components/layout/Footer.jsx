import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import IconHelper from '../common/IconHelper';
import { getAssetUrl } from '../../utils/assetHelper';
import siteData from '../../data/site.json';
import navData from '../../data/navigation.json';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-12 text-slate-600">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <img
                src={getAssetUrl(siteData.logo.light)}
                alt={siteData.logo.alt}
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="hidden text-xl font-bold text-slate-900">
                Intelli<span className="text-emerald-600">Green</span>
              </span>
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              {siteData.description}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {siteData.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-emerald-600 hover:border-emerald-500/40 hover:bg-emerald-50 transition-colors"
                  aria-label={social.name}
                >
                  <IconHelper name={social.icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links Columns */}
          {navData.footer.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                {column.title}
              </h3>
              <ul className="space-y-2.5 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="hover:text-emerald-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {siteData.companyName || 'Intelligreen Technologies Private Limited'}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-slate-900">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-900">Terms of Service</Link>
            <Link to="/contact" className="hover:text-slate-900">Support</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
