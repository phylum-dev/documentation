# Artifact Repositories

Phylum for artifact repositories allows users to configure their artifact
repositories and/or package managers to block untrusted packages.

## How It Works

Instead of pointing your system to the primary ecosystem registry, configure
it to point to Phylum. [Set your Phylum policy](../knowledge_base/policy.md) and
Phylum will block any package or version that violates the policy.

## Supported Ecosystems

The following table shows the supported ecosystem registries and the custom
Phylum registry URLs under which they are hosted:

| Ecosystem | Phylum Registry URL |
| --------- | ------------------- |
| PyPI | <https://pypi.phylum.io/simple/> |
| NPM | <https://npm.phylum.io/> |
| Cargo | <https://cargo.phylum.io/> |

## Configuration

Instructions for configuring Phylum for artifact repositories and package
registries:

### Artifact Repositories

| Artifact Repository | Information Link |
| ------------------- | ---------------- |
| Artifactory | [Documentation][Artifactory] |

### Package Registries

| Ecosystem | Information Link |
| --------- | ---------------- |
| PyPI | [Documentation][PyPI] |
| NPM | [Documentation][NPM] |
| Cargo | [Documentation][Cargo] |

### Notification API

Phylum supports sending out notifications whenever a package fails analysis. To
receive those notifications, you can [setup webhooks].

[setup webhooks]: ./api.md#webhooks
[Artifactory]: ./artifactory.md
[PyPI]: ./pypi.md
[NPM]: ./npm.md
[Cargo]: ./cargo.md
