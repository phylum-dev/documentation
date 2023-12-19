# Dependency Confusion

## Description

Dependency confusion attacks can occur when a package in a private registry does not exist in a public ecosystem's registry. Many package managers, used in build tooling, check public registries before private registries when downloading and installing packages. If an attacker learns the name of a package in someone's private registry, they can upload an identically named but malicious package to a public registry. Developers then mistakenly include the malicious public package in their software instead of the safe private package.

## Importance

This attack can be particularly difficult to detect because it does _not_ rely on typos like a typosquatting attack, but instead relies on and exploits misconfigured internal build servers to install a package of the same exact name but from a different registry. Without deep knowledge of the build pipeline or knowing where your package installer is looking first, you might not even know you're getting the wrong package.

## Examples

In early 2021, a bug bounty researcher built the first proof of concept of this type of attack and was able to successfully demonstrate execution of his code inside more than 35 different organizations.
