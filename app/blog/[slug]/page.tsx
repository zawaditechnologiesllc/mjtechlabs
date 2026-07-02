import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts, getPost } from '@/lib/posts';
import { site, whatsappLink } from '@/lib/site';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <article className="relative overflow-hidden pb-20 pt-36 sm:pt-44">
        <div className="pointer-events-none absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-gold-400/10 blur-3xl" />
        <div className="container-site relative">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog/"
              className="text-sm font-semibold text-gold-400 transition hover:text-gold-300"
            >
              ← All articles
            </Link>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-gold-400">
              {post.category} · {post.readTime} min read · {post.date}
            </p>
            <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              {post.excerpt}
            </p>

            <div className="mt-8 flex items-center gap-3 border-y border-white/10 py-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-400 font-display font-bold text-ink-950">
                JM
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{site.owner}</p>
                <p className="text-xs text-slate-500">
                  {site.role} · {site.location}
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-6">
              {post.content.map((block, i) =>
                block.startsWith('## ') ? (
                  <h2
                    key={i}
                    className="pt-2 font-display text-2xl font-bold text-white"
                  >
                    {block.slice(3)}
                  </h2>
                ) : (
                  <p key={i} className="leading-relaxed text-slate-300">
                    {block}
                  </p>
                )
              )}
            </div>

            <div className="mt-14 rounded-2xl border border-gold-400/30 bg-ink-800/60 p-8 text-center">
              <h3 className="font-display text-xl font-bold text-white">
                Need help with a project like this?
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
                I build websites, apps and online stores — and teach a complete
                dropshipping course. Let&apos;s talk.
              </p>
              <a
                href={whatsappLink(`Hi John, I just read "${post.title}" on your blog and I'd like to talk.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="pb-24">
          <div className="container-site">
            <h2 className="font-display text-2xl font-bold text-white">
              Related articles
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((p) => (
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
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
