
# Week 4 — Monitoring & Incident Report

**Project:** Team 14 — Azure Cloud Capstone  
**Application:** FrameForge Unreal Engine Animation Lab  
**Role:** Design & Standards / Cloud Architect  
**Resource Group:** rg-capstone-team14  
**Region:** East US  
**Date:** October 26, 2026

## 1. Azure Cost Analysis

Azure Cost Management was used to review October 2026 spending.

| Service | Cost |
|---|---|
| Azure Storage | Less than $0.01 |
| Bandwidth | $0.00 |
| Total | Less than $0.01 |

Azure Storage was the largest reported expense.

The project remains below the $5 monthly budget target.

The resource-group Cost Analysis page displayed no budget at that scope. The previously configured budget requires separate verification.

## 2. Azure Advisor Review

Azure Advisor was reviewed for cost, security, reliability, and operational improvements.

**Cost:** No active recommendations displayed.

**Security:** No active recommendations displayed.

**Reliability recommendations:**

1. Enable zone redundancy for storage accounts.
   - Impact: High
   - Affected resources: 1 storage account
   - Decision: Deferred due to budget limitations.

2. Use NAT Gateway for outbound connectivity.
   - Impact: Medium
   - Affected resources: 1 virtual network
   - Decision: Deferred due to budget limitations.

**Assigned owner:** Design & Standards / Cloud Architect.

These recommendations will be reconsidered during future development.

## 3. Azure Service Health

Service Health was reviewed for East US.

| Category | Result |
|---|---|
| Active service issues | None |
| Planned maintenance | None |
| Health advisories | None |

No relevant service disruptions were reported during the review.

## 4. Service Health Alert

**Alert name:** alert-servicehealth-team14

**Resource group:** rg-capstone-team14

**Subscription:** Azure subscription 1

**Monitored region:** East US

**Services:** All

**Event type:** Service issues

**Severity:** 4 — Verbose

**Status:** Enabled

**Action group:** RecommendedAlertRules-AG-1

**Notification method:** 1 Email

The alert was successfully created and its email action group was verified in Azure Monitor.

The exact email recipient and delivery of a triggered notification were not independently verified.

## 5. Monitoring and Incident Testing

The Azure Functions API and Cosmos DB backend were not deployed because of project budget restrictions.

Therefore, the following tasks remain incomplete:

- Function App HTTP 5xx monitoring
- Application Insights failure investigation
- Intentional API failure and recovery
- Live backend incident documentation
- Resource-group deletion lock verification

No live backend incident was performed.

## 6. Problems Encountered

### Problem 1 — Azure Cost Management Scope

Initially, Cost Analysis displayed the billing account instead of the capstone resource group.

**Resolution:** Changed the scope to rg-capstone-team14.

### Problem 2 — Reliability Recommendations

Azure Advisor recommended zone-redundant storage and NAT Gateway.

**Resolution:** Documented both recommendations and deferred implementation because of budget constraints.

### Problem 3 — Action Group Navigation

The existing action group was difficult to open from the Azure alert configuration page.

**Resolution:** Verified that the alert had an associated action group containing one email notification.

### Problem 4 — Backend Monitoring Dependencies

Application Insights incident testing could not be performed without a deployed Azure Function.

**Resolution:** Documented the limitation and postponed live testing.

## 7. Future Development

1. Verify the Service Health email recipient.
2. Configure a CanNotDelete resource-group lock.
3. Deploy the Azure Functions API when funding permits.
4. Connect Azure Cosmos DB.
5. Configure Function error alerts.
6. Investigate failures using Application Insights.
7. Perform a controlled incident recovery test.
8. Document troubleshooting evidence and recovery times.

## 8. Conclusion

Week 4 demonstrated Azure cost monitoring, governance recommendations, and Service Health alert configuration.

The capstone maintained recorded Azure spending below $0.01 while documenting opportunities to improve reliability and operational monitoring.

Additional backend monitoring and incident recovery exercises remain deferred.

