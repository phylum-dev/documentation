# Frequently Asked Questions (FAQ)

Please [contact us][contact] to ask questions that aren't covered by the documentation or this FAQ page.

[contact]: ../support/contact_us.md

## How long does it take for a newly published package to be processed by Phylum?

The Phylum application is continuously ingesting and processing packages for all supported ecosystems in an attempt to provide nearly instant analysis results. If a package is submitted for analysis that has not already been pre-processed, the application will take approximately 30 minutes to acquire the package and run the heuristics and rules.

NOTE: This process is parallelized. Having one, or 100, packages processing will generally take the same amount of time.

## Why do I see a passing result in an integration but a failure in the Phylum UI?

Most of the [Phylum integrations][integrations] provide a link in their output to "View this project in the Phylum UI" or "View more details on Phylum.io" or some similar message. Clicking that link and finding the project to be failing the [configured policy][policy] in the Phylum web app UI might be surprising, especially when the integration shows a successful result.

The reason for this discrepancy is due to how the web app UI reports the overall result for the **entire** project as measured against the applied policy whereas the integration reports the result **of the diffs** only. At least, the default for most integrations is to only consider the newly added or modified dependencies in analysis results. That way, it is possible to isolate changes from a given pull/merge request and not be burdened by the overall project's status. An example of this is a large project looking to adopt Phylum incrementally: existing policy violations are allowed temporarily while all new code changes must pass the established policy.

[integrations]: ../integrations/integrations_overview.md
[policy]: ../knowledge_base/policy.md
