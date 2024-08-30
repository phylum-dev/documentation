# Phylum Project Files

The `.phylum_project` file is a configuration file containing information about, you guessed it, the Phylum project at that level of the filesystem hierarchy. There is usually a single `.phylum_project` file for a given repository, located at the root of the repository. It is also possible to have multiple `.phylum_project` files within a repository. This may be desirable for monorepos.

## Background

A `.phylum_project` file is not mandatory but it does help to share Phylum project information between developers. They are recognized and used by each of the Phylum analysis solutions, usually to prevent manual entry of common inputs. In particular, the list of dependency files to include for analysis of the project. This is a comprehensive allowlist, with no current mechanism for specifying files to include or exclude by pattern. That is, an update to the configuration file is needed when the list of dependency files meant to be analyzed changes.

The content of `.phylum_project` files is represented in YAML. Here is what one looks like, as taken from [the `phylum-ci` project][phylum-ci_gh]:

```yaml
id: 56f7f1b0-7f63-47a4-9f5e-8194772b2e13
name: phylum-ci
created_at: 2024-06-28T10:11:12.990575-05:00
group_name: phylum_bot
depfiles:
- path: ./poetry.lock
  type: poetry
```

[phylum-ci_gh]: https://github.com/phylum-dev/phylum-ci

## Creation

The `.phylum_project` file is created initially with the [`phylum init`][phylum_init] or [`phylum project create`][phylum_project_create] commands of the [Phylum CLI][cli]. It can also be created with the [`phylum-ci` tool][phylum_pypi], but that is more of a side effect of it's operation when a `.phylum_project` file does not already exist. Once created, the file is meant to be checked into version control.

[phylum_init]: ../cli/commands/phylum_init.md
[phylum_project_create]: ../cli/commands/phylum_project_create.md
[cli]: ../cli/quickstart.md
[phylum_pypi]: https://pypi.org/project/phylum/

## Updates

Manual updates to the `.phylum_project` file are possible but it is most easily updated by using the [`phylum init` command][phylum_init] again, which will retain the existing `id` when the project/group name pairing matches existing values.

The interactive dependency file selection process provided by the `phylum init` command is useful for enumerating all recognized files, taking into account some common ignore files like `.gitignore` and `.ignore`. The automated selection is currently configured to look up to five (5) levels deep for dependency files and will otherwise follow the [ignore rules documented here][ignore_rules].

It is possible to "preview" the list of dependency files automatically recognized by this process with the [`phylum status` command][phylum_status]. That command defaults to reading any existing values in a `.phylum_project` file.

> 💡 **TIP** 💡
>
> To get the same list of dependency files that would be seen when running the `phylum init` command but without potentially overwriting the file, temporarily rename existing `.phylum_project` files.

[ignore_rules]: https://docs.rs/ignore/latest/ignore/struct.WalkBuilder.html#ignore-rules
[phylum_status]: ../cli/commands/phylum_status.md
