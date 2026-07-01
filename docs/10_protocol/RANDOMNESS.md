# Randomness Architecture

Potential modes:

## 1. Pure oracle / VRF-like randomness

External service submits random value with proof/signatures.

## 2. Live draw input

Live balls/numbers are scanned and submitted by oracle.

## 3. Hybrid

finalRandom = hash(liveDrawNumbers + oracleRandom + blockData)

## MVP recommendation

Use a conservative oracle-based approach on testnet first, then design a hybrid live draw verification layer.
