# TON Contracts

Placeholder for TON smart contracts.

No contract business logic should be added until the corresponding RFC is approved.

## Planned stack

- Tact as the default contract language.
- FunC only where Tact is not sufficient.
- Acton evaluation first, Blueprint fallback, and Sandbox for local build/test workflows.

See [TOOLING_DECISION.md](TOOLING_DECISION.md).

See [MVP_SCOPE.md](MVP_SCOPE.md) for the first conservative contract MVP boundary.

See [MVP_ACCEPTANCE_MATRIX.md](MVP_ACCEPTANCE_MATRIX.md) for the first MVP acceptance criteria.

## Commands

Current commands are RFC gates and intentionally do not compile contracts yet:

- `pnpm --filter @trt/contracts-ton build`
- `pnpm --filter @trt/contracts-ton test`
- `pnpm --filter @trt/contracts-ton typecheck`
