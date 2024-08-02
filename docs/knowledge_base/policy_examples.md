# Policy Examples

The policy transforms your threat model into a description of why the job is being blocked. There are multiple ways to define why a job should be blocked.

The `METADATA` block contains `OPA` [Annotations](https://www.openpolicyagent.org/docs/latest/annotations/) which correlate to the schema and can be used for type checking.

## Blocking an issue

The most common reason to block a job is because one of the dependencies has a known issue within one of Phylum's risk domains.

The following policy shows ways to block using an `issue` rule based on a per-domain threshold.

```rego
package policy.v1

import data.phylum.domain
import data.phylum.level
import rego.v1

# METADATA
# title: risk level cannot exceed medium
deny contains issue if {
    some issue in data.issues
    issue.domain in {domain.AUTHOR, domain.ENGINEERING, domain.VULNERABILITY}
    issue.severity > level.MEDIUM
}

# METADATA
# title: malicious risk level cannot exceed low
deny contains issue if {
    some issue in data.issues
    issue.domain == domain.MALICIOUS
    issue.severity > level.LOW
}

# METADATA
# title: license risk level cannot exceed high
deny contains issue if {
    some issue in data.issues
    issue.domain == domain.LICENSE
    issue.severity > level.HIGH
}
```

Given the following input:

```json
{
    "issues": [{
        "id": "b8ad4443-d875-427b-9eda-b4b2fb1d6212",
        "domain": "malicious",
        "severity": 4,
        "tag": "CM0004"
    }]
}
```

When the policy fails, the output will look something like this:

```json
{
    "deny": [{
        "id": "b8ad4443-d875-427b-9eda-b4b2fb1d6212",
        "domain": "malicious",
        "severity": 4,
        "tag": "CM0004"
    }]
}
```

When Phylum sees this output from the policy, it will block the job and generate a report naming the package and describing the issue.

## Blocking a dependency

You may also block on a dependency-level characteristic using a `dependency` rule.

The following policy blocks packages belonging to a namespace.

```rego
package policy.v1

import rego.v1

# METADATA
# title: AGPL licensed software is not allowed.
deny contains dependency if {
    some dependency in data.dependencies
    regex.match("(?i)\\bAGPL\\b", dependency.license)
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
  "deny": [{
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

When Phylum sees this output from the policy, it will block the job and generate a report naming the package and providing this message in the output.
