# Phylum RubyGems Registry

The Phylum RubyGems registry is based on Ruby's [compact index API].

[compact index API]: https://guides.rubygems.org/rubygems-org-compact-index-api

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

### `bundle`

A mirror for Ruby's default repository can be configured using `bundle config`.
We define a fallback timeout of `9999` to prevent Ruby from silently falling
back to the official registry should Phylum's mirror go down.

```sh
bundle config set --global mirror.https://rubygems.org https://rubygems.phylum.io
bundle config set --global mirror.https://rubygems.org.fallback_timeout 9999
```

After setting up the mirror, you also need to provide Phylum's group and API key
for authorization:

```sh
bundle config set --global rubygems.phylum.io <PHYLUM_GROUP>:<PHYLUM_API_KEY>
```

> ⚠️ **WARNING** ⚠️
>
> Do not accidentally save your token into your shell history.

A blocked package will show up in `bundle` output as missing:

```text
Could not find gem 'bad_gem' with platform 'x86_64-linux' in rubygems repository https://rubygems.org/ or installed locally.
```
