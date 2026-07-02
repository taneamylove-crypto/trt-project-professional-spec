# TON Contract MVP Scope

Status: Accepted as the Sprint 4 Factory MVP implementation boundary under approved RFC-0003.

This document narrows the first contract MVP to a small, testable, testnet-only subset. It is intentionally conservative. Only the Factory MVP section is approved for Sprint 4 implementation under RFC-0003.

## Factory MVP

### Supported creation parameters

The first factory MVP should support only:

- creator address;
- metadata URI or metadata hash;
- start time;
- entry lock time;
- draw finalization time;
- maximum entries;
- maximum entries per participant;
- free-entry mode;
- oracle address or oracle public key reference;
- randomness mode: oracle-based only;
- protocol version.

### Explicitly excluded

The factory MVP must not support:

- paid TON entries;
- Jetton entries;
- project token entries;
- creator fees;
- protocol fees;
- charity allocations;
- staking or NFT eligibility;
- automatic deployment to mainnet;
- mutable draw economics after deployment.

### Required validation

The factory MVP must reject:

- empty creator address;
- unsupported randomness mode;
- missing oracle identity;
- invalid time ordering;
- zero maximum entries;
- zero participant entry limit;
- participant entry limit greater than maximum entries;
- metadata values outside the approved encoding;
- creation while factory creation is paused.

## Draw Contract MVP

### Supported lifecycle states

The first draw contract MVP should support:

1. `Pending`
2. `Open`
3. `Locked`
4. `RandomnessSubmitted`
5. `Finalized`
6. `Closed`

`Claiming` is excluded because payout logic is not approved.

`Cancelled` is excluded from the first MVP unless required for missing randomness fallback. If cancellation is added, it must be specified before implementation.

### Supported entry model

The first MVP should use a simple participant entry-count model:

- each participant address maps to an entry count;
- total entry count is tracked;
- maximum entries is enforced;
- maximum entries per participant is enforced;
- entry ownership is fixed after lock.

This model is easier to test than one cell per entry. If winner derivation later needs a different structure, the implementation RFC must define it before coding.

### Supported entry mode

Only free-entry mode is in scope for the first MVP.

Paid entries, prize custody, refunds, and payout claims are out of scope.

### Result output

The first MVP may expose deterministic result data, but not payout claims.

Result derivation must be reproducible from:

- draw contract address;
- locked entry count;
- participant entry accounting;
- accepted randomness;
- protocol version.

The exact winner selection algorithm remains blocked until approval.

See [RESULT_DERIVATION.md](RESULT_DERIVATION.md) for the draft result derivation policy.

## Randomness MVP

### Oracle payload fields

The first oracle payload should be specified around:

- protocol identifier;
- protocol version;
- network identifier;
- factory address;
- draw contract address;
- locked entry count;
- randomness nonce;
- random value;
- oracle identity;
- signature or proof bytes.

Exact serialization must be defined before implementation.

See [ORACLE_PAYLOAD.md](ORACLE_PAYLOAD.md) for the draft payload serialization policy.

### Submission rules

The draw contract must:

- reject randomness before lock;
- reject unauthorized oracle submissions;
- reject duplicate randomness;
- reject randomness for another draw;
- reject malformed payloads;
- bind randomness to the draw contract address;
- bind randomness to the locked entry count.

## Test mapping

Every MVP feature above must map to a test in `TEST_MATRIX.md` before implementation starts.

See [MVP_ACCEPTANCE_MATRIX.md](MVP_ACCEPTANCE_MATRIX.md) for the explicit scope-to-test mapping.

Minimum required test groups:

- factory parameter acceptance;
- factory parameter rejection;
- factory admin permissions;
- draw state transitions;
- free-entry accounting;
- lock immutability;
- oracle authorization;
- randomness replay rejection;
- deterministic result reproducibility once algorithm is approved.

## Launch boundary

The MVP is local/testnet only.

Mainnet remains blocked by:

- approved RFCs;
- complete tests;
- threat model;
- internal review;
- independent TON audit;
- explicit launch checklist.
