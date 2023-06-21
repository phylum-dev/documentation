---
title: Suspicious Setup Commands
category: 629fb303c228520079bef218
hidden: false
---

# Description

In a Python package, the `setup.py` file is a script used for package building and distribution. It is what allows an author to distribute a package through PyPI and it's what allows an end user to then properly install that package for local use. It typically consists of a function called `setup()` that contains metadata-like information such as the name of the package, the version of the package, dependencies, etc. as well as build instructions. This file is automatically run when a user does a `pip install <package_name>`.

# Importance

Because this file is blindly passed to your machine's Python interpreter upon installation, threat actors like to sneak their malicious code into this file because it doesn't even require the victim to use the library; they simply have to install it to trigger the malware deployment. Therefore, it's important to know if any potentially dangerous commands are used in this file.

# Examples

One of the most prolifically distributed pieces of malware discovered so far in PyPI, the W4SP Stealer malware resulted in the publishing over 100 separate packages containing W4SP. The attackers often used the `setup.py` file as the first stage of an extremely complicated attack chain.
