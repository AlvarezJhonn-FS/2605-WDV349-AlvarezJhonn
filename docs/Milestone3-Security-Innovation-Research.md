# Milestone 3: Security and Innovation Research

## Overview

This document records research into SWOT analysis, web application security, code-scanning tools, and creativity and innovation. The goal is to identify risks and opportunities that may affect TaskFlow as development continues.

## SWOT Analysis

A SWOT analysis evaluates strengths, weaknesses, opportunities, and threats.

### TaskFlow SWOT

**Strengths**
- TaskFlow has a working React application with task creation and completion functionality.
- GitHub Actions runs an automated production build check.
- GitHub issues, milestones, branches, and pull requests help organize project work.

**Weaknesses**
- Security checks and dependency management need further review.
- Core application behavior has not yet been verified with automated application tests.
- The current application has limited backend and persistent-data functionality.

**Opportunities**
- Introduce automated security and dependency checks.
- Expand testing and input validation.
- Document privacy and security expectations before adding more features.

**Threats**
- Vulnerable third-party dependencies.
- Unexpected user input or insufficient validation.
- Future account or data-storage features introducing privacy and access-control risks.

## Web Application Security

The OWASP Top 10 provides a framework for identifying common web application security risks. Areas relevant to TaskFlow include access control, security misconfiguration, software supply-chain security, and input handling.

These are areas to review as the application develops. This research does not establish that TaskFlow currently contains a confirmed vulnerability.

## Code Scanning and Dependency Security

GitHub CodeQL can identify certain code vulnerabilities and errors. Other tools worth evaluating include:

- **Semgrep:** Static analysis using configurable rules.
- **SonarQube:** Code-quality analysis and potential security issue detection.
- **npm audit:** Reports known vulnerabilities in installed npm dependencies.

These tools serve different purposes. Their suitability for TaskFlow should be evaluated based on the technology stack, cost, coverage, and development needs.

## Creativity and Innovation

The Electronic Frontier Foundation explores issues related to creativity, innovation, and technology policy. These topics encourage developers to consider how software intersects with user rights, openness, and responsible technology practices.

For TaskFlow, future planning should consider clear user expectations and privacy-conscious data handling, particularly if the application later adds user accounts or user-generated content.

## Impact on TaskFlow

The research suggests several possible next steps:

1. Review npm audit findings and evaluate recommended fixes.
2. Assess whether a static-analysis tool is appropriate for the project.
3. Add automated tests for task creation and completion.
4. Review input validation and error handling.
5. Document privacy and security expectations before adding accounts or persistent user data.

## Limitations

This document records preliminary research and planned improvements. It is not a completed penetration test, formal compliance assessment, or comprehensive security audit.
