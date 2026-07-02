import Link from 'next/link';
import { site, whatsappLink } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-ink-900">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-bold text-white">
            MJ<span className="text-gold-400">·</span>Tech
            <span className="text-gold-400">Labs</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            {site.owner} — {site.role} based in {site.location}. Building
            digital products that work beautifully and scale confidently.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ['Home', '/'],
              ['About', '/about/'],
              ['Services', '/services/'],
              ['Blog', '/blog/'],
              ['Contact', '/contact/'],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-slate-400 transition hover:text-gold-300">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>Web Development</li>
            <li>Mobile Apps</li>
            <li>Backend &amp; APIs</li>
            <li>E-Commerce Solutions</li>
            <li>Dropshipping Course</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">
            Get in Touch
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition hover:text-gold-300"
              >
                WhatsApp: {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-slate-400 transition hover:text-gold-300"
              >
                {site.email}
              </a>
            </li>
            <li className="text-slate-400">{site.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="container-site text-center text-xs text-slate-500">
          © {year} {site.name} · {site.owner}. All rights reserved. ·{' '}
          <span className="text-slate-600">mjtechlabs.me</span>
        </p>
      </div>
    </footer>
  );
}
