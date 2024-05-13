# Issue Tags

Phylum uses tags to uniquely identify issues raised by the system. These tags can be used in custom [policy](../knowledge_base/policy.md) creation.

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

---

| Tag ID | Issue Name | Issue Description |
| --- | --- | --- |
| CA0001 | [Bad Author](../analytics/bad_author.md) | Author is known malicious |
| CM0001 | [IP Detection](../analytics/ip_identification.md) | Package contains suspicious IP addresses |
| CM0003 | Landing Binary | Package is using living off the land binaries in a known malicious way |
| .M0004 | Landing Binary | Package uses suspicious executables |
| IL0005 | License | Commercial license risk detected |
| IM0006 | [NPM Hooks](../analytics/npm_hooks.md) | Package uses install hooks to ask for donations |
| CM0007 | [NPM Hooks](../analytics/npm_hooks.md) | Package executes shell commands in installation hooks |
| IM0007 | [NPM Hooks](../analytics/npm_hooks.md) | Package runs the software immediately after installation |
| HM0008 | [Typosquatting](../analytics/typosquatting.md) | Package appears to be typosquatted |
| CM0011 | [Hostname Detection](../analytics/hostname_identification.md) | Package contains suspicious hostnames |
| MM0012 | [Native Code](../analytics/invokes_native_code.md) | Package contains calls used to load native code |
| IM0013 | Dynamic Code | Package contains calls used to run dynamic classes |
| ME0016 | [Secrets](../analytics/secrets.md) | Secrets/tokens found in package not in test or example file |
| IE0016 | [Secrets](../analytics/secrets.md) | Secrets/tokens found in package in test or example file |
| IM0017 | [Compiled Binaries](../analytics/compiled_binary.md) | Package contains compiled binaries |
| HM0018 | [Dependency Confusion](../analytics/dependency_confusion.md) | Package has unusual semver or not found in registry |
| IL0022 | License Mismatch | Package has a license mismatch between metadata and files |
| HA0023 | [Ephemeral Author Domain](../analytics/ephemeral_domain.md) | A disposable domain was used by a maintainer |
| IE0023 | [IP Detection](../analytics/ip_identification.md) | This package may contain hardcoded IP addresses |
| HM0023 | [Strange Python Imports](../analytics/strange_python_imports.md) | Package imports things in a strange way |
| CM0024 | [Remote Executable](../analytics/remote_exe_ref_or_run.md) | Package runs remote executable |
| MM0024 | [Remote Executable](../analytics/remote_exe_ref_or_run.md) | Package references remote executable |
| HM0025 | [Environment Variable Enumeration](../analytics/env_var_enumeration.md) | Package enumerates sensitive system environment variables |
| IE0027 | [Trivial Package](../analytics/minimal_code.md) | Package may be too small to be worth the security risk |
| MM0028 | [Suspicious URL References](../analytics/suspicious_url_references.md) | Package references sites uncommon to legitimate software |
| HM0029 | [Obfuscated Python](../analytics/obfuscated_python.md) | Package contains obfuscated Python |
| .M0031 | [Suspicious Python Setup Commands](../analytics/suspicious_setup_commands.md) | Package contains unusual commands in `setup.py` |
| HM0032 | [Exec on Remote URL](../analytics/executes_code_at_remote_url.md) | Package executes code from a remote URL |
| HM0036 | [Webhook Exfil](../analytics/webhook_exfil.md) | Package exfiltrates data through a webhook |
| CM0037 | Malware Bazaar Check | Package contains a file whose hash is in Malware Bazaar |
| CM0038 | Triaged Malware Rule (via [threat feed](../knowledge_base/threat_feed.md)) | Manually reviewed and confirmed to contain malware |
| CM0039 | Depends On Malware Rule | Package has dependency found in triaged malware table |
| IM0040 | Decodes Hardcoded Base64 Strings | Package decodes hardcoded Base64 strings |
| IM0041 | High Entropy Blobs | Package contains high entropy blobs |
| IM0042 | [Nuget Install Scripts Rule](../analytics/nuget_install_scripts.md) | Package contains scripts that will run on install |
| IM0043 | [Cargo Build File Rule](../analytics/cargo_build_file.md) | Package contains build.rs file that will run on build and compile |
| IM0044 | [Rubygems Install Hooks Rule](../analytics/ruby_install_hooks.md) | Package contains Ruby pre or post install hooks |
| CM0045 | [npm Security Holding Package](../analytics/npm_security_holding.md) | Package removed by npm as a security holding package |
| CE0046 | [Deprecated Package](../analytics/deprecated_package.md) | Package has been deprecated |
| IM0047 | [Python Build Hook](../analytics/python_build_hook.md) | Package contains Python build hook files |
| HM0099 | [Basic Javascript Obfuscation](../analytics/obfuscated_javascript.md) | Package contains obfuscated Javascript |
