import { openai } from "@ai-sdk/openai";
import { createVectorQueryTool } from "@mastra/rag";

export const storySearch = createVectorQueryTool({
    id: "story-search",
    description: "Search the story knowledge base",
    indexName: "stories",
    vectorStoreName: "pg",
    model: openai.embedding("text-embedding-3-small"),
})