---
layout: legal
title: Convergence Road Map
permalink: /roadmap/
---

# Introduction
This page outlines the high level feature Road Map for the next several releases of Convergence. There are many more features, API enhancements and bug fixes that will be in each release. This list shows only the major high level features we are planing. 

*This road map is highly speculative, representing current thinking. It will be updated regularly as we make releases and as we get feedback from the community.*

[See here](https://github.com/convergencelabs/convergence-project/milestones) for the most up-to-date information on where issues are bucketed and when they are slated for release.


## Next Release
  * **Bug Fixes**: Bug fixes primarily related to new functionality, open sourcing, and feedback from the community.
  * **Open Sourcing**: We will be open sourcing more components and infrastructure.
  * **Maven Central**: Artifacts will be posted to Sonatype and Maven Central repositories. 

## Next Few Months
  * **Database Upgrade Support**: Automated upgrade of the backing database when Convergence is upgraded.
  * **Experimental Rich Text Support**: Basic rich text support for editors like Quill, Draft, etc.
  * **API Clean Up**: The API will be thoroughly scrubbed for consistency. This may involve minor breaking changes, prior to 1.0.0.
  * **Model Web Hooks**: The ability for the server to initialize and save a model by making a REST call to an external system.
  * **Presence System Scalability**: Refactoring of the server side Presence subsystem to make it more scalable.

## 1.0.0
  * **Convergence CLI**: An update to the Convergence CLI which can be used to automate many convergence actions. 
  * **REST API Documentation**: Documentation for the REST API, likely using the Open API spec.
  * **Helm Chart**: An official Helm Chart for Convergence
  
## Primary Focus Immediately After 1.0.0
  * **Stable Rich Text Support**: Complex rich text support for editors like CKEditor 5.
  * **Local Undo Support**: The ability to undo local actions, in the face of remote changes.
  * **Stable Offline Support**: (bug fixes, multi-tab support, ect.).

## Backlog
  * **Database Abstraction Layer**: the ability to use other databases to back Convergence. Current thoughts include PostgreSQL and MongoDB.
  * **Model Schema**: The ability to define the structure of the models in a particular collection.
  * **Model Permissions**: Granular definition of read / write access to data within a model.
  * **Model Links**: The ability have a property in one model that points to another model.
  * **Model Triggers**: The ability define custom actions when certain data is modified.
  * **Workspaces**: Typed structures that define a set of well known models, activities, and chat rooms.
  * **Bot / Integration API**: An API to add bots and integration agents that can participate in chats, models, etc.