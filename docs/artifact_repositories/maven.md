# Phylum Maven Registry

The Phylum Maven registry is based on [Maven central].

[Maven central]: https://maven.apache.org/repositories/index.html

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

### `mvn`

The Phylum authorization header expects a token in Base64, so you first need to
convert your Phylum org, group, and API key:

```sh
printf "<PHYLUM_ORG>/<PHYLUM_GROUP>:<PHYLUM_API_KEY>" | base64
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
      <name>Phylum</name>
      <url>https://maven.phylum.io</url>
      <mirrorOf>central</mirrorOf>
    </mirror>
  </mirrors>
</settings>
```

A blocked package will show up in `mvn` output as missing:

```text
[INFO] ------------------------------------------------------------------------
[INFO] BUILD FAILURE
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  6.871 s
[INFO] Finished at: 2024-10-29T18:44:40+01:00
[INFO] ------------------------------------------------------------------------
[ERROR] Failed to execute goal on project demo: Could not collect dependencies for project io.phylum:demo:jar:1.0-SNAPSHOT
[ERROR] Failed to read artifact descriptor for commons-io:commons-io:jar:2.17.0
[ERROR]     Caused by: The following artifacts could not be resolved: commons-io:commons-io:pom:2.17.0 (absent): Could not transfer artifact commons-io:commons-io:pom:2.17.0 from/to phylum (https://maven.phylum.io): status code: 424, reason phrase: Failed Dependency (424)
[ERROR]
[ERROR] -> [Help 1]
[ERROR]
[ERROR] To see the full stack trace of the errors, re-run Maven with the -e switch.
[ERROR] Re-run Maven using the -X switch to enable full debug logging.
[ERROR]
[ERROR] For more information about the errors and possible solutions, please read the following articles:
[ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/DependencyResolutionException
```

If a version range is accepted by the manifest, the package manager will
automatically attempt to use a version that passes Phylum's policy.
