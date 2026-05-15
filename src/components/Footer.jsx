import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { footerHighlights, navLinks } from '../data/site.js';
import Logo from './Logo.jsx';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 energy-grid opacity-10" aria-hidden="true" />
      <div className="container-page relative py-14">
        <div className="mb-12 rounded-lg border border-white/10 bg-white/10 p-7 backdrop-blur sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-leaf-100">Build with us</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Help turn reliable clean power into a daily reality for Marigot families.
              </h2>
            </div>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-ocean-700 transition hover:-translate-y-0.5">
              Contact MSI <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1fr]">
          <div>
            <Logo inverse />
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
              MSI Haiti Energy develops clean, resilient energy access projects for Haitian communities,
              beginning with Marigot Phase 1 and a goal of electrifying 100 homes.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-leaf-100">Explore</h2>
            <div className="mt-4 grid gap-3">
              {navLinks.map((link) => (
                <Link key={link.href} to={link.href} className="text-sm text-slate-300 transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-leaf-100">Contact</h2>
            <div className="mt-4 space-y-4 text-sm text-slate-300">
              <p className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-leaf-100" aria-hidden="true" />
                info@msihaitienergy.org
              </p>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-leaf-100" aria-hidden="true" />
                Marigot, Southeast Haiti
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-leaf-100">Focus</h2>
            <div className="mt-4 grid gap-3">
              {footerHighlights.map((item) => (
                <p key={item} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} MSI Haiti Energy. All rights reserved.</p>
          <p>Clean energy. Community resilience. Investor discipline.</p>
        </div>
      </div>
    </footer>
  );
}
