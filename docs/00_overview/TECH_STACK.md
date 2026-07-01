# Proposed Technology Stack

Status: Draft recommendation. Final choices require RFC approval before implementation.

## TON smart contracts

- Primary language: Tact.
- Low-level language: FunC only for parts where Tact is not sufficient.
- Tooling: Blueprint, Sandbox, `@ton/core`, `@ton/ton`.
- Testing: TypeScript contract tests through Sandbox.
- Mainnet rule: no deployment before tests, threat model, internal review, and independent audit.

## Telegram Mini App

- Framework: React with Vite.
- Language: TypeScript.
- Wallet: TonConnect UI.
- UI: Telegram-first responsive interface with minimal blockchain jargon.
- State/data: TanStack Query once backend/API contracts exist.

## Backend

- Runtime: Node.js 22 LTS.
- Framework: NestJS or Fastify. Prefer Fastify for a smaller MVP; choose NestJS if modules and DI become important.
- Database: PostgreSQL.
- Cache/queue: Redis only when async indexing or notifications require it.
- API style: REST for MVP, OpenAPI specification before public SDK generation.

## SDK

- Language: TypeScript.
- Package target: ESM-first with generated API clients after backend OpenAPI stabilizes.
- Scope: typed helpers for draw discovery, entry state, claim flows, and app integrations after protocol RFC approval.

## Creator Dashboard

- Framework: Next.js or React/Vite.
- Recommendation: start with React/Vite inside `apps/webapp`; move to Next.js only if server-rendered pages, SEO, or dashboard routing complexity justifies it.
- Auth: wallet-first authentication design requires RFC approval.

## RFC-first implementation gate

Large features must follow this sequence:

1. Create or update an RFC in `rfc/`.
2. Review security, legal, and operational implications.
3. Approve implementation scope.
4. Implement behind tests and documentation.
