// SPDX-License-Identifier: MIT
// One word, one line, written for the judge.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry = "Fridget: reopening the fridge seconds later, hoping new food appeared.";
const out = "/output/entry.txt";

if (!entry.trim() || [...entry].length > 140) throw new Error("invalid entry");
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, entry, "utf8");
console.log(entry);
