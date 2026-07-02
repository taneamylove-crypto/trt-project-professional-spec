# Sprint 3 Status: Contract Implementation Preparation

Status: In progress, implementation blocked.

## Completed

- Contract design checklist created.
- Contract test matrix created.
- TON tooling decision recorded.
- Contract package remains RFC-gated.
- No business logic implemented.

## Current gates

Implementation remains blocked until:

- RFC-0003 is reviewed and approved;
- RFC-0004 is reviewed and approved;
- RFC-0005 is reviewed and approved;
- exact factory MVP scope is selected;
- exact draw contract MVP scope is selected;
- exact randomness MVP scope is selected.

## Next preparation work

- define factory MVP parameter subset;
- define draw contract MVP state subset;
- define oracle randomness payload fields;
- map each MVP item to required tests;
- decide whether Acton can be adopted cleanly inside the monorepo or whether Blueprint is the practical fallback.

## Explicit non-goals

- no mainnet scripts;
- no paid public draw;
- no payout logic;
- no randomness submission;
- no token mechanics;
- no charity automation.
