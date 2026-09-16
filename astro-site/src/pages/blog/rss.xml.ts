// RSS feed for the blog — mirrors slatedb/website/src/pages/blog/rss.xml.ts.
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );

  return rss({
    title: 'Subject To Blog',
    description: 'Notes, releases, and writing from the Subject To project.',
    site: context.site ?? 'https://subject-to.github.io',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
  });
}
