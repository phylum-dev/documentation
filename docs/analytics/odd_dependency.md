# Unverifiable Dependency

## Description

Package installers typically install dependencies from their respective registries based on the name and release version of a specific package from the registry. Dependencies of this kind are _verifiable_ in the sense that there is a reference in the registry itself for that package and version.

Many package installers also support installing directly from other external sources such as git repositories, [gist](https://en.wikipedia.org/wiki/GitHub#Gist), and [URL](https://en.wikipedia.org/wiki/URL)s. A dependency of this kind is _unverifiable_ in the sense that there is no way to guarantee that requested package from that external location is _exactly_ and _always_ the package intended.

## Importance

As a general rule, all code from unknown sources ought to be considered with suspicion until the provenance of the code can be established. In this case of naming dependencies by an external reference, unverifiable dependencies introduce risk because of the uncertainty between what the package manifest is requesting and what is actually being delivered.

## Examples

In the [npm](https://www.npmjs.com/) ecosystem, the `package.json` file contains a list of all of the package's dependencies (see the [documentation](https://docs.npmjs.com/cli/v8/configuring-npm/package-json) for a complete discussion of the `package.json` file). `npm` allows a wide variety of ways to list a package's dependencies, including [URLs as dependencies](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#urls-as-dependencies), [git URLs](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#git-urls-as-dependencies), [GitHub URLs](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#github-urls), and even [local paths](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#local-paths).

The contrived package `tomfoolery@1.0.0` on npm lists `"react": "git://github.com/facebook/react.git"` as a dependency. Whatever code is at that location at that particular time is what will be imported as a dependency, and there is no way to guarantee from this reference alone that the intended version of `react` will be imported.
