# Project Planning Document

## Project Overview

- Create an ember frontend to consume Homebox API

### Project Name:

ToolShare

### Project Summary:

The project aims to develop a new front end using Ember.js to consume Homebox's API. It will augment the ability for members of the site to borrow home and gardening tools from each other.

### Mandatory Rules

- Always refer to ./Convention.md and adhere to the rules.

### Goals and Objectives:

Build a responsive and user-friendly interface that mimic masonry CSS.
Efficiently integrate with Homebox's API to manage asset inventories.
Augment the API with additional feature that allows users to borrow inventory from other users

## Requirements

### Functional Requirements:

Develop an Ember.js frontend capable of consuming Homebox's API.
Implement features:

- [ ] User authentication system integrated with Homebox.
- [ ]check-in/check-out
- [ ] reporting.

### Non-Functional Requirements:

Performance should ensure fast loading times and smooth user interaction.
The application should be scalable and secure.
Ensure compatibility across major web browsers.

## Scope

### In-Scope:

Development of a new Ember.js frontend.
Integration with Homebox's API.
UI/UX design improvements.

### Out-of-Scope:

Modifications to Homebox's backend codebase.
Mobile app development in this phase.

## Implementation Plan

### Development Strategy:

Follow Agile methodology to allow for iterative feedback and improvements.
Utilize Ember.js best practices and design patterns.
Use information about the api at api_reference.md
Use the mock api convention in convention.md to

### Deployment Strategy:

Utilize Terraform and ArgoCD.
Establish rollback plans in case of deployment issues.

## Documentation and Training

### User Documentation:

Create comprehensive user manuals and interface guides.

### Training Plan:

Conduct training sessions for existing users to familiarize them with the new interface.

### Appendices

Include API documentation and technical specifications.
Prototype design sketches and wireframes.

## Process

### process1: Create necessary files
- [x] create an front end authorization to the api at localhost:3100
- [x] store session data in ember-simple-auth session object
- [x] create a serializer for user "self" api response
- [x] ask API for data on user and store it in ember data
- [ ] use authenticate @action to store user data in model
- [ ] create a serializer for item model
- [ ] create a route to /items
- [ ] create a template to display items


#### process2: Follow-up

##### sub1: Refactor UserController.php
- [ ] Refactor the code.
