# Threat Feed

The Phylum threat feed provides a curated view into malware being released across the open source ecosystems that we monitor. Packages that appear on this feed originate from our automated risk analysis platform, before being triaged and reviewed by a team of security researchers. This produces a timely, high signal feed of threats; [packages now attributed to North Korean state actors](https://blog.phylum.io/sophisticated-ongoing-attack-discovered-on-npm/) appeared on this threat feed before publication of our research article.

> ℹ️ The threat feed is its own subscription and is not part of either Phylum Pro or Phylum Community editions.

## Quickstart

1. Obtain an [API key](../knowledge_base/api-keys.md) and set it as follows:

    ```bash
    PHYLUM_API=p0_...
    ```

2. Use your API key to retrieve the latest packages in the threat feed:

    ```bash
    curl https://threats.phylum.io -H "Authorization: Bearer $PHYLUM_API"
    ```

## API Response

- `has_next` - `true` if there is another page available in the feed
- `has_previous` - `true` if there is a previous page in the feed
- `packages` - A list containing threat information

For example:

```json
{
  "has_next": (true|false),
  "has_previous": (true|false),
  "packages": [...]
}
```

Packages will contain the following top level keys:

- `created` - The date the package was published
- `ecosystem` - The ecosystem the package was published to
- `hashes` - The hashes for published package archives
- `indicators` - The indicators that identified this packages as a threat
- `name` - The name of the package
- `version` - The version of the package

Below is an example API response from the threat feed. The top-level keys are:

```json
{
  "has_next": true,
  "has_previous": false,
  "packages": [
    {
      "created": "Mon, 31 Jul 2023 00:52:09 GMT",
      "ecosystem": "npm",
      "hashes": [
        {
          "archive": "cz-react-ui-library-8.0.0.tgz",
          "hash": "1f9e0dd70cbd5928d41be7a1fb110e679b10ac41edafdaace8084e5d1031ca2a",
          "type": "SHA256"
        }
      ],
      "indicators": {
        "npm_hooks_rule": [
          "node index.js"
        ],
        "suspicious_url_references_rule": [
          {
            "file": "package/index.js",
            "urls": [
              "an OAST server"
            ]
          }
        ],
        "trivial_package_rule": true
      },
      "name": "cz-react-ui-library",
      "version": "8.0.0"
    },
  ...
  ]
}
```

## Additional Query Options

The threat feed API provides several parameters for interacting with the feed itself:

| Parameter | Description |
| --- | --- |
| `page` | Specifies the page of the feed to retrieve. |
| `per_page` | Specifies the number of items per page. The default is `25` and the upper limit is `50`. |
| `since` | Fetches items added to the feed since the given date. Must be in the form of `YYYY-MM-DD`, e.g. `2023-06-18`. |

For example, if you want to limit the items per page to 3 since July 19, 2023 you would perform a `GET` request to:

```text
https://threats.phylum.io/?per_page=3&since=2023-07-19
```

## Package Lookup Endpoint

The threat feed API provides a package lookup endpoint that details information about a specific package, including its malware status, risk scores, and a list of identified issues. This endpoint is designed to fetch information based on a combination of ecosystem, package name, and version.

### Endpoint

`GET https://threats.phylum.io/<ecosystem>/<name>/<version>`

### Parameters

- `ecosystem`: The package ecosystem (one of: `pypi`, `npm`, `maven`, `rubygems`, `nuget`, `golang`, or `cargo`).
- `name`: The name of the package.
- `version`: The version of the package.

### Response Structure

The response is a JSON object containing the following keys:

- `code`: The HTTP status code.
- `malware`: A boolean indicating if the package has been triaged as malware.
- `riskScores`: An object containing risk scores for each of the 5 Phylum risk domains associated with the package.
- `issues`: An object listing all identified issues and vulnerabilities related to the package. The details included with each issue will depend on the nature of the issue.

#### Issues Object

Each entry in the `issues` object is keyed by the issue type (e.g., vulnerability identifier, rule name) and contains an object with the following details:

For vulnerabilities:

- `title`: The title of the vulnerability.
- `overview`: A brief overview of the vulnerability.
- `severity`: The severity level of the vulnerability.
- `recommendation`: Recommendations for addressing the vulnerability.

For rules, the details included will depend on the type of rule. For example, the `Compiled Binaries Rule` will include a list of the binary files and their paths within the package. The `Cargo Build File Rule` will simply contain a Boolean value of `true` indicating that a `build.rs` file is present in the package.

### Usage Example

Request:

`curl https://threats.phylum.io/pypi/adrmdr/0.1.0 -H "Authorization: Bearer $PHYLUM_API"`

Response:

```json
{
  "code": 200,
  "issues": {
    "Detect Python Obfuscation Rule": [
      {
        "file": "adrmdr/adrmdr.py",
        "type": "Hyperion"
      }
    ],
    "Triaged Malware Rule": true
  },
  "malware": true,
  "riskScores": {
    "author": 1.0,
    "engineering": 1.0,
    "license": 1.0,
    "malicious_code": 0.01,
    "total": 0.05,
    "vulnerability": 1.0
  }
}
```
