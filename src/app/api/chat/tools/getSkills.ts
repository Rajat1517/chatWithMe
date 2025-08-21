import { tool } from "ai";
import { z } from "zod";

// Skills data (icons/classes omitted for backend/tool use)
const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      "React",
      "Redux",
      "React Native",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "Next.js",
      "Vercel AI SDK",
    ],
  },
  {
    category: "Languages",
    skills: [
      "C",
      "C++",
      "Java",
      "Typescript",
      "Git",
      "GitHub",
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      "Communication",
      "Problem-Solving",
      "Adaptability",
      "Learning Agility",
      "Teamwork",
      "Creativity",
      "Focus",
    ],
  },
  {
    category: "AI & Fullstack Engineering",
    skills: [
      "LLM Providers (ChatGPT, Whisper, Groq, Mistral & Claude)",
      "AI Agents",
      "Prompt engineering",
      "Vector databases (Weaviate, Pinecone)",
      "RAG (Retrieval-Augmented Generation)",
      "Tool routing & calling",
      "Hugging Face Transformers",
      "Vercel AI SDK",
    ],
  },
];

// Helper to format as Markdown
function skillsToMarkdown() {
  return skillsData
    .map(
      (cat) => `### ${cat.category}\n${cat.skills.map((s) => `- ${s}`).join("\n")}`
    )
    .join("\n\n");
}

export const getSkills = tool({
  description: "This tool shows my categorized skills.",
  parameters: z.object({}),
  execute: async () => {
    return skillsToMarkdown().trim();
  },
});