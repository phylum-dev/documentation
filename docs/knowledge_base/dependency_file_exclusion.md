# Dependency File Exclusion

Analyzing dependencies with Phylum is possible with one of four primary solutions:

* The [Phylum CLI][cli]
* The [`phylum-ci` tool][phylum_pypi], usually in the form of [integrations]
* The [Phylum GitHub app][gh_app]
* The [Phylum web app][phylum_ui]

Each of these solutions take dependency files (lockfiles and manifests) as input to produce analysis outputs. This page describes the methods in place to allow for excluding dependency files so they won't be included in the analysis.

Dependency file exclusion may be desired for any number of reasons:

* A repository containing test fixtures that should not be considered
* A monorepo incrementally adopting Phylum, adding one sub-repo at a time
* Vendored dependencies with their own manifests
* Manifests that fail the [lockfile generation][lockfile_gen] process

Whatever the reason, Phylum seeks to provide exclusion methods.

[cli]: ../cli/quickstart.md
[phylum_pypi]: https://pypi.org/project/phylum/
[integrations]: ../integrations/integrations_overview.md
[gh_app]: ../integrations/github_app.md
[phylum_ui]: https://app.phylum.io
[lockfile_gen]: ../cli/lockfile_generation.md

## Phylum CLI

Dependency analysis with the [Phylum CLI][cli] is accomplished with the [`phylum analyze` command][phylum_analyze]. The command uses the following priority order to determine which dependency files will be analyzed:

1. `DEPENDENCY_FILE` argument value(s)
2. Dependency files in [the `.phylum_project` file][phylum_project_file]
3. Recursive filesystem search

The first method from the list yielding dependency files will be used and no further search will be done. The recursive filesystem search will look up to five (5) levels deep and takes common ignore files like `.gitignore` and `.ignore` into account. See the [gitignore-style pattern formats][gitignore_patterns] to use in these files and the [full ignore rules documented here][ignore_rules].

See the [examples section][example_anchor] for more detailed use case scenarios and patterns to use in ignore files recognized by the Phylum CLI.

[phylum_analyze]: ../cli/commands/phylum_analyze.md
[phylum_project_file]: ./phylum_project_files.md
[gitignore_patterns]: https://git-scm.com/docs/gitignore#_pattern_format
[ignore_rules]: https://docs.rs/ignore/latest/ignore/struct.WalkBuilder.html#ignore-rules
[example_anchor]: #examples

## Phylum-CI

The `phylum-ci` script entry point of the [`phylum` Python package][phylum_pypi] allows for wrapping the functionality of the [Phylum CLI][cli], but with an eye towards operating in CI environments and allowing for a more fully automated experience. Like the [Phylum CLI described already][cli_anchor], the `phylum-ci` tool makes use of a priority ordering of methods to determine which dependency files to analyze:

1. `--depfile` argument value(s)
2. Dependency files in [the `.phylum_project` file][phylum_project_file]
3. Recursive filesystem search

The first of these methods to yield dependency file will be used and no further search will be done.

An `--exclude` option exists to filter the list of dependency files detected (methods 2 and 3) when they aren't specified explicitly by argument (method 1). This option takes [gitignore-style exclusion patterns][gitignore_patterns] and can be specified multiple times. The `EXCLUDE` patterns should be specified in quotes to prevent shell globbing. The patterns are applied relative to the current `phylum-ci` working directory.

There are the various ways exclusions can be provided, shown here with the `phylum-ci` tool used locally:

```sh
## Specify a single gitignore-style exclusion pattern
phylum-ci -vv --all-deps --force-analysis --exclude "requirements-*.txt"

## The same command can be written with short options
phylum-ci -vvafe "requirements-*.txt"

## Specify multiple exclusion patterns with the same option
phylum-ci -vvafe "build.gradle" "tests/fixtures/"

## Specify multiple exclusion patterns with multiple options
phylum-ci -vvafe "/requirements-*.txt" -e "build.gradle" "fixtures/"
```

There are slight variations in how to format these commands for each environment where `phylum-ci` is used. See the [integrations documentation][integrations] for your specific use case. See the [examples section][example_anchor] for more detailed use case scenarios and patterns.

[cli_anchor]: #phylum-cli

## GitHub App

The [Phylum GitHub app][gh_app] does not currently offer a flexible method for identifying dependency file exclusions. It does account for the existence of [a `.phylum_project` file][phylum_project_file]. The downside of this approach is that it is an allowlist, with no current mechanism for specifying exclusions. Every file to be included in analysis has to be listed in the `.phylum_project` file in order to ensure those not listed are not included.

## Phylum Web App

The [Phylum web app][phylum_ui] can be used to specify individual lockfiles (it does not handle manifests) to analyze. Lockfile selection is a manual process so excluding files means simply not selecting them.

## Examples

This section contains examples applied against a completely fictitious repository, which has the following directory and file structure:

```text
 src/
 ├─ build.gradle
 └─ requirements-dev.txt
 sub_repo_1/
 ├─ fixtures/
 │  └─ package.json
 ├─ requirements.txt
 └─ sub_repo_bom.xml
 sub_repo_2/
 ├─ build.gradle.kts
 ├─ Cargo.lock
 └─ Cargo.toml
 tests/
 ├─ fixtures/
 │  ├─ a/
 │  │  ├─ Gemfile
 │  │  └─ go.mod
 │  ├─ b/
 │  │  └─ example.csproj
 │  ├─ build.gradle
 │  ├─ effective-pom.xml
 │  └─ pyproject.toml
 └─ requirements-test.txt
 vendor/
 ├─ package.json
 └─ yarn.lock
 poetry.lock
 project_bom.spdx.json
 pyproject.toml
 requirements.txt
```

Without any filtering in place, the [Phylum CLI][cli] identifies the following dependency files from the example repository:

```shellsession
❯ phylum status
Project: null
Group: null
Project Root: null
Dependency Files:
 - path: ./sub_repo_1/requirements.txt
   type: pip
 - path: ./sub_repo_1/sub_repo_bom.xml
   type: cyclonedx
 - path: ./requirements.txt
   type: pip
 - path: ./tests/requirements-test.txt
   type: pip
 - path: ./tests/fixtures/effective-pom.xml
   type: mvn
 - path: ./tests/fixtures/b/example.csproj
   type: msbuild
 - path: ./sub_repo_2/Cargo.lock
   type: cargo
 - path: ./project_bom.spdx.json
   type: spdx
 - path: ./poetry.lock
   type: poetry
 - path: ./vendor/yarn.lock
   type: yarn
 - path: ./src/requirements-dev.txt
   type: pip
 - path: ./tests/fixtures/a/go.mod
   type: gomod
 - path: ./sub_repo_1/fixtures/package.json
   type: npm
 - path: ./tests/fixtures/a/Gemfile
   type: gem
 - path: ./tests/fixtures/build.gradle
   type: gradle
 - path: ./src/build.gradle
   type: gradle
 - path: ./sub_repo_2/build.gradle.kts
   type: gradle
```

Here are some ignore patterns that can be applied against this example repository, along with the effect they have:

| Pattern / Effect | Excluded Files |
| ------- | -------------- |
| `requirements*.txt` <br> Exclude all Python lockifests anywhere | `requirements.txt` <br> `src/requirements-dev.txt` <br> `sub_repo_1/requirements.txt` <br> `tests/requirements-test.txt` |
| `requirements-*.txt` <br> Exclude Python lockifests anywhere in the repo matching a specific pattern | `src/requirements-dev.txt` <br> `tests/requirements-test.txt` |
| `requirements.txt` <br> Exclude Python lockifests anywhere when specifically named "requirements.txt" | `requirements.txt` <br> `sub_repo_1/requirements.txt` |
| `/requirements.txt` <br> Exclude the Python lockifest at the root of the repo and nowhere else | `requirements.txt` |
| `build.gradle*` <br> Exclude all Gradle manifests anywhere | `src/build.gradle` <br> `sub_repo_2/build.gradle.kts` <br> `tests/fixtures/build.gradle` |
| `build.gradle` <br> Exclude Gradle manifests anywhere when specifically named "build.gradle" | `src/build.gradle` <br> `tests/fixtures/build.gradle` |
| `sub_repo_2/` <br> Exclude the entire "sub_repo_2" directory | `sub_repo_2/build.gradle.kts` <br> `sub_repo_2/Cargo.lock` |
| `vendor/` <br> Exclude an entire directory of vendored dependencies named "vendor" | `vendor/yarn.lock` |
| `fixtures/` <br> Exclude all dependency files under any directory named "fixtures" | `sub_repo_1/fixtures/package.json` <br> `tests/fixtures/build.gradle` <br> `tests/fixtures/effective-pom.xml` <br> `tests/fixtures/a/Gemfile` <br> `tests/fixtures/a/go.mod` <br> `tests/fixtures/b/example.csproj` |
| `sub_repo_*/fixtures/` <br> Exclude "fixtures" directories located at the "root" of any sub repo | `sub_repo_1/fixtures/package.json` |

The [gitignore-style exclusion patterns][gitignore_patterns] are applied relative to the directory in which they are specified. That could be the location of an ignore file or the working directory in the case of patterns supplied as command arguments.
