---
title: Typosquatting
category: 629fb303c228520079bef218
hidden: false
---

# Description

Attackers may take advantage of the fact that developers typo open source package names when including them in their projects. For example, a developer may intend to include the popular UI framework `react` but may accidentally type `raect` (note the transposition of the `a` and the `e`).

A malicious actor may take advantage of this fact and release a package under the `raect` name. In some instances the attacker will actually serve the *real* `react` with some small malicious modification, making the issue even more difficult to detect. 

Any developer that makes this typo would now install and run the malicious package without realizing it.

# Importance

A misspelled, misremembered or incorrectly copied package name may result in the introduction of critical security threats to your organization.

# Examples

Typosquatted packages are routinely removed from open source ecosystems. There have been numerous high profile issues in NPM, PyPI, and others over the last few years, occurring in increasing frequency.

In December 2019, a malicious Python package `Jeilyfish` was uncovered. This package included a backdoored implementation of the legitimate `Jellyfish` package that stole SSH and GPG keys. This package existed for *over a year* before detection, averaging several hundred downloads per month.
