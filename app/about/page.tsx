import type { Metadata } from 'next';
import Link from 'next/link';
import { site, whatsappLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description: `About ${site.owner}, a full-stack software developer from Kenya with ${site.yearsExperience}+ years of experience.`,
};

const techStack = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'Python',
  'Django',
  'PostgreSQL',
  'MongoDB',
  'MySQL',
  'React Native',
  'Flutter',
  'Tailwind CSS',
  'Docker',
  'AWS',
  'Git & CI/CD',
  'REST & GraphQL',
];

const timeline = [
  {
    period: '2021',
    title: 'Started my journey',
    text: 'Began building websites for local businesses in Kenya, learning by shipping real projects for real clients.',
  },
  {
    period: '2022',
    title: 'Went full-stack',
    text: 'Expanded into backend development with Node.js and Python — APIs, databases, authentication and payment integrations including M-Pesa.',
  },
  {
    period: '2023',
    title: 'Mobile & e-commerce',
    text: 'Shipped my first cross-platform mobile apps and complete online stores, and started experimenting with dropshipping.',
  },
  {
    period: '2024',
    title: 'Founded MJ Tech Labs',
    text: 'Brought everything under one brand — a studio for web, mobile and e-commerce development serving clients in Kenya and beyond.',
  },
  {
    period: 'Today',
    title: 'Building & teaching',
    text: 'Delivering client projects while teaching a complete dropshipping course, helping others build sustainable online income.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
        <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-gold-400/10 blur-3xl" />
        <div className="container-site relative">
          <p className="heading-kicker">About Me</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold text-white sm:text-5xl">
            I&apos;m {site.owner} —{' '}
            <span className="text-gradient-gold">
              developer, builder, teacher.
            </span>
          </h1>
          <div className="mt-8 max-w-3xl space-y-4 leading-relaxed text-slate-400">
            <p>
              I&apos;m a full-stack software developer based in{' '}
              {site.location}, with {site.yearsExperience}+ years of hands-on
              experience building products across the entire stack — from
              pixel-perfect frontends to secure, scalable backends.
            </p>
            <p>
              My work spans business websites, custom web applications, mobile
              apps, and e-commerce platforms with payment integrations like
              M-Pesa, Stripe and PayPal. I&apos;ve worked with startups,
              agencies and business owners who needed software that simply
              works — delivered on time, built to last.
            </p>
            <p>
              Outside client work, I run a complete dropshipping course where I
              teach everything I&apos;ve learned about building profitable
              online stores: product research, store setup, advertising and
              scaling. Teaching keeps me sharp, and watching students launch
              their first stores is one of the best parts of what I do.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink-900/60">
        <div className="container-site">
          <p className="heading-kicker">Toolbox</p>
          <h2 className="heading-lg">Technologies I work with</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {techStack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-ink-800 px-4 py-2 text-sm text-slate-300 transition hover:border-gold-400/50 hover:text-gold-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <p className="heading-kicker">Journey</p>
          <h2 className="heading-lg">The road so far</h2>
          <div className="mt-12 space-y-0">
            {timeline.map((t, i) => (
              <div key={t.period} className="relative flex gap-6 pb-10">
                <div className="flex flex-col items-center">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-400/50 bg-ink-800 text-xs font-bold text-gold-400">
                    {i + 1}
                  </span>
                  {i < timeline.length - 1 && (
                    <span className="mt-2 w-px flex-1 bg-white/10" />
                  )}
                </div>
                <div className="pb-2">
                  <p className="text-sm font-semibold text-gold-400">
                    {t.period}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold text-white">
                    {t.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
                    {t.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-site">
          <div className="rounded-3xl border border-gold-400/30 bg-ink-800/60 p-10 text-center sm:p-14">
            <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
              Let&apos;s build something together
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-slate-400">
              Whether it&apos;s a website, an app, or your first online store —
              I&apos;d love to hear about it.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <a
                href={whatsappLink("Hi John, I read your about page — let's talk!")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Message Me on WhatsApp
              </a>
              <Link href="/services/" className="btn-ghost">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
