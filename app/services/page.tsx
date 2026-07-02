import type { Metadata } from 'next';
import { services } from '@/lib/services';
import { whatsappLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Web development, mobile apps, backend & APIs, e-commerce solutions, UI/UX design, and a complete dropshipping course ($500).',
};

export default function ServicesPage() {
  const course = services.find((s) => s.featured);
  const regular = services.filter((s) => !s.featured);

  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-36 sm:pt-44">
        <div className="pointer-events-none absolute -top-24 left-1/3 h-80 w-80 rounded-full bg-gold-400/10 blur-3xl" />
        <div className="container-site relative text-center">
          <p className="heading-kicker">Services</p>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-extrabold text-white sm:text-5xl">
            Everything you need to{' '}
            <span className="text-gradient-gold">launch and grow</span> online
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Clear scope, honest pricing, and quality you can see. Every project
            starts with a free consultation — reach out and let&apos;s discuss
            what you need.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid gap-6 md:grid-cols-2">
          {regular.map((s) => (
            <div key={s.slug} className="card p-8">
              <div className="flex items-start justify-between">
                <span className="text-3xl">{s.icon}</span>
              </div>
              <h2 className="mt-4 font-display text-xl font-bold text-white">
                {s.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {s.description}
              </p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm text-slate-300">
                    <span className="mt-0.5 text-gold-400">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(`Hi John, I'm interested in your ${s.title} service. Can we discuss?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex text-sm font-semibold text-gold-400 transition hover:text-gold-300"
              >
                Request a quote →
              </a>
            </div>
          ))}
        </div>
      </section>

      {course && (
        <section className="pb-24">
          <div className="container-site">
            <div className="relative overflow-hidden rounded-3xl border border-gold-400/40 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 p-10 sm:p-14">
              <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold-400/15 blur-3xl" />
              <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr,1fr]">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/50 bg-gold-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-300">
                    {course.icon} Signature Program
                  </span>
                  <h2 className="mt-5 font-display text-3xl font-extrabold text-white sm:text-4xl">
                    {course.title}
                  </h2>
                  <p className="mt-4 max-w-xl leading-relaxed text-slate-400">
                    {course.description}
                  </p>
                  <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                    {course.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-2.5 text-sm text-slate-300"
                      >
                        <span className="mt-0.5 text-gold-400">✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-ink-950/70 p-8 text-center backdrop-blur">
                  <p className="text-sm uppercase tracking-wider text-slate-400">
                    Complete Course
                  </p>
                  <p className="mt-3 font-display text-5xl font-extrabold text-gold-400">
                    {course.price}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {course.priceNote}
                  </p>
                  <a
                    href={whatsappLink("Hi John, I'd like to enroll in your Dropshipping Complete Course ($500). How do I get started?")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-7 w-full"
                  >
                    Enroll via WhatsApp
                  </a>
                  <p className="mt-4 text-xs text-slate-500">
                    Direct mentorship · Practical projects · Lifetime access
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
