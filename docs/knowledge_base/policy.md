# Policy

Phylum uses a policy framework implemented with [Open Policy Agent] to evaluate dependencies and provide tailored results. A default set of Phylum-provided policies will be applied to all newly created groups/projects. Phylum users may customize their resultant policy by toggling policies on/off in the Phylum UI.

Phylum users may also [develop custom policies] using the [rego query language] and apply those policies to their groups/projects.

[Open Policy Agent]: https://www.openpolicyagent.org/
[develop custom policies]: ./policy_development.md
[rego query language]: https://www.openpolicyagent.org/docs/latest/policy-language/
