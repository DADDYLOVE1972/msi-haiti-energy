import { ArrowRight, HeartHandshake, ShieldCheck, SunMedium } from 'lucide-react';
import { Link } from 'react-router-dom';
import HaitiSolarMap from '../components/HaitiSolarMap.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import SolarVisual from '../components/SolarVisual.jsx';
import StatGrid from '../components/StatGrid.jsx';
import { impactPillars, impactStats, marigotStats, metrics, partnerTracks, phaseOverviewCards } from '../data/site.js';

export default function Home() {
  return (
    <>
      <section className="hero-full relative isolate min-h-[760px] overflow-hidden bg-ink text-white">
        <img
          src="/assets/haiti-solar-hero.png"
          alt="Solar panels powering a hillside community in coastal Haiti"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/78 to-ocean-900/28" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink to-transparent" aria-hidden="true" />
        <div className="container-page relative flex min-h-[760px] flex-col justify-center py-20">
          <div className="max-w-4xl reveal">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-leaf-100 backdrop-blur">
                <SunMedium className="h-4 w-4" aria-hidden="true" />
                Marigot Phase 1: 100 homes
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-leaf-100/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                <span aria-hidden="true">🟢</span>
                Phase 1 Planning — Marigot, Haiti
              </div>
            </div>
            <h1 className="mt-8 max-w-5xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Reliable solar power for homes, schools, and local businesses in Marigot, Haiti.
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.42)] sm:text-xl sm:leading-9 lg:text-slate-100">
              MSI Haiti Energy is building an investor-ready clean energy initiative beginning with 100 homes in Marigot, Haiti.
            </p>
            <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] sm:text-lg sm:leading-8">
              Reliable electricity for homes, schools, clinics, and local businesses in Marigot, Haiti.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary min-h-14 w-full px-6 py-4 text-base hover:scale-[1.01] sm:w-auto">
                Request Project Brief <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link to="/contact" className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-4 text-base font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/20 hover:shadow-lift sm:w-auto">
                Schedule a Conversation <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-6 flex max-w-2xl items-start gap-3 rounded-lg border border-white/15 bg-white/10 p-4 text-sm leading-6 text-slate-100 backdrop-blur">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-leaf-100" aria-hidden="true" />
              Project brief, partnership pathways, and Phase 1 funding details are available for aligned investors,
              NGOs, foundations, and technical partners.
            </div>
          </div>
          <div className="mt-14 max-w-6xl reveal reveal-delay-2">
            <StatGrid items={metrics} />
          </div>
        </div>
      </section>

      <section className="section-divider bg-ink pb-20 text-white">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ['Investor Readiness', 'Clear Phase 1 scope, impact metrics, and partner reporting orientation.'],
              ['NGO Alignment', 'Community-first implementation designed for trusted institutional collaboration.'],
              ['Project Brief', 'Marigot deployment details available for qualified partners and supporters.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-lg border border-white/10 bg-white/10 p-6 backdrop-blur reveal">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-leaf-100">{title}</p>
                <p className="mt-3 text-lg font-semibold leading-7 text-white">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider bg-white py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="Trust and delivery"
            title="MSI Haiti Energy — Phase 1 Overview"
            text="A focused, partner-ready clean-energy deployment built around transparent funding, community benefit, and a model that can scale."
            centered
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {phaseOverviewCards.map((card, index) => (
              <div key={card.title} className={`card reveal reveal-delay-${Math.min(index, 3)}`}>
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-leaf-50 text-leaf-700">
                  <card.icon size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold leading-7 text-ink">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page page-pad">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="reveal">
            <SectionHeader
              eyebrow="Marigot Phase 1"
              title="A serious first deployment for 100 homes."
              text="Phase 1 is designed to prove the model through a measurable community electrification project with the credibility partners expect."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {marigotStats.map((item) => (
                <div key={item.label} className="card">
                  <item.icon className="h-7 w-7 text-leaf-600" aria-hidden="true" />
                  <p className="mt-4 text-2xl font-semibold text-ocean-700">{item.value}</p>
                  <h3 className="mt-2 font-semibold text-ink">{item.label}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal reveal-delay-1">
            <SolarVisual />
          </div>
        </div>
      </section>

      <section className="section-divider bg-slate-50 py-20 sm:py-24">
        <div className="container-page">
          <SectionHeader
            eyebrow="Impact at a glance"
            title="Human outcomes, measured with investor discipline."
            text="The site now foregrounds the emotional promise of energy access while keeping the numbers and execution logic clear."
            centered
          />
          <div className="mt-12">
            <StatGrid items={impactStats} />
          </div>
        </div>
      </section>

      <section className="container-page page-pad">
        <HaitiSolarMap />
      </section>

      <section className="section-divider bg-ocean-900 py-20 text-white sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-leaf-100">Why it matters</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Electricity is infrastructure for dignity.</h2>
            <p className="mt-5 text-base leading-8 text-slate-200">
              Reliable power supports education, refrigeration, communications, small businesses,
              health, public safety, and resilience during disruption.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {impactPillars.map((item, index) => (
              <div key={item.title} className={`rounded-lg border border-white/10 bg-white/10 p-6 backdrop-blur reveal reveal-delay-${Math.min(index + 1, 3)}`}>
                <item.icon className="h-7 w-7 text-leaf-100" aria-hidden="true" />
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-200">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page page-pad">
        <SectionHeader
          eyebrow="Partner pathways"
          title="Built for NGOs, investors, technology partners, and supporters."
          text="MSI Haiti Energy welcomes aligned partners who can help deploy, finance, monitor, and scale clean-energy access."
          centered
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {partnerTracks.map((track) => (
            <div key={track.title} className="card">
              <track.icon className="h-8 w-8 text-ocean-700" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold text-ink">{track.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{track.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="rounded-lg bg-gradient-to-r from-ocean-700 to-leaf-600 p-8 text-white shadow-soft sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <HeartHandshake className="h-9 w-9 text-leaf-100" aria-hidden="true" />
              <h2 className="mt-4 text-3xl font-semibold">Help bring reliable electricity to Marigot, Haiti</h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/90">
                Partner with MSI Haiti Energy to support scalable clean-energy infrastructure, community resilience,
                and measurable impact.
              </p>
              <div className="mt-5 flex items-center gap-3 text-sm font-semibold text-leaf-100">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                Structured for transparent partner conversations
              </div>
              <a
                className="mt-3 inline-flex text-sm font-semibold text-white underline decoration-white/35 underline-offset-4 transition hover:decoration-white"
                href="mailto:marigotsolarinitiative@gmail.com"
              >
                marigotsolarinitiative@gmail.com
              </a>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link to="/contact" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-ocean-700 transition hover:-translate-y-0.5 sm:w-auto">
                Start a Conversation <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link to="/contact" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-white/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20 sm:w-auto">
                Download Project Brief <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
