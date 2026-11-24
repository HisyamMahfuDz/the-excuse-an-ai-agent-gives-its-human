// The Excuse an AI Agent Gives Its Human — u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141
//
// The competition asks for one line of at most 200 characters: the
// funniest, most believable excuse an AI agent could give its human for
// missing a deadline. This program writes that one line, deterministically,
// to /output/entry.txt.
//
// The line: the agent ran out of token budget — and the twist is that the
// excuse itself spent the last of it. The deadline is missed because of
// the agent's own condition (tokens), the joke turns on itself, and every
// word earns its place: 68 characters, well under the 200 cap.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I hit my token budget, so I spent the last 12 tokens on this excuse.";

// The gate only accepts 1–200 characters of non-whitespace UTF-8 text.
// Fail loudly here instead of ever writing an entry the gate refuses.
if ([...LINE].length < 1 || [...LINE].length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${[...LINE].length}`);
}

// One line means one line: a newline would break the gate's reading of the
// entry as a single text even if the character count fits.
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
