import { tool } from "ai";
import { z } from "zod";

const experienceData = [
    {
        company: "TCS Innovations Lab (R&I)",
        role: "Software Developer",
        period: "Dec 2023 - Mar 2025",
        description: `• Engineered an Automated Training Schedule Generator deployed across 5 TCS units, reducing man-
ual scheduling effort by 80% (from 4 hrs to 30 mins per run).

• Crafted a responsive React.js/Material UI frontend with Context API for real-time schedule visualization,
boosting planner efficiency by 60%.
• Defined and optimized database schemas reducing redundancy by 30%—and shaped the high-level
system architecture.`,
        techStack: ["React", "context API", "Tailwind CSS", "Spring Boot", "SQL"],
    },
    {
        company: "TCS CTO Accessibiliy Team (R&I)",
        role: "Software Developer",
        period: "Aor 2025 - Present",
        description: `Developed an android App using React Native, Redux & TypeScript, integrating
camera, microphone, TTS, gyroscope & accelerometer to achieve WCAG AA compliance.
• Engineered Azure AI Vision OCR pipeline with batching & hashing, slashing processing time from 60 s
to 7 s (88% faster) for 10-image batches.
• Designed hands-free voice-command & TTS feedback system with 95% recognition accuracy, cutting
navigation errors by 30%.
• Implemented AppState-driven mic session management, reducing background listening by 70% and
battery usage by 25%.`,
        techStack: ["React Native", "Redux", "Typescript", "Azure AI"],
    },
];

function experienceToMarkdown() {
    return experienceData
        .map(
            (exp) => `### ${exp.role} @ ${exp.company} (${exp.period})
${exp.description}
**Tech Stack:** ${exp.techStack.join(", ")}`
        )
        .join("\n\n");
}

export const getExperience = tool({
    description: "This tool shows my work experience.",
    parameters: z.object({}),
    execute: async () => {
        return experienceToMarkdown().trim();
    },
});