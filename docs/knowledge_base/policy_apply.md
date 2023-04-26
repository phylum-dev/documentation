---
title: Policy Application
category: 6255e67693d5200013b1fa41
hidden: false
---

# Applying policies

Policies are stored in the project preferences.

The easiest way to manage a small number of policies is to use the web UI.
1. Open an existing project in the Phylum UI
2. Select `Preferences`
3. Select `Custom` under the `Current Project Policy` section
4. Click `Upload Custom` and select your desired `.rego` file
    - Note: Uploading a new custom policy will replace the current policy, be sure to save your current policy if you do not want to lose it

![image](https://github.com/phylum-dev/documentation/raw/main/assets/apply_policy.png)

If you are managing policies for a large number of projects, you may be interested in the [`get_project_preferences_endpoint`](https://api.phylum.io/api/v0/swagger/index.html#/Preferences/get_project_preferences_endpoint) and [`update_project_preferences_endpoint`](https://api.phylum.io/api/v0/swagger/index.html#/Preferences/update_project_preferences_endpoint) API calls.
