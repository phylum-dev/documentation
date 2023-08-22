---
title: Defend Your Workstation
category: 6255e67693d5200013b1fa40
hidden: false
---

[Developers are the new high-value targets](https://blog.phylum.io/developers-are-the-new-high-value-targets/). Phylum can defend developers where they work!

In addition to [integrations offered](https://docs.phylum.io/docs/integrations_overview) to protect applications and CI pipelines, Phylum offers solutions to defend developer workstations. Try out one or more of the following solutions. They work well together and each one shifts security even further left.

## Git `pre-commit` hook

Developers modify lockfiles by adding new dependencies when adding features to a shared project. They commit the changes to share with others. Lockfiles containing bad dependencies will propagate to other developers. Malicious dependencies can target CI pipelines creating environments based on lockfiles to exfiltrate sensitive data.

Block the spread of bad lockfiles by rejecting them at the time of the commit. Phylum protection is available as a git `pre-commit` hook.

[Learn more by reading the documentation](https://docs.phylum.io/docs/git_precommit).

## Direct CLI use

Developers tend to prefer working at the command line over graphical user interfaces. They enjoy the power and simplicity of CLIs that do one thing well. The Phylum CLI fulfills that vision, providing super powers for super user developers already using the command line to install new dependencies. The CLI provides core access to critical Phylum functionality such as creating and working with projects or groups, looking up specific package details, and parsing and analyzing lockfiles.

[Learn more by reading the documentation](https://docs.phylum.io/docs/quickstart)

## Default ecosystem extensions

Installing new software dependencies is a gamble. There are many malicious packages that cause their harm simply by being installed. Software developers install new dependencies almost as often as they provide new features. They are also often the keepers of sensitive data and a juicy target for software supply chain attackers.

Protect systems during package installation by ensuring bad packages don't have a chance to cause damage in the first place. Phylum offers protected package installation in the form of default ecosystem extensions for the CLI. These extensions wrap package manager tools to protect commands which would install new packages or otherwise execute arbitrary code.

[Learn more by reading the documentation](https://docs.phylum.io/docs/protected_package_install)

## Optional extensions

Still not enough protection? Have unique needs or a desire to create custom solutions to push security even further left? Phylum makes it possible to create your own CLI extension. A number of [officially supported optional extensions](https://github.com/phylum-dev/cli/tree/main/extensions) already exist. Check the [community extensions repository](https://github.com/phylum-dev/community-extensions) for even more.

[Learn more by reading the documentation](https://docs.phylum.io/docs/extension_quickstart)
