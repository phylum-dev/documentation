# Phylum Project Creation

Phylum projects are used to represent a software project; often a git repository. A Phylum project organizes the dependencies and findings for your software project. This page enumerates the ways a Phylum project can be created.

## Walkthrough

### Phylum CLI

> ⚠️ **INFO** ⚠️
>
> Project creation with the Phylum CLI does not trigger an analysis of the project. Instead, the [`phylum analyze`](../cli/commands/phylum_analyze.md) command will trigger an analysis job and organize the results in the specified Phylum project.

---

#### Via [`phylum init`](../cli/commands/phylum_init.md) command

1. Navigate to the directory of the relevant software project
2. Use the [CLI tool](../cli/quickstart.md) to initialize a Phylum project, the interactive prompt will default to the name of the directory, or you may specify the desired project name

```shellsession
❯ pwd
~/dev/a-phylum-demo

❯ phylum init
Project Name [default: a-phylum-demo]:

[ENTER] Confirm
Project Group: demo-group

[SPACE] Select  [ENTER] Confirm
Select your project's lockfiles and manifests: ./requirements.txt

✅ Successfully created project configuration
```

Notice that the command created a [`.phylum_project` file](./phylum_project_files.md) in the working directory:

```shellsession
❯ cat .phylum_project
id: 49158d65-76aa-46f2-89f3-6a50419cfc3d
name: a-phylum-demo
created_at: 2023-07-21T19:16:44.830526-05:00
group_name: demo-group
lockfiles:
- path: ./requirements.txt
  type: pip
```

---

#### Via [`phylum project`](../cli/commands/phylum_project.md) command

1. Navigate to the directory of the relevant software project
2. Use the [CLI tool](../cli/quickstart.md) to create a new Phylum project

Note: This will create a [`.phylum_project` file](./phylum_project_files.md) in the current directory

Example:

```sh
phylum project create sample
```

### Phylum-CI

The [`phylum-ci` tool](https://pypi.org/project/phylum/) accepts a `--project` option to explicitly provide the name of a Phylum project to create and use to perform the analysis. You can also specify this option's value in the [`.phylum_project` file](./phylum_project_files.md). A project name provided as an input option will be preferred over an entry in the `.phylum_project` file.

When no project name is provided through options or project file, a project name will be provided by detecting the git repository name. The goal is a unique and deterministic project name for each git repository submitted by the same Phylum user account.

Each of the examples here result in the same `sample` project used and created if it doesn't already exist:

```sh
# Execute `phylum-ci` specifying a project named "sample"
phylum-ci --project sample

# A `.phylum_project` file exists with an entry of `name: sample`
phylum-ci

# No `.phylum_project` file exists, but the git repository name is `sample`
phylum-ci
```

### GitHub App

1. The [Phylum GitHub App](../integrations/github_app.md) will automatically create a Phylum project when monitoring is activated for a given repository. The Phylum project will be assigned the same name as the repository.

### Phylum Web App

The [Phylum web app](https://app.phylum.io/) allows for project creation from the `Projects` tab of the main page:

1. Click the `New Project` button
2. Provide a project name
3. Optionally provide a default label, a group, and lockfiles
4. Click the `Create` button

## FAQ

### Can Phylum projects be shared with other accounts?

Yes! This feature is available to Pro users via [groups](../knowledge_base/groups.md).
