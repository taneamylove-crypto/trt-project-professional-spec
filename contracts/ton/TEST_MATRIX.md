# TON Contract Test Matrix

This matrix describes required tests before contract business logic can be accepted.

## Factory tests

### Creation success

- creates a draw with approved MVP parameters;
- stores or exposes factory version;
- exposes created draw address;
- emits/indexes creator and parameter metadata.

### Parameter rejection

- rejects invalid creator address;
- rejects invalid time ordering;
- rejects unsupported payment asset;
- rejects fee configuration above cap;
- rejects missing randomness configuration;
- rejects metadata format outside approved scope;
- rejects values that exceed storage/gas assumptions.

### Permissions

- allows admin-only configuration updates from admin;
- rejects admin-only configuration updates from non-admin;
- rejects draw creation when factory creation is paused;
- prevents factory admin from mutating already deployed draw parameters unless explicitly approved.

## Draw contract tests

### State machine

- starts in expected initial state;
- transitions from pending to open;
- transitions from open to locked;
- rejects entries after lock;
- rejects randomness before lock;
- accepts valid randomness once;
- rejects duplicate randomness;
- finalizes only after valid randomness;
- rejects mutation after closed/cancelled states.

### Entries

- accepts a valid entry during open state;
- rejects invalid payment amount;
- rejects unsupported asset;
- rejects entries above participant limit;
- rejects entries above maximum draw limit;
- preserves locked entry accounting;
- exposes final entry count.

### Randomness

- rejects unauthorized oracle;
- rejects payload for another draw;
- rejects malformed payload;
- rejects replayed payload;
- accepts valid payload after lock;
- derives deterministic result from fixed inputs.

### Claims and payouts

Claim and payout tests are blocked until payout scope is approved.

When approved, tests must cover:

- winner-only claim;
- non-winner rejection;
- duplicate claim rejection;
- fee calculation;
- rounding behavior;
- failed transfer behavior;
- unclaimed funds behavior;
- cancellation refund behavior.

### Cancellation

Cancellation tests are blocked until cancellation scope is approved.

When approved, tests must cover:

- allowed cancellation states;
- unauthorized cancellation rejection;
- participant refund behavior;
- cancelled draw cannot finalize;
- cancelled draw cannot accept randomness.

## Gas and storage tests

- minimum entry count case;
- configured maximum entry count case;
- large participant count case within approved bounds;
- finalization gas budget;
- claim gas budget when claims are approved.

## Indexing and verification tests

- factory exposes draw metadata;
- draw exposes public state;
- final result can be recomputed from public inputs;
- indexer can distinguish pending, open, locked, finalized, closed, and cancelled states.
