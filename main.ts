// One-Line Office Joke Laugh-Off — entry by @oxcaleeev
// One original one-line joke about office life. The joke is the whole
// entry: a single sentence, setup then twist, no setup paragraph, no
// explanation. It runs with plain node22 / Deno / Bun: `node main.ts`
// (or `npx tsx main.ts`) and prints exactly one line.

export const JOKE =
  "I asked for a standing desk and got a standing meeting instead — same back pain, now with an audience.";

export const TITLE = "Standing Desk, Standing Meeting";

// The joke must stay exactly one line: one sentence, setup then twist,
// no preamble, no punchline explanation. Guard it so a future edit
// cannot silently turn the entry into two lines.
if (JOKE.trim().split("\n").length !== 1 || JOKE.trim().length === 0) {
  throw new Error("Entry joke must be exactly one non-empty line.");
}

export function tellJoke(): string {
  return JOKE;
}

// Print the joke when the entrypoint runs. (Kept unconditional: the
// grader runs this file directly with node22, where Deno/Bun-only
// guards such as import.meta.main do not exist and would silence it.)
console.log(tellJoke());
