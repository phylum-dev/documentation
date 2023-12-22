# Compiled Binary

## Description

A [binary file](https://en.wikipedia.org/wiki/Binary_file) is a computer file that is not a [text file](https://en.wikipedia.org/wiki/Text_file). Humans write text files. As such, text files are commonly called "human-readable". A text file that contains source code is converted by a [compiler](https://en.wikipedia.org/wiki/Compiler) into the binary format that a machine can use. Thus, binary files are commonly called "non-human-readable".

## Importance

Binary files introduce risk because of their non-readability. Many legitimate source packages contain compiled binaries for legitimate purposes. But, binary files of unknown provenance should be treated with suspicion because they could contain malicious code.

## Examples

[Anaconda](https://www.anaconda.com/) is a popular Python distribution of scientific computing packages. Anaconda distributes binary files that are pre-compiled for common computing environments such as Windows, MacOS, and Linux, and each of these binaries can be validated against a [cryptographic hash](https://en.wikipedia.org/wiki/Cryptographic_hash_function) provided by Anaconda. This is possible because the source code for each package is based on a specific release version which fixes that package's source code at a specific point in time. This is more than merely a great convenience for users who do not need to spend time and power compiling source code just to end up with the exact same binary file as Anaconda distributes. At any time a user can download a package's source code, compile it themselves, and compare the cryptographic hash of their binary with the one from Anaconda's distribution to verify that the binary package distributed by Anaconda is the exact result of compiling the source code of the package.
