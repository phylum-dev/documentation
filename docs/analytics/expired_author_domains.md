# Expired Author Domains

## Description

Email addresses are ubitquitously used as identifiers for authentication to package registries like NPM, PyPI, et al. An [email address](https://en.wikipedia.org/wiki/Email_address) itself is of the form _local-part@domain_, where the [domain](https://en.wikipedia.org/wiki/Domain_name), like `gmail.com`, refers to a location on the internet. Domains are ["registered"](https://en.wikipedia.org/wiki/Domain_name#Domain_name_registration) for ownership for a period of time -- essentially leased. If a domain lease expires, then the domain is auctioned to a new owner. The new owner then controls all email addresses of the domain and can send and receive email at any address under the domain. This includes password reset email messages.

## Importance

A software [package](https://en.wikipedia.org/wiki/Library_(computing)) from outside an organization presents a trade-off of control, content, and security for savings of time and resources. Since reading every piece of software in its entirety is beyond the ability of most organizations, the degree of trust in the authors of a package is of prime importance in evaluating that trade-off. In particular, if a malicious actor assumes control of an author's email domain, then that actor can abuse that trust by inserting malicious code into the author's packages.

## Examples

In May 2022, a security researcher noticed that the NPM package `foreach` was controlled by a single maintainer, whose email domain had expired. The researcher [bought the domain and thus gained control of `foreach`](https://www.theregister.com/2022/05/10/security_npm_email/), as above. Further, since 36,826 other NPM projects used `foreach` as a dependency, the researcher could have inserted malware into `foreach` and transitively affected 36,826 other projects.
