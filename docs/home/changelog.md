# Changelog

## 2023 Weeks 43-48
### New
- Notifications: Added email and webhook [notification](https://docs.phylum.io/docs/notifications) feature that triggers on [continuous monitoring](https://docs.phylum.io/docs/continuous_monitoring) events
- Integration: Added an integration for [Snyk](https://docs.phylum.io/docs/snyk)
- Integration: Added an integration for [Sumo Logic](https://docs.phylum.io/docs/sumo_logic)
- Integration: Added an integration for [CircleCI](https://circleci.com/developer/orbs/orb/phylum-dev/phylum)
- Authentication: Added support for AzureAD authentication provider

### Improved
- UI: Improved color palette
- SBOM: Added vulnerabilities to CycloneDX exports

## 2023 Weeks 37-42
### New
- CLI/CI: Added support for manifest files by leveraging [lockfile generation](https://docs.phylum.io/docs/lockfile_generation)
- Integration: Added an integration for [Netskope](https://docs.phylum.io/docs/netskope)
- Experimental: Added GenerativeAI remediation suggestion capability

## 2023 Weeks 31-36
### New
- API Token: Added an [API token service](https://docs.phylum.io/docs/api-keys) making it much easier to interact directly with the API
- Policy: Added support for group-level package suppression
- CLI: Capture and display lockfile paths making it easier to see where a dependency comes from
- SBOM: Added CycloneDX support for both SBOM ingest and export

### Improved
- UI: Improved project detail page view focusing more on package-level triage
- CLI: Added `bundle` and `cargo` extensions for Phylum [pre-check](https://docs.phylum.io/docs/defend_your_workstation)
- Search: Added support for contexualized CVE searching in the global search bar
- Dashboard: Added contexualized dashboard elements

## 2023 Weeks 25-30
### New
- Search: Added a global search bar which can include contextualized results from your projects
- Policy: Added support for group-level policy preferences
- Integration: Added an integration for [Tines](https://docs.phylum.io/docs/tines)

### Improved
- CLI: Support for NuGet's `packages.lock.json` lockfiles
- CLI: Support for `pnpm-lock.yaml` lockfiles

## 2023 Weeks 19-24
### New
- Threat Feed: Added a threat feed capability highlighting software supply chain attacks (contact [sales](mailto:sales@phylum.io) if interested)
- Dashboard: Created Dashboard view showing software supply chain statistics
- CLI: Added support for lockfile generation from manifest files (updated list of supported filetypes [here](https://docs.phylum.io/docs/lockfile_generation))

### Improved
- CLI: Added `pip` version checking to the `phylum pip` extension
- CLI: Removed `pip-compile` requirement for lockfile generation
- SBOM: SPDX export supports PURL
- SBOM: SPDX ingest supports `tag:value` format

## 2023 Weeks 13-18
### New
- Policy: Open Policy Agent (OPA) has been [implemented](https://docs.phylum.io/docs/policy) allowing users to create custom policies
- Event Logs: A UI view was added showing project/group event logs
- SBOM: SPDX export added for generating an SBOM from a Phylum project
- SBOM: `spdx` added as a type allowing an SBOM to be analyzed with the [`phylum analyze -t spdx`](https://docs.phylum.io/docs/phylum_analyze) command

### Improved
- CLI: Multiple [releases](https://github.com/phylum-dev/cli/releases)

## 2023 Weeks 7-12
### New
- Integrations: A Bitbucket Cloud [integration](https://docs.phylum.io/docs/bitbucket_pipelines) was created

### Improved
- CLI: `v4.7.0` was [released](https://github.com/phylum-dev/cli/releases/tag/v4.7.0) including automatic lockfile detection

## 2023 Weeks 1-6
### New
- Groups: The ability to delete Groups was added to the UI/CLI/API
- CLI: An extension supporting the `pip` package manager for installation pre-check and sandboxing was published

### Improved
- CLI: `phylum package` command now automatically submits a package for analysis if results are not already available
- Analysis: Phylum project/analysis job submissions can now contain multiple lockfiles/ecosystems
