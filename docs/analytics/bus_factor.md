---
title: Bus Factor
category: 629fb303c228520079bef218
hidden: false
---

# Description

As per [https://en.wikipedia.org/wiki/Bus_factor](https://en.wikipedia.org/wiki/Bus_factor), "The "bus factor" is the minimum number of team members that have to suddenly disappear \(e.g., get hit by a bus\) from a project before the project stalls due to lack of knowledgeable or competent personnel." Software is built by people who have their own lives and priorities and who won't be around forever. [This comic](https://xkcd.com/2347/) illustrates the problem.

# Importance

If a package stops being maintained, then security problems will not be fixed and the package will not be updated as the world changes around it. At some point, the package will no longer work as expected in the required context.

# Examples

* [core-js](https://github.com/zloirock/core-js) provides a standard library for JavaScript and is maintained by one person. It is used by at least 75 of the top 100 websites in early 2023. [Summary of the situation and maintainer's request for help](https://www.linkedin.com/posts/vbadhwar_github-zloirockcore-js-standard-library-activity-7031658014042456064-TtvV)
* [cURL](https://github.com/curl/curl) is the de facto standard program used to make network requests in Linux environments and is maintained by one person: [https://onezero.medium.com/the-internet-relies-on-people-working-for-free-a79104a68bcc](https://onezero.medium.com/the-internet-relies-on-people-working-for-free-a79104a68bcc)
* [left-pad](https://github.com/left-pad/left-pad) was maintained by a single person, [who deleted it because he felt that companies had taken advantage of his work](https://www.reddit.com/r/programming/comments/4bjss2/an_11_line_npm_package_called_leftpad_with_only/) Some of the most-used JavaScript packages themselves used left-pad and were blocked when left-pad was removed.

Note that these projects have multiple _contributors_, who have written code that has been incorporated into the projects. What is notable is that the projects have had a single _maintainer_, who owns the project, makes releases, and decides what gets incorporated into it and what does not. If the maintainer(s) stops working on the package, then progress on the package stops.
