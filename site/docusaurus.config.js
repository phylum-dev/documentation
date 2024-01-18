// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Phylum Documentation',
  tagline: 'The software supply chain security company',
  favicon: 'img/favicon.ico',

  url: 'https://docs.phylum.io',
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config
  organizationName: 'phylum-dev',
  projectName: 'documentation',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',

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
          // Use an `EditUrlFunction` here instead of a string, to account for git submodules
          // Ref: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#editUrl
          editUrl: ({ docPath }) => {
            const cli_prefix = "cli";
            if (docPath.startsWith(cli_prefix)) {
              const true_doc_path = docPath.substring(cli_prefix.length + 1);
              return `https://github.com/phylum-dev/cli/edit/main/docs/${true_doc_path}`;
            }
            return `https://github.com/phylum-dev/documentation/edit/main/docs/${docPath}`;
          },
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
      announcementBar: {
        content: 'Welcome to the new Phylum documentation!',
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
            href: 'https://api.phylum.io/api/v0/swagger/index.html',
            position: 'left',
            label: 'API',
          },
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
        copyright: `Copyright © 2020-${new Date().getFullYear()} Phylum, Inc.`,
        links: [
          {
            label: 'Phylum Home',
            href: 'https://phylum.io',
          },
          {
            label: 'Discord',
            href: 'https://discord.gg/Fe6pr5eW6p',
          },
          {
            label: 'Twitter',
            href: 'https://twitter.com/Phylum_IO',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/phylum-dev',
          },
          {
            label: 'YouTube',
            href: 'https://www.youtube.com/@phylum_io',
          },
          {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/company/phylum-io',
          },
          {
            label: 'DEV',
            href: 'https://dev.to/phylum',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        // The default languages for code block highlighting are found here:
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
    // Ref: https://docusaurus.io/docs/migration/v3#turn-off-mdx-v1-compat
    mdx1Compat: {
      comments: true,
      admonitions: false,
      headingIds: false,
    },
  },

  // This plugin is needed due to interactions between docusaurus and webpack not
  // handling symlinks correctly. Without it, the site won't build due to failures
  // in following the symlinks in `docs` to their git submodules. References:
  // https://github.com/facebook/docusaurus/issues/3272#issuecomment-876374383
  // https://github.com/facebook/docusaurus/issues/6257
  // https://docusaurus.io/docs/api/plugin-methods
  plugins: [
    async function (context, options) {
      return {
        name: 'webpack-configuration-plugin',
        configureWebpack(config, isServer, utils, content) {
          return {
            resolve: {
              symlinks: false,
            }
          };
        }
      };
    },
  ],
};

export default config;
