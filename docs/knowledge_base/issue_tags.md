---
title: Issue Tags
category: 6255e67693d5200013b1fa41
hidden: false
---

## Issue Tags

Phylum uses tags to uniquely identify issues raised by the system. These tags can be used in custom [policy](https://docs.phylum.io/docs/policy) creation.

- Severities
  - Minimum (`I`)
  - Medium (`M`)
  - High (`H`)
  - Critical (`C`)
  - Situation-dependent severity is represented in the table by `.`
- Domains
  - Author Risk (`A`)
  - Engineering Risk (`E`)
  - Malicious Code (`M`)
  - Vulnerabilities (`V`)
  - License Risk (`L`)
    

| Tag ID | Issue Name | Issue Description |
| --- | --- | --- |
| CA0001    | [Bad Author](https://docs.phylum.io/docs/bad_author) | Author is known malicious |
| CM0001    | [IP Detection](https://docs.phylum.io/docs/ip_identification) | Package contains suspicious IP addresses |
| CM0003    | Landing Binary | Package is known to contain malware |
| .M0004    | Landing Binary | Package uses suspicious executables |
| IL0005    | License | Commercial license risk detected |
| IM0006    | NPM Hooks | Package uses install hooks to ask for donations |
| CM0007    | [NPM Hooks](https://docs.phylum.io/docs/npm_hooks) | Package executes shell commands in installation hooks |
| IM0007    | NPM Hooks | Package runs the software immediately after installation |
| HM0008    | [Typosquatting](https://docs.phylum.io/docs/typosquatting) | Package appears to be typosquatted |
| CM0011    | [Hostname Detection](https://docs.phylum.io/docs/hostname_identification) | Package contains suspicious hostnames |
| MM0012    | [Native Code](https://docs.phylum.io/docs/invokes_native_code) | Package contains calls used to load native code |
| IM0013    | Dynamic Code | Package contains calls used to run dynamic classes |
| ME0016    | [Secrets](https://docs.phylum.io/docs/secrets) | Secrets/tokens found in package not in test or example file |
| IE0016    | [Secrets](https://docs.phylum.io/docs/secrets) | Secrets/tokens found in package in test or example file |
| IM0017    | [Compiled Binaries](https://docs.phylum.io/docs/compiled_binary) | Package contains compiled binaries |
| HM0018    | [Dependency Confusion](https://docs.phylum.io/docs/dependency_confusion) | Package has unusual semver or not found in registry |
| IL0022    | License Mismatch | Package has a license mismatch between metadata and files |
| HA0023    | [Ephemeral Author Domain](https://docs.phylum.io/docs/ephemeral_domain) | A disposable domain was used by a maintainer |
| IE0023    | [IP Detection](https://docs.phylum.io/docs/ip_identification) | This package may contain hardcoded IP addresses. |
| HM0023    | [Strange Python Imports](https://docs.phylum.io/docs/strange_python_imports) | Package imports things in a strange way |
| CM0024    | [Remote Executable](https://docs.phylum.io/docs/remote_exe_ref_or_run) | Package runs remote executable |
| MM0024    | [Remote Executable](https://docs.phylum.io/docs/remote_exe_ref_or_run) | Package references remote executable |
| HM0025    | [Environment Variable Enumeration](https://docs.phylum.io/docs/env_var_enumeration) | Package enumerates through user folders |
| IE0027    | [Trivial Package](https://docs.phylum.io/docs/trivial_package) | Package may be too small to be worth the security risk |
| MM0028    | [Suspicious URL References](https://docs.phylum.io/docs/suspicious_url_references) | Package references pastebin-like sites |
| HM0029    | [Obfuscated Python](https://docs.phylum.io/docs/obfuscated_python) | Package contains obfuscated Python |
| .M0031    | [Suspicious Commands In Setup.py](https://docs.phylum.io/docs/suspicious_setup_commands) | Package contains unusual commands in setup.py |
| HM0032    | [Exec on Remote URL](https://docs.phylum.io/docs/executes_code_at_remote_url) | Package calls `exec` on a remote URL |
| HM0036    | [Webhook Exfil](https://docs.phylum.io/docs/webhook_exfil) | A package that appears to exfil data through a webhook |
| HM0037    | Malware Bazaar Check | A package's file contains a hash that hits on Malware Bazaar |
| CM0038    | Triaged Malware Rule (via threat feed) | Manually reviewed and confirmed to contain malware |
