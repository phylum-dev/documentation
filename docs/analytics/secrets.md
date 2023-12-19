# Secrets

## Description

When publishing software to an open source ecosystem, it is important to be mindful of the risk of accidentally including private credentials in the codebase. This can occur in several ways, such as the unintentional publication of important configuration or production files or a misconfigured Continuous Integration/Continuous Deployment (CI/CD) pipeline. These mistakes can result in sensitive information, such as API keys or access tokens, being exposed to the public, potentially leading to unauthorized access, data breaches, or other security incidents.

## Importance

Using open-source software containing leaked secrets poses potential risks:

1. Reduced trust and security of the software: If a secret key belonging to a developer or organization is leaked in open-source software, it can erode trust in the software itself and/or its development team and processes. This is a strong indication that the development process of this software is not as secure as it could be, which could lead to further vulnerabilities or other weaknesses in the software.
2. Increased likelihood of supply-chain attacks: Leaked keys can be used by attackers to compromise the developer, the organization, or tools or applications in the development process. Among other things, this could result in malicious code being inserted into the software, or breakage or removal of the software entirely.
3. Legal and regulatory compliance: Using software that contains leaked secrets may pose a risk to regulatory compliance depending on the nature of the secrets and applicable regulations.

## Examples

In 2022, a hacker obtained hardcoded credentials to Uber's privileged access management platform and from there was able to perform a full account takeover of several other internal applications and tools. In this particular case, the hard-coded credentials were not obtained from published open-source software, however, it highlights the importance of keeping sensitive credentials to even a single application safe.
