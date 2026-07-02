# TON Contract Design Checklist

This checklist must be completed before implementing TON draw contracts.

## RFC status

- RFC-0003 TON Draw Factory approved for Sprint 4 Factory MVP.
- RFC-0004 TON Draw Contract reviewed.
- RFC-0005 Randomness and Live Draw reviewed.
- Implementation scope explicitly approved.

## Tooling decision

- Contract language selected: Tact by default.
- Fallback language selected: FunC only where justified.
- Tooling path selected: evaluate Acton first, Blueprint as fallback.
- Sandbox test approach selected: required for local tests.
- Generated wrappers strategy selected: TypeScript wrappers around `@ton/core`.

## Factory design

- Factory state fields listed.
- Factory messages listed.
- Draw deployment init data listed.
- Parameter validation rules listed.
- Admin controls listed.
- Indexing event/message strategy listed.
- Versioning strategy listed.

## Draw contract design

- Draw state fields listed.
- Draw lifecycle states listed.
- Accepted messages listed.
- Rejected message cases listed.
- Entry accounting model selected.
- Locking behavior specified.
- Randomness acceptance interface specified.
- Result derivation algorithm specified.
- Claim/payout behavior specified or explicitly excluded.
- Cancellation behavior specified or explicitly excluded.

## Randomness design

- Randomness mode selected.
- Oracle identity model specified.
- Payload domain separation specified.
- Signature/proof format specified.
- Replay protection specified.
- Missing-randomness behavior specified.

## Security design

- Contract invariants listed.
- Permission model listed.
- Gas/storage assumptions documented.
- Failure modes documented.
- Test matrix complete.
- Audit notes prepared.

## Launch gates

- Local tests passing.
- Testnet deployment checklist complete.
- Mainnet explicitly blocked until independent audit.
