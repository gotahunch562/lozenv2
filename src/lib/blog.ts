import type { CollectionEntry } from 'astro:content';

const RELATED_POST_LIMIT = 2;

export function formatPostDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function postHref(slug: string): string {
  return `/blog/${slug}`;
}

export function sortPostsByDate(
  posts: CollectionEntry<'blog'>[]
): CollectionEntry<'blog'>[] {
  return [...posts].sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );
}

export function getRelatedPosts(
  allPosts: CollectionEntry<'blog'>[],
  currentSlug: string,
  relatedSlugs: string[]
): CollectionEntry<'blog'>[] {
  const currentPost = allPosts.find((post) => post.id === currentSlug);

  if (!currentPost) {
    return [];
  }

  const availablePosts = sortPostsByDate(
    allPosts.filter(
      (post) => !post.data.draft && post.id !== currentSlug
    )
  );

  const postsBySlug = new Map(
    availablePosts.map((post) => [post.id, post])
  );

  const selectedPosts: CollectionEntry<'blog'>[] = [];
  const selectedSlugs = new Set<string>();

  const addPost = (post: CollectionEntry<'blog'> | undefined) => {
    if (
      post &&
      !selectedSlugs.has(post.id) &&
      selectedPosts.length < RELATED_POST_LIMIT
    ) {
      selectedPosts.push(post);
      selectedSlugs.add(post.id);
    }
  };

  // First, honor any manually selected related articles.
  for (const slug of relatedSlugs) {
    addPost(postsBySlug.get(slug));
  }

  // Next, fill open slots with the newest articles in the same category.
  const currentCategory = currentPost.data.category?.trim().toLowerCase();

  if (currentCategory) {
    for (const post of availablePosts) {
      const postCategory = post.data.category?.trim().toLowerCase();

      if (postCategory === currentCategory) {
        addPost(post);
      }
    }
  }

  // Finally, fill any remaining slot with the newest article overall.
  for (const post of availablePosts) {
    addPost(post);
  }

  return selectedPosts;
}
