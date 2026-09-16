// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://subject-to.github.io',
  integrations: [
    starlight({
      title: 'Subject To',
      description: 'A toolkit for solving sequential decision problems.',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/GStechschulte' },
      ],
      // Single stylesheet that retints Starlight's tokens to the rag-paper +
      // EB Garamond identity. This is what unifies homepage, docs, and blog —
      // the same mechanism slatedb uses, only the values differ.
      customCss: ['./src/styles/custom.css'],
      // The homepage is a standalone src/pages/index.astro (slatedb pattern).
      // These overrides make the DOCS layout match slatedb: a top nav (Header),
      // a footer (PageFrame + Footer), a lede subtitle under the title
      // (PageTitle), and forced light mode (ThemeProvider).
      components: {
        Header: './src/components/Header.astro',
        PageFrame: './src/components/PageFrame.astro',
        PageTitle: './src/components/PageTitle.astro',
        ThemeProvider: './src/components/ThemeProvider.astro',
      },
      // Load the same faces as the personal blog.
      head: [
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' } },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=JetBrains+Mono:wght@400;500&display=swap',
          },
        },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/docs/getting-started/introduction/' },
            { label: 'Quick Start', link: '/docs/getting-started/quick-start/' },
          ],
        },
        {
          label: 'Tutorials',
          collapsed: true,
          autogenerate: { directory: 'docs/tutorials' },
        },
      ],
    }),
  ],
});
