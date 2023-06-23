---
title: Webhook Exfil
category: 629fb303c228520079bef218
hidden: false
---

# Description

A [Discord webhook](https://discord.com/developers/docs/resources/webhook) allows an external service to send automated messages or notifications directly to a specific channel in a Discord server. This is a commonly used exfiltration technique used by a lot of recent stealer malware.

# Importance

Discovering a hard-coded webhook within an open-source software package is an indication of potential malicious activity. When combined with a POST request to that webhook, it is highly likely to be a variant of credential-stealing malware. It's worth noting that most stealers are intended to operate during package installation. This means that if a user were to execute a `pip install <package>` command in the case of PyPI, the malware would be triggered, making it critical to be aware of any attempts at webhook exfiltration before installing the package.

# Examples

The use of a Discord webhook as a method for data exfiltration is a relatively new technique that has been widely observed and previously documented in [publications][https://threatpost.com/malware-discord-webhooks/179605/]. Generally, these stealers are activated during package installation and easily spotted by a cursory glance at the code. However, in March 2023, Phylum released [an article](https://blog.phylum.io/phylum-discovers-npm-package-mathjs-min-contains-discord-token-grabber) outlining how attackers are now utilizing this method in a more subtle manner by concealing the stealer code deep within existing packages.
