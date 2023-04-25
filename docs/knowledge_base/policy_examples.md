---
title: Policy Examples
category: 6255e67693d5200013b1fa41
hidden: false
---

# Examples

The policy transforms your threat model into a description of why the job is being blocked. There are multiple ways to define why a job should be blocked.

## Blocking an issue

The most common reason to block a job is because one of the dependencies has a known issue within one of Phylum's risk domains.

The following policy shows ways to block using an `issue` rule based on a per-domain threshold.

```rego
package policy

import data.phylum.domain
import data.phylum.level
import future.keywords.contains
import future.keywords.if
import future.keywords.in

# METADATA
# scope: rule
# schemas:
#   - data.issue: schema.issue
issue contains "risk level cannot exceed medium" if {
	data.issue.domain in {domain.AUTHOR, domain.ENGINEERING, domain.VULNERABILITY}
	data.issue.severity > level.MEDIUM
}

# METADATA
# scope: rule
# schemas:
#   - data.issue: schema.issue
issue contains "malicious risk level cannot exceed low" if {
	data.issue.domain == domain.MALICIOUS
	data.issue.severity > level.LOW
}

# METADATA
# scope: rule
# schemas:
#   - data.issue: schema.issue
issue contains "license risk level cannot exceed high" if {
	data.issue.domain == domain.LICENSE
	data.issue.severity > level.HIGH
}
```

Given the following input:

```json
{
    "dependencies": [{
        "ecosystem": "pypi",
        "id": "07a3feb6-d6fb-523a-88f0-9896b86e6f93",
        "issues": [{
            "domain": "malicious",
            "severity": 4,
            "tag": "CM0004"
        }],
        "issues_complete": true,
        "name": "example-package",
        "version": "1.0.0"
    }]
}
```

When the policy fails, the output will look something like this:

```json
{
  "dependencies": [
    {
      "errors": [],
      "id": "07a3feb6-d6fb-523a-88f0-9896b86e6f93",
      "issues": [
        {
          "reason": "malicious risk level cannot exceed low",
          "tag": "CM0004"
        }
      ]
    }
  ],
  "errors": []
}
```

When Phylum sees this output from the policy, it will block the job and generate a report naming the package and describing the issue.

## Blocking a dependency

You may also block on a dependency-level characteristic using a `dependency` rule.

The following policy blocks packages belonging to a namespace.

```rego
package policy

import future.keywords.contains
import future.keywords.if

# METADATA
# scope: rule
# schemas:
#   - data.dependency: schema.dependency
dependency contains "AGPL licensed software is not allowed." if {
        regex.match("(?i)\\bAGPL\\b", data.dependency.license)
}
```

Given the following input:

```json
{
    "dependencies": [{
        "ecosystem": "npm",
        "id": "4cc36d79-b8ce-5b7d-89c1-6f6a31f59819",
        "issues": [],
        "issues_complete": true,
        "license": "AGPL-3.0",
        "name": "example-package",
        "version": "1.0.0"
    }]
}
```

When the policy fails, the output will look something like this:

```json
{
  "dependencies": [
    {
      "errors": [
        "AGPL licensed software is not allowed."
      ],
      "id": "4cc36d79-b8ce-5b7d-89c1-6f6a31f59819",
      "issues": []
    }
  ],
  "errors": []
}
```

When Phylum sees this output from the policy, it will block the job and generate a report naming the package and providing this message in the output.

## Blocking a job

If a policy wants to block a job for a reason that is not related to a specific dependency, the policy can use a `job` rule.

The following policy blocks any job that introduces an NPM dependency. Only one error is generated, even if hundreds of dependencies have been added.

```rego
package policy

import data.phylum.ecosystem
import future.keywords.contains
import future.keywords.if
import future.keywords.in

# METADATA
# scope: rule
# schemas:
#   - data.job: schema.job
job contains "This project must not have NPM dependencies." if {
        some deps in input.dependencies
        deps.ecosystem == ecosystem.NPM
}
```

Given the following input:

```json
{
    "dependencies": [{
        "ecosystem": "npm",
        "id": "4cc36d79-b8ce-5b7d-89c1-6f6a31f59819",
        "issues": [],
        "issues_complete": true,
        "name": "example-package",
        "version": "1.0.0"
    }]
}
```

When the policy fails, the output will look something like this:

```json
{
  "dependencies": [],
  "errors": [
    "This project must not have NPM dependencies."
  ]
}
```

When Phylum sees this output from the policy, it will block the job and generate a report providing this message in the output.
