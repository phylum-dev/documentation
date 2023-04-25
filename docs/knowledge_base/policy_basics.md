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

issue contains "risk level cannot exceed medium" if {
	data.issue.severity > level.MEDIUM
}
```

This policy can be executed using `opa eval --data phylum.rego --data <YOUR POLICY>.rego --data constants.json --input input.json --schema schema --format pretty data.phylum.job`.

| Input | Description | Provider |
| --- | --- | --- |
| `phylum.rego` | describes jobs, dependencies, and issues | Phylum |
| `<YOUR POLICY>.rego` | policy you want to test | User |
| `constants.json` | constants that can be used in your custom policy | Phylum |
| `input.json` | input data to evaluate, generally from a Phylum job response | User |
| `schema` | location of the schema files | Phylum |
| `data.phylum.job` | entry point | Static value |

If everything is working, you will receive JSON output from `opa` that looks like this:

```json
{
  "dependencies": [],
  "errors": []
}
```

This is what the output looks like when the job is allowed by the policy. When the policy blocks something, there will be additional data describing the failure.
