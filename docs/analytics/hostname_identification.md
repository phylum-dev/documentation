# Hostname Identification

## Description

A [hostname](https://en.wikipedia.org/wiki/Hostname) that is found in source code is neither suspicious nor malicious on its own. The hostname itself and the context in which it occurs determines that.

Hostnames appearing in source code should be carefully scrutinized to insure that a nefarious actor is not reaching out to a network resource that could deliver harmful material.

## Importance

Hostnames _may_ have legitimate uses, but they can also be used in malware.

## Examples

Legitimate use of hostnames can sometimes be obvious. [MathJax](https://www.mathjax.org/) is a popular JavaScript engine for displaying math formulas in a browser. It should come as no surprise then to see the `mathjax.org` hostname in the package contents.

On the other hand, a [ransomware attack in 2020](https://blog.malwarebytes.com/threat-analysis/2020/06/honda-and-enel-impacted-by-cyber-attack-suspected-to-be-ransomware/) used a hardcoded hostname for the target.

Hostnames that do not have a clear and obvious connection to a package's functionality should be treated with suspicion until their legitimacy can be established.
