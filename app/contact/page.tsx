import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { site, whatsappLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${site.owner} — WhatsApp ${site.whatsappDisplay} or email ${site.email}.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-36 sm:pt-44">
        <div className="pointer-events-none absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-gold-400/10 blur-3xl" />
        <div className="container-site relative text-center">
          <p className="heading-kicker">Contact</p>
          <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-extrabold text-white sm:text-5xl">
            Let&apos;s start a <span className="text-gradient-gold">conversation</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-slate-400">
            Tell me about your project, ask about the dropshipping course, or
            just say hi. I reply fast — especially on WhatsApp.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr,1.3fr]">
          <div className="space-y-5">
            <a
              href={whatsappLink('Hi John, I found you on mjtechlabs.me.')}
              target="_blank"
              rel="noopener noreferrer"
              className="card block p-6"
            >
              <p className="text-2xl">💬</p>
              <h2 className="mt-3 font-display font-bold text-white">
                WhatsApp
              </h2>
              <p className="mt-1 text-sm text-gold-400">
                {site.whatsappDisplay}
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Fastest way to reach me — usually within minutes.
              </p>
            </a>

            <a href={`mailto:${site.email}`} className="card block p-6">
              <p className="text-2xl">📧</p>
              <h2 className="mt-3 font-display font-bold text-white">Email</h2>
              <p className="mt-1 text-sm text-gold-400">{site.email}</p>
              <p className="mt-2 text-sm text-slate-400">
                For detailed briefs, documents and formal inquiries.
              </p>
            </a>

            <div className="card p-6">
              <p className="text-2xl">📍</p>
              <h2 className="mt-3 font-display font-bold text-white">
                Location
              </h2>
              <p className="mt-1 text-sm text-gold-400">{site.location}</p>
              <p className="mt-2 text-sm text-slate-400">
                Working with clients locally and worldwide, across time zones.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
