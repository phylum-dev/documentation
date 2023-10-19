---
title: Netskope Integration
category: 62cdf6722c2c1602a4b69643
hidden: false
---

# Netskope Integration

## Overview

Phylum can be integrated with [Netskope](https://www.netskope.com) to incorporate Phylum's curated list of malicious open-source package hashes into a Netskope security policy.

## Getting Started

Netskope users who purchase a Phylum threat feed subscription can follow the instructions below to subscribe to Phylum's curated malicious package hash list distribution. This list will be automatically reflected in your Netskope `File Hash List` on a regular cadence. There are three separate pieces of information needed to complete the subscription process:

1. A Netskope v1 API Token for your tenant
2. Your Netskope tenant name
3. A Netskope `File Hash List` name

### Obtain a Netskope v1 API Token

1. Log in to your Netskope admin dashboard and then click on `Settings`.
2. In `Settings` click on `Tools`.
3. In `Tools` click on `Rest API v1`.
4. Grab the Token value from Token section.

### Obtain Your Netskope Tenant Name

1. Your Netskope Tenant name is simply the subdomain of your dashboard URL. For example when you log into your Netskope dashboard, look at the URL. It should be of the form `https://<tenant-name>.goskope.com/ns#/dashboard`. Grab the `<tenant-name>` part of this URL.

### Create and Obtain the Name of Your File Hash List

1. Once logged in to to your Netskope dashboard click on the `Policies` option in the left menu.
2. From the `Policies` menu, click on `File`.
3. From there, create a new file profile by clicking on the `NEW FILE PROFILE` button in the upper left.
4. An "Add File Profile" modal should be displayed. In the left-most menu of the modal, click on `File Hash`.
5. In the middle section click the `ADD FILE HASH BY TYPE` drop down and select `SHA256`.
6. In the `SHA256` text entry box, paste in the single SHA256 hash value of `e7dc6a2f0c65a2c6f3d7cc2a11c3fd2acb4e23af1e55a8769366766ee22278c3`. Note that this is just a dummy hash and will be overwritten by Phylum's list, but the list has to have at least one valid hash in order to be created. After entering the hash value, click `Next` in the bottom right.
7. On the next modal interface enter a name in the `PROFILE NAME` text entry box. The name you enter here is the name of the File Hash List, so this is the value you'll need to grab. You can enter an optional description in the `DESCRIPTION` box.
8. When finished click `SAVE` in the bottom right.

## Send the Information to Your Phylum Contact

After completing the above, you should have obtained the following information:

1. A Netskope v1 API Token for your tenant
2. Your Netskope tenant name
3. A Netskope `File Hash List` name

Send this information to your Phylum contact so we can finish the subscription process. Once your information is entered in to our system, your hash list will be updated on a regular cadence--roughly once every few hours.
