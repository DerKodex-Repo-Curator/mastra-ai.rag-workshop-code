import { Mastra } from '@mastra/core/mastra';

import { queryVectorAgent, basicAgent, storyBuddy } from "./agents";
import { PgVector, PostgresStore } from "@mastra/pg";
import { codeAgent } from "../bonus/agent";
import { storyEmbedder } from "./workflow/story-embedder";

const connectionString = process.env.POSTGRES_CONNECTION_STRING;
if (!connectionString) {
  throw new Error(
    "POSTGRES_CONNECTION_STRING environment variable is required"
  );
}
const pgVector = new PgVector({ connectionString });
const pgStorage = new PostgresStore({ connectionString });
export const mastra = new Mastra({
  agents: {
    queryVectorAgent,
    basicAgent,
    codeAgent,
    storyBuddy,
  },
  vectors: {
    pg: pgVector,
  },
  workflows: {
    storyEmbedder,
  },
  storage: pgStorage,
  telemetry: {
    enabled: false,
  },
});
