export type CredentialTag =
  | "GitHub"
  | "Anthropic"
  | "Cloud Skills Boost"
  | "TotalTypescript"
  | "AI Hero";

export interface Credential {
  name: string;
  description: string;
  image: string;
  verify: string;
  tags: CredentialTag[];
}

export const myCredentials: Credential[] = [
  // GITHUB
  {
    name: "GitHub Foundations",
    description:
      "Understanding of the foundational topics, products, and concepts of collaborating, contributing, and working on GitHub",
    image: "/static/images/credentials/github-foundations.png",
    verify:
      "https://www.credly.com/badges/6e715e2b-cb75-4c1b-9a2f-aa4610e2c8fc",
    tags: ["GitHub"],
  },
  // ANTHROPIC
  {
    name: "Claude Code in Action",
    description:
      "Comprehensive training on using Claude Code for software development tasks, covering the underlying architecture of AI coding assistants, practical implementation techniques, and advanced integration strategies",
    image: "/static/images/credentials/anthropic-claude-code-action.svg",
    verify: "https://anthropic.skilljar.com/claude-code-in-action", // TODO CHANGE ME!!!
    tags: ["Anthropic"],
  },
  {
    name: "Claude 101",
    description:
      "Beginner introduction to using Claude, covering the basics of interacting with the model, understanding its capabilities and limitations, and practical use cases for leveraging Claude in various applications",
    image: "/static/images/credentials/anthropic-claude-101.png",
    verify: "https://anthropic.skilljar.com/claude-101", // TODO CHANGE ME!!!
    tags: ["Anthropic"],
  },
  {
    name: "AI Fluency: Framework & Foundations",
    description:
      "Practical skills for effective, efficient, ethical, and safe AI interaction",
    image: "/static/images/credentials/anthropic-ai-fluency.svg",
    verify: "https://verify.skilljar.com/c/9ydycggexgs4",
    tags: ["Anthropic"],
  },
  {
    name: "Building with the Claude API",
    description:
      "Comprehensive video course teaching developers how to integrate Claude AI into applications using the Anthropic API",
    image: "/static/images/credentials/anthropic-building-claude-api.svg",
    verify: "https://anthropic.skilljar.com/claude-with-the-anthropic-api", // TODO CHANGE ME!!!
    tags: ["Anthropic"],
  },
  {
    name: "Introduction to Model Context Protocol",
    description:
      "Coverage of the Model Context Protocol (MCP) with focus on building both MCP servers and clients using the Python SDK",
    image: "/static/images/credentials/anthropic-mcp.svg",
    verify: "https://verify.skilljar.com/c/8ce3xgsqzw9t",
    tags: ["Anthropic"],
  },
  {
    name: "AI Fluency for educators",
    description:
      "AI fluency course empowering academic faculty, instructional designers, and applying AI Fluency into own teaching practices",
    image: "/static/images/credentials/anthropic-ai-fluency-educators.png",
    verify: "https://verify.skilljar.com/c/akngyteyhdaz",
    tags: ["Anthropic"],
  },
  {
    name: "AI Fluency for students",
    description:
      "Course that empowers students to develop AI Fluency skills that enhance learning, career planning, and academic success through responsible AI collaboration",
    image: "/static/images/credentials/anthropic-ai-fluency-students.png",
    verify: "https://verify.skilljar.com/c/e7gueh3kxcqf",
    tags: ["Anthropic"],
  },
  {
    name: "Model Context Protocol: Advanced Topics",
    description:
      "Advanced features and implementation patterns for Model Context Protocol (MCP) development, focusing on server-client communication, transport mechanisms, and production deployment considerations",
    image: "/static/images/credentials/anthropic-mcp-advanced.svg",
    verify: "https://verify.skilljar.com/c/p2q8sgfvk9gs",
    tags: ["Anthropic"],
  },
  {
    name: "Claude with Amazon Bedrock",
    description:
      "Technical course providing a comprehensive guide on how to integrate and deploy Claude AI models through Amazon Bedrock",
    image: "/static/images/credentials/anthropic-claude-amazon-bedrock.svg",
    verify: "https://anthropic.skilljar.com/claude-in-amazon-bedrock", // TODO CHANGE ME!!!
    tags: ["Anthropic"],
  },
  {
    name: "Claude with Google Cloud's Vertex AI",
    description:
      "Comprehensive technical training on integrating and deploying Claude AI models through Google Cloud's Vertex AI",
    image: "/static/images/credentials/anthropic-claude-google-vertex.svg",
    verify: "https://anthropic.skilljar.com/claude-with-google-vertex", // TODO CHANGE ME!!!
    tags: ["Anthropic"],
  },
  {
    name: "Teaching AI Fluency",
    description:
      "AI Fluency course that empowers academic faculty, instructional designers, and others to teach and assess AI Fluency in instructor-led settings",
    image: "/static/images/credentials/anthropic-teaching-fluency.png",
    verify: "https://anthropic.skilljar.com/teaching-ai-fluency", // TODO CHANGE ME!!!
    tags: ["Anthropic"],
  },
  {
    name: "AI Fluency for nonprofits",
    description:
      "Helping nonprofit staff (whether in fundraising, communications, program delivery, operations, or leadership) build practical AI collaboration skills through the 4D Framework",
    image: "/static/images/credentials/anthropic-fluency-nonprofits.png",
    verify: "https://anthropic.skilljar.com/ai-fluency-for-nonprofits", // TODO CHANGE ME!!!
    tags: ["Anthropic"],
  },
  // GOOGLE CLOUD
  {
    name: "Introduction to Large Language Models",
    description:
      "Explores what large language models (LLM) are, the use cases where they can be utilized, and how prompt tuning can enhance LLM performance",
    image: "/static/images/credentials/google-llm-intro.png",
    verify:
      "https://www.skills.google/public_profiles/480398c5-ca1f-41e6-8d91-d662e7a197fa/badges/18421606",
    tags: ["Cloud Skills Boost"],
  },
  {
    name: "Introduction to Responsible AI",
    description:
      "Explains what Responsible AI is, why it's important, and how Google implements Responsible AI in its products, including Google's 7 AI principles",
    image: "/static/images/credentials/google-intro-responsible-ai.png",
    verify:
      "https://www.skills.google/public_profiles/480398c5-ca1f-41e6-8d91-d662e7a197fa/badges/18421065",
    tags: ["Cloud Skills Boost"],
  },
  {
    name: "Introduction to Generative AI",
    description:
      "Explains what Generative AI is, how it is used, and how it differs from traditional machine learning methods",
    image: "/static/images/credentials/google-intro-gen-ai.png",
    verify:
      "https://www.skills.google/public_profiles/480398c5-ca1f-41e6-8d91-d662e7a197fa/badges/17719291",
    tags: ["Cloud Skills Boost"],
  },
  // AI HERO
  {
    name: "LLM Fundamentals",
    description:
      "Matt Pocock video tutorial teaching the fundamentals of LLM's so one can use them better",
    image: "/static/images/credentials/aihero-llm-fundamentals.png",
    verify: "https://www.aihero.dev/llm-fundamentals",
    tags: ["AI Hero"],
  },
  {
    name: "The AI Engineer Roadmap",
    description:
      "Want to build AI-powered apps, but don't know where to start? You need a roadmap",
    image: "/static/images/credentials/aihero-ai-engineer-roadmap.png",
    verify: "https://www.aihero.dev/ai-engineer-roadmap",
    tags: ["AI Hero"],
  },
  {
    name: "Model Context Protocol Tutorial",
    description:
      "The Model Context Protocol is driving a new wave of innovation in the world of AI. In this tutorial, I'll break down everything you need to know to get started",
    image: "/static/images/credentials/aihero-mcp-tutorial.png",
    verify: "https://www.aihero.dev/model-context-protocol-tutorial",
    tags: ["AI Hero"],
  },
  {
    name: "Vercel AI SDK Tutorial",
    description:
      "Build any LLM app in TypeScript with Vercel's AI SDK. Learn streaming, structured outputs, tool calls and agents",
    image: "/static/images/credentials/aihero-vercel-ai-sdk-tutorial.png",
    verify: "https://www.aihero.dev/vercel-ai-sdk-tutorial",
    tags: ["AI Hero"],
  },
  // TOTAL TYPESCRIPT
  {
    name: "Solving TypeScript Errors",
    description:
      "Type checking is awesome, but sometimes it gives you error messages that can be challenging to interpret and resolve",
    image: "/static/images/credentials/totaltypescript-solving-ts-errors.webp",
    verify:
      "https://www.totaltypescript.com/tutorials/solving-typescript-errors",
    tags: ["TotalTypescript"],
  },
  {
    name: "React with TypeScript",
    description:
      "TypeScript's features and developer experience make a great combination with React, but it can be confusing to get started",
    image: "/static/images/credentials/totaltypescript-react-with-ts.webp",
    verify: "https://www.totaltypescript.com/tutorials/react-with-typescript",
    tags: ["TotalTypescript"],
  },
  {
    name: "Beginner's TypeScript",
    description:
      "Get hands-on interactive practice with this free TypeScript tutorial and learn the foundational knowledge and skills you need to become a TypeScript Wizard",
    image: "/static/images/credentials/totaltypescript-beginner-s-ts.png",
    verify: "https://www.totaltypescript.com/tutorials/beginners-typescript",
    tags: ["TotalTypescript"],
  },
  {
    name: "Zod",
    description: "TypeScript is great for checking variables at the type level",
    image: "/static/images/credentials/totaltypescript-zod.png",
    verify: "https://www.totaltypescript.com/tutorials/zod",
    tags: ["TotalTypescript"],
  },
];
