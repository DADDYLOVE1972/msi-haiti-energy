import { Send } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import { contactDetails } from '../data/site.js';

const inputClass =
  'rounded-md border border-slate-300 px-4 py-3 outline-none transition focus:border-ocean-500 focus:ring-4 focus:ring-ocean-100';

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation with MSI Haiti Energy."
        text="Reach out to discuss Marigot Phase 1, project brief requests, donor engagement, NGO partnerships, or technical collaboration."
      />
      <section className="container-page page-pad">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            {contactDetails.map((item) => (
              <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <item.icon className="h-7 w-7 text-leaf-600" aria-hidden="true" />
                <h2 className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">{item.label}</h2>
                {item.href ? (
                  <a className="mt-2 block break-words text-lg font-semibold text-ink transition hover:text-ocean-700" href={item.href}>
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 text-lg font-semibold text-ink">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          <form className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft sm:p-8" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                <span>Full Name</span>
                <input className={inputClass} type="text" name="fullName" placeholder="Full name" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                <span>Organization <span className="font-medium text-slate-400">(optional)</span></span>
                <input className={inputClass} type="text" name="organization" placeholder="Organization" />
              </label>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                <span>Email Address</span>
                <input className={inputClass} type="email" name="email" placeholder="you@example.com" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                <span>Phone Number <span className="font-medium text-slate-400">(optional)</span></span>
                <input className={inputClass} type="tel" name="phone" placeholder="+1 (000) 000-0000" />
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-700">
              <span>Type of Inquiry</span>
              <select className={inputClass} name="inquiryType" defaultValue="">
                <option value="" disabled>Select an inquiry type</option>
                <option>Investor</option>
                <option>NGO Partnership</option>
                <option>Donor</option>
                <option>Technology Partner</option>
                <option>Government</option>
                <option>General Inquiry</option>
              </select>
            </label>

            <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-700">
              <span>Message</span>
              <textarea
                className={`${inputClass} min-h-40`}
                name="message"
                placeholder="Tell us about your interest in MSI Haiti Energy, Marigot Phase 1, or a potential partnership."
              />
            </label>

            <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
              Submit Inquiry <Send size={18} aria-hidden="true" />
            </button>
            <p className="mt-4 text-sm text-slate-500">
              This frontend form is ready for integration with email, CRM, donor, or partner management workflows.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
