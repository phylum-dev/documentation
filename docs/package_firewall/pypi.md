# PyPI Package Firewall

The PyPI package firewall is based on Python's [Simple repository API].

[Simple repository API]: https://packaging.python.org/en/latest/specifications/simple-repository-api/

## Configuration

All configuration options will require a Phylum API key, since Phylum's package
firewall requires authentication. You can find out how to generate one in our
[API Keys documentation].

In the following examples, all API keys will be represented as
`<PHYLUM_API_KEY>`, so make sure to replace them with your generated key.

Additionally, if the default policy is not sufficient, a group can be passed to
evaluate all packages against the group's policy. To do this, just replace
`<PHYLUM_GROUP>` with the desired group name. The supplied API key **must** have
access to this group.

If Phylum's default [policy] is sufficient, you can remove all instances of
`<PHYLUM_GROUP>`.

[API Keys documentation]: ../knowledge_base/api-keys.md#generate-an-api-key
[policy]: ../knowledge_base/policy.md

### pip

The easiest way to install a package using the PyPI package firewall is using
pip's `--index-url` option:

```sh
pip install --index-url https://<PHYLUM_GROUP>:<PHYLUM_API_KEY>@pypi.phylum.io/simple/ <requirement specifier>
```

To make this permanent for all pip invocations, you can add it to the pip
configuration:

```sh
pip config set global.index-url https://<PHYLUM_GROUP>:<PHYLUM_API_KEY>@pypi.phylum.io/simple/
```

> ⚠️ **WARNING** ⚠️
>
> Do not accidentally save your token into your shell history.

A blocked package will show up in `pip` as missing:

```text
ERROR: Could not find a version that satisfies the requirement <malicious> (from versions: none)
ERROR: No matching distribution found for <malicious>
```

### Poetry

With Poetry, the source URL can be configured per-project in the
`pyproject.toml` by using the following command from within the project
directory:

```sh
poetry source add phylum https://pypi.phylum.io/simple/
poetry config http-basic.phylum "<PHYLUM_GROUP>" "<PHYLUM_API_KEY>"
```

> ⚠️ **WARNING** ⚠️
>
> Do not accidentally save your token into your shell history.

A blocked package will show up in `poetry` as missing:

```text
Could not find a matching version of package <malicious>
```
