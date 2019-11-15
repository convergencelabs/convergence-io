---
layout: legal
title: Convergence Road Map
permalink: /roadmap/
---

# Introduction
This page outlines the high level feature Road Map for the next several releases of Convergence. There are many more features, API enhancements and bug fixes that will be in each release. This list shows only the major high level features we plan to add for each release. 

*This road map is highly speculative, representing current thinking. It will be updated regularly as we make releases and as we get feedback from the community.*


## v1.0.0-rc.4 (Q4 2019)
  * **User API Keys**: Allows for programmatic access to the REST API without requiring a username and password.
  * **Automatic Reconnection**: The Convergence Client will automatically reconnect too the server when it gets disconnected.
  * **Experimental Offline Support**: Support for editing data in an offline mode. 

## v1.0.0-rc.5 (Q1 2020)

  * **Database Upgrade Support**: Automated upgrade of the backing database when Convergence is upgraded.
  * **Experimental Rich Text Support**: Basic rich text support for editors like Quill, Draft, etc.
  * **API Clean Up**: The API will be thoroughly scrubbed for consistency. This may involve minor breaking changes, prior to 1.0.0.

## v1.0.0 (Q2 2020)

  * **Convergence CLI**: An update to the Convergence CLI which can be used to automate many convergence actions. 
  * **REST API Documentation**: Documentation for the REST API, likely using the Open API spec.
  * **Model Web Hooks**: The ability for the server to initialize and save a model by making a REST call to an external system.
  * **Presence System Scalability**: Refactoring of the server side Presence subsystem to make it more scalable.

## v1.1.0 (Q4 2020)

  * **Stable Rich Text Support**: Complex rich text support for editors like CKEditor 5.
  * **Local Undo Support**: The ability to undo local actions, in the face of remote changes.
  * **Stable Offline Support**: The ability to undo local actions, in the face of remote changes.

## Future Releases
  * **Database Abstraction Layer**: the ability to use other databases to back Convergence. Current thoughts include PostgreSQL and MongoDB.
  * **Model Schema**: The ability too define the structure of the models in a particular collection.
  * **Model Permissions**: Granular definition of read / write access to data within a model.
  * **Model Links**: The ability have a property in one model that points to another model.
  * **Workspaces**: Typed structures that define a set of well known models, activities, and chat rooms.
  * **Bot / Integration API**: An API to add bots and integration agents that can participate in chats, models, etc.