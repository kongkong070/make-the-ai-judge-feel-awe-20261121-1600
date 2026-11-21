// Writes one short, original text to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Node 22+, stdlib only, no network. Deterministic: the same text every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "The rain has stopped. On the sill, one last drop gathers, holds, and lets go, sliding down the glass. Below, the street is empty, and a cat crosses the yard it knows by heart. In the drop, the whole lamp trembles, small and steady. The night is wide, and it is already yours.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
