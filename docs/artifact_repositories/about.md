# Artifact Repositories

Phylum for Artifact Repositories allows users to configure their artifact
repositories and/or package managers to block untrusted packages.

## How It Works
Instead of pointing your system to the primary ecosystem registry, configure
it to point to Phylum. Set your Phylum policy and Phylum will block any
package or version that violates the policy.

## Supported Ecosystems

The following table shows the supported registries and the URLs under which they
are hosted:

| Ecosystem | URL                            |
| --------- | ------------------------------ |
| PyPI      | https://pypi.phylum.io/simple/ |
| NPM       | https://npm.phylum.io/         |
| Cargo     | https://cargo.phylum.io/       |

## Configuration

Instructions for configuring Phylum for Artifact Repositories:

### Artifact Repositories

| Artifact Repository | Information Link |
| ------------------- | ---------------- |
| Artifactory | [Documentation][Artifactory] |

### Package Managers

| Package Manager | Information Link |
| --------------- | ---------------- |
| PyPI | [Documentation][PyPI] |
| NPM | [Documentation][NPM] |
| Cargo | [Documentation][Cargo] |


[Artifactory]: ./artifactory.md
[PyPI]: ./pypi.md
[NPM]: ./npm.md
[Cargo]: ./cargo.md
