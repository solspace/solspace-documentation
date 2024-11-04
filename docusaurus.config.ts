import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import tailwind from './plugins/tailwind-config.cjs';
import docusaurusGithubRemoteContent from './plugins/docusaurus-github-remote-content';

import type { Options as IdealImageOptions } from '@docusaurus/plugin-ideal-image';

import PrismLight from './src/utils/prismLight';
import PrismDark from './src/utils/prismDark';

const config: Config = {
  title: 'Solspace',
  tagline: 'Clients need Solspace when websites are complex.',
  favicon: 'img/favicon.ico',

  url: 'https://docs.solspace.com/',
  baseUrl: '/',

  staticDirectories: ['static'],

  organizationName: 'solspace',
  projectName: 'solspace-documentation',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
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
          path: './craft-freeform',
          sidebarPath: './sidebars.ts',
          admonitions: {
            keywords: ['youtube', 'guide'],
            extendDefaults: true,
          },
          editUrl: 'https://github.com/solspace/craft-freeform-docs/edit/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      docusaurusGithubRemoteContent,
      {
        contents: [
          {
            version: 5,
            saveDir: 'craft-freeform/setup',
            file: 'changelog.mdx',
            url: 'https://raw.githubusercontent.com/solspace/craft-freeform/v5/CHANGELOG.md',
            meta: {
              title: 'Changelog',
              sidebar_label: 'Changelog',
              sidebar_position: 5,
            },
          },
          {
            version: 4,
            saveDir: 'versioned_docs/version-v4/setup',
            file: 'changelog.mdx',
            url: 'https://raw.githubusercontent.com/solspace/craft-freeform/v4/CHANGELOG.md',
            meta: {
              title: 'Changelog',
              sidebar_label: 'Changelog',
              sidebar_position: 5,
            },
          },
          {
            version: 3,
            saveDir: 'versioned_docs/version-v3/setup',
            file: 'changelog.mdx',
            url: 'https://raw.githubusercontent.com/solspace/craft-freeform/v3/CHANGELOG.md',
            meta: {
              title: 'Changelog',
              sidebar_label: 'Changelog',
              sidebar_position: 5,
            },
          },
          {
            version: 2,
            saveDir: 'versioned_docs/version-v2/setup',
            file: 'changelog.mdx',
            url: 'https://raw.githubusercontent.com/solspace/craft-freeform/v2/CHANGELOG.md',
            meta: {
              title: 'Changelog',
              sidebar_label: 'Changelog',
              sidebar_position: 5,
            },
          },
          {
            version: 5,
            saveDir: 'craft-calendar/setup',
            file: 'changelog.mdx',
            url: 'https://raw.githubusercontent.com/solspace/craft-calendar/v5/CHANGELOG.md',
            meta: {
              title: 'Changelog',
              sidebar_label: 'Changelog',
              sidebar_position: 2,
            },
          },
          {
            version: 4,
            saveDir: 'craft-calendar_versioned_docs/version-v4/setup',
            file: 'changelog.mdx',
            url: 'https://raw.githubusercontent.com/solspace/craft-calendar/v4/CHANGELOG.md',
            meta: {
              title: 'Changelog',
              sidebar_label: 'Changelog',
              sidebar_position: 2,
            },
          },
          {
            version: 3,
            saveDir: 'craft-calendar_versioned_docs/version-v3/setup',
            file: 'changelog.mdx',
            url: 'https://raw.githubusercontent.com/solspace/craft-calendar/v3/CHANGELOG.md',
            meta: {
              title: 'Changelog',
              sidebar_label: 'Changelog',
              sidebar_position: 3,
            },
          },
        ],
      },
    ],
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
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'craft-calendar',
        path: 'craft-calendar',
        routeBasePath: '/craft/calendar',
        sidebarPath: './sidebars.ts',
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
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ee-freeform',
        path: 'ee-freeform',
        routeBasePath: '/expressionengine/freeform',
        sidebarPath: './sidebars.ts',
        lastVersion: 'current',
        versions: {
          current: {
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
          classic: {
            label: 'Classic',
            path: 'classic',
            badge: false,
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ee-calendar',
        path: 'ee-calendar',
        routeBasePath: '/expressionengine/calendar',
        sidebarPath: './sidebars.ts',
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
      },
    ],
  ],

  themeConfig: {
    algolia: {
      appId: '0I9DTHM8U8',
      apiKey: '2e0c6dd1d4c6164301e38e88a9a2e47f',
      indexName: 'solspace',
      replaceSearchResultPathname: {
        from: '/docs/',
        to: '/',
      },
      searchParameters: {},
      searchPagePath: 'search',
      insights: false,
    },

    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Solspace',
      logo: {
        alt: 'Solspace',
        src: 'img/solspace.png',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'left',
        },
        {
          type: 'docsVersionDropdown',
          docsPluginId: 'craft-calendar',
          position: 'left',
        },
        {
          type: 'docsVersionDropdown',
          docsPluginId: 'ee-freeform',
          position: 'left',
        },
        {
          type: 'docsVersionDropdown',
          docsPluginId: 'ee-calendar',
          position: 'left',
        },
        {
          type: 'dropdown',
          position: 'right',
          label: 'Products',
          items: [
            {
              label: 'Craft',
              to: `/craft`,
              activeBaseRegex: '/craft',
              class: 'craft',
            },
            {
              label: 'Freeform',
              to: `/craft/freeform`,
            },
            {
              label: 'Calendar',
              to: `/craft/calendar`,
            },
            {
              label: 'Express Forms',
              to: `/craft/express-forms`,
            },
            {
              label: 'ExpressionEngine',
              to: `/expressionengine`,
              class: 'expressionengine',
              activeBaseRegex: '/expressionengine',
            },
            {
              label: 'Freeform',
              to: `/expressionengine/freeform`,
            },
            {
              label: 'Calendar',
              to: `/expressionengine/calendar`,
            },
          ],
        },
        {
          type: 'custom-pluginStore',
          position: 'left',
        },
        { to: '/support', label: 'Support', position: 'right' },
        {
          type: 'search',
          position: 'right',
          className: 'navbar-search-icon',
        },
        {
          type: 'html',
          position: 'right',
          className: 'github-icon',
          value:
            '<a href="https://github.com/solspace/craft-freeform/"><svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="fill-gray-700 dark:fill-white h-6 w-6 mt-2"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg></a>',
        },
        {
          type: 'custom-mobileSideMenu',
        },
      ],
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
