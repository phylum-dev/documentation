---
title: Policy
category: 6255e67693d5200013b1fa41
hidden: false
---

# Overview
Phylum's custom policy support allows you to take control over the allow/block decision for dependencies being added to a Phylum project.

# How it works

When a developer introduces dependency changes, either in a pull request when using one of the source control server integrations or when using Phylum's CLI extensions, a simple policy is applied to determine whether or not that change should be allowed. This policy is implemented using [Open Policy Agent] and may be overridden in project preferences.

Suppressed issues and ignored dependencies when performing a comparison are filtered out before applying the policy and will not be visible in the policy input.

[Open Policy Agent]: https://www.openpolicyagent.org/
