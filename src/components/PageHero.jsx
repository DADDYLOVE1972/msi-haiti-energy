export default function PageHero({ eyebrow, title, text, children }) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 energy-grid opacity-70" aria-hidden="true" />
      <div className="container-page relative page-pad">
        <div className="max-w-4xl reveal">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">{title}</h1>
          {text && <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{text}</p>}
        </div>
        {children && <div className="mt-10 reveal reveal-delay-1">{children}</div>}
      </div>
    </section>
  );
}
