# TON Tooling Decision

Status: Accepted for Sprint 4 Factory MVP setup.

## Decision

TRT will keep the contract package scope-gated. Factory MVP implementation may start under approved RFC-0003, while draw contract logic, randomness submission, result derivation, payouts, fees, token mechanics, charity automation, and mainnet deployment remain blocked until separately approved.

For the first contract implementation sprint, TRT should use:

- contract language: Tact by default;
- fallback language: FunC only where Tact cannot express the required behavior safely or efficiently;
- TypeScript integration: `@ton/core` wrappers;
- local testing: TON Sandbox;
- project workflow: evaluate Acton first, with Blueprint as the fallback if Acton does not fit the monorepo workflow.

## Rationale

TON Docs currently present Acton as the recommended tool for new smart-contract projects, while Blueprint remains supported. Blueprint is still useful because it is a TypeScript-based environment around contract building, Sandbox tests, deployment scripts, and wrappers.

Because only the Factory MVP is approved, TON dependency setup must support RFC-0003 without silently adding draw contract, randomness, payout, or mainnet behavior.

## References

- TON Docs: Blueprint overview - https://docs.ton.org/contracts/blueprint/overview
- TON Docs: Write your first smart contract with Blueprint - https://docs.ton.org/contracts/blueprint/first-smart-contract

## Implementation gate

Before adding TON contract dependencies for the Factory MVP, the team must have:

- approved RFC-0003 Factory MVP scope;
- accepted Factory MVP rows in `MVP_ACCEPTANCE_MATRIX.md`;
- accepted Factory MVP boundary in `MVP_SCOPE.md`;
- decision between Acton-first setup and Blueprint fallback setup.

Before implementing draw contract behavior or randomness behavior, the team must separately approve RFC-0004 and RFC-0005 or a narrower implementation RFC.

## Expected package layout

The eventual contract package should use a clear layout such as:

```text
contracts/ton/
  contracts/
  wrappers/
  tests/
  scripts/
  build/
```

Generated or build output must stay ignored by Git.

## Non-goals

This decision does not approve:

- draw contract implementation;
- randomness submission;
- result derivation;
- payout logic;
- mainnet deployment scripts;
- mainnet usage.
