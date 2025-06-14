# Phylum PyPI Registry

The Phylum PyPI registry is based on Python's [Simple repository API].

[Simple repository API]: https://packaging.python.org/en/latest/specifications/simple-repository-api/

## Configuration

All configuration options will require a Phylum API key, since Phylum requires
authentication. You can find out how to generate one in our
[API Keys documentation].

In the following examples, all API keys will be represented as
`<PHYLUM_API_KEY>`, so make sure to replace them with your generated key.

Additionally, if the default policy is not sufficient, a group can be passed to
evaluate all packages against the group's policy. To do this, just replace
`<PHYLUM_ORG>` and `<PHYLUM_GROUP>` with the desired org and group name. The
supplied API key **must** have access to this group.

If Phylum's default [policy] is sufficient, you can omit the username from the
authentication details.

[API Keys documentation]: ../knowledge_base/api-keys.md#generate-an-api-key
[policy]: ../knowledge_base/policy.md

### `pip`

The easiest way to install a package using the Phylum PyPI registry is using
`pip`'s `--index-url` option:

```sh
pip install --index-url https://<PHYLUM_ORG>%2F<PHYLUM_GROUP>:<PHYLUM_API_KEY>@pypi.phylum.io/simple/ <requirement specifier>
```

To make this permanent for all `pip` invocations, you can add it to the `pip`
configuration:

```sh
pip config set global.index-url https://<PHYLUM_ORG>%2F<PHYLUM_GROUP>:<PHYLUM_API_KEY>@pypi.phylum.io/simple/
```

> ⚠️ **WARNING** ⚠️
>
> Do not accidentally save your token into your shell history.

A blocked package will show up in `pip` output as missing:

```text
ERROR: Could not find a version that satisfies the requirement <malicious> (from versions: none)
ERROR: No matching distribution found for <malicious>
```

If a version range is accepted by the manifest, the package manager will
automatically attempt to use a version that passes Phylum's policy.

### `poetry`

With Poetry, the source URL can be configured per-project in the
`pyproject.toml` file by using the following commands from within the project
directory:

```sh
poetry source add --priority primary phylum https://pypi.phylum.io/simple/
poetry config http-basic.phylum "<PHYLUM_ORG>%2F<PHYLUM_GROUP>" "<PHYLUM_API_KEY>"
```

> ⚠️ **WARNING** ⚠️
>
> Do not accidentally save your token into your shell history.

A blocked package will show up in `poetry` output as missing:

```text
Could not find a matching version of package <malicious>
```

If **all** versions of a package are blocked, it will be explicitly pointed out
as having failed analysis:

```text
424 Client Error: Failed Dependency for url: https://pypi.phylum.io/simple/malicious/
```

If a version range is accepted by the manifest, the package manager will
automatically attempt to use a version that passes Phylum's policy.
