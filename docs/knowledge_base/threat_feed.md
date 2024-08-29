# Threat Feed

The Phylum threat feed provides a curated view into malware being released across the open source ecosystems that we monitor. Packages that appear on this feed originate from our automated risk analysis platform, before being triaged and reviewed by a team of security researchers. This produces a timely, high signal feed of threats; [packages now attributed to North Korean state actors](https://blog.phylum.io/sophisticated-ongoing-attack-discovered-on-npm/) appeared on this threat feed before publication of our research article.

> ℹ️ The threat feed is not part of the Phylum Community edition.

## Quickstart

1. Obtain an [API key](../knowledge_base/api-keys.md) and set it as follows:

    ```bash
    PHYLUM_API=p0_...
    ```

2. Use your API key to retrieve the latest packages in the threat feed:

    ```bash
    curl https://threats.phylum.io -H "Authorization: Bearer $PHYLUM_API"
    ```

If you prefer [cursor based pagination](#cursor-based-pagination), the threat feed also supports this.

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

## Cursor Based Pagination
The threat feed supports cursor based pagination. By providing the `cursor` parameter you can iterate through the data in a guaranteed order. For example:

```bash
curl "https://threats.phylum.io/?cursor=84&per_page=10" -H "Authorization: Bearer $PHYLUM_API"
```

If additional rows exist, the response will include the next cursor in the `cursor` key:

```
{
  "cursor": 2722653,
  "packages": [
    {
      "created": "Wed, 28 Aug 2024 22:24:28 GMT",
      "ecosystem": "npm",
      "hashes": null,
      "indicators": {
        "npm_security_holding_rule": true,
        "triaged_malware_rule": true
      },
      "name": "@hishprorg/sequi-perspiciatis",
      "version": "0.0.1-security"
    },
    {
      "created": "Wed, 28 Aug 2024 23:29:13 GMT",
      "ecosystem": "npm",
      "hashes": null,
      "indicators": {
        "npm_security_holding_rule": true,
        "triaged_malware_rule": true
      },
      "name": "@hishprorg/necessitatibus-minus-quos",
      "version": "0.0.1-security"
    }
  ]
}
```
