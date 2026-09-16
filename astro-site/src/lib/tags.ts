// Tag helpers shared by the blog index, post pages, and tag archives.
import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

// Normalize a tag to a URL-safe slug. Tags are matched by slug, so "Case Study",
// "case-study", and "case study" all resolve to the same archive.
export function slugifyTag(tag: string): string {
  return tag
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Every distinct tag across all posts, with its slug and post count, sorted by
// count (desc) then name. Drives the tag archive routes and any tag listing.
export async function getAllTags(): Promise<
  { label: string; slug: string; count: number }[]
> {
  const posts = await getCollection('blog');
  const bySlug = new Map<string, { label: string; slug: string; count: number }>();

  for (const post of posts) {
    for (const raw of post.data.tags) {
      const slug = slugifyTag(raw);
      if (!slug) continue;
      const existing = bySlug.get(slug);
      if (existing) existing.count += 1;
      else bySlug.set(slug, { label: raw, slug, count: 1 });
    }
  }

  return [...bySlug.values()].sort(
    (a, b) => b.count - a.count || a.label.localeCompare(b.label),
  );
}

// Posts carrying a given tag slug, newest first.
export function postsWithTag(posts: Post[], slug: string): Post[] {
  return posts
    .filter((p) => p.data.tags.some((t) => slugifyTag(t) === slug))
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}
