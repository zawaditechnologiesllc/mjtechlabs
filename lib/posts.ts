import { posts1 } from './posts-data/posts1';
import { posts2 } from './posts-data/posts2';
import { posts3 } from './posts-data/posts3';

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
  category: string;
  readTime: number;
  content: string[]; // paragraphs; items starting with "## " render as headings
};

export const posts: Post[] = [...posts1, ...posts2, ...posts3].sort((a, b) =>
  b.date.localeCompare(a.date)
);

export const categories = Array.from(
  new Set(posts.map((p) => p.category))
).sort();

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
