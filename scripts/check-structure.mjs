import { existsSync } from "node:fs";
import { join } from "node:path";

const requiredPaths = [
  "contracts/ton",
  "apps/telegram-miniapp",
  "apps/webapp",
  "services/backend",
  "packages/sdk",
  "docs",
  "rfc",
  "tests",
  "audits"
];

const missing = requiredPaths.filter((path) => !existsSync(join(process.cwd(), path)));

if (missing.length > 0) {
  console.error("Missing required repository paths:");
  for (const path of missing) {
    console.error(`- ${path}`);
  }
  process.exit(1);
}

console.log("Repository structure OK.");
