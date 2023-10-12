---
title: Policy Basics
category: 6255e67693d5200013b1fa41
hidden: false
---

# Basic Policy

```rego
# This is effectively the name of the policy.
# It must be "policy".
package policy

import data.phylum.level
import future.keywords.contains
import future.keywords.if

# METADATA
# scope: rule
# schemas:
#   - data.issue: schema.issue
issue contains "risk level cannot exceed medium" if {
    data.issue.severity > level.MEDIUM
}
```

This is a basic policy using an `issue` rule to block any HIGH/CRITICAL issues.

The `issue` rule will contain the specified text when the `if` statement is `true`. `OPA` iterates through the job input data evaluating the expression against the severity and the level.
