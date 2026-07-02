# RFC Process

TRT uses an RFC-first workflow. Major features must not be implemented until their RFCs are approved.

## Statuses

### Draft

The RFC is being written. Draft RFCs may guide preparation work, but they do not approve implementation.

Allowed work:

- research;
- architecture notes;
- test matrices;
- non-business-logic scaffolding;
- review preparation.

### Review

The RFC is ready for structured review.

Required review areas:

- product scope;
- security;
- legal/compliance;
- operations;
- testability;
- implementation boundaries.

For smart-contract, randomness, payout, tokenomics, treasury, or legal-risk features, an independent reviewer pass is expected before approval.

### Approved

The RFC is approved for implementation within its stated scope.

Approval must include:

- exact scope;
- explicit non-goals;
- required tests;
- security considerations;
- legal/compliance notes;
- implementation owner;
- review expectations.

### Implemented

The approved RFC scope has been implemented, tested, reviewed, and merged.

### Superseded

The RFC is replaced by another RFC or decision.

### Rejected

The RFC is intentionally not moving forward.

## Approval rules

An RFC may move from Draft to Review when:

- scope is clear;
- non-goals are explicit;
- known risks are documented;
- test strategy is described.

An RFC may move from Review to Approved when:

- review feedback is addressed;
- implementation boundaries are clear;
- required tests are listed;
- legal/security gates are satisfied for the requested phase.

## Implementation rules

Implementation must:

- reference the approved RFC;
- stay inside approved scope;
- include tests for required behavior;
- include rejection tests for security-sensitive behavior;
- keep GitHub CI green;
- avoid unrelated refactors.

Implementation must not:

- add payout, randomness, token, treasury, charity, or mainnet behavior from a Draft RFC;
- rely on undocumented admin powers;
- introduce user-facing legal-risk language without review;
- expand scope silently during coding.

## Emergency changes

Emergency fixes may bypass the normal RFC timeline only when they reduce immediate risk and do not expand product scope. The RFC must be updated afterward.

## Current policy

As of this repository baseline:

- RFC-0001 is Draft.
- RFC-0003 is Draft.
- RFC-0004 is Draft.
- RFC-0005 is Draft.
- RFC-0010 is Draft.
- Contract implementation remains blocked.
