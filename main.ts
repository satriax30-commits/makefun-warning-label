// Warning Label for Humans: One Line, Big Laugh
// Writes the funniest single-line safety warning label that should come
// printed on every human being to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network, no wall-clock time.

// The line. Candidates considered:
//  - Sleep/scroll: "needs eight hours of sleep ... until 3 a.m. scrolling
//    videos of strangers" (128 chars) — universal, but the twist is a
//    behaviour, not a turn on the label itself.
//  - Label-reader: "will read this label, nod wisely, and immediately do
//    the exact thing it warns against" (101 chars) — meta, but the punch
//    is spelled out mid-line and it is short for the 160 budget.
//  - Exception: "convinced every warning label applies to other people"
//    (77 chars) — sharpest idea, but too short and the twist arrives
//    before the line has earned its label rhythm.
// Chosen: the exception idea, expanded so the label rhythm is earned
// first ("has read every warning label ever printed, nodded wisely")
// and the twist lands in the last few words ("written for someone
// else"). One idea, one sentence, true of almost everyone, and the joke
// is self-referential in exactly the way a printed label can be: the
// reader is dismissing this very label while reading it.
const LINE =
  "WARNING: This human has read every warning label ever printed, nodded wisely, and is certain each one was written for someone else.";

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Enforce the gate ourselves: UTF-8 text, 1-160 characters, not only
// whitespace, a single line.
if (
  LINE.length < 1 ||
  LINE.length > 160 ||
  LINE.trim().length === 0 ||
  /\n/.test(LINE)
) {
  throw new Error(`line fails gate: ${LINE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

// Read-back self-check: what we wrote must be exactly the line, so a
// truncated or re-encoded write fails loudly instead of shipping a
// broken entry.
const written = readFileSync(join(outDir, "entry.txt"), "utf8");
if (written !== LINE) {
  throw new Error("read-back mismatch: entry.txt differs from LINE");
}
