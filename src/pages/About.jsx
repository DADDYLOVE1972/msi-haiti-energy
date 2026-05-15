import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { checkItems, dueDiligence, socialMission } from '../data/site.js';

export default function About() {
  const MissionIcon = socialMission.icon;

  return (
    <>
      <PageHero
        eyebrow="About MSI Haiti Energy"
        title="A clean-energy platform for resilient Haitian communities."
        text="MSI Haiti Energy exists to expand reliable, affordable, clean electricity access in Haiti through focused community projects and disciplined partner execution."
      />
      <section className="container-page page-pad">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <div className="rounded-lg bg-ocean-900 p-8 text-white shadow-soft">
            <MissionIcon className="h-10 w-10 text-leaf-100" aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-semibold">{socialMission.title}</h2>
            <p className="mt-5 leading-8 text-slate-200">{socialMission.text}</p>
          </div>
          <div>
            <SectionHeader
              eyebrow="Our approach"
              title="Community energy projects with investor-grade discipline."
              text="The work combines practical infrastructure, community engagement, funding transparency, and project controls that stakeholders can trust."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {checkItems.map((item) => (
                <div key={item.text} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4">
                  <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-leaf-600" aria-hidden="true" />
                  <p className="text-sm font-semibold text-slate-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Partner confidence"
            title="Designed for clear decisions."
            text="Supporters need more than inspiration. They need a credible project model, transparent milestones, and a practical path to scale."
            centered
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {dueDiligence.map((item) => (
              <div key={item.title} className="card">
                <item.icon className="h-8 w-8 text-ocean-700" aria-hidden="true" />
                <h3 className="mt-4 font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
