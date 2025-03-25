# Phylum NuGet Registry

The Phylum NuGet registry is based on NuGet's [Server API].

[Server API]: https://learn.microsoft.com/en-us/nuget/api/overview

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

### `dotnet`

To use the Phylum NuGet registry, the original nuget.org registry first needs to
be disabled:

```sh
dotnet nuget disable source nuget.org
```

Once the official registry is disabled, the Phylum source can be added. If
you're not running Windows, you'll also have to add the
`--store-password-in-clear-text` flag.

```sh
dotnet nuget add source https://nuget.phylum.io/v3/index.json \
    --protocol-version 3 \
    --name Phylum \
    --valid-authentication-types basic \
    --username <PHYLUM_ORG>/<PHYLUM_GROUP> \
    --password <PHYLUM_API_KEY>
```

> ⚠️ **WARNING** ⚠️
>
> Do not accidentally save your token into your shell history.

A blocked package will show up in `dotnet` output as missing:

```text
/Demo.csproj : error NU1102: Unable to find package Example.Vulnerable with version (= 1.2.3)
/Demo.csproj : error NU1102:   - Found 42 version(s) in Phylum [ Nearest version: 2.0.0 ]
```

If **all** versions of a package are blocked, it will be explicitly pointed out
as having failed analysis:

```text
error: NU1301: Failed to retrieve information about 'Example.Vulnerable' from remote source 'https://nuget.phylum.io/v3-flatcontainer/example.vulnerable/index.json'.
error:   Response status code does not indicate success: 424 ("example.vulnerable" failed Phylum analysis).
error: Value cannot be null. (Parameter 'version')
```

If a version range is accepted by the manifest, the package manager will
automatically attempt to use a version that passes Phylum's policy.

### `nuget`

To use the Phylum NuGet registry, the original nuget.org registry first needs to
be disabled:

```sh
nuget sources Disable -Name nuget.org
```

Once the official registry is disabled, the Phylum source can be added. If
you're not running Windows, you'll also have to add the
`--store-password-in-clear-text` flag.

```sh
nuget sources Add \
    -Source https://nuget.phylum.io/v3/index.json\
    -ProtocolVersion 3 \
    -Name Phylum
    -UserName <PHYLUM_ORG>/<PHYLUM_GROUP>
    -Password <PHYLUM_API_KEY>
```

> ⚠️ **WARNING** ⚠️
>
> Do not accidentally save your token into your shell history.

A blocked package will show up in `nuget` output as missing:

```text
Package 'Example.Vulnerable 1.2.3' is not found in the following primary source(s): 'https://nuget.phylum.io/v3/index.json'. Please verify all your online package sources are available (OR) package id, version are specified correctly.
```

If **all** versions of a package are blocked, it will be explicitly pointed out
as having failed analysis:

```text
Feeds used:
  https://nuget.phylum.io/v3/index.json

Installing package 'Example.Vulnerable' to '/private/tmp/path'.
  GET https://nuget.phylum.io/v3/registration5-gz-semver2/example.vulnerable/index.json
  FailedDependency https://nuget.phylum.io/v3/registration5-gz-semver2/example.vulnerable/index.json 2399ms
An error occurred while retrieving package metadata for 'Example.Vulnerable' from source 'Phylum'.
  Response status code does not indicate success: 424 ("example.vulnerable" failed Phylum analysis).
```

If a version range is accepted by the manifest, the package manager will
automatically attempt to use a version that passes Phylum's policy.
