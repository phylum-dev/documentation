# GitHub App Integration

## Overview

Phylum provides a GitHub App to get your current and future repositories monitored quickly and easily. Follow along here or with the [Quickstart Guide within the Phylum UI](https://app.phylum.io/quickstart/github).

## Prerequisites

* Ability to install Apps in GitHub
* [Phylum account linked to GitHub](../knowledge_base/federate_account.md)
* Phylum Account set to Pro, if additional functionality is desired

## Installation Walkthrough

1. Go to the [Phylum App on the GitHub Marketplace](https://github.com/marketplace/phylum-io).
2. Click to install the free Phylum App. Be sure to select the intended account under the Account drop-down.

   ![GitHub App initial install screen](../../assets/gh_app_install_1.png)

3. Fill in or edit account billing information.
4. Click the button to "Complete order and begin installation"
5. Choose **All** (default) or **Select** repositories and click to install. This setting controls which repositories _can be_ monitored by Phylum (i.e., visibility). Configuring repositories to be monitored [is a different step](#monitoring).

   ![GitHub App install confirmation screen](../../assets/gh_app_install_2.png)

6. After installation, you will be redirected to the Phylum application to configure monitoring.
7. If you are a new user or are not logged in, select the GitHub button at the login screen.
   * This will automatically provision an account for new users.
8. Congratulations - the Phylum GitHub App is installed and ready to be configured to monitor your software supply chain!

## Usage

Once installed, the GitHub app can be managed through the settings menu available from the [Phylum UI](https://app.phylum.io). Click on your user icon and select the `GitHub App Settings` option from the dropdown menu:

![Phylum GitHub app settings dropdown](../../assets/gh_app_settings_menu.png)

### Monitoring

Monitoring can be activated or paused by selecting the toggle for a given repository. When first activated, a Phylum Project will be created and any supported lockfiles in the default branch will be analyzed.

![GitHub app settings - select repo](../../assets/gh_app_settings_select_repo.png)

> **NOTE:** [Phylum PRO accounts](https://www.phylum.io/pricing) can select to monitor all existing and future repositories!
>
> ![GitHub app settings - PRO](../../assets/gh_app_settings_pro.png)

For every update to the default branch or a pull request for a monitored repository, the GitHub app will automatically run check the dependencies in [supported lockfiles](../cli/supported_lockfiles.md).

#### Default Branch

When the default branch is updated, for example when a pull request is merged, the dependencies are submitted to Phylum as an analysis job labeled with the name of the branch.

If an issue causes the job to fail the [defined policy], the GitHub check for the commit will also fail. The details of the failure will be visible in the Phylum analysis job. A link to the analysis job is always available from the bottom of the check details in GitHub.

![GitHub check details showing view more details on Phylum.io link](../../assets/gh_app_check_view_job_link.png)

#### Pull Requests

![GitHub app status check in PR](../../assets/gh_app_status_check_running.png)

For Pull Requests, the dependencies of the PR branch are compared against the dependencies of the main branch. If the dependencies have changed, the dependencies of the PR branch are submitted for analysis. If the dependencies have not changed, the GitHub check will pass without creating an analysis in Phylum.

If the Phylum analysis fails the [defined policy] because of an issue related to a changed dependency, the GitHub check will fail and a comment will be written to the PR. If one or more dependencies are still processing (no results available), then the comment will make that clear and the CI job will only fail if dependencies that have **completed analysis results** do not meet the active policy.

[defined policy]: ../knowledge_base/policy.md

### Example Comments

---

Phylum OSS Supply Chain Risk Analysis - FAILED

![GitHub app PR comment - failed](../../assets/gh_app_pr_comment_failed.png)

---

Phylum OSS Supply Chain Risk Analysis - INCOMPLETE WITH FAILURE

![GitHub app PR comment - incomplete with failure](../../assets/gh_app_pr_comment_incomplete_failure.png)

---

Phylum OSS Supply Chain Risk Analysis - INCOMPLETE

![GitHub app PR comment - incomplete](../../assets/gh_app_pr_comment_incomplete.png)

---

Phylum OSS Supply Chain Risk Analysis - SUCCESS

![GitHub app PR comment - success](../../assets/gh_app_pr_comment_success.png)

---

### Groups

> **NOTE:** Only [Phylum PRO accounts](https://www.phylum.io/pricing) support groups.

The GitHub App will automatically create a group with the name of your GitHub account/organization. All Phylum projects created by the GitHub App will be owned by that group and results can be shared by adding Phylum PRO accounts as members to the group.

![Phylum groups management](../../assets/phylum_groups_management.png)

The default group that is created is owned by the account that installed the GitHub App. If you would like a different account to manage the GitHub App and group you may [transfer ownership](../knowledge_base/transfer_group_ownership.md) of the group.

### Policy

The Phylum GitHub app uses the [established project policy](../knowledge_base/policy.md) for making overall success/failure risk decisions. No configuration is required for setting the policy since a default policy is used for all projects. However, [Phylum PRO users](https://www.phylum.io/pricing) may specify custom policies for their projects to exercise fine-grained control over the risk decision logic.

### Remediation

There are several options to remediate failures determined by the GitHub app. A good first step is to click the link in the PR comment to "View this project in the Phylum UI":

![GitHub app PR comment link to project](../../assets/gh_app_view_project_link.png)

That will provide results and details for individual package issues. Each issue can be reviewed and the entire package suppressed if all issues within it are found to be false positive, irrelevant, or otherwise acceptable to proceed:

![Phylum app issue suppression](../../assets/issue_suppression.png)

Remaining issues may require lockfile modification to find alternative dependencies or otherwise remove the offending package.

After remediation steps are complete, the GitHub app can be re-triggered to run again by pushing new commits to the PR. If no code changes were made to the offending lockfile (issue suppression only), it is possible to manually trigger another run by first clicking the `Details` link for the `Phylum` status check on the PR:

![Phylum app status check failure in PR](../../assets/gh_app_status_check_details_link.png)

That takes you to the `Checks` tab of the PR, where it is possible to re-run the failed analysis by either clicking the `Re-run` link for the `Phylum` status check specifically or the `Re-run failed checks` option from the `Re-run checks` dropdown menu to include it with all other failed checks.

![Re-trigger Phylum status check](../../assets/gh_app_re-run_options.png)

### On-demand Analysis

It is possible to perform on-demand analysis of any repository for which the Phylum GitHub app has visibility. This includes all the repositories in the GitHub App Settings menu, whether or not they are actively monitored. The analysis will be of the current state of **the default branch** in the repository, for the [supported lockfiles](../cli/supported_lockfiles.md) that exist there.

To perform an on-demand analysis, click the `Analyze` button for the desired repository:

![GitHub app on-demand analysis button](../../assets/gh_app_settings_analyze_button.png)

The results will be visible in the `Project` menu view for the selected project under the `Label` corresponding to the default branch:

![GitHub app on-demand analysis results](../../assets/gh_app_on-demand_analysis.png)

### Audit Mode

Enabling audit mode for an installation of the Phylum GitHub app temporarily disables pull request protection. This can be useful to minimize disruption in cases where developers are working on repositories at the same time as Phylum is being configured.

![GitHub app audit mode button](../../assets/gh_app_audit_mode.png)

When audit mode is enabled, Phylum still analyzes pull requests and results are still visible in the Phylum UI. However:

- No comments are added to pull requests.
- The commit check status for policy violations changes from failed to neutral, allowing the PR to be merged.
- A message about audit mode being enabled is appended to the commit check details for commits that would have otherwise failed.

![GitHub check result details showing a neutral result because of audit mode](../../assets/gh_app_check_details_audit_neutral.png)

## FAQ

### I activated monitoring, but it didn't run a scan. How do I get analysis results?

Check to ensure the repository contains a [supported lockfile](../cli/supported_lockfiles.md).

### Can I manage multiple GitHub App installations in Phylum?

Yes! If your account is linked to multiple GitHub App installtions, they will be displayed and selectable on the left side of the GitHub App Settings page in the Phylum UI.

### I want to monitor manifest files. Is that possible?

It is not currently possible to monitor and analyze dependency manifest files. The GitHub App is limited to lockfiles
only. If you still want to analyze manifest files, consider using the
[Phylum GitHub Actions Integration](../phylum-ci/github_actions.md) instead.
