# Lottery Factory

The Factory deploys new draw/lottery contracts.

## Parameters

- creator address
- entry currency: TON / Jetton / project token
- entry price or free-entry mode
- prize rules
- draw time
- creator fee
- protocol fee
- charity allocation
- randomness mode

## Requirements

- deterministic deployment where possible
- event/log indexing for frontend
- creator ownership and admin boundaries
- emergency pause only if legally and technically justified
