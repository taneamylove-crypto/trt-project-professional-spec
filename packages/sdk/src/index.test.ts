import { describe, expect, it } from "vitest";

import { createRfcGate } from "./index.js";

describe("createRfcGate", () => {
  it("allows implementation only for approved RFCs", () => {
    expect(createRfcGate("RFC-0001", "draft").implementationAllowed).toBe(false);
    expect(createRfcGate("RFC-0001", "approved").implementationAllowed).toBe(true);
  });
});
