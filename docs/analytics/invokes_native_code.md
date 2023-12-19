# Invokes Native Code

## Description

[Dynamic linking](https://en.wikipedia.org/wiki/Dynamic_linker) is when the operating system loads external shared libraries and binds them to a running process. Operating systems contain many shared libraries, that is, native code, which are dynamically linked, because it allows for multiple running processes to share a single instance of a library in memory. Thus, dynamic linking, that is, invoking native code, is a way to optimize memory usage.

## Importance

Function calls that load native code _may_ have legitimate use cases. However, packages that load native code can be used in attempts to load malicious binaries or to "live off the land".

Christopher Campbell and Matthew Graeber coined the phrase "living off the land" in their [2013 talk](https://www.youtube.com/watch?v=j-r6UonEkUw) at DerbyCon 3. A binary file that is native to the operating system is suitable for "Living Off the Land" (a.k.a. [LOLBin](https://github.com/LOLBAS-Project/LOLBAS#criteria)) if it is a file capable of undocumented functionality that could be used by malicious attacker, [APT](https://en.wikipedia.org/wiki/Advanced_persistent_threat), or [red team](https://en.wikipedia.org/wiki/Red_team). A full list of LOLBin binaries, libraries, and scripts can be found at the [LOLBAS project](https://lolbas-project.github.io/).

Open source packages containing calls to native code should be scrutinized. If the call does not fit the intended functionality of the package, the package should be avoided.

## Examples

In Java, functions such as `load`, `loadLibrary`, and `loadLibraryFromJar` dynamically link a library to a process.
