# TON Contract MVP Acceptance Matrix

Status: Draft preparation. No contract business logic is approved by this document.

This matrix maps the first contract MVP scope to acceptance criteria and required tests.

## Factory MVP acceptance

| Scope item             | Acceptance criteria                                                                     | Required tests                                            |
| ---------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Creator address        | Factory stores creator address in draw init data.                                       | Accept valid creator; reject empty creator.               |
| Metadata reference     | Factory accepts only approved metadata encoding.                                        | Accept valid metadata; reject unsupported metadata.       |
| Start time             | Draw cannot open before configured start time.                                          | Pending before start; open at/after start.                |
| Entry lock time        | Draw rejects entries after lock time/state.                                             | Accept before lock; reject after lock.                    |
| Finalization time      | Draw cannot finalize before configured finalization time unless RFC approves otherwise. | Reject early finalization; allow after finalization time. |
| Maximum entries        | Draw rejects entries above total cap.                                                   | Accept up to max; reject max + 1.                         |
| Per-participant limit  | Draw rejects participant entries above cap.                                             | Accept up to participant cap; reject cap + 1.             |
| Free-entry mode        | Entry messages do not represent paid participation.                                     | Accept valid free entry; reject payment-only modes.       |
| Oracle identity        | Draw stores authorized oracle identity.                                                 | Accept configured oracle; reject unconfigured oracle.     |
| Oracle randomness mode | Factory supports only oracle-based randomness for MVP.                                  | Accept oracle mode; reject all other modes.               |
| Protocol version       | Factory/draw expose version for indexers.                                               | Read version from factory/draw state.                     |

## Draw contract MVP acceptance

| Scope item                | Acceptance criteria                                                  | Required tests                                                     |
| ------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Pending state             | New draw starts in `Pending` when start time is in the future.       | Initial state is pending.                                          |
| Open state                | Draw accepts entries only in `Open`.                                 | Entry accepted in open; rejected in non-open states.               |
| Locked state              | Entry accounting is immutable after lock.                            | Total entries unchanged after rejected post-lock entry.            |
| RandomnessSubmitted state | Valid randomness can be accepted only once after lock.               | Accept first valid randomness; reject duplicate.                   |
| Finalized state           | Finalization derives result data from locked entries and randomness. | Deterministic result from fixed inputs once algorithm is approved. |
| Closed state              | Closed draw rejects security-critical mutations.                     | Reject entry/randomness/finalize after close.                      |
| Participant entry count   | Participant entry count is tracked.                                  | Participant count increments correctly.                            |
| Total entry count         | Total entry count is tracked.                                        | Total count increments correctly.                                  |
| Entry ownership lock      | Participant accounting does not change after lock.                   | Snapshot before/after rejected mutation.                           |

## Randomness MVP acceptance

| Scope item            | Acceptance criteria                                             | Required tests                              |
| --------------------- | --------------------------------------------------------------- | ------------------------------------------- |
| Protocol identifier   | Payload is domain-separated for TRT.                            | Reject payload with wrong protocol id.      |
| Protocol version      | Payload is bound to expected protocol version.                  | Reject unsupported version.                 |
| Network identifier    | Payload cannot cross networks.                                  | Reject wrong network id.                    |
| Factory address       | Payload is bound to expected factory.                           | Reject wrong factory address.               |
| Draw contract address | Payload is bound to this draw.                                  | Reject payload for another draw.            |
| Locked entry count    | Payload is bound to locked count.                               | Reject wrong locked entry count.            |
| Randomness nonce      | Payload cannot be replayed with same nonce where nonce is used. | Reject replayed nonce.                      |
| Random value          | Payload includes non-empty random value.                        | Reject empty or malformed random value.     |
| Oracle identity       | Only authorized oracle may submit.                              | Reject unauthorized oracle.                 |
| Signature/proof bytes | Payload proof is validated before acceptance.                   | Reject malformed proof; accept valid proof. |

## Explicitly blocked acceptance areas

These areas have no acceptance tests yet because they are not approved for MVP:

- paid TON entries;
- Jetton entries;
- project token entries;
- creator fees;
- protocol fees;
- charity allocations;
- prize custody;
- payout claims;
- refunds;
- cancellation;
- mainnet deployment scripts.

## Review gate

Before implementation begins, each acceptance item must have:

- an approved RFC reference;
- an implementation task;
- at least one positive test;
- at least one rejection or edge-case test where applicable.
