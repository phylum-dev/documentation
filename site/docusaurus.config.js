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
  onBrokenAnchors: 'throw',
  onDuplicateRoutes: 'throw',

  future: {
    // Enable all Docusaurus Faster features
    // Ref: https://docusaurus.io/blog/releases/3.6#adoption-strategy
    experimental_faster: true,
    // Enable all Docusaurus v4 Future Flags
    // Ref: https://docusaurus.io/blog/releases/3.8#future-flags
    v4: true
  },

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
            const phylum_ci_prefix = "phylum-ci";
            if (docPath.startsWith(phylum_ci_prefix)) {
              const true_doc_path = docPath.substring(phylum_ci_prefix.length + 1);
              return `https://github.com/phylum-dev/phylum-ci/edit/main/docs/integrations/${true_doc_path}`;
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
      /* Add a temporary site announcement bar */
      announcementBar: {
        content: 'Phylum is now part of Veracode! Please bear with us during the transition.',
        textColor: '#fff',
        backgroundColor: '#3480eb',
      },
      navbar: {
        title: 'Phylum Docs',
        logo: {
          alt: 'Veracode Logo',
          src: 'img/veracode_logo.svg',
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
            href: 'https://swagger.phylum.io/',
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
        copyright: `Copyright © 2020-${new Date().getFullYear()} Veracode, Inc.`,
        links: [
          {
            label: 'Phylum App',
            href: 'https://app.phylum.io',
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
          'groovy',
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
    hooks: {
      onBrokenMarkdownLinks: 'throw',
      onBrokenMarkdownImages: 'throw',
    },
  },

  plugins: [
    // This plugin is needed due to interactions between docusaurus and webpack/rspack
    // not handling symlinks correctly. Without it, the site won't build due to failures
    // in following the symlinks in `docs` to their git submodules. The "Docusaurus Faster"
    // infrastructure (enabled in v3 with `experimental_faster` feature flag) uses rspack
    // instead of webpack, but the lifecycle API plugin retains the `configureWebpack`
    // name for now. References:
    // https://github.com/facebook/docusaurus/issues/3272#issuecomment-876374383
    // https://github.com/facebook/docusaurus/issues/6257
    // https://docusaurus.io/docs/api/plugin-methods
    // https://docusaurus.io/docs/api/plugin-methods/lifecycle-apis#configureWebpack
    async function (context, options) {
      return {
        name: 'custom-pack-configuration-plugin',
        configureWebpack(config, isServer, utils, content) {
          return {
            resolve: {
              symlinks: false,
            }
          };
        }
      };
    },

    // This plugin ensures existing links don't break by adding client side redirect entries
    // Ref: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects
    [
      '@docusaurus/plugin-client-redirects',
      {
        // Add unique redirect entries here
        redirects: [
          {
            from: '/docs/welcome',
            to: '/',
          },
          {
            from: '/docs/analyzing-dependencies',
            to: '/cli/analyzing_dependencies',
          },
          {
            from: '/docs/executes_code_at_remote_url_rule',
            to: '/analytics/executes_code_at_remote_url',
          },
          {
            from: '/integrations/azure_pipelines',
            to: '/phylum-ci/azure_pipelines',
          },
          {
            from: '/integrations/bitbucket_pipelines',
            to: '/phylum-ci/bitbucket_pipelines',
          },
          {
            from: '/integrations/git_precommit',
            to: '/phylum-ci/git_precommit',
          },
          {
            from: '/integrations/github_actions',
            to: '/phylum-ci/github_actions',
          },
          {
            from: '/integrations/gitlab_ci',
            to: '/phylum-ci/gitlab_ci',
          },
          {
            from: '/docs/cargo_build_file_rule',
            to: '/analytics/cargo_build_file',
          },
          {
            from: '/docs/nuget_install_scripts_rule',
            to: '/analytics/nuget_install_scripts',
          },
          {
            from: '/docs/trivial_package',
            to: '/analytics/minimal_code',
          },
        ],

        // This function seeks to account for the bulk of the changes made during the
        // switch from Readme.com to Docusaurus SSG output hosted on GitHub Pages.
        // It redirects from the old flat "/docs/X" namespace to the new path-based namespaces.
        // It is also used to account for bulk changes since then.
        createRedirects(existingPath) {
          // Account for the bulk change from "artifact_repositories" back to "package_firewall"
          if (existingPath.includes('/package_firewall/')) {
            return existingPath.replace('/package_firewall/', '/artifact_repositories/');
          }

          // Ensure paths with the same starting elements are listed with the longest matching paths first
          const newPathElements = [
            '/analytics/',
            '/cli/commands/',
            '/cli/extensions/',
            '/cli/',
            '/home/',
            '/integrations/',
            '/knowledge_base/',
            '/support/',
          ];
          for (const newPathElement of newPathElements) {
            if (existingPath.includes(newPathElement)) {
              return existingPath.replace(newPathElement, '/docs/');
            }
          }

          // Returning a falsy value means no redirect(s) created
          return undefined;
        },
      },
    ],
  ],
};

export default config;
