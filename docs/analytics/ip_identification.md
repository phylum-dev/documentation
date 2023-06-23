---
title: IP Address Identification
category: 629fb303c228520079bef218
hidden: false
---

# Description
An [IP address](https://en.wikipedia.org/wiki/IP_address) ([Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol) address) that is found in source code should raise suspicion, because it is a common technique that evades the usual [DNS](https://en.wikipedia.org/wiki/Domain_Name_System) lookup for a network resource.  The particular IP address and the context in which it is found determines whether or not it is malicious.

IP addresses appearing in source code should be carefully scrutinized to insure that a nefarious actor is not reaching out to a network resource that could deliver harmful material.

# Importance
IP addresses _may_ have legitimate uses, but they commonly found in malware.

# Examples
While there can be legitimate uses for IP addresses appearing in source code, it is uncommon for a software developer to include direct IP addresses in source code.

An example of a legitimate use is a developer directly including the IP address for a DNS server, such as Google at `8.8.8.8`.

On the other hand, direct IP addresses in source code can be indicative of malicious intent.  Analysis of a 2017 malware campaign (see [this report](https://www.cisa.gov/uscert/ncas/alerts/TA17-318B) from [US-CERT](https://www.cisa.gov/uscert)) revealed actors [hard coding](https://en.wikipedia.org/wiki/Hard_coding) IP addresses that were used to connect victims to their malicious network infrastructure.
:w

IP addresses that do not have a clear and obvious connection to the primary functionality of source code should be treated with suspicion until their legitimacy can be established.
