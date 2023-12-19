# Obfuscated Python

## Description

In software development, [code obfuscation](<https://en.wikipedia.org/wiki/Obfuscation_(software)>) is the act of deliberately making source code difficult for humans to read or understand with the ultimate purpose of trying to conceal what the code is doing.

For example, here is a small snippet of what obfuscated Python code might look like:

```python
def ___________________(__________, ___________):
    __________=__________.decode()
    _________=""
    if not ___________[False]=="\x20":
        ___________="\40"+___________
    for _ in range(_____("\154\x65\156\50\137\137\137\137\137\137\x5f\137\x5f\x5f\51")):
        _________+=_____("\143\150\162\x28\x6f\x72\x64\x28\137\x5f\137\x5f\x5f\137\137\137\x5f\137\133\137\x5d\51\136\x6f\162\144\x28\137\x5f\137\x5f\x5f\137\x5f\137\137\x5f\x5f\x5b\x28\154\145\156\x28\137\x5f\137\x5f\x5f\x5f\137\137\x5f\137\x5f\51\x20\55\x20\124\162\x75\145\x2a\x32\x29\40\53\40\x54\162\165\145\135\x29\51")
    return (_________,___________)
```

Without significant time and effort, it's impossible to tell what this code is doing by just looking at it.

## Importance

Finding obfuscated code in the open source ecosystem is noteworthy because it is atypical and goes against the grain of the spirit and purpose of the open source software community. If found it should be treated with caution because it could be hiding malicious intent.

## Examples

In the fall of 2022, Phylum published details of a supply-chain attack on the PyPI ecosystem in which threat actors continued sophisticated attempts to deploy W4SP Stealer onto Python developers' machines. In this campaign, threat actors used typo-squatting to spread malicious and highly obfuscated Python packages. Once installed, these packages would steal login and password information, crypto wallets, browser cookies, and more. Even though the source code to these packages was published publicly, because it was obfuscated, even if the user looked at it, they wouldn't be able to tell they had malicious intent.
