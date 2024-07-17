# NPM Package Firewall

The NPM package firewall is based on NPM's [Public Registry API].

[Public Registry API]: https://github.com/npm/registry/blob/main/docs/REGISTRY-API.md

## Configuration

All configuration options will require a Phylum API key, since Phylum's package
firewall requires authentication. You can find out how to generate one in our
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

### npm

Custom NPM registries can be configured with npm:

```sh
npm config set registry https://<PHYLUM_GROUP>:<PHYLUM_API_KEY>@npm.phylum.io/
```

> ⚠️ **WARNING** ⚠️
>
> Do not accidentally save your token into your shell history.

A blocked package will show up in `npm` as missing:

```text
npm error code E404
npm error 404 Not Found - GET http://:***@npm.phylum.io/<malicious>
npm error 404
npm error 404  '<malicious>@*' is not in this registry.
npm error 404
npm error 404 Note that you can also install from a
npm error 404 tarball, folder, http url, or git url.
```

Alternatively, if only a specific version is affected:

```text
npm error code ETARGET
npm error notarget No matching version found for <malicious>@<version>.
npm error notarget In most cases you or one of your dependencies are requesting
npm error notarget a package version that doesn't exist.
```
