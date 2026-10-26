# Team 14 — Azure Cloud Capstone

  ## Project Overview

  This project demonstrates the design, development, and security of a cloud-hosted web application using Microsoft Azure and GitHub.

  The application, **FrameForge Unreal Engine Animation Lab**, serves as a portfolio and educational website focused on Unreal Engine animation workflows.

  **Project contributor:** Daniel Armstrong  
  **Role:** Design & Standards / Cloud Architect  
  **Azure region:** East US  
  **Resource group:** `rg-capstone-team14`

  ## Live Website

  https://stwebteam14.z13.web.core.windows.net/

  The website is hosted using Azure Storage Static Website Hosting.

  ## Architecture

  Planned request flow:

  `Visitor Browser → Azure Storage Static Website → Azure Functions API → Azure Cosmos DB → API Response → Visitor Counter Display`

  Azure Storage currently hosts the website. The Azure Functions and Cosmos DB components have been developed or planned but are not deployed.

  ## Completed Work

  - Created the Azure resource group and virtual network.
  - Configured Azure Storage static website hosting.
  - Published the FrameForge website.
  - Created a Network Security Group and associated it with the application subnet.
  - Created the Microsoft Entra security group `grp-capstone-team14-readers`.
  - Assigned the Reader role to the security group at resource-group scope.
  - Developed the JavaScript visitor counter API source code.
  - Added Azure Functions configuration and Node.js dependencies.
  - Configured a GitHub Actions validation workflow.
  - Successfully validated the JavaScript syntax using `node --check api/visitorCount.js`.

  ## Week 3 — Automated Validation

  **Workflow:** Validate Visitor Counter API  
  **GitHub Actions run:** #2  
  **Result:** Success  
  **Validation job duration:** 13 seconds

  The workflow checks out the repository, installs dependencies, and verifies JavaScript syntax.

  This validation does not confirm live API functionality or database connectivity.

  ## Cost Management

  The project has a $5 monthly Azure budget alert.

  The Cosmos DB deployment template was successfully validated using Azure Resource Manager, but the database was intentionally left undeployed to avoid additional Azure charges.

  The Azure Functions application is also not deployed.

  ## Remaining Work

  - Deploy Cosmos DB when budget and subscription constraints permit.
  - Create the `capstone` database and `visitors` container.
  - Deploy the Azure Functions visitor counter endpoint.
  - Configure secure database connectivity and API CORS.
  - Integrate the live visitor counter into the website.
  - Perform end-to-end testing.
  - Complete the final capstone documentation and presentation.

  ## Technologies

  Microsoft Azure, Azure Storage, Azure Functions, Azure Cosmos DB, Microsoft Entra ID, GitHub Actions, JavaScript, Node.js, HTML, and CSS.

  ## Current Status

  The FrameForge static website is published, and the visitor counter API source code has passed automated syntax validation. Backend deployment remains deferred for cost-control reasons.
