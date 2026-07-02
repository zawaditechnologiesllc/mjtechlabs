'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { site, whatsappLink } from '@/lib/site';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact/', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || open
          ? 'border-b border-white/10 bg-ink-950/90 backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-site flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="font-display text-lg font-bold text-white">
          MJ<span className="text-gold-400">·</span>Tech
          <span className="text-gold-400">Labs</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium text-slate-300 transition hover:text-gold-300"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={whatsappLink(`Hi ${site.owner.split(' ')[0]}, I found you via mjtechlabs.me and I'd like to talk about a project.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-gold-400 px-5 py-2 text-sm font-semibold text-ink-950 transition hover:bg-gold-300 md:inline-flex"
        >
          Hire Me
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink-950/95 px-5 pb-6 pt-2 backdrop-blur md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3 text-slate-200 transition hover:text-gold-300"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={whatsappLink('Hi John, I would like to discuss a project.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 w-full"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
