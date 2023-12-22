# NPM Hooks

## Description

[NPM scripts](https://docs.npmjs.com/cli/v8/using-npm/scripts) are a set of scripts available in the `package.json` file that the author can choose to use during various parts of the package installation process.

## Importance

These scripts are typically used to do useful things like run a set of tests or run a make command, but because it can also be used to execute arbitrary code during the installation process, it's extremely important to ensure the commands contained in these scripts are safe.

## Examples

In October of 2022, Phylum detected a typosquatting attack on the NPM ecosystem that targeted over 120 high profile packages including `tslib`, `ignore`, and `anymatch`. At the time of the attack these packages accounted for over 1.2 Billion weekly downloads--a gigantic attack surface targeting a huge number of developers. Once installed, the packages, whose `index.js` file contained the malicious code, would be automatically triggered to execute via a preinstall hook in the `package.json` file.
