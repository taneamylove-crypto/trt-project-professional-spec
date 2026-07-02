# Sprint Plan

TRT is developed in controlled iterations. Each sprint must keep GitHub synchronized with the local repository and must preserve the RFC-first rule.

## Sprint 0: Repository Infrastructure

Status: Done

Scope:

- initialize Git repository;
- create GitHub repository;
- create `main` and `develop`;
- scaffold monorepo;
- configure CI;
- add workspace package shells.

Exit criteria:

- GitHub repository exists;
- CI passes on `main` and `develop`;
- no business logic is implemented.

## Sprint 1: Foundation RFCs

Status: Review started

Scope:

- RFC-0001 Vision and Scope;
- RFC-0010 Legal and Security Boundaries.

Exit criteria:

- project boundaries are documented;
- legal/security gates are documented;
- mainnet and business logic remain blocked until approved RFCs.

## Sprint 2: Protocol Architecture RFCs

Status: Draft complete

Scope:

- RFC-0003 TON Draw Factory (Review);
- RFC-0004 TON Draw Contract;
- RFC-0005 Randomness and Live Draw.

Exit criteria:

- factory responsibilities are separated from draw logic;
- draw state machine and invariants are documented;
- randomness MVP recommendation is documented;
- no contract business logic is implemented.

## Sprint 3: Contract Implementation Preparation

Status: Review preparation complete; blocked until RFC-0003 approval

Scope:

- create TON contract technical design checklist;
- create draw factory test matrix;
- create draw contract test matrix;
- choose exact Tact/Blueprint package setup;
- keep implementation blocked until RFC approval.

Exit criteria:

- implementation tasks are small and testable;
- required tests are listed before code;
- contract package can be initialized without business logic leakage.

## Sprint 4: TON Draw Factory MVP

Status: Planned

Plan: [SPRINT_4_FACTORY_PLAN.md](SPRINT_4_FACTORY_PLAN.md)

Scope:

- implement only approved factory scope;
- add tests for parameter validation and deployment boundaries;
- keep testnet/local only.

Exit criteria:

- factory tests pass;
- no winner selection or payout logic exists in factory;
- CI passes.

## Sprint 5: TON Draw Contract MVP

Status: Planned

Scope:

- implement approved draw state machine;
- implement approved entry accounting;
- add invariant tests.

Exit criteria:

- state-machine tests pass;
- entry lock behavior is tested;
- payout and randomness behavior remains within approved scope.

## Sprint 6: Randomness MVP

Status: Planned

Scope:

- implement approved oracle-based testnet randomness;
- add replay, wrong oracle, duplicate, and early-submission tests.

Exit criteria:

- randomness is bound to draw identity;
- result derivation is deterministic;
- manipulation edge cases are tested.

## Sprint 7: Telegram Mini App MVP

Status: Planned

Scope:

- connect wallet;
- display draw state;
- support approved entry and claim flows after protocol interfaces stabilize.

Exit criteria:

- UI matches approved protocol semantics;
- no legal-risk terminology is introduced without review.

## Sprint 8: Backend / Indexer MVP

Status: Planned

Scope:

- index factory and draw contracts;
- expose read-only API;
- support frontend without becoming a source of truth for settlement.

Exit criteria:

- indexed data can be reconciled with contract state;
- API is documented.

## Sprint 9: SDK MVP

Status: Planned

Scope:

- typed helpers for approved protocol/backend interfaces;
- no speculative APIs.

Exit criteria:

- SDK types match approved contract/API interfaces;
- tests cover helper behavior.

## Sprint 10: Creator Dashboard MVP

Status: Planned

Scope:

- creator configuration UI;
- draw preview;
- publish flow only after legal and protocol approval.

Exit criteria:

- creator flows respect legal and protocol gates;
- dashboard cannot launch unsupported draw types.
