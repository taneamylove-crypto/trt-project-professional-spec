export const sdkPackageName = "@trt/sdk";

export type RfcStatus = "draft" | "review" | "approved" | "rejected";

export interface RfcGate {
  readonly rfcId: string;
  readonly status: RfcStatus;
  readonly implementationAllowed: boolean;
}

export function createRfcGate(rfcId: string, status: RfcStatus): RfcGate {
  return {
    rfcId,
    status,
    implementationAllowed: status === "approved"
  };
}
