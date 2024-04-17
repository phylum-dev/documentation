# Search

## Global Search
The Phylum UI offers a search bar allowing you to search by projects, packages in your projects, and packages in the Phylum database. Additionally, you can provide a CVE ID and Phylum will determine the affected packages/versions and return any relevant projects.

## Project Filtering

The search bar in the project details view can be used to filter display results using the syntax in the table below:

| Filter | Value | Example | Result | Description |
| --- | --- | --- | --- | --- |
| `CVSS:` | number | `CVSS:10` | Display policy violations with a CVSS score of 10.0 | Display policy violations with the exact specified CVSS score |
| `CVSS:` | number-number | `CVSS:8.5-10` | Display policy violations with a score falling between 8.5 and 10.0 | Display policy violations with a CVSS score in the specified range |
| `domain:` <br> `d:`| A, author, auth <br> E, engineering, eng <br> L, license,lic <br> M, malicious, mal  <br> V, vulnerability, vuln | `domain:M` <br> `d:mal,auth` | Display policy violations in the `Malicous Code` domain <br> Display policy violations in either the `Malicious Code` or `Author Risk` domains | Display policy violations of the specified domain |
| `severity:`  <br> `s:` | C, critical <br> H, high <br> M, medium <br> L, low | `severity:C` <br> `s:critical,high` | Display violations with a `Critical` severity <br> Display violations with either a `Critical` or `High` severity | Display policy violations of the specified severity |
| `tag:` <br> `t:` | [Issue tag] prefix | `tag:H_` <br> `t:CV, _M` | Display all policy violations with `High` severity <br> Display policy violations for `Critical Vulnerabilities` or `Malicious Code` | Display policy violations using the issue tag prefix syntax |
| | [Issue tag] id | `CM0038` | Display policy violations with the `CM0038` issue tag | Display policy violations with the specified issue tag id |
| | CVE ID | `CVE-2020-14343` | Display policy violations for `CVE-2020-14343` | Display policy violations with the specified CVE ID |
| | | `CA0001 \| CM0038 \| CVE-2020-14343` | Display policy violations with either the `CA0001` or `CM0038` tag or `CVE-2020-14343` | Apply multiple filters using the `\|` delimiter |

[Issue tag]:https://docs.phylum.io/knowledge_base/issue_tags
