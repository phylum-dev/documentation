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

| Ecosystem | Phylum Registry URL              |
| --------- | -------------------------------- |
| Cargo     | <https://cargo.phylum.io/>       |
| Maven     | <https://maven.phylum.io/>       |
| NPM       | <https://npm.phylum.io/>         |
| PyPI      | <https://pypi.phylum.io/simple/> |
| RubyGems  | <https://rubygems.phylum.io/>    |

## Configuration

Instructions for configuring Phylum for artifact repositories and package
registries:

### Artifact Repositories

| Artifact Repository | Information Link |
| ------------------- | ---------------- |
| Artifactory | [Documentation][Artifactory] |

### Package Registries

| Ecosystem | Information Link          |
| --------- | ------------------------- |
| Cargo     | [Documentation][Cargo]    |
| Maven     | [Documentation][Maven]    |
| NPM       | [Documentation][NPM]      |
| PyPI      | [Documentation][PyPI]     |
| RubyGems  | [Documentation][RubyGems] |

### Notification API

Phylum supports sending out notifications whenever a package fails analysis. To
receive those notifications, you can [setup webhooks].

[setup webhooks]: ./api.md#webhooks
[Artifactory]: ./artifactory.md
[Cargo]: ./cargo.md
[Maven]: ./maven.md
[NPM]: ./npm.md
[PyPI]: ./pypi.md
[RubyGems]: ./rubygems.md
