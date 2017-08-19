import { statSync } from "fs";

// Returns the project's size in bytes
export function projectSize(): number {
  const stats = statSync(__dirname);
  return stats.size;
}

console.log(`Project size of ${__dirname}: ${projectSize()} bytes`);
