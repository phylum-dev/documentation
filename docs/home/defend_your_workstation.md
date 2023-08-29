---
title: Defend Your Workstation
category: 6255e67693d5200013b1fa40
hidden: false
---

[Developers are the new high-value targets](https://blog.phylum.io/developers-are-the-new-high-value-targets/). Phylum can defend developers where they work!

In addition to [integrations offered](https://docs.phylum.io/docs/integrations_overview) to protect applications and CI pipelines, Phylum offers a solution to defend developer workstations.

# Overview

Phylum uses a two-pronged approach to protect your system during package installation: package pre-check and an installation sandbox.

## How It Works

The Phylum CLI offers default ecosystem extensions that wrap package manager tools to protect commands which would install new packages or otherwise execute arbitrary code.

When using Phylum to install a package with an ecosystem extension, the application will first query the Phylum platform for any findings related to the packages that would be installed. If the package findings fail the default policy, the installation is aborted.

An additional layer of protection is provided with an installation sandbox. This ensures restricted resources like filesystem and network operations are enforced while executing arbitrary code. If any unwanted behavior is observed, Phylum will block the behavior and abort the installation before your system is impacted.

## Prerequisites

* [Create a Phylum account](https://app.phylum.io/)
* Install the [Phylum CLI tool](https://docs.phylum.io/docs/quickstart)
  * Allow the default ecosystem extension(s) you plan to use
* [Login to your account with the CLI tool](https://docs.phylum.io/docs/phylum_auth_login)

## Walkthrough

1. Navigate to the directory of the relevant software project
2. Prefix your typical package manager installation command with `phylum` to leverage the Phylum protected package installation

   ```sh
   # Example for `npm`
   phylum npm install my-package  # This will be checked by Phylum!
   ```

3. (Optional) Set up an alias in your shell to make it transparent

   ```sh
   # Example for `npm`
   alias npm="phylum npm"
   npm install my-package  # This will be checked by Phylum!
   ```

### Example: Blocked Install

This is an example of using the Phylum `npm` ecosystem extension to install the `nocivo@2.1.11` package. It contains obfuscated code and was marked as malicious by Phylum, causing an analysis failure and blocked install.

```shellsession
❯ phylum npm install nocivo@2.1.1
[phylum] Updating lockfile…

up to date, audited 2 packages in 501ms

found 0 vulnerabilities
[phylum] Lockfile updated successfully.

[phylum] Analyzing packages…
[phylum] Phylum Supply Chain Risk Analysis - FAILURE

[npm] nocivo@2.1.1
 [malicious_code] nocivo@2.1.1 contains obfuscated Javascript
```

### Example: Allowed Install

This is an example of using the Phylum `npm` ecosystem extension to install the popular `lodash` package. In this case, the resolved version of the package was free of vulnerabilities and passed Phylum analysis. The package was allowed to be installed, but with the protection of the sandbox. No restricted resources were accessed by any build scripts and the install succeeded.

```shellsession
❯ phylum npm install lodash
[phylum] Updating lockfile…

up to date, audited 2 packages in 483ms

found 0 vulnerabilities
[phylum] Lockfile updated successfully.

[phylum] Analyzing packages…
[phylum] Phylum Supply Chain Risk Analysis - SUCCESS

[phylum] Installing without build scripts…

added 1 package, and audited 2 packages in 461ms

found 0 vulnerabilities
[phylum] Packages installed successfully.

[phylum] Running build scripts inside sandbox…

up to date in 122ms
[phylum] Packages built successfully.
```

## Supported Ecosystems

Phylum provides support for a number of common package managers used in the [supported ecosystems](https://docs.phylum.io/docs/analyzing-dependencies). These include `npm`, `yarn`, `pip`, `poetry`, `bundle`. `cargo` and more on the way! To get the current list, check the [official extensions](https://github.com/phylum-dev/cli/tree/main/extensions). The ecosystem extensions there are included by default when installing the Phylum CLI.

Phylum may not currently provide an official ecosystem extension for a package manager that [is otherwise supported](https://docs.phylum.io/docs/analyzing-dependencies). Please do one of the following to get that support:

* Check the [community extensions repository](https://github.com/phylum-dev/community-extensions)
  * Someone else may have already made the extension
  * [Create your own extension](https://docs.phylum.io/docs/extension_quickstart) there
* [Create an issue](https://github.com/phylum-dev/cli/issues/new/choose) requesting the new extension
* [Contact us](https://docs.phylum.io/docs/contact_us) with more nuanced requests

## FAQ

### What happens if the package has not been pre-processed by Phylum?

The installation is aborted and the user is notified. This action prompts the Phylum pipeline to begin analysis on any packages that were not already processed and the user can attempt the installation again after the pipeline has had time to process the requests.

### How does the installation sandbox work?

The installation sandbox uses a library developed by Phylum called Birdcage. Birdcage is written in Rust, [available as a crate](https://crates.io/crates/birdcage), and open sourced for public use. View the [Birdcage project page](https://github.com/phylum-dev/birdcage) for more detail.
