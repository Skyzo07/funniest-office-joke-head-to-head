// The Funniest Office Joke, Judged Head to Head — one line, punchline last.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "The performance review says I need to be more visible, so I've started replying-all to everything, including the fire alarm.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
