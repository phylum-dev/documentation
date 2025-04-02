# Package Firewalls

Phylum Package Firewalls allows users to configure their artifact
repositories and/or package managers to block untrusted packages.

## How It Works

Instead of pointing your system to the primary ecosystem registry, configure
it to point to Phylum. [Set your Phylum policy](../knowledge_base/policy.md) and
Phylum will block any package or version that violates the policy.

## Supported Ecosystems

The following table shows the supported ecosystem registries and the custom
Phylum registry URLs under which they are hosted:

| Ecosystem | Phylum Registry URL                     |
| --------- | --------------------------------------- |
| Cargo     | <https://cargo.phylum.io/>              |
| Golang    | <https://golang.phylum.io>              |
| Maven     | <https://maven.phylum.io/>              |
| NPM       | <https://npm.phylum.io/>                |
| NuGet     | <https://nuget.phylum.io/v3/index.json> |
| PyPI      | <https://pypi.phylum.io/simple/>        |
| RubyGems  | <https://rubygems.phylum.io/>           |

## Configuration

Instructions for configuring Phylum for artifact repositories and package
registries:

### Artifact Repositories

| Artifact Repository | Information Link |
| ------------------- | ---------------- |
| Artifactory | [Documentation][Artifactory] |
| Nexus Repository | [Documentation][Nexus] |

### Package Registries

| Ecosystem | Information Link          |
| --------- | ------------------------- |
| Cargo     | [Documentation][Cargo]    |
| Golang    | [Documentation][Golang]   |
| Maven     | [Documentation][Maven]    |
| NPM       | [Documentation][NPM]      |
| NuGet     | [Documentation][NuGet]    |
| PyPI      | [Documentation][PyPI]     |
| RubyGems  | [Documentation][RubyGems] |

### Notification API

Phylum supports sending out notifications whenever a package fails analysis. To
receive those notifications, you can [setup webhooks].

### Frequently Asked Questions

See the [FAQ] for common questions about using the package firewall.

[setup webhooks]: ./api.md#webhooks
[Artifactory]: ./artifactory.md
[Nexus]: ./nexus.md
[Cargo]: ./cargo.md
[Golang]: ./golang.md
[Maven]: ./maven.md
[NPM]: ./npm.md
[NuGet]: ./nuget.md
[PyPI]: ./pypi.md
[RubyGems]: ./rubygems.md
[FAQ]: ./faq.md
