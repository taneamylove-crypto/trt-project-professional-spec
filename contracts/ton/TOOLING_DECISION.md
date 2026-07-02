# TON Tooling Decision

Status: Draft decision for Sprint 3 preparation.

## Decision

TRT will keep the contract package implementation-gated for now and will not initialize production contract logic until protocol RFCs are approved.

For the first contract implementation sprint, TRT should use:

- contract language: Tact by default;
- fallback language: FunC only where Tact cannot express the required behavior safely or efficiently;
- TypeScript integration: `@ton/core` wrappers;
- local testing: TON Sandbox;
- project workflow: evaluate Acton first, with Blueprint as the fallback if Acton does not fit the monorepo workflow.

## Rationale

TON Docs currently present Acton as the recommended tool for new smart-contract projects, while Blueprint remains supported. Blueprint is still useful because it is a TypeScript-based environment around contract building, Sandbox tests, deployment scripts, and wrappers.

Because TRT has not approved contract business logic yet, the best current action is to document this decision and delay dependency installation until implementation scope is approved. This avoids prematurely locking the project into a toolchain before the contract state machine, randomness interface, and test matrix are final.

## References

- TON Docs: Blueprint overview - https://docs.ton.org/contracts/blueprint/overview
- TON Docs: Write your first smart contract with Blueprint - https://docs.ton.org/contracts/blueprint/first-smart-contract

## Implementation gate

Before adding TON contract dependencies, the team must complete:

- approved RFC-0003, RFC-0004, and RFC-0005 scope;
- final contract state machine;
- final randomness interface;
- final test matrix;
- decision between Acton-first setup and Blueprint fallback setup.

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

- factory implementation;
- draw contract implementation;
- randomness submission;
- payout logic;
- deployment scripts;
- mainnet usage.
