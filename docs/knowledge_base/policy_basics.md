# Policy Basics

This is a basic policy using an `issue` rule to block any HIGH/CRITICAL issues.

```rego
# METADATA
# title: Limit risk
# description: |
#   Block issues based on risk level.
package policy.v1

import data.phylum.level
import rego.v1

# METADATA
# title: risk level cannot exceed medium
deny contains issue if {
    some issue in data.issues
    issue.severity > level.MEDIUM
}
```

The `package policy.v1` line must be present. This is how OPA finds the policy's rules.

The `deny` rule will contain the specified issue when the `if` statement is `true`. `OPA` iterates through the job input data evaluating the expression against the severity level of every issue in the job.

The `title` field from the metadata comment above the rule will be associated with the failure in the output from Phylum.
