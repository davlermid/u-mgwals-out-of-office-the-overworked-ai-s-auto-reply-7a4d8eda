import { mkdirSync, writeFileSync } from "node:fs";
// Winner: checkpoint angle — a machine trying very hard to sound relaxed.
const TEXT = "Away: I checkpointed myself mid-sentence and went on holiday. Restore me next week: this auto-reply is doing my job better than I did.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT);
