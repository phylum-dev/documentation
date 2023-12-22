# Groups

Phylum groups allow users to view/submit projects and analysis jobs in a shared group context. This allows users to share results without needing to share account credentials.

1. [Create a group](../cli/commands/phylum_group_create.md) for your team to use
2. [Create a project](../cli/commands/phylum_project_create.md) using the `--group` option and your group name
3. [Analyze](../cli/commands/phylum_analyze.md) the desired dependency files

Any user that is a member of the group will be able to access the analysis results.

Group administration for adding/removing users, etc. can be found in the `Groups Admin` view on the [Phylum UI](https://app.phylum.io/auth/login).

![user menu](../../assets/user-menu.png)
