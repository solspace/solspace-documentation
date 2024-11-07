import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import tailwind from './plugins/tailwind-config.cjs';

import type { Options as IdealImageOptions } from '@docusaurus/plugin-ideal-image';

import PrismLight from './src/utils/prismLight';
import PrismDark from './src/utils/prismDark';

const config: Config = {
  title: 'Solspace',
  tagline: 'Clients need Solspace when websites are complex.',
  favicon: 'img/favicon.ico',

  url: 'https://codepacks.com/',
  baseUrl: '/',

  organizationName: 'solspace',
  projectName: 'solspace-documentation',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          lastVersion: 'current',
          versions: {
            current: {
              label: '5.x',
              path: 'v5',
              badge: false,
            },
            v4: {
              label: '4.x',
              path: 'v4',
              badge: false,
            },
            v3: {
              label: '3.x',
              path: 'v3',
              badge: false,
            },
            v2: {
              label: '2.x',
              path: 'v2',
              badge: false,
            },
            v1: {
              label: '1.x',
              path: 'v1',
              badge: false,
            },
          },
          routeBasePath: '/craft/freeform',
          sidebarPath: './sidebars.ts',
          admonitions: {
            keywords: ['youtube', 'guide'],
            extendDefaults: true,
          },
          editUrl:
            'https://github.com/solspace/solspace-documentation/edit/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    tailwind,
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 90,
        max: 2040,
        min: 640,
        steps: 2,
        disableInDev: false,
      } satisfies IdealImageOptions,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },

    prism: {
      theme: PrismLight,
      darkTheme: PrismDark,
      additionalLanguages: [
        'markup-templating',
        'diff',
        'php',
        'yaml',
        'nginx',
        'json',
        'nix',
        'twig',
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
