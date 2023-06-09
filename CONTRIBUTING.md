# Contributing

This guide is written for both internal contributors (Phylum, Inc. employees) and external/community contributors.
Community contributions are possible by submitting issues.

## Types of Contributions

### Report Bugs

Report bugs (e.g., typos, broken links, etc.) at <https://github.com/phylum-dev/documentation/issues>.

Please use the "bug report" template which should remind you to include:

* A clear and consise description of the bug
* Where to find it
* Expected behavior
* Screenshots, where appropriate
* Additional context
  * Your web browser name and version
  * Any details about your local setup that might be helpful in troubleshooting

**Security issues should be disclosed following the [security policy][security]**.

[security]: https://github.com/phylum-dev/documentation/blob/main/SECURITY.md

### Submit Feedback

The best way to send feedback is to file an issue at <https://github.com/phylum-dev/documentation/issues>.

If you are proposing new content, please use the "new content" template which should remind you to:

* Explain in detail the content desired
* Explain how the content should look and feel
* Suggest page name and metadata for new pages
* Provide mockups/outlines where possible

### Fix Bugs

Internal contributors can look through the GitHub issues for bugs to work on.

### Write New Content

Internal contributors can look through the GitHub issues for desired new content to write.

## Security Disclosures

Found a security issue in this repository? See the [security policy][security] for details on coordinated disclosure.

## Code of Conduct

Everyone participating in the Phylum `documentation` project, and in particular in the issue tracker and pull requests,
is expected to treat other people with respect and more generally to follow the guidelines articulated in the
[Code of Conduct][CoC].

[CoC]: https://github.com/phylum-dev/documentation/blob/main/CODE_OF_CONDUCT.md

## Local Development

Internal contributors (Phylum, Inc. employees) are able to contribute with content submissions and pull requests (PRs).
Here's how to set up the Phylum `documentation` repository for local development.

1. Clone the `phylum-dev/documentation` repo locally

    ```sh
    git clone git@github.com:phylum-dev/documentation.git
    ```

2. Create a branch for local development:

    ```sh
    git checkout -b <name-of-your-branch>
    ```

    Now you can make your changes locally.

3. Commit your changes and push your branch to GitHub:

    ```sh
    git add .
    git commit -m "Description of the changes goes here"
    git push --set-upstream origin <name-of-your-branch>
    ```

4. Submit a pull request (PR) through the GitHub website

## Release Process

The `phylum-dev/documentation` project repository currently makes use of [GitHub flow][gh_flow], which is also known as
[trunk-based development][trunk_dev]. Specifically, for this repository, there is a single long-living branch:

* `main`
  * This is the default branch
  * Feature branches are created from here
  * Production documentation is pushed from here
  * This is a protected branch

Releases happen automatically, every time there is a push to the `main` branch.

[gh_flow]: https://docs.github.com/en/get-started/quickstart/github-flow
[trunk_dev]: https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development

## Tips

This section will be populated as the repository grows and lessons are learned.

## Contact

If there are any outstanding questions about contributing to the Phylum documentation,
they can be asked on the issue tracker: <https://github.com/phylum-dev/documentation/issues>.

As an alternative, you can also email <support@phylum.io>.
