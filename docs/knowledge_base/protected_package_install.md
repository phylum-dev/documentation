---
title: Protected Package Install
category: 6255e67693d5200013b1fa41
hidden: false
---

# Overview

Phylum uses a two-phased approach to protect your system during package installation. The first phase is a package pre-check and the second phase is an installation sandbox.

## Package Pre-Check

When using Phylum to install a package, the application will first query the Phylum platform for any findings related to the package you are attempting to install. If the package findings fail your defined policy threshold, the installation will be aborted.

## Installation Sandbox

If the package pre-check succeeds, the installation will proceed in a monitored sandbox that dynamically looks for unwanted behavior during the package installation process. If any unwanted behavior is observed, Phylum will block the behavior and abort the installation before your system is impacted.

## Prerequisites

* [Create a Phylum account](https://app.phylum.io/)
* Install the [Phylum CLI tool](https://docs.phylum.io/docs/quickstart)
* [Login to your account with the CLI tool](https://docs.phylum.io/docs/phylum_auth_login)
* [Create a Phylum project](https://docs.phylum.io/docs/create_project) in the software project directory
* (Optional) [Set a custom policy](https://docs.phylum.io/docs/policy) for your Phylum project

## Walkthrough

1. Navigate to the directory of the relevant software project
2. If you haven't already, [create a Phylum project](link)
3. Simply prefix your typical package manager installation command with "phylum" to leverage the Phylum protected package installation.

```sh
phylum npm install
```

## FAQ
1. Q: What happens if the package has not been pre-processed by Phylum?
   * A: The installation is aborted and the user is notified. This action prompts the Phylum pipeline to begin analysis on any packages that were not already processed and the user can attempt the installation again after the pipeline has had time to process the requests.
