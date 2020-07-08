---
layout: post
title: "Convergence 1.0.0 Release Candidate 7"
description: "1.0.0-rc.7 primarily focuses on the Convergence Server and upgrading some of its underlying dependencies."
date: 2020-07-07 21:00:00 -0600
categories: [convergence]
author: michael
---
The Convergence team is pleased to announce the availability of [1.0.0-rc.7](https://github.com/convergencelabs/convergence-project/wiki/CHANGELOG#100-rc7-jul-7-2020). Based on feedback from our users, and some recent releases by some of the core frameworks we build Convergence on top of, we decided to focus 1.0.0-rc.7 on some much-needed technical debt reduction. In particular Akka 2.6 brought the new Typed Actor system as well as a new standard for message serialization. Convergence had been using java serialziation which is an easy way to get started with Akka, but slow and somewhat insecure. We refactored all of the messaging in Convergence to use the new built in CBOR serializer provide by Akka and Jackson. The new Akka Typed allows us to have type-safe messaging between the various parts of the system which will eliminate runtime bugs, and generally make the system more stable. We felt it was time to upgrade to scala 2.13 due to some performance gains in the Scala collections API. Finally, we replaced the Akka Cluster "auto-downing" with the production grade Split Brain Resolver that will more robustly handle network partitions.

We also snuck in several bug fixes, and enhancements along the way. That said, this release has less new features than the last few since the technical debt clean up represented a significant amount of work!

## Release Highlights:
Release Candidate 7 focuses mainly on:

* Upgrade to scala 2.13
* Migration to the new Akka Typed API.
* Replacing java serialization with CBOR serialization for better performance and security.
* Migration to production grade Split Brain Resolver for clustering.
* Bug fixes and enhancements around offline models.
* Code clean up and unit testing.


## What's Next?
Check our road map [here](https://github.com/convergencelabs/convergence-project/wiki/Convergence-Road-Map) to see what we are focusing on in general.  Next, we intend to work on:

* A database schema upgrade system.
* Production hardening.
* The design and implementation of our [Experimental Rich Text Support](https://github.com/convergencelabs/convergence-project/issues/37).

As always, please report any issues in [GitHub directly](https://github.com/convergencelabs/convergence-project/issues), our [forum](https://forum.convergence.io), or our [Slack workspace](https://slack.convergence.io).

Happy coding!
