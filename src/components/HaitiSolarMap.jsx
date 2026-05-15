import { BatteryCharging, Home, SunMedium, Zap } from 'lucide-react';

export default function HaitiSolarMap() {
  return (
    <div className="relative overflow-hidden rounded-lg bg-white p-6 shadow-soft">
      <div className="absolute inset-0 energy-grid opacity-50" aria-hidden="true" />
      <div className="relative grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div className="relative min-h-72">
          <div className="absolute left-[12%] top-[17%] h-40 w-64 rotate-[-10deg] rounded-[44%_56%_52%_48%] bg-ocean-100" />
          <div className="absolute left-[23%] top-[34%] h-24 w-56 rotate-[12deg] rounded-[48%_52%_42%_58%] bg-leaf-100" />
          <div className="absolute left-[45%] top-[38%] h-12 w-32 rotate-[4deg] rounded-[50%] bg-ocean-200" />
          <div className="absolute left-[42%] top-[45%] flex h-24 w-24 items-center justify-center rounded-full border border-leaf-500/30 bg-white shadow-lift">
            <SunMedium className="h-10 w-10 text-leaf-600" aria-hidden="true" />
          </div>
          <div className="absolute left-[55%] top-[31%] rounded-full bg-ocean-700 px-4 py-2 text-sm font-semibold text-white shadow-lift">
            Marigot
          </div>
          <div className="absolute bottom-6 left-6 right-8 grid grid-cols-3 gap-2">
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className="h-10 rounded border border-ocean-700/20 bg-ocean-700/85 shadow-sm" />
            ))}
          </div>
        </div>
        <div className="relative">
          <p className="eyebrow">Haiti plus solar</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">A local project with national relevance.</h2>
          <p className="mt-4 leading-8 text-slate-600">
            Marigot Phase 1 is framed as the first proof point for a clean-energy model that can move from homes to
            community institutions and future deployment zones.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { icon: Home, label: 'Homes' },
              { icon: BatteryCharging, label: 'Storage' },
              { icon: Zap, label: 'Access' },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <item.icon className="h-5 w-5 text-leaf-600" aria-hidden="true" />
                <p className="mt-2 text-sm font-semibold text-slate-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
