import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

export default function Logo({ compact = false, inverse = false }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="MSI Haiti Energy home">
      <span className="flex h-11 w-11 items-center justify-center rounded-md bg-ocean-700 text-white shadow-lift transition group-hover:bg-leaf-600">
        <Zap size={22} aria-hidden="true" />
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className={`block text-base font-bold tracking-tight ${inverse ? 'text-white' : 'text-ink'}`}>MSI Haiti Energy</span>
          <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-leaf-600">Clean power for Haiti</span>
        </span>
      )}
    </Link>
  );
}
