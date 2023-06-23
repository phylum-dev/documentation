---
title: Suspicious URL References
category: 629fb303c228520079bef218
hidden: false
---

# Description

There are some widely used URLs that, on their own, aren't necessarily malicious but when referenced or used in the context of open source software should be treated with suspicion and scrutiny.

## Paste Tools

Paste tools like Pastebin.com are online content-hosting services where users can store plain text like source code snippets. It's possible for attackers to host malicious code on these sites and then simply pull it down and execute from any other code.

## Web Application Security Testing Tools

When testing web application security, it's sometimes necessary to reach out to a remote server to detect what security vulnerabilities might be present on the system. Finding references to these servers could indicate that an attacker may be looking for vulnerabilities in an effort to later exploit.

## Unusual CDNs (Content Delivery Networks)

CDNs, or content delivery networks, are effectively a form of cloud-based storage. An attacker can reach out to a CDN to pull down any desired file and execute it.

## Obfuscation Tools

These are tools used to obfuscate code making it harder for a user of the library to understand what the code is doing.

## Reverse Shells

A reverse shell allows an attacker to initiate a shell session on the victim's computer. Some recent malware has been observed using web-based tools such as `tcp.ngrok.io` to establish reverse shells.

## Data Exfiltration Tools

Data exfiltration tools allow an attacker to easily push data from a compromised machine to a site from which they can later access and retrieve that information.

## Public IP Address Checking Services

Successfully deployed malware often uses APIs to determine the public IP address of the victim's machine. Finding references to these services in code, especially code that doesn't need to know your IP address, can be indicative of malicious intent.

## Tor Darknet to Clearnet Proxy Services

These services function as a proxy between the [Tor Darknet](https://www.torproject.org/), or hidden services, and the rest of the regular Internet, or the "clearnet". Finding references to Tor proxies in open source code is highly suspicious.

# Importance

As mentioned previously, the types of sites shown above might not necessarily be malicious on their own, but when they are referenced in open source software, the user of that software should be made aware of their use in order to determine whether or not that site is being used with malicious intent or not.

# Examples

During the course of 2020, it was found that the Discord CDN was used to host all kinds of malicious software such as Epsilon ransomware, Redline stealer, and the XMRig cryptocurrency miner.
