import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { partnerTracks, dueDiligence } from '../data/site.js';

export default function Partner() {
  return (
    <>
      <PageHero
        eyebrow="Partner With Us"
        title="Help finance, deploy, and scale clean power in Haiti."
        text="MSI Haiti Energy is seeking aligned investors, NGOs, foundations, technology firms, and implementation partners to support Marigot Phase 1 and future replication."
      >
        <Link to="/contact" className="btn-primary">
          Start Partnership Conversation <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </PageHero>
      <section className="container-page page-pad">
        <SectionHeader
          eyebrow="Collaboration models"
          title="Multiple ways to contribute to a durable energy access platform."
          text="Partners can engage through capital, implementation, technology, monitoring, community support, and institutional collaboration."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {partnerTracks.map((track) => (
            <div key={track.title} className="card">
              <track.icon className="h-9 w-9 text-ocean-700" aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-semibold text-ink">{track.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{track.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-ocean-900 py-16 text-white sm:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="What partners can expect"
            title="Professional reporting and clear project structure."
            text="The organization is building a partner experience that supports due diligence, accountability, and long-term confidence."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {dueDiligence.map((item) => (
              <div key={item.title} className="rounded-lg border border-white/10 bg-white/10 p-6">
                <item.icon className="h-8 w-8 text-leaf-100" aria-hidden="true" />
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-200">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
