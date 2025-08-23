import { tool } from "ai";
import { z } from "zod";

const contactData = [
  {
    type: "Email",
    value: "rajatmishra0815@gmail.com",
    link: "mailto:rajatmishra0815@gmail.com",
  },
  {
    type: "Phone",
    value: "+91-8003918066",
    link: "tel:+918003918066",
  },
  {
    type: "LinkedIn",
    value: "Rajat Mishra",
    link: "https://www.linkedin.com/in/rajat-mishra-a215771ab/",
  },
  {
    type: "GitHub",
    value: "Rajat1517",
    link: "https://github.com/Rajat1517",
  },
  {
    type: "Portfolio",
    value: "portfolio-rjm.netlify.app",
    link: "https://portfolio-rjm.netlify.app/",
  },
];

function contactsToMarkdown() {
  return `Here's how you can reach me:

${contactData
  .map((c) => `- **${c.type}:** [${c.value}](${c.link})`)
  .join("\n")}

Feel free to connect with me on LinkedIn or check out my GitHub projects!`;
}

export const getContact = tool({
  description: "This tool shows my contact information with clickable links.",
  parameters: z.object({}),
  execute: async () => {
    return contactsToMarkdown().trim();
  },
});