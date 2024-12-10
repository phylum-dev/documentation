# Phylum NPM Registry

The Phylum NPM registry is based on NPM's [Public Registry API].

[Public Registry API]: https://github.com/npm/registry/blob/main/docs/REGISTRY-API.md

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

### `npm` and `pnpm`

Both `npm` and `pnpm` allow setting custom NPM registries using `npm`:

```sh
npm config set replace-registry-host never
npm config set registry https://<PHYLUM_ORG>%2F<PHYLUM_GROUP>:<PHYLUM_API_KEY>@npm.phylum.io/
```

> ⚠️ **WARNING** ⚠️
>
> Do not accidentally save your token into your shell history.

A blocked package will show up in `npm` output as missing:

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

If you're using `pnpm`, the output will look like this:

```text
 ERR_PNPM_NO_VERSIONS  No versions available for malicious. The package may be unpublished.

This error happened while installing a direct dependency of /tmp/testing
```

If a version range is accepted by the manifest, the package manager will
automatically attempt to use a version that passes Phylum's policy.

### `yarn`

Custom NPM registries can be configured with `yarn`:

```sh
yarn config set -H npmRegistryServer "https://npm.phylum.io/"
yarn config set -H npmAuthIdent "<PHYLUM_ORG>/<PHYLUM_GROUP:<PHYLUM_API_KEY>"
yarn config set -H npmAlwaysAuth true
```

> ⚠️ **WARNING** ⚠️
>
> Do not accidentally save your token into your shell history.

A blocked package will show up in `yarn` output as missing:

```text
➤ YN0027: malicious@unknown can't be resolved to a satisfying range
➤ YN0001: TypeError: Cannot read properties of undefined (reading 'dist')
    at Fv.getCandidates (/home/chris/.cache/node/corepack/v1/yarn/4.5.3/yarn.js:688:7154)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async Pg.getCandidates (/home/chris/.cache/node/corepack/v1/yarn/4.5.3/yarn.js:141:1271)
    at async uH (/home/chris/.cache/node/corepack/v1/yarn/4.5.3/yarn.js:401:9441)
    at async /home/chris/.cache/node/corepack/v1/yarn/4.5.3/yarn.js:401:8776
    at async C (/home/chris/.cache/node/corepack/v1/yarn/4.5.3/yarn.js:401:7127)
    at async T2 (/home/chris/.cache/node/corepack/v1/yarn/4.5.3/yarn.js:401:8456)
    at async /home/chris/.cache/node/corepack/v1/yarn/4.5.3/yarn.js:402:531
    at async Promise.all (index 0)
    at async /home/chris/.cache/node/corepack/v1/yarn/4.5.3/yarn.js:402:488

➤ Errors happened when preparing the environment required to run this command.

TODO: OR MAYBE THIS?

➤ YN0027: malicious@unknown can't be resolved to a satisfying range
➤ YN0035: Package not found
➤ YN0035:   Response Code: 404 (Not Found)
➤ YN0035:   Request Method: GET
➤ YN0035:   Request URL: https://npm.phylum.io/malicious

➤ Errors happened when preparing the environment required to run this command.
```

Alternatively, if only a specific version is affected:

```text
➤ YN0000: · Yarn 4.5.3
➤ YN0000: ┌ Resolution step
➤ YN0082: │ malicious@npm:1.0.0: No candidates found
➤ YN0000: └ Completed in 4s 398ms
➤ YN0000: · Failed with errors in 4s 405ms
```
