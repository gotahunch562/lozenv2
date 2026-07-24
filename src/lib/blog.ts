import type { CollectionEntry } from 'astro:content';

export function formatPostDate(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export function postHref(slug: string): string {
  return `/blog/${slug}`;
}

export function sortPostsByDate(posts: CollectionEntry<'blog'>[]): CollectionEntry<'blog'>[] {
  return [...posts].sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export function getRelatedPosts(
  allPosts: CollectionEntry<'blog'>[],
  currentSlug: string,
  relatedSlugs: string[]
): CollectionEntry<'blog'>[] {
  const bySlug = new Map(allPosts.map((post) => [post.id, post]));
  const related = relatedSlugs
    .map((slug) => bySlug.get(slug))
    .filter((post): post is CollectionEntry<'blog'> => Boolean(post) && post.id !== currentSlug);

  if (related.length) return related;

  return allPosts.filter((post) => post.id !== currentSlug).slice(0, 2);
}
