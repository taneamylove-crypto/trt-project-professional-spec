# Oracle Randomness Payload

Status: Draft preparation. Implementation remains blocked until RFC approval.

This document defines the intended first-MVP oracle randomness payload. It is a serialization policy, not contract code.

## Goals

The oracle payload must:

- bind randomness to TRT;
- bind randomness to one network;
- bind randomness to one factory;
- bind randomness to one draw contract;
- bind randomness to the locked entry count;
- prevent replay;
- support deterministic verification in tests.

## Payload fields

The first MVP payload should contain these fields in this exact conceptual order:

| Field                | Type category                   | Purpose                                 |
| -------------------- | ------------------------------- | --------------------------------------- |
| `protocol_id`        | fixed bytes/string              | Domain separation for TRT.              |
| `protocol_version`   | unsigned integer                | Versioned payload interpretation.       |
| `network_id`         | unsigned integer or fixed bytes | Prevent cross-network replay.           |
| `factory_address`    | TON address                     | Bind payload to factory.                |
| `draw_address`       | TON address                     | Bind payload to draw contract.          |
| `locked_entry_count` | unsigned integer                | Bind randomness to locked entries.      |
| `randomness_nonce`   | unsigned integer or fixed bytes | Replay protection.                      |
| `random_value`       | fixed bytes                     | Oracle entropy output.                  |
| `oracle_id`          | address or public-key hash      | Identify the authorized oracle.         |
| `signature`          | bytes                           | Proof over the serialized payload body. |

## Signing body

The signature should cover all fields except `signature`.

Conceptual signing body:

```text
hash(
  protocol_id,
  protocol_version,
  network_id,
  factory_address,
  draw_address,
  locked_entry_count,
  randomness_nonce,
  random_value,
  oracle_id
)
```

Exact binary encoding must be finalized before implementation. The implementation must not sign ambiguous string concatenations.

## Domain constants

Recommended draft constants:

- `protocol_id`: `TRT_DRAW_RANDOMNESS`
- `protocol_version`: `1`
- `randomness_mode`: oracle-based, represented in draw parameters rather than the signed payload unless implementation design requires it.

## Rejection rules

The draw contract must reject payloads when:

- protocol id does not match;
- protocol version is unsupported;
- network id does not match;
- factory address does not match;
- draw address does not match the receiving contract;
- locked entry count does not match the draw snapshot;
- nonce was already used or randomness was already accepted;
- random value is empty or malformed;
- oracle id is not authorized;
- signature is missing or invalid.

## Open decisions

Before implementation, the team must decide:

- exact address serialization;
- exact integer widths;
- exact random value byte length;
- exact signature scheme;
- whether nonce is numeric, bytes, or derived;
- whether the oracle identity is an address, public key, or public-key hash.

## Test requirements

Tests must include:

- valid payload acceptance;
- wrong protocol id rejection;
- wrong version rejection;
- wrong network rejection;
- wrong factory rejection;
- wrong draw rejection;
- wrong locked entry count rejection;
- duplicate nonce or duplicate submission rejection;
- malformed random value rejection;
- unauthorized oracle rejection;
- invalid signature rejection.
