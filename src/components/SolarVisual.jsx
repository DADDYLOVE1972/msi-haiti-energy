import { BatteryCharging, Cable, Home, SunMedium } from 'lucide-react';

export default function SolarVisual() {
  return (
    <div className="relative min-h-[440px] overflow-hidden rounded-lg bg-ocean-900 text-white shadow-soft">
      <div className="absolute inset-0 energy-grid opacity-20" aria-hidden="true" />
      <div className="absolute left-8 top-8 flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-semibold backdrop-blur">
        <SunMedium className="h-4 w-4 text-leaf-100" aria-hidden="true" />
        Marigot Phase 1
      </div>
      <div className="absolute right-8 top-8 rounded-full bg-leaf-500 px-4 py-2 text-sm font-bold text-white">
        100 homes
      </div>
      <div className="absolute left-1/2 top-24 h-20 w-20 -translate-x-1/2 rounded-full border border-leaf-100/40 bg-leaf-500/20" />
      <div className="absolute left-1/2 top-28 h-12 w-12 -translate-x-1/2 rounded-full bg-leaf-100 shadow-[0_0_70px_rgba(216,251,229,0.75)]" />
      <div className="absolute bottom-16 left-8 right-8">
        <div className="solar-surface h-44 rounded-lg border border-white/20 shadow-2xl">
          <div className="grid h-full grid-cols-4 gap-px p-4 opacity-90">
            {Array.from({ length: 16 }).map((_, index) => (
              <div key={index} className="rounded border border-white/16 bg-white/6" />
            ))}
          </div>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { icon: Home, label: 'Homes' },
            { icon: BatteryCharging, label: 'Storage' },
            { icon: Cable, label: 'Metering' },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-white/10 bg-white/10 p-4 text-center backdrop-blur">
              <item.icon className="mx-auto h-5 w-5 text-leaf-100" aria-hidden="true" />
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-200">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
