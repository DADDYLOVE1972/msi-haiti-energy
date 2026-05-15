export default function StatGrid({ items }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <div
          key={item.label}
          className={`group rounded-lg border border-white/70 bg-white/95 p-6 shadow-lift backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-soft reveal reveal-delay-${Math.min(index, 3)}`}
        >
          {'icon' in item && item.icon ? <item.icon className="mb-4 h-7 w-7 text-leaf-600 transition duration-300 group-hover:-translate-y-1" aria-hidden="true" /> : null}
          <p className="text-4xl font-semibold tracking-tight text-ocean-700">{item.value}</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">{item.label}</p>
          {item.detail || item.text ? <p className="mt-3 text-sm leading-6 text-slate-600">{item.detail || item.text}</p> : null}
        </div>
      ))}
    </div>
  );
}
