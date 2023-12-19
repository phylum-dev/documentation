// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  // TODO: Change these next two values
  title: 'Phylum Documentation',
  tagline: 'The software supply chain security company',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs-stg.phylum.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'phylum-dev', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: '../docs',
          // Make this a "Docs-only" site
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/phylum-dev/documentation/tree/main/site/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      // The announcement bar can be used to highlight big changes
      announcementBar: {
        content: 'Welcome to the new Phylum CLI documentation!',
        textColor: '#fff',
        backgroundColor: '#3480eb',
      },
      navbar: {
        title: 'Phylum Docs',
        logo: {
          alt: 'Phylum Logo',
          src: 'img/phylum_logo.svg',
        },
        hideOnScroll: false,
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'kbSidebar',
            position: 'left',
            label: 'KB',
          },
          // TODO: Create a `CLI` sidebar?
          // TODO: Create an API sidebar?
          {
            href: 'https://github.com/phylum-dev',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Phylum Logo',
          src: 'img/phylum_logo.svg',
          height: 100,
          width: 100,
          href: 'https://phylum.io',
        },
        copyright: `Copyright © 2020-${new Date().getFullYear()} Phylum, Inc.`,
        links: [
          {
            title: 'Docs',
            // TODO: Ensure these `Docs` items are good
            items: [
              {
                label: 'Quickstart',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/c9QnknWxm3',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Phylum_IO',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@phylum_io',
              },
              {
                label: 'DEV',
                href: 'https://dev.to/phylum',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/phylum-io',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/phylum-dev',
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        // The default languages are found here:
        // https://github.com/FormidableLabs/prism-react-renderer/blob/master/packages/generate-prism-languages/index.ts#L9
        // Choose additional languages from here: https://prismjs.com/#supported-languages
        // When there are aliases, use the name of the first one in the list containing the entry you actually use.
        additionalLanguages: [
          'bash',
          'javascript',
          'json',
          'python',
          'rego',
          'shell-session',
          'toml',
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        }
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),

  markdown: {
    format: 'detect',
    mermaid: true,
    // TODO: Progressively turn off MDXv1 compatibility
    //       https://docusaurus.io/docs/migration/v3#turn-off-mdx-v1-compat
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
  },
};

export default config;
