# Nexus Repository

Nexus Repository can handle both hosted and proxied repositories. Hosted
repositories can store and serve your internal packages; whereas, proxied
repositories will pull packages from an external (sometimes third-party)
source. PyPI in the Python ecosystem would be an example of a proxied
repository in the context of your Nexus Repository instance.

Phylum will serve as a remote repository, proxying requests to the actual
package registry (e.g., PyPI, npm, etc.) while ensuring that packages that
enter your organization’s Nexus Repository adhere to the [policy you have
defined](../knowledge_base/policy.md) regarding the acceptable use of open
source libraries/packages.

## Create a New Proxy Repository

1. Create a proxy repository for Phylum. Click on the gear icon to go to the
   admin UI, then Repositories, then Create Repository.

   ![The repositories administration page with the "Create repository" button
   highlighted](../../assets/nexus/create_repo.png)

2. Select the proxy version of the appropriate package repository to which you
   would like to apply the policy. See current [Phylum supported ecosystems
   here](./about.md#supported-ecosystems).

   ![A list of repository recipes with "pypi (proxy)"
   highlighted](../../assets/nexus/select_recipe.png)

3. Provide a name for your proxy repository in the `Name` field.
4. In the `Remote storage` field, enter the [Phylum registry
   URL](./about.md#supported-ecosystems) for the ecosystem you are configuring.
5. Reduce the values in the `Maximum metadata age` and `Not found cache TTL`
   fields. With the default value of 1440 minutes, changes to whether a package
   is allowed or blocked by policy can take up to an additional day.
6. In the HTTP section, enable username authentication. In the `Username` field
   enter the [Phylum organization and group](../knowledge_base/groups.md) where
   you previously [defined your policy](../knowledge_base/policy.md). In the
   `Password` field, enter a [Phylum API key](../knowledge_base/api-keys.md)
   with permission to access this group.

   ![HTTP authentication section with the authentication type set to
   "Username," the username set to "\<PHYLUM_ORG>/\<PHYLUM_GROUP>," and the
   password set to "\<PHYLUM_API_KEY>"](../../assets/nexus/authentication.png)

## Update Group Repository

Group repositories in Nexus Repository overlay all your hosted and proxied
repositories, giving you a single host to use in your configuration. This makes
the decision-making process for pulling a package from your hosted or proxied
artifacts opaque to the end user.

Once you have created a proxy repository for Phylum, you should update your
group repository to use it.

1. Click on the gear icon to go to the admin UI, then Repositories, then the
   repository you want to update.

   ![Repositories administration screen showing the list of available
   repositories with a group repository named "pypi"
   highlighted](../../assets/nexus/repos.png)

2. In your group repository, scroll down to Member repositories.

   ![The member repositories section of the group repository administration
   page](../../assets/nexus/select_repo_1.png)

3. Under the `Members` section, remove the existing proxy by clicking on it to select and then clicking on the arrow pointing to the left.

   ![The member repositories section of the group repository administration
   page with a repository "pypi-proxy" selected in the "Members" column on the
   right and the left arrow highlighted with the tooltip "Remove from
   Selected"](../../assets/nexus/select_repo_2.png)

   ---

   ![The member repositories section of the group repository administration
   page with the "pypi-proxy" repository moved to the "Available" column on
   the left](../../assets/nexus/select_repo_3.png)

4. Under the `Available` section, add your Phylum proxy repository by
   clicking on it to select and then clicking on the arrow pointing to the right.

   ![The member repositories section of the group repository administration
   page with the "pypi-phylum" repository moved into the "Members" column on
   the right](../../assets/nexus/select_repo_4.png)

5. Save your settings using the blue `Save` button at the bottom of the screen.
