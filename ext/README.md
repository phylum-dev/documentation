# External (ext) repositories

This directory is meant to serve as the location for hosting all git submodules.

## Adding repositories

New submodules added should have a name/path that matches the source repository
name. The specified URL should be relative to this repository.

Since it is not possible to only add specific paths from these submodules, the
intent is to have the entire repository located in this directory and a symbolic
link made to the specific "doc" directory needed to pull in the files needed to
build the documentation website. Those symbolic links should be made by changing
into the `docs` directory and naming the link the same as the repository name.
For example, the process of adding the `phylum-dev/cli` repository's docs was:

```sh
git submodule add ../cli.git ext/cli
git submodule update --remote
cd docs
ln -s ../ext/cli/docs cli
```

## Editing external repositories

Editing content directly from within the `ext` directory is not recommended. It
is expected that changes to the content in git submodules will be made in the
source repository instead. Updates from those remote repositories can be brought
in with this command:

```sh
git submodule update --remote

# If there are changes meant to be included for other consumers of this repo:
git add ext/
git commit -m "update submodules"
```

## References

Working with git submodules can be tricky. It is recommended to learn about them
by reading the following resources:

* ["Submodules" Chapter of Git Book](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
* [`git submodule` command reference](https://git-scm.com/docs/git-submodule)
* [`.gitmodules` property reference](https://git-scm.com/docs/gitmodules)
