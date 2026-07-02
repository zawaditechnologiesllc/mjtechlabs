import type { Metadata } from 'next';
import BlogIndex from '@/components/BlogIndex';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Articles on web development, freelancing, e-commerce and dropshipping by John Muriuki.',
};

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-36 sm:pt-44">
        <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-gold-400/10 blur-3xl" />
        <div className="container-site relative text-center">
          <p className="heading-kicker">Blog</p>
          <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-extrabold text-white sm:text-5xl">
            Notes from the <span className="text-gradient-gold">lab</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-slate-400">
            Practical writing on software development, freelancing, e-commerce
            and building online income — from real projects, not theory.
          </p>
        </div>
      </section>

      <section className="section-pad pt-10">
        <div className="container-site">
          <BlogIndex />
        </div>
      </section>
    </>
  );
}
