import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I asked my smartwatch if I was healthy. It said, 'Let's not do this in public.'";

if (JOKE.length < 1 || JOKE.length > 280) {
  throw new Error(`Joke must be 1..280 characters, got ${JOKE.length}`);
}
if (JOKE.trim().length === 0) {
  throw new Error("Joke must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
