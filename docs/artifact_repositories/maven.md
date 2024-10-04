# Phylum Maven Registry

The Phylum Maven registry is based on [Maven central].

[Maven central]: https://maven.apache.org/repositories/index.html

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

### `mvn`

The Phylum authorization header expects a token in Base64, so you first need to
convert your Phylum group and API key:

```sh
printf "<PHYLUM_GROUP>:<PHYLUM_API_KEY>" | base64
```

> ⚠️ **WARNING** ⚠️
>
> Do not accidentally save your token into your shell history.

Custom Maven registries can be configured in the `${user.home}/.m2/settings.xml`
file. Replace `[BASE64_OUTPUT]` in this XML with the token you've created in the
previous step:

```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                      http://maven.apache.org/xsd/settings-1.0.0.xsd">
  <servers>
    <server>
      <id>phylum</id>
      <configuration>
        <httpHeaders>
          <property>
            <name>Authorization</name>
            <value>Basic [BASE64_OUTPUT]</value>
          </property>
        </httpHeaders>
      </configuration>
    </server>
  </servers>

  <mirrors>
    <mirror>
      <id>phylum</id>
      <name>Phylum Aviary</name>
      <url>https://maven.phylum.io</url>
      <mirrorOf>central</mirrorOf>
    </mirror>
  </mirrors>
</settings>
```

A blocked package will show up in `mvn` output as missing:

```text
!TODO!
```

Alternatively, if only a specific version is affected:

```text
!TODO!
```

If a version range is accepted by the manifest, the package manager will
automatically attempt to use a version that passes Phylum's policy.
