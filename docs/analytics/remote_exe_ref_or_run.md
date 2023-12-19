# Remote Executable

## Description

An [executable file](https://en.wikipedia.org/wiki/Executable) is simply a compiled binary file intended to be run or executed on a host machine that performs tasks according to the encoded instructions.

## Importance

Executables on their own are not inherently dangerous. In fact, most software running on your machine right now are probably executable files in action. However, it is highly unusual for packages found in the open source ecosystem to contain references to URLs that point to executable files and it could be indicative of a malware dropper. It is even more unusual, and certainly highly suspicious, if a package reaches out to a URL containing an executable, proceeds to write that file to your disk, and then attempts to execute it.

## Examples

In August of 2022, researchers discovered a dozen malicious packages on the PyPI repository attempting a typosquatting attack. If installed, these packages would grab a an executable payload from a malicious URL, save it to disk, and then execute the file--all from within the `setup.py`. In one observed case the executable would then recruit the host machine into a DDoS campaign against a Russian Counter-Strike server.
