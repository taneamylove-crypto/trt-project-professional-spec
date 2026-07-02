# Result Derivation Policy

Status: Draft preparation. No winner-selection implementation is approved by this document.

This document defines the policy for deterministic result derivation. The exact algorithm remains blocked until RFC approval.

## Goals

Result derivation must be:

- deterministic;
- reproducible from public or auditable inputs;
- bound to the locked entry snapshot;
- bound to accepted randomness;
- independent from mutable post-lock state;
- testable with fixed vectors.

## Required inputs

The first MVP result derivation should depend only on:

- protocol id;
- protocol version;
- draw contract address;
- locked entry count;
- participant entry accounting snapshot;
- accepted oracle random value;
- randomness nonce or payload hash.

## Excluded inputs

The first MVP result derivation must not depend on:

- mutable frontend state;
- backend indexer state;
- current wall-clock time after finalization starts;
- unapproved block data;
- creator-controlled metadata;
- payout configuration;
- charity allocation configuration.

## Candidate derivation shape

A future implementation may derive a result seed conceptually as:

```text
result_seed = hash(
  protocol_id,
  protocol_version,
  draw_address,
  locked_entry_count,
  entry_snapshot_hash,
  oracle_random_value,
  randomness_nonce
)
```

Then derive an index:

```text
winning_index = result_seed mod locked_entry_count
```

This is a candidate shape only. It is not approved as final implementation because modulo bias, entry snapshot encoding, and multi-entry participant mapping must be reviewed first.

## Entry snapshot hash

Before implementation, the team must define:

- participant ordering;
- entry count encoding;
- address encoding;
- duplicate handling;
- hash tree or cell serialization format;
- whether the snapshot is stored directly or derived from contract state.

## Multi-entry mapping

The MVP participant entry-count model requires a deterministic way to map a `winning_index` to a participant.

Before implementation, define:

- index base: zero-based or one-based;
- participant ordering;
- range assignment for participants with multiple entries;
- behavior when `locked_entry_count` is zero.

## Bias and edge cases

Before approving the final algorithm, review:

- modulo bias;
- zero-entry draws;
- one-entry draws;
- maximum-entry draws;
- duplicate participant entries;
- gas cost of mapping index to participant;
- reproducibility from public state.

## Test vectors

Implementation must include fixed test vectors for:

- zero entries rejected or non-finalizable;
- one entry always maps to the only participant;
- multiple participants with one entry each;
- one participant with multiple entries;
- several participants with uneven entry counts;
- same inputs produce same result;
- changed random value changes result;
- changed entry snapshot changes result.

## Non-goals

This document does not approve:

- payout claims;
- prize distribution;
- multiple winners;
- weighted entries beyond explicit entry counts;
- live-draw numbers;
- hybrid randomness;
- mainnet finalization.
