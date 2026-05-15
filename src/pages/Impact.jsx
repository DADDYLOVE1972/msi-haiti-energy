import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import StatGrid from '../components/StatGrid.jsx';
import { impactPillars, metrics } from '../data/site.js';

export default function Impact() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title="Clean power that strengthens daily life."
        text="Energy access is a practical foundation for education, enterprise, communications, health, safety, and climate resilience."
      />
      <section className="container-page page-pad">
        <StatGrid items={metrics} />
        <div className="mt-14">
          <SectionHeader
            eyebrow="Outcomes"
            title="The work is measured in households and human opportunity."
            text="MSI Haiti Energy frames impact around the daily benefits families and communities can feel, while maintaining the transparency partners expect."
          />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {impactPillars.map((item) => (
            <div key={item.title} className="card">
              <item.icon className="h-9 w-9 text-leaf-600" aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-semibold text-ink">{item.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          {[
            ['Education', 'Students can study safely after dark and stay connected to learning tools.'],
            ['Health and safety', 'Reliable light, communication, and refrigeration improve household resilience.'],
            ['Local enterprise', 'Power enables phone charging, cold storage, services, and longer productive hours.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-lg bg-white p-7 shadow-sm">
              <h2 className="text-xl font-semibold text-ocean-700">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
