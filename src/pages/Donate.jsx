import { Bell, CalendarClock, HeartHandshake, Lock, Mail, Send, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';

export default function Donate() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Donations launching soon."
        text="MSI Haiti Energy is preparing donation infrastructure that matches the seriousness of the mission: secure, transparent, and accountable."
      />
      <section className="container-page page-pad">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div className="relative overflow-hidden rounded-lg bg-ink p-8 text-white shadow-soft sm:p-12">
            <div className="absolute inset-0 energy-grid opacity-10" aria-hidden="true" />
            <div className="relative">
              <span className="flex h-16 w-16 items-center justify-center rounded-md bg-leaf-500 text-white shadow-lift">
                <Lock size={30} aria-hidden="true" />
              </span>
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-leaf-100">Coming soon</p>
              <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
                Donations launching soon.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
                We are finalizing the systems needed to accept contributions responsibly. Until then, supporters can
                contact the team about pledges, sponsorship, institutional partnership, and Marigot Phase 1 support.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  disabled
                  className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white/75"
                >
                  <Bell size={18} aria-hidden="true" />
                  Donations Coming Soon
                </button>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-ocean-700 transition hover:-translate-y-0.5">
                  <Mail size={18} aria-hidden="true" />
                  Contact the Team
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              {
                icon: ShieldCheck,
                title: 'Secure by design',
                text: 'Donation activation will be tied to a trusted payment and reporting workflow.',
              },
              {
                icon: HeartHandshake,
                title: 'Purpose-led giving',
                text: 'Support will focus on clean energy access for Haitian families, starting in Marigot.',
              },
              {
                icon: CalendarClock,
                title: 'Launch readiness',
                text: 'The page is already built so the organization can activate giving when operationally ready.',
              },
            ].map((item) => (
              <div key={item.title} className="card">
                <item.icon className="h-7 w-7 text-leaf-600" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider bg-slate-50 py-20 sm:py-24">
        <div className="container-page">
          <div className="grid gap-8 rounded-lg border border-slate-200 bg-white p-8 shadow-soft lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-10">
            <div>
              <p className="eyebrow">Stay updated</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Join the MSI Haiti Energy launch list.
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                Receive updates on Marigot Phase 1, donation launch timing, partner milestones, and clean-energy impact.
              </p>
            </div>
            <form className="grid gap-4 sm:grid-cols-[1fr_auto]" onSubmit={(event) => event.preventDefault()}>
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email address"
                className="min-h-14 rounded-md border border-slate-300 px-4 text-base outline-none transition focus:border-ocean-500 focus:ring-4 focus:ring-ocean-100"
              />
              <button type="submit" className="btn-primary min-h-14">
                Notify Me <Send size={18} aria-hidden="true" />
              </button>
              <p className="text-sm text-slate-500 sm:col-span-2">
                Newsletter signup is frontend-ready and can be connected to your email platform.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
