'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { posts, categories } from '@/lib/posts';

const PER_PAGE = 9;

export default function BlogIndex() {
  const [category, setCategory] = useState<string>('All');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const inCategory = category === 'All' || p.category === category;
      const inQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q);
      return inCategory && inQuery;
    });
  }, [category, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const visible = filtered.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE
  );

  return (
    <div>
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {['All', ...categories].map((c) => (
            <button
              key={c}
              onClick={() => {
                setCategory(c);
                setPage(1);
              }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                category === c
                  ? 'bg-gold-400 text-ink-950'
                  : 'border border-white/10 text-slate-300 hover:border-gold-400/50 hover:text-gold-300'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          placeholder="Search articles…"
          className="w-full rounded-full border border-white/10 bg-ink-800 px-5 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-gold-400 md:w-64"
        />
      </div>

      <p className="mt-6 text-sm text-slate-500">
        {filtered.length} article{filtered.length === 1 ? '' : 's'}
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}/`}
            className="card group flex flex-col p-7"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-gold-400">
              {p.category} · {p.readTime} min read
            </p>
            <h2 className="mt-3 flex-1 font-display text-lg font-bold text-white transition group-hover:text-gold-300">
              {p.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {p.excerpt}
            </p>
            <p className="mt-4 text-xs text-slate-500">{p.date}</p>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`h-10 w-10 rounded-full text-sm font-semibold transition ${
                n === currentPage
                  ? 'bg-gold-400 text-ink-950'
                  : 'border border-white/10 text-slate-300 hover:border-gold-400/50'
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
