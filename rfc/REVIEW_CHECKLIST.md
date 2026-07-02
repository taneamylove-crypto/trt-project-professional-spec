# Protocol RFC Review Checklist

Use this checklist before moving protocol RFCs from Review to Approved.

## Scope

- The reviewed implementation scope is explicit.
- Non-goals are explicit and testable.
- The RFC does not silently approve behavior from another RFC.
- Local/testnet/mainnet boundaries are stated.
- Paid entry, token, charity, payout, and fee behavior is either excluded or separately approved.

## Security

- Admin controls are minimal and listed.
- Creator-controlled parameters have validation rules.
- State boundaries between factory, draw contract, backend, SDK, and UI are clear.
- Randomness assumptions and oracle trust boundaries are stated.
- Replay, spoofing, indexing, gas, and storage risks are considered.
- Required tests cover accepted and rejected paths.

## Legal And Compliance

- Terminology avoids unnecessary legal risk.
- Paid entries are not introduced without legal review.
- Creator self-service is gated until legal review.
- Mainnet deployment is separately approved.
- Charity, token, fee, and payout mechanics are separately approved.

## Implementation Readiness

- Acceptance criteria are specific enough for Codex to implement without expanding scope.
- Required tests are listed.
- Open decisions are identified and do not block the approved subset.
- Documentation links match the current sprint plan.
- CI expectations are stated.

## RFC-0003 Review Items

- Confirm the factory does not implement participant entries, winner selection, randomness submission, payouts, refunds, fees, token mechanics, charity automation, or mainnet deployment.
- Confirm Sprint 4 uses free-entry local/testnet behavior only.
- Confirm parameter validation covers creator, metadata, times, entry caps, randomness mode, oracle identity, and paused creation.
- Confirm the factory exposes enough draw address or init data for wrappers and indexers.
- Confirm RFC-0004 and RFC-0005 compatibility is reviewed before implementation begins.
