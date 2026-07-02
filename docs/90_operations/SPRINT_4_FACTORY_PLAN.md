# Sprint 4 Plan: TON Draw Factory MVP

Status: Ready for implementation under approved RFC-0003 scope.

## Goal

Implement the first local/testnet-only TON Draw Factory MVP after RFC-0003 is approved.

The factory MVP must deploy or prepare independent draw contracts with conservative free-entry parameters only. It must not implement winner selection, payout logic, token mechanics, charity automation, or mainnet deployment.

## Required approvals

Sprint 4 implementation is open because:

- RFC-0003 is Approved for the Sprint 4 Factory MVP;
- RFC-0004 and RFC-0005 were reviewed for compatibility only and remain unapproved for implementation;
- `MVP_SCOPE.md` is accepted as the Sprint 4 implementation boundary;
- `MVP_ACCEPTANCE_MATRIX.md` factory rows are accepted as required tests.

## Scope

Factory MVP scope:

- factory version state;
- admin address;
- paused/unpaused creation flag;
- approved oracle-based randomness mode;
- draw creation using the approved MVP parameter subset;
- validation for creator, metadata, times, entry caps, and oracle identity;
- draw address exposure for wrappers/indexers;
- no paid entry mode;
- no fee configuration;
- no payout configuration;
- no charity allocation.

## Expected implementation files

The exact toolchain may change after Acton/Blueprint evaluation, but a likely layout is:

```text
contracts/ton/
  contracts/
    draw_factory.tact
  wrappers/
    DrawFactory.ts
  tests/
    draw_factory.spec.ts
  scripts/
    deploy_factory_testnet.ts
```

Deployment scripts must remain testnet/local only.

## Test-first sequence

Implementation should begin with tests in this order:

1. Factory exposes protocol version.
2. Admin can pause and unpause creation.
3. Non-admin cannot pause or unpause creation.
4. Factory rejects invalid creator address.
5. Factory rejects invalid time ordering.
6. Factory rejects zero maximum entries.
7. Factory rejects zero participant entry limit.
8. Factory rejects participant limit greater than maximum entries.
9. Factory rejects unsupported randomness mode.
10. Factory rejects missing oracle identity.
11. Factory accepts valid MVP draw parameters.
12. Factory exposes created draw address or init data.

## Explicit non-goals

- no participant entries;
- no draw locking;
- no randomness submission;
- no result derivation;
- no claims;
- no payouts;
- no refunds;
- no creator fees;
- no protocol fees;
- no Jettons;
- no project token;
- no charity automation;
- no mainnet deployment.

Any implementation outside these non-goals requires a separate approved RFC before code is written.

## Exit criteria

Sprint 4 can be considered complete when:

- factory MVP scope is implemented;
- required factory tests pass;
- CI passes;
- implementation references approved RFC-0003;
- code does not exceed the approved scope;
- docs are updated with local/testnet usage only.

## Review expectations

Review must check:

- no winner or payout logic exists in factory;
- admin powers are minimal;
- invalid parameters are rejected;
- draw deployment/init data is deterministic or explicitly documented;
- indexer-facing metadata is available;
- GitHub Actions pass on `main` and `develop`.
