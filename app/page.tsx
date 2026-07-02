import Link from 'next/link';
import { site, whatsappLink } from '@/lib/site';
import { services } from '@/lib/services';
import { posts } from '@/lib/posts';

const stats = [
  { value: '5+', label: 'Years of Experience' },
  { value: '60+', label: 'Projects Delivered' },
  { value: '40+', label: 'Happy Clients' },
  { value: '100%', label: 'Commitment to Quality' },
];

const skills = [
  { name: 'JavaScript / TypeScript', level: 95 },
  { name: 'React & Next.js', level: 93 },
  { name: 'Node.js & Express', level: 90 },
  { name: 'Python & Django', level: 85 },
  { name: 'PostgreSQL / MongoDB', level: 88 },
  { name: 'React Native / Flutter', level: 82 },
  { name: 'DevOps (Docker, CI/CD, AWS)', level: 80 },
  { name: 'UI/UX & Tailwind CSS', level: 90 },
];

const steps = [
  {
    n: '01',
    title: 'Discover',
    text: 'We talk about your goals, users and budget so the product solves the right problem.',
  },
  {
    n: '02',
    title: 'Design',
    text: 'Wireframes and a clean UI direction you approve before a single line of code.',
  },
  {
    n: '03',
    title: 'Build',
    text: 'Iterative development with weekly demos — you always see real progress.',
  },
  {
    n: '04',
    title: 'Launch & Support',
    text: 'Deployment, monitoring and ongoing support so your product keeps performing.',
  },
];

export default function HomePage() {
  const latestPosts = posts.slice(0, 3);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden pb-24 pt-36 sm:pt-44">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-amber-700/10 blur-3xl" />
        </div>

        <div className="container-site relative grid items-center gap-14 lg:grid-cols-2">
          <div className="animate-fade-up">
            <p className="heading-kicker">Hello, I&apos;m</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">
              {site.owner.split(' ')[0]}{' '}
              <span className="text-gradient-gold">
                {site.owner.split(' ')[1]}
              </span>
            </h1>
            <p className="mt-4 text-lg font-semibold text-slate-200">
              {site.role} · {site.location}
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-slate-400">
              {site.tagline} With {site.yearsExperience}+ years of experience
              across the full stack, I help startups and businesses turn ideas
              into products people love to use.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={whatsappLink(
                  "Hi John, I'd like to discuss a project with you."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Let&apos;s Work Together
              </a>
              <Link href="/services/" className="btn-ghost">
                View Services
              </Link>
            </div>
          </div>

          <div className="relative mx-auto hidden max-w-md lg:block">
            <div className="animate-float-slow rounded-3xl border border-white/10 bg-ink-800/70 p-8 backdrop-blur">
              <div className="flex items-center gap-4">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-400 font-display text-2xl font-extrabold text-ink-950">
                  JM
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-white">
                    {site.owner}
                  </p>
                  <p className="text-sm text-gold-300">{site.role}</p>
                </div>
              </div>
              <div className="mt-6 space-y-3 font-mono text-sm">
                <p className="text-slate-500">// currently available for work</p>
                <p className="text-slate-300">
                  <span className="text-gold-400">const</span> stack = [
                  <span className="text-emerald-300">&apos;React&apos;</span>,{' '}
                  <span className="text-emerald-300">&apos;Next.js&apos;</span>,{' '}
                  <span className="text-emerald-300">&apos;Node&apos;</span>,{' '}
                  <span className="text-emerald-300">&apos;Python&apos;</span>];
                </p>
                <p className="text-slate-300">
                  <span className="text-gold-400">const</span> base ={' '}
                  <span className="text-emerald-300">&apos;Nairobi, Kenya&apos;</span>;
                </p>
                <p className="text-slate-300">
                  ship(<span className="text-emerald-300">&apos;quality&apos;</span>);{' '}
                  <span className="text-slate-500">// every time</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="container-site relative mt-20">
          <div className="grid grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-ink-800/50 p-8 backdrop-blur md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl font-extrabold text-gold-400">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About preview ────────────────────────────────── */}
      <section className="section-pad bg-ink-900/60">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="heading-kicker">About Me</p>
            <h2 className="heading-lg">
              Turning complex problems into elegant software
            </h2>
            <p className="mt-5 leading-relaxed text-slate-400">
              I&apos;m {site.owner}, a full-stack software developer from
              Kenya. For the past {site.yearsExperience} years I&apos;ve
              designed, built and shipped web platforms, mobile apps and APIs
              for clients ranging from local startups to established
              businesses.
            </p>
            <p className="mt-4 leading-relaxed text-slate-400">
              I care about the details — clean code, fast load times,
              interfaces that make sense — because those details are what make
              users stay. Beyond client work, I teach e-commerce and
              dropshipping, helping others build online income with practical,
              proven strategies.
            </p>
            <Link href="/about/" className="btn-ghost mt-8">
              More About Me
            </Link>
          </div>

          <div>
            <div className="space-y-5">
              {skills.slice(0, 5).map((s) => (
                <div key={s.name}>
                  <div className="mb-1.5 flex justify-between text-sm">
                    <span className="font-medium text-slate-200">{s.name}</span>
                    <span className="text-gold-400">{s.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-ink-700">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-300"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <p className="heading-kicker">What I Do</p>
            <h2 className="heading-lg">Services built around your goals</h2>
            <p className="mt-4 text-slate-400">
              From websites and mobile apps to complete e-commerce systems —
              plus a hands-on dropshipping course to launch your own online
              business.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.slug}
                className={`card flex flex-col p-7 ${
                  s.featured ? 'ring-1 ring-gold-400/50' : ''
                }`}
              >
                <span className="text-3xl">{s.icon}</span>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {s.title}
                </h3>
                {s.price && (
                  <p className="mt-1 text-sm font-semibold text-gold-400">
                    {s.price}{' '}
                    <span className="font-normal text-slate-500">
                      · {s.priceNote}
                    </span>
                  </p>
                )}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                  {s.description}
                </p>
                <Link
                  href="/services/"
                  className="mt-5 text-sm font-semibold text-gold-400 transition hover:text-gold-300"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────── */}
      <section className="section-pad bg-ink-900/60">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <p className="heading-kicker">How I Work</p>
            <h2 className="heading-lg">A simple, transparent process</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((st) => (
              <div key={st.n} className="card p-7">
                <p className="font-display text-3xl font-extrabold text-gold-400/40">
                  {st.n}
                </p>
                <h3 className="mt-3 font-display font-bold text-white">
                  {st.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {st.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog preview ─────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="heading-kicker">From the Blog</p>
              <h2 className="heading-lg">Latest articles</h2>
            </div>
            <Link href="/blog/" className="btn-ghost">
              View All Posts
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {latestPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}/`}
                className="card group flex flex-col p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                  {p.category} · {p.readTime} min read
                </p>
                <h3 className="mt-3 flex-1 font-display text-lg font-bold text-white transition group-hover:text-gold-300">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {p.excerpt}
                </p>
                <p className="mt-4 text-xs text-slate-500">{p.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-site">
          <div className="relative overflow-hidden rounded-3xl border border-gold-400/30 bg-gradient-to-br from-ink-800 to-ink-900 p-10 text-center sm:p-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-400/10 blur-3xl" />
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Let&apos;s talk about it. Message me on WhatsApp and I&apos;ll
              get back to you within the day — usually within minutes.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={whatsappLink("Hi John, I have a project I'd like to discuss.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Chat on WhatsApp
              </a>
              <Link href="/contact/" className="btn-ghost">
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
