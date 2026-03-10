# Yara

## Description

YARA issues occur when patterns in code or binary files match known malicious signatures or suspicious behaviours. YARA (Yet Another Recursive Acronym) is a pattern-matching tool used to identify and classify malware based on textual or binary patterns. When a package triggers a YARA rule, it indicates the presence of code that resembles known threats, obfuscation techniques, or other suspicious characteristics commonly found in malicious software.

## Importance

A YARA rule issue is a strong indicator that a package may contain malicious code or exhibit behaviours associated with malware.

## Examples

YARA rules have been instrumental in detecting malicious packages across open-source ecosystems. In August 2021, security researchers identified a malicious NPM package called ua-parser-js that had been compromised. YARA rules detected the presence of cryptocurrency mining malware and password-stealing trojans embedded in the package. The malicious version was downloaded over a million times before being removed, affecting numerous production systems. The YARA signatures matched patterns commonly found in cryptominers and credential harvesters, triggering immediate alerts that led to the package's investigation and eventual removal.
