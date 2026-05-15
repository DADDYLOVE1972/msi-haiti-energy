import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import SolarVisual from '../components/SolarVisual.jsx';
import { marigotStats, roadmap } from '../data/site.js';

export default function MarigotProject() {
  return (
    <>
      <PageHero
        eyebrow="Marigot Project"
        title="Phase 1 clean-energy access for 100 homes."
        text="Marigot is the launch community for MSI Haiti Energy's first phase: a targeted, measurable electrification initiative intended to prove the model and prepare for replication."
      >
        <Link to="/partner" className="btn-primary">
          Explore Partnership <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </PageHero>
      <section className="container-page page-pad">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <SolarVisual />
          <div>
            <SectionHeader
              eyebrow="Project design"
              title="A practical first project with clear operational logic."
              text="The goal is to deliver electricity access that is reliable, maintainable, and financially accountable from deployment through monitoring."
            />
            <div className="mt-8 grid gap-4">
              {marigotStats.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-5">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-leaf-50 text-leaf-700">
                      <item.icon size={22} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-ink">{item.value}</h3>
                      <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">{item.label}</p>
                      <p className="mt-2 leading-7 text-slate-600">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-ocean-900 py-16 text-white sm:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Execution roadmap"
            title="From community mapping to monitored delivery."
            text="Phase 1 is structured around concrete steps that partners can review, support, and evaluate."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {roadmap.map((step, index) => (
              <div key={step} className="rounded-lg border border-white/10 bg-white/10 p-6">
                <p className="text-sm font-semibold text-leaf-100">0{index + 1}</p>
                <h3 className="mt-4 font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container-page page-pad">
        <div className="grid gap-8 rounded-lg border border-slate-200 bg-white p-8 shadow-soft lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-ink">Phase 1 is partner-ready.</h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              MSI Haiti Energy is preparing Marigot as the first proof point for a scalable Haitian energy access model.
            </p>
          </div>
          <Link to="/contact" className="btn-secondary">
            Contact the Team <CheckCircle2 size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
