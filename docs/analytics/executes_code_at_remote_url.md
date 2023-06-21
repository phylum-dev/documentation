---
title: Executes Code at Remote URL
category: 629fb303c228520079bef218
hidden: false
---

# Description

A package calling `exec` on a remote URL poses both engineering and security risks. At runtime it is pulling source code from a remote URL and executing it.

# Importance

Executing code hosted at a remote URL is dangerous and fragile and is not recommended for many reasons:

- The remotely executed code is not directly accessible in the package's codebase so a user of the package would not be able to easily see what code is actually hosted at the remote site.
- Because the remote code is not shipped with the package itself, the remote code is likely not subject to code review by the authors and is likely not maintained in source control.
- It's often difficult or impossible to tell who the true author is of the remote code.
- The remote code can change at any time without changing anything in the package itself.
- Because the code is hosted remotely, an Internet connection is required to pull down the code at runtime. This is not possible to run in some environments because the URL could be blocked or the there might not even be an Internet connection.

# Examples

In January of 2023, Phylum witnessed a known prolific malware author group changing tactics to use the remote code execution technique. One of the many techniques this group previously used involved shipping highly obfuscated malware in the package itself. This is easy to spot because of the large chunk of obfuscated code. Shifting to the simple remote code execution technique not only greatly reduced the size of their malware footprint in the open source ecosystems, but it also greatly reduced the ability to spot the malware from visual inspection alone.
