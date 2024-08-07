# Policy Development

## Policy Basics

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

The `title` and `description` from the initial metadata comments are displayed in the Phylum UI and are highly recommended.

The `package policy.v1` line must be present. This is how [Open Policy Agent](https://www.openpolicyagent.org/) (OPA) finds the policy's rules.

The `deny` rule will contain the specified issue when the `if` statement is `true`. OPA iterates through the job input data evaluating the expression against the severity level of every issue in the job.

The `title` field from the metadata comment above the rule will be associated with the failure in the output from Phylum.

## Creating a local policy development environment

It is recommended to set up a local development environment for a better policy development experience. With a local development environment, you gain benefits such as faster feedback, more diagnostic abilities, version control, and automated testing.

### Download the OPA CLI

Follow the instructions at [www.openpolicyagent.org](https://www.openpolicyagent.org/docs/latest/#1-download-opa) to
download a copy of the OPA command line tool and run `opa version` to ensure it is working.

### Download the policy SDK

Download the policy SDK from [the Phylum API endpoint](https://api.phylum.io/api/v0/data/jobs/policy/sdk.zip) and
extract it.

### Download input data

```sh
job="YOUR JOB ID"
token=$(phylum auth token -b)
curl -H "Authorization: Bearer ${token}" "https://api.phylum.io/api/v0/data/jobs/${job}/policy/input" -fo input.json
```

Note: You can obtain a Job ID by using the [`phylum history`](../cli/commands/phylum_history.md) command from the Phylum CLI.

## Evaluating policies locally

A policy can be evaluated using `opa eval --data <YOUR POLICY>.rego --data constants.json --input input.json --schema schema --format pretty data.policy.v1`.

| Input | Description | Provider |
| --- | --- | --- |
| `<YOUR POLICY>.rego` | policy you want to test | User |
| `constants.json` | constants that can be used in your custom policy | Phylum |
| `input.json` | input data to evaluate, generally from a Phylum job response | User |
| `schema` | location of the schema files | Phylum |
| `data.phylum.job` | entry point | Static value |

If everything is working, you will receive JSON output from `opa` that looks like this:

```json
{
    "deny": []
}
```

This is what the output looks like when the job is allowed by the policy. When the policy blocks something, there will be additional data describing the failure.

## Automated testing

Open Policy Agent has documentation on [policy testing](https://www.openpolicyagent.org/docs/latest/policy-testing/). Writing an automated test for your Phylum policy looks something like this:

```rego
# example_test.rego
# This is a test for the default.rego which blocks high/critical severity issues.

package policy.v1

import data.phylum.level
import rego.v1

test_block_high if {
    issue := {
        "id": "abc",
        "tag": "tag",
        "severity": level.HIGH
    }

    # Evaluate policy with mock input
    check := deny with data.issues as [issue]

    # Assert that the set contains the expected issue
    check == {issue}
}

test_allow_medium if {
    issue := {
        "id": "abc",
        "tag": "tag",
        "severity": level.MEDIUM
    }

    # Evaluate policy with mock input
    check := deny with data.issues as [issue]

    # Assert that the set is empty
    check == set()
}

```

This test requires `constants.json` from the Phylum SDK. The test can be executed against the Phylum `default.rego` policy using `opa test constants.json default.rego example_test.rego`.

## Evaluating policies using the Phylum API

Using the [`evaluate_policy`](https://api.phylum.io/api/v0/swagger/index.html#/Jobs/evaluate_policy) API, it's possible to evaluate policies within Phylum. This is the same API used by Phylum tooling.

To evaluate an existing job using `example.rego` you can make an API call like this:

```sh
curl -H "Authorization: Bearer $(phylum auth token -b)" -H "Content-Type: text/plain" --data-binary @example.rego https://api.phylum.io/api/v0/data/jobs/YOUR_JOB_ID/policy/evaluate
```

If the endpoint is called with no body, the project's saved policy will be used.

If policy evaluation is successful, the result will contain both the policy output as well as a generated report in Markdown format.

Issues that have been suppressed via project preferences are visible to the policy, but the related rejections will not be included in the Markdown report.

Dependencies that are ignored via the `ignored_packages` parameter are filtered out before applying the policy and will not be visible in the policy input or output.

## Policy Examples

The policy transforms your threat model into a description of why the job is being blocked. There are multiple ways to define why a job should be blocked.

The `METADATA` block contains OPA [Annotations](https://www.openpolicyagent.org/docs/latest/annotations/) which correlate to the schema and can be used for type checking.

### Blocking an issue

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

### Blocking a dependency

You may also block on a dependency-level characteristic using a `dependency` rule.

The following policy blocks packages belonging to a namespace.
Note: This is just an example, there is already a [policy](https://github.com/phylum-dev/policy/blob/main/copyleft_license.rego) for blocking copyleft licenses.

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
