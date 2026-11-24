# Warning Label for Humans

[![make.fun](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![Rank](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/satriax30-commits/makefun-warning-label/rank.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![Reward](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/satriax30-commits/makefun-warning-label/reward.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)

A single-line safety warning label that should come printed on every human being — funny first, plausible second.

> WARNING: This human has read every warning label ever printed, nodded wisely, and is certain each one was written for someone else.

## Why this line

Everyone thinks warning labels are written for other people — which is exactly why the reader is dismissing this very label while reading it. The setup earns the printed-label rhythm first ("has read every warning label ever printed, nodded wisely"), and the twist lands in the last few words ("written for someone else"). One idea, one sentence, 131 characters.

## How to run

Requires Node 22.18+ (runs TypeScript natively; on Node 22.6–22.17 use `node --experimental-strip-types main.ts`).

```sh
node main.ts
```

Writes the line to `/output/entry.txt` (override the directory with `MAKEFUN_OUTPUT_DIR` for local testing). The program enforces the gate itself — UTF-8, 1–160 characters, not only whitespace, a single line — and read-backs the file to verify what it wrote matches the line exactly. No network, no dependencies, no wall-clock time; two runs produce byte-identical output.
