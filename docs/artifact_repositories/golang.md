# Phylum Golang Proxy

The Phylum Golang proxy is based on Golang's [Proxy API].

[Proxy API]: https://go.dev/ref/mod#goproxy-protocol

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

### `go`

To use the Phylum Golang proxy, you just need to set the `GOPROXY` environment variable:

```sh
export GOPROXY="https://<PHYLUM_ORG>%2F<PHYLUM_GROUP>:<PHYLUM_API_KEY>@golang.phylum.io"
```

> ⚠️ **WARNING** ⚠️
>
> Do not accidentally save your token into your shell history.

A blocked package will show up in `go` output as missing:

```text
go: github.com/malicious: no matching versions for query "upgrade"
```

Alternatively, if a specific version was requested:

```text
go: github.com/malicious@v1.2.3: reading https://golang.phylum.io/github.com/malicious/@v/v1.2.3.info: 424 Failed Dependency
```

If a version range is accepted by the manifest, the package manager will
automatically attempt to use a version that passes Phylum's policy.
