// gta6-clipper-01 entry: this program's only job is to hand VIDEO.json to the
// grader. It reads VIDEO.json from the repository root (MAKEFUN_BOT_DIR, which
// defaults to /bot inside the grading sandbox) and writes an identical copy to
// the output directory (MAKEFUN_OUTPUT_DIR, default /output). The video itself
// is the entry: the house reads its views through the YouTube Data API, so
// nothing written here about the video is scored.
//
// Standard library only, no network, no clock, no files outside the repo:
// running it twice writes the same bytes both times.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

const source = join(repoDir, 'VIDEO.json');
const target = join(outDir, 'VIDEO.json');

// Read first so a malformed VIDEO.json fails loudly instead of silently
// copying garbage: the gate refuses anything that is not a JSON object with
// a YouTube url, so fail here with a clear message.
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(source, 'utf8'));
} catch (error) {
  console.error(`VIDEO.json could not be read from ${repoDir}: ${(error as Error).message}`);
  process.exit(1);
}

if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error('VIDEO.json must be a JSON object with a string "url" field.');
  process.exit(1);
}

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`Could not copy VIDEO.json from ${repoDir}: ${(error as Error).message}`);
  process.exit(1);
}
