# Week 3 — Application & API Design Specification

**Project:** Team 14 Azure Cloud Capstone  
**Application:** FrameForge Unreal Engine Animation Lab  
**Contributor:** Daniel Armstrong  
**Role:** Design & Standards / Cloud Architect  
**Date:** October 26, 2026

## 1. Architecture Overview

The project uses Microsoft Azure to host a static website and is designed to support a serverless visitor counter.

**Planned request flow:**

Visitor Browser → Azure Storage Static Website → Azure Functions API → Azure Cosmos DB → API Response → Visitor Counter Display

The static website is deployed. Azure Functions and Cosmos DB remain undeployed to avoid additional Azure charges.

## 2. Application Components

| Component | Purpose | Status |
|---|---|---|
| Azure Storage | Hosts the FrameForge website | Deployed |
| Azure Functions | Processes visitor counter requests | Code developed; not deployed |
| Azure Cosmos DB | Stores visitor count | Template validated; not deployed |
| GitHub Actions | Validates JavaScript syntax | Completed |
| Microsoft Entra ID | Manages identity and access | Configured |

## 3. API Design

**Planned endpoint:** `GET /api/visitorCount`

The website will call the Azure Functions API to retrieve and increment the visitor count.

**Expected successful response:**

```json
{
  "count": 1
}
```

**Expected response when the database is not configured:**

```json
{
  "error": "Cosmos DB is not configured yet."
}
```

HTTP status: `503 Service Unavailable`.

## 4. Database Design

**Database:** `capstone`  
**Container:** `visitors`  
**Partition key:** `/id`

Planned initial document:

```json
{
  "id": "site",
  "count": 0
}
```

The Azure Function will increment the `count` property using a Cosmos DB patch operation.

## 5. Service Ownership

| Service | Microsoft manages | Team 14 manages |
|---|---|---|
| Azure Storage | Hosting infrastructure | Website files and configuration |
| Azure Functions | Managed compute infrastructure | API code and settings |
| Azure Cosmos DB | Managed database infrastructure | Data, access, and queries |
| Microsoft Entra ID | Identity platform | Group membership and role assignments |

## 6. Security Design

- Microsoft Entra security group: `grp-capstone-team14-readers`
- Reader role assigned at `rg-capstone-team14` scope
- Multi-factor authentication configured for the project account
- Network Security Group associated with the application subnet
- Database credentials must not be stored in public GitHub files
- API CORS will be restricted to the approved website origin when deployed

## 7. Automated Validation

GitHub Actions workflow: **Validate Visitor Counter API**

**Run #2: Successful**

The workflow successfully completed dependency installation and JavaScript syntax validation.

Command:

`node --check api/visitorCount.js`

The syntax check passed. Live API functionality and database integration have not yet been tested.

## 8. Cost Management

An Azure budget alert of $5 per month was configured.

The Cosmos DB ARM template passed provider-level validation without creating the database account.

Backend deployment has been postponed to avoid additional Azure charges.

## 9. Future Development

1. Deploy Cosmos DB when budget permits.
2. Deploy the Azure Functions API.
3. Configure secure database connections.
4. Integrate the visitor counter into FrameForge.
5. Perform end-to-end testing.
6. Complete the capstone presentation and handover documentation.

## 10. Project Website

https://stwebteam14.z13.web.core.windows.net/
