import { Send } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import { contactDetails } from '../data/site.js';

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation with MSI Haiti Energy."
        text="Reach out to discuss Marigot Phase 1, partnership opportunities, donor engagement, or technical collaboration."
      />
      <section className="container-page page-pad">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            {contactDetails.map((item) => (
              <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <item.icon className="h-7 w-7 text-leaf-600" aria-hidden="true" />
                <h2 className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">{item.label}</h2>
                <p className="mt-2 text-lg font-semibold text-ink">{item.value}</p>
              </div>
            ))}
          </div>
          <form className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft sm:p-8" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                First name
                <input className="rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-ocean-500 focus:ring-4 focus:ring-ocean-100" type="text" name="firstName" placeholder="First name" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Last name
                <input className="rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-ocean-500 focus:ring-4 focus:ring-ocean-100" type="text" name="lastName" placeholder="Last name" />
              </label>
            </div>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Email
                <input className="rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-ocean-500 focus:ring-4 focus:ring-ocean-100" type="email" name="email" placeholder="you@example.com" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Organization
                <input className="rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-ocean-500 focus:ring-4 focus:ring-ocean-100" type="text" name="organization" placeholder="Organization" />
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-700">
              Interest
              <select className="rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-ocean-500 focus:ring-4 focus:ring-ocean-100" name="interest" defaultValue="">
                <option value="" disabled>Select an option</option>
                <option>Investment or funding</option>
                <option>NGO or foundation partnership</option>
                <option>Technology collaboration</option>
                <option>Volunteer or general support</option>
              </select>
            </label>
            <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-700">
              Message
              <textarea className="min-h-36 rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-ocean-500 focus:ring-4 focus:ring-ocean-100" name="message" placeholder="Tell us how you would like to support MSI Haiti Energy." />
            </label>
            <button type="submit" className="btn-primary mt-6">
              Send Message <Send size={18} aria-hidden="true" />
            </button>
            <p className="mt-4 text-sm text-slate-500">
              This frontend form is ready for integration with email, CRM, or donation platform workflows.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
