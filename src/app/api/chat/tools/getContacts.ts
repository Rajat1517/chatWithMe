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
    value: "linkedin.com/Rajat Mishra",
    link: "https://www.linkedin.com/in/rajat-mishra-a215771ab/",
  },
  {
    type: "GitHub",
    value: "github.com/Rajat Mishra",
    link: "https://github.com/Rajat1517",
  },
  {
    type: "Portfolio",
    value: "Rajat Mishra.com",
    link: "https://portfolio-rjm.netlify.app/",
  },
];

function contactsToMarkdown() {
  return (
    "Here are my contact details:\n\n" +
    contactData
      .map(
        (c) =>
          `- **${c.type}:** [${c.value}](${c.link})`
      )
      .join("\n")
  );
}

export const getContact = tool({
  description: "This tool shows my contact information.",
  parameters: z.object({}),
  execute: async () => {
    return contactsToMarkdown().trim();
  },
});