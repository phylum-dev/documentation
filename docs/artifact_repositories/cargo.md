# Phylum Cargo Registry

The Phylum Cargo registry is based on Cargo's sparse [Registry Index API].

[Registry Index API]: https://doc.rust-lang.org/cargo/reference/registry-index.html

## Configuration

All configuration options will require a Phylum API key, since Phylum requires
authentication. You can find out how to generate one in our
[API Keys documentation].

In the following examples, all API keys will be represented as
`<PHYLUM_API_KEY>`, so make sure to replace them with your generated key.

Additionally, if the default [policy] is not sufficient, a group can be passed
to evaluate all packages against the group's policy. To do this, just replace
`<PHYLUM_GROUP>` with the desired group name. The supplied API key **must** have
access to this group.

If Phylum's default [policy] is sufficient, you can remove all instances of
`<PHYLUM_GROUP>`.

[API Keys documentation]: ../knowledge_base/api-keys.md#generate-an-api-key
[policy]: ../knowledge_base/policy.md

### `cargo`

To use the Phylum Cargo registry, it first needs to be added to a
[`.cargo/config.toml` file]. On UNIX you can use `~/.cargo/config.toml` to make
the registry available to all projects.

```toml
[registries]
phylum = { index = "sparse+https://cargo.phylum.io/" }
```

This makes the Phylum registry available to all Cargo projects, however by
default Cargo will still use the official registry. To ensure all requests go
through Phylum, you'll have to override the [crates.io] registry in the
[`.cargo/config.toml` file]. This can be a project's Cargo config if you do not
wish to globally run every install through Phylum.

The easiest way to enable Phylum is by replacing the [crates.io] source with
Phylum's registry. This has the advantage of creating `Cargo.toml` and
`Cargo.lock` files that are identical to the ones created for the official
registry.

```toml
[source.crates-io]
replace-with = "phylum"
```

Since replacing the Cargo source prevents you from using the official registry,
this is unsuitable if certain packages should still be installable without going
through Phylum. In this case you can just set Phylum to be the default registry
instead:

```toml
[registry]
default = "phylum"
```

Since Phylum's registry requires authentication, you'll also need to configure a
credential provider in your [`.cargo/config.toml` file]:

```toml
[registry]
global-credential-providers = ["cargo:token"]
```

Once the file-based `cargo:token` credential provider is configured, you can add
your authentication details to the [`.cargo/credentials.toml` file].

The Phylum group and API key first need to be converted to Base64:

```text
printf "<PHYLUM_GROUP>:<PHYLUM_API_KEY>" | base64
```

> ⚠️ **WARNING** ⚠️
>
> Do not accidentally save your token into your shell history.

Once converted to Base64, you can add it as a basic authentication token to your
credentials:

```toml
[registries.phylum]
token = "Basic <BASE64_OUTPUT>"
```

[`.cargo/config.toml` file]: https://doc.rust-lang.org/cargo/reference/config.html
[`.cargo/credentials.toml` file]: https://doc.rust-lang.org/nightly/cargo/reference/config.html#credentials

A blocked package will show up in `cargo` output as missing:

```text
    Updating `phylum` index
error: no matching package named `libc` found
location searched: registry `phylum`
required by package `testing v0.1.0 (/tmp/testing)`
```

Alternatively, if a specific version constraint matches the blocked version:

```text
    Updating `phylum` index
error: failed to select a version for the requirement `libc = "=0.2.155"`
candidate versions found which didn't match: 0.2.158, 0.2.157, 0.2.156, ...
location searched: `phylum` index
required by package `testing v0.1.0 (/tmp/testing)`
```

If a version range is accepted by the manifest, the package manager will
automatically attempt to use a version that passes Phylum's policy.

[crates.io]: https://crates.io
