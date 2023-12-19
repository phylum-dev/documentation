# Minimal Code

## Description

Software with minimal code is either trivially small or comprised primarily of binary artifacts.

A trivially small package is unlikely to represent a worthwhile trade-off of security for savings of time and resources. In particular, a future release of the software could be compromised. It may be better to create the functionality within your own software.

Software comprised primarily of binary artifacts is minimally open-source. That isn't inherently problematic but it does mean that the software can't really be inspected. Its behavior while running at a given point in time can be observed but the full capability of the software will be unknown.

## Importance

An organization should only accept the risk of an outside software package if the benefits outweigh the risk. An organization should consider whether it can trivially create from scratch the functionality provided by an outside package. If a package cannot be inspected, the organization should consider whether the security risk is worth the functionality of the package.

## Examples

In March 2016, a programmer removed all of his packages from the [npm](https://www.npmjs.com/) repository, including a trivial package called left-pad. left-pad was used, either directly or indirectly, by several extremely popular packages, including Facebook's [React](https://reactjs.org/), which is extremely widely used. When left-pad was removed from npm, all direct and indirect consumers were unable to build their software because the dependency package was no longer available.
