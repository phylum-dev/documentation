---
title: Environment Variable Enumeration
category: 629fb303c228520079bef218
hidden: false
---

# Description

[Environment variables](https://en.wikipedia.org/wiki/Environment_variable) are a critical component of most operating environments. They allow programs and applications to store configuration data they can access at runtime.

# Importance

Environment variables, while generally uninteresting, can sometimes refer to critical pieces of information like access tokens (e.g., AWS API keys) and locations on disk (e.g., `LocalAppData`). Malicious software on a machine may access this information and attempt to enumerate the environment variables looking for this sensitive data to steal.

# Examples

In April of 2022, researchers discovered a set of malicious packages on PyPi that would search through environment variables looking for the location of local browser storage folders. Once found, the aim of the malware was to steal AWS or other user credentials.
