---
title: Transfer Group Ownership
category: 6255e67693d5200013b1fa41
hidden: false
---

# Overview

Ownership of a Phylum group can be transferred to another [Phylum PRO account](https://www.phylum.io/pricing). Only the owner of a group may add/remove members and delete projects or the group.

## Walkthrough

### Phylum CLI

1. Use the `phylum group transfer` command to transfer ownership of a group.

Example: Transfer ownership of the group `sample` from the current user to the user `user@domain.com`.

```sh
phylum group transfer --group sample user@domain.com
```

### Phylum UI

1. Click on your user icon and navigate to the `Groups Admin` page.

   ![Phylum groups admin dropdown](https://raw.githubusercontent.com/phylum-dev/documentation/main/assets/transfer_group_ownership_01.png)

2. Click the `Transfer Ownership` button for the group you want to transfer.

   ![Phylum groups menu - transfer ownership button](https://raw.githubusercontent.com/phylum-dev/documentation/main/assets/transfer_group_ownership_02.png)

3. Type the email address of the account you want to transfer the group to.

   > **NOTE:** Groups are a [Phylum PRO](https://www.phylum.io/pricing) feature, so the receiving account must be PRO.

4. Click `Confirm Transfer` to complete the process.
