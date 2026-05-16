import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import { navLinks } from '../data/site.js';
import Logo from './Logo.jsx';

const linkClass = ({ isActive }) =>
  `nav-link rounded-md px-3 py-2 text-sm font-semibold transition ${
    isActive ? 'bg-ocean-50 text-ocean-700' : 'text-slate-700 hover:bg-slate-100 hover:text-ocean-700'
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl">
      <nav className="container-page flex min-h-20 items-center justify-between gap-4">
        <Logo />
        <div className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} to={link.href} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <Link to="/partner" className="btn-primary hidden shadow-soft xl:inline-flex">
          Partner With MSI <ArrowRight size={17} aria-hidden="true" />
        </Link>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-ink xl:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-slate-200 bg-white xl:hidden">
          <div className="container-page grid gap-2 py-4">
            {navLinks.map((link) => (
              <NavLink key={link.href} to={link.href} className={linkClass} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
