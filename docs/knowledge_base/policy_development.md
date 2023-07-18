---
title: Policy Development
category: 6255e67693d5200013b1fa41
hidden: false
---

# Creating a local policy development environment

It is recommended to set up a local development environment for a better policy development experience. With a local development environment, you gain benefits such as faster feedback, more diagnostic abilities, version control, and automated testing.

## Download the OPA CLI

Follow the instructions at https://www.openpolicyagent.org/docs/latest/#1-download-opa to download a copy of the OPA command line tool and run `opa version` to ensure it is working.

## Download the policy SDK

Download the policy SDK from https://api.phylum.io/api/v0/data/jobs/policy/sdk.zip and extract it.

## Download input data

```sh
job="YOUR JOB ID"
token=$(phylum auth token -b)
curl -H "Authorization: Bearer ${token}" "https://api.phylum.io/api/v0/data/jobs/${job}/policy/input" -fo input.json
```

Note: You can obtain a Job ID by using the [`phylum history`](https://docs.phylum.io/docs/phylum_history) command from the Phylum CLI.

# Evaluating policies locally

A policy can be evaluated using `opa eval --data phylum.rego --data <YOUR POLICY>.rego --data constants.json --input input.json --schema schema --format pretty data.phylum.job`.

| Input | Description | Provider |
| --- | --- | --- |
| `phylum.rego` | defines rules for jobs, dependencies, and issues | Phylum |
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

# Automated testing

Open Policy Agent has documentation on [policy testing](https://www.openpolicyagent.org/docs/latest/policy-testing/). Writing an automated test for your Phylum policy looks something like this:

```rego
# example_test.rego
# This is a test for the default.rego which blocks high/critical severity issues.

package policy

import data.phylum.level
import future.keywords.if

test_block_high if {
    # Mock input
    check := issue with data.issue as {
        "tag": "tag",
        "severity": level.HIGH
    }
    # Evaluate if the set contains the expected result
    check == {"risk level cannot exceed medium"}
}

test_allow_medium if {
    # Mock input
    check := issue with data.issue as {
        "tag": "tag",
        "severity": level.MEDIUM
    }
    # Evaluate if the set is empty
    check == set()
}
```

This test requires `constants.json` from the Phylum SDK. The test can be executed against the Phylum `default.rego` policy using `opa test constants.json default.rego example_test.rego`.

# Evaluating policies using the Phylum API

Using the [`evaluate_policy`](https://api.phylum.io/api/v0/swagger/index.html#/Jobs/evaluate_policy) API, it's possible to evaluate policies within Phylum. This is the same API used by Phylum tooling.

To evaluate an existing job using `example.rego` you can make an API call like this:

```sh
curl -H "Authorization: Bearer $(phylum auth token -b)" -H "Content-Type: text/plain" --data-binary @example.rego https://api.phylum.io/api/v0/data/jobs/YOUR_JOB_ID/policy/evaluate
```

If the endpoint is called with no body, the project's saved policy will be used.

If policy evaluation is successful, the result will contain both the policy output as well as a generated report in Markdown format.

Issues and dependencies that have been suppressed via project preferences are visible in the policy input, but rejections related to those issues or dependencies will not be included in the Markdown report.

Dependencies that are ignored via the `ignored_packages` parameter are filtered out before applying the policy and will not be visible in the policy input or output.
