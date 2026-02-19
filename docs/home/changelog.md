# Changelog

## 2025 Weeks 5-6

### New
- Veracode vulnerabilities are read from the SCA database.

### Improved
- Upgraded OPA policy engine

## 2025 Week 5

### New
- Additional advisory sources from OSV (notably OSSF MAL and RUSTSEC).

### Improved
- Incomplete package versions are no longer returned by `/versions`.

### Fixed
- Vulnerability affected version range tests are more accurate.
- Vulnerabilities properly affect old versions of Rubygems packages.
- Vulnerabilities properly affect new versions released after the vulnerability was published.
- Vulnerabilities are properly withdrawn when they no longer affect a package version.
- Vulnerabilities with CVSS4 vectors now have correct base scores instead of 0.0.
- Package search results now have correct published timestamps or default to 1970 if unknown.

### Removed
- Swagger UI hosted at `https://api.phylum.io/api/v0/swagger` in favor of the unified Swagger UI available at `https://swagger.phylum.io/`
- SUCCESS comments are no longer added to PRs.

## 2024 Week 50

### New
- CVSS information in policy input.

### Improved
- Removed confusing "for the given id" language in 404 descriptions.

## 2024 Week 49

### New
- Incomplete (un)suppression endpoints for projects.

### Fixed
- Unsupported PURL components now behave consistently across package check and submission endpoints.

## 2024 Week 47

### New
- `organization` query parameter for filtering search results.
- Project `get_endpoint` now returns the owning organization and group.

### Improved
- `filter.organization` parameter on the list projects endpoint now refers to the user's personal org when set to "-".

### Fixed
- Token docs link now respects UI base URL.
- GitHub installation ownership is not transferred with legacy groups.
- Package versions endpoint no longer returns 500 errors for invalid timestamps.
- Continuous monitoring detects issues even if only some occurrences are blocked.

### Removed
- `/download` and `/download-url` package endpoints.

## 2024 Week 44

### New
- `unsuppress-packages` endpoint to remove all package suppressions.
- `pipeline_status` and `pipeline_error` fields added to `FullPackage` responses.
- Endpoints for managing packages that are complete while processing.
- Package ID included in issue suppression audit logs.

### Improved
- `incomplete_packages` in reports is now a list of structs instead of strings.
- Members can set project policies via `PUT /projects/<id>/policies`.

### Fixed
- `PackageSpecifierWithPurl` schema no longer incorrectly requires `version`.
- `submit_endpoint` no longer returns `AlreadyProcessed` for unprocessed packages.
- Organization groups are now properly considered in searches.
- Old group audit events now appear when filtering by the new owner organization.
- PyPI package release counts are now accurate.
- Project count in project list metadata is now correct.

### Removed
- Search metadata endpoint.

## 2024 Week 41

### Fixed
- Restored deprecated `suppressed` property.
- Empty package status errors are ignored.

### Removed
- Group IDs from policy locators.

## 2023 Weeks 49-52
### New
- UI: Added an email invitation system when attempting to add an unknown user to a group
- Extension: Added a Snyk import [extension](https://github.com/phylum-dev/community-extensions/tree/main/snyk-import)

## 2023 Weeks 43-48
### New
- Notifications: Added email and webhook [notification](../knowledge_base/notifications.md) feature that triggers on [continuous monitoring](../knowledge_base/continuous_monitoring.md) events
- Integration: Added an integration for Snyk
- Integration: Added an integration for [Sumo Logic](../integrations/sumo_logic.md)
- Integration: Added an integration for [CircleCI](https://circleci.com/developer/orbs/orb/phylum-dev/phylum)
- Authentication: Added support for AzureAD authentication provider

### Improved
- UI: Improved color palette
- SBOM: Added vulnerabilities to CycloneDX exports

## 2023 Weeks 37-42
### New
- CLI/CI: Added support for manifest files by leveraging [lockfile generation](../cli/lockfile_generation.md)
- Integration: Added an integration for [Netskope](../integrations/netskope.md)
- Experimental: Added GenerativeAI remediation suggestion capability

## 2023 Weeks 31-36
### New
- API Token: Added an [API token service](../knowledge_base/api-keys.md) making it much easier to interact directly with the API
- Policy: Added support for group-level package suppression
- CLI: Capture and display lockfile paths making it easier to see where a dependency comes from
- SBOM: Added CycloneDX support for both SBOM ingest and export

### Improved
- UI: Improved project detail page view focusing more on package-level triage
- CLI: Added `bundle` and `cargo` extensions for Phylum [pre-check](./defend_your_workstation.md)
- Search: Added support for contexualized CVE searching in the global search bar
- Dashboard: Added contexualized dashboard elements

## 2023 Weeks 25-30
### New
- Search: Added a global search bar which can include contextualized results from your projects
- Policy: Added support for group-level policy preferences
- Integration: Added an integration for [Tines](../integrations/tines.md)

### Improved
- CLI: Support for NuGet's `packages.lock.json` lockfiles
- CLI: Support for `pnpm-lock.yaml` lockfiles

## 2023 Weeks 19-24
### New
- Threat Feed: Added a threat feed capability highlighting software supply chain attacks (contact [sales](mailto:sales@phylum.io) if interested)
- Dashboard: Created Dashboard view showing software supply chain statistics
- CLI: Added support for lockfile generation from manifest files (updated list of supported filetypes [here](../cli/lockfile_generation.md))

### Improved
- CLI: Added `pip` version checking to the `phylum pip` extension
- CLI: Removed `pip-compile` requirement for lockfile generation
- SBOM: SPDX export supports PURL
- SBOM: SPDX ingest supports `tag:value` format

## 2023 Weeks 13-18
### New
- Policy: Open Policy Agent (OPA) has been [implemented](../knowledge_base/policy.md) allowing users to create custom policies
- Event Logs: A UI view was added showing project/group event logs
- SBOM: SPDX export added for generating an SBOM from a Phylum project
- SBOM: `spdx` added as a type allowing an SBOM to be analyzed with the [`phylum analyze -t spdx`](../cli/commands/phylum_analyze.md) command

### Improved
- CLI: Multiple [releases](https://github.com/phylum-dev/cli/releases)

## 2023 Weeks 7-12
### New
- Integrations: A Bitbucket Cloud [integration](../phylum-ci/bitbucket_pipelines.md) was created

### Improved
- CLI: `v4.7.0` was [released](https://github.com/phylum-dev/cli/releases/tag/v4.7.0) including automatic lockfile detection

## 2023 Weeks 1-6
### New
- Groups: The ability to delete Groups was added to the UI/CLI/API
- CLI: An extension supporting the `pip` package manager for installation pre-check and sandboxing was published

### Improved
- CLI: `phylum package` command now automatically submits a package for analysis if results are not already available
- Analysis: Phylum project/analysis job submissions can now contain multiple lockfiles/ecosystems
