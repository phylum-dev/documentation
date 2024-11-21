# Continuous Monitoring

Phylum Continuous Monitoring ensures the accuracy of package issue data without requiring the user to re-analyze a project.

## How It Works

The Phylum platform monitors for new issues that impact dependencies in your project's current job (see below for details) and will re-run your policy when one is found. If that issue violates your policy, we will fire off any configured [notifications] and also unsuppress the package if you previously had it suppressed, so you can address the newly found issue.

[notifications]: ../knowledge_base/notifications.md

### Current job

A project's current job is the latest job that has been submitted with the project's default label. The default label can be set "Preferences" tab of the project in the Phylum App or [with the Phylum CLI][project_update].

If no default label has been set, the project's current job will be the latest job submitted, regardless of label.

[project_update]: https://docs.phylum.io/cli/commands/phylum_project_update

## How to Activate

No activation required! Continuous Monitoring is a default platform feature for all Phylum accounts. Phylum Pro users have the additional option to trigger [notifications] on new Continuous Monitoring violations.
