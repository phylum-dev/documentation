# Frequently Asked Questions

## What do I do when a dependency fails analysis?

If a package's installation gets blocked by the firewall, possible malicious
code execution will have been blocked, so there's no immediate need for action.

Should you determine the policy violation to be insignificant, you can add an
exception by navigating to the [firewall overview], selecting the instance
associated with the project, then clicking on the "Allow Package" button in the
top-right.

## Why are some policy-violating packages not being blocked?

The package firewall acts as a proxy between the local package manager and the
official registry. As a result only packages being retrieved from the official
registry will be analyzed.

Common scenarios where a package will not be analyzed are the usage of a cache
between the package firewall and the local client (like Artifactory, or Nexus),
and the installation from the local registry cache. While the initial
installation would be analyzed by the package firewall, once cached it will not
be re-analyzed.

Currently some ecosystems also bypass analysis when a package is installed
directly from a lockfile. This is why new dependencies should always be
installed with the package firewall in place, making sure that the lockfile
contains no packages which violate your policy.

## How do I deal with failures due to unprocessed packages?

By default, the package firewall considers unprocessed packages as failures, to
avoid running any code that hasn't been analyzed. Any unprocessed package is
automatically staged for processing, so the safest option is always to wait
until processing is complete.

If you wish to allow certain, or all, incomplete packages to be considered
successful for the purpose of the package firewall, you can add an exception by
navigating to the [firewall overview], selecting the instance associated with
the project, then clicking on the "Allow Incomplete" button in the top-right.

## How do I add the package firewall to an existing project?

To setup the package firewall for a specific project, you can look at the
documentation for the specific [package registries].

An important factor for existing projects is the existence of a lockfile and
local caches. Since versions in the lockfile might be cached locally, you should
make sure they pass your policy by analyzing the lockfile once before relying on
the package firewall to analyze new packages and versions. Deleting the lockfile
or clearing local caches will also allow full analysis through the package
firewall, but is more error prone due to the required technical knowledge.

[package registries]: ./about.md#package-registries

[firewall overview]: https://app.phylum.io/firewall
