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

Note: You can obtain a Job ID by using the `phylum history` command.

# Automated testing

Open Policy Agent has documentation on [policy testing](https://www.openpolicyagent.org/docs/latest/policy-testing/). Writing an automated test for your Phylum policy looks something like this:

```rego
# example_test.rego
# This is a test for the example showing how to block high severity issues.

package policy

import data.phylum.level
import future.keywords.if

test_block_high if {
    # Evaluate the rule with mocked input.
    reasons := issue with data.issue as {
        "tag": "tag",
        "severity": level.HIGH
    }

    reasons == {"High severity issues must be addressed"}
}

test_allow_medium if {
    # Evaluate the rule with mocked input.
    reasons := issue with data.issue as {
        "tag": "tag",
        "severity": level.MEDIUM
    }

    reasons == set()
}
```

The test can be executed using `opa test phylum.rego example.rego example_test.rego`.

# Evaluating policies using the Phylum API

Using the [`evaluate_policy`](https://api.phylum.io/api/v0/swagger/index.html#/Jobs/evaluate_policy) API, it's possible to evaluate policies within Phylum. This is the same API used by Phylum tooling.

To evaluate an existing job using example.rego you can make an API call like this:

```sh
curl -H "Authorization: Bearer $(phylum auth token -b)" -H "Content-Type: text/plain" --data-binary @example.rego https://api.phylum.io/api/v0/data/jobs/YOUR_JOB_ID/policy/evaluate
```

If the endpoint is called with no body, the project's saved policy will be used.

It is also possible to send a JSON body including a list of packages to be excluded from the policy input data, for example to evaluate a proposed change. See the API documentation for details.

If policy evaluation is successful, the result will contain both the policy output as well as a generated report in Markdown format.
