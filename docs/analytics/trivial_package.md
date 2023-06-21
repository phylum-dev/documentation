---
title: Trivial Package
category: 629fb303c228520079bef218
hidden: false
---

# Description

A software [package](https://en.wikipedia.org/wiki/Library_(computing)) is a piece of software that provides functionality that can be included in other software, similar to how a prefabricated wall can be included in a larger building. Software packages can offer a variety of functionality, but a trivial package is one that offers little-to-no useful functionality. Often, trivial packages have a small code base and provide the ability to, at best, do a trivial task, like detecting whether a number is odd.

Ultimately, a software package presents a trade-off of control, content, and security for savings of time and resources — a trade-off that should be evaluated on a package-by-package basis. On one hand, using a package can save engineering time and resources for an organization. For example, when a common package is used by many projects, it increases the number of opportunities to find and correct problems, leading to higher-quality code relative to what would occur if every software team wrote all code from scratch on each project. On the other hand, a software package that is written by authors outside a given organization is not under the control of that organization, thereby increasing risk: the package has not necessarily been vetted by the organization, the security practices of the authors may not meet the requirements of the organization, and the package can change (or fail to change) in a manner that is out of line with the priorities of the organization.

Because a trivial package does not offer much time or resource savings, it is unlikely to present a worthwhile trade-off.

# Importance

An organization should only accept the risk of an outside software package if the benefits outweigh the risk. In particular, an organization should consider whether it can trivially create from scratch (possibly with software that has already been vetted) the functionality provided by an outside package.

# Examples

In March 2016, a programmer removed all of his packages from the [npm](https://www.npmjs.com/) repository, including a trivial package called left-pad. left-pad was used, either directly or indirectly, by several extremely popular packages, including Facebook's [React](https://reactjs.org/), which is extremely widely used. When left-pad was removed from npm, all direct and indirect consumers were unable to build their software because the dependency package was no longer available.
