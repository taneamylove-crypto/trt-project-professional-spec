# TRT Project - Professional Specification Repository

Working title: **TRT**

TRT is a TON-native ecosystem project built around three separated pillars:

1. **Draw / Lottery Protocol**
2. **Charity Foundation**
3. **Mental Aid Institute**

This repository is the source of truth for TRT specifications, RFCs, implementation tasks, and future code.

Status: Draft v0.1  
Date: 2026-06-30

## Core principle

The project must be developed professionally:

- clear architecture before code;
- RFC-driven decisions;
- security review before mainnet;
- legal review before public launch;
- separation between protocol, operator, foundation and institute.

Current rule: **no business logic is implemented until the relevant RFC is written, reviewed, and approved**.

## Monorepo layout

- `contracts/ton` - TON smart contracts, planned for Tact first and FunC only where justified.
- `apps/telegram-miniapp` - Telegram Mini App client.
- `apps/webapp` - Creator Dashboard / web application shell.
- `services/backend` - Backend API and protocol indexing services.
- `packages/sdk` - TypeScript SDK for apps and integrations.
- `docs` - Product, protocol, legal, security, and operations documentation.
- `rfc` - RFC process and approved design decisions.
- `tests` - Shared integration and end-to-end test assets.
- `audits` - Audit notes, reports, and security review artifacts.

## Proposed technology stack

See [docs/00_overview/TECH_STACK.md](docs/00_overview/TECH_STACK.md).

## Development

Prerequisites:

- Node.js 22 LTS or newer
- pnpm 10 or newer
- Git

Install dependencies after packages are added:

```bash
pnpm install
```

Run repository checks:

```bash
pnpm check
```

At this stage the checks validate repository structure only. Contract, app, backend, and SDK implementation commands will be added after their RFCs are approved.
