---
title: Continuous Monitoring
category: 6255e67693d5200013b1fa41
hidden: false
---

# Overview

Phylum Continuous Monitoring ensures the accuracy of package issue data without requiring the user to re-analyze a project.

## How It Works

As new vulnerabilities are discovered, the Phylum platform will search through all customer projects for impacted packages. If an impacted package is discovered, the active policy for the project will be evaluated.

If the new vulnerability does not cause a policy violation, nothing will happen.

If a new policy violation is generated, the package and project will reflect that and the package will not longer be suppressed if it was previously in a suppressed state. Additionally, any [notifications](https://docs.phylum.io/docs/notifications) the project/group has configured will be triggered.

## How to Activate

No activation required! Continuous Monitoring is a default platform feature for all Phylum accounts. Phylum Pro users have the additional option to trigger [notifications](https://docs.phylum.io/docs/notifications) on new Continuous Monitoring violations.
