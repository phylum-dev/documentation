---
title: Changelog
category: 6255e67693d5200013b1fa40
hidden: false
---

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
