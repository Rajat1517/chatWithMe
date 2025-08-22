import { tool } from "ai";
import { z } from "zod";

const educationData = [
    {
        degree: "B.Tech — Electronics & Communication Engineering",
        institution: "IET Lucknow",
        period: "Aug 2019 – Jul 2023",
        grade: "CGPA: 8.48/10",
        details: [
            "Head Placement Coordinator, IET Lucknow",
            "Achieved 95% placement rate",
        ]
    },
    {
        degree: "Higher Secondary - Computer Science, Mathematics, Physics, Chemistry",
        institution: "Kendriya Vidyalaya No.2 Air Force Jodhpur",
        period: "Apr 2018 – Mar 2019",
        grade: "90.4%",
        details: [
            "Member of Student Council",
            "Represented in Cricket Nationals"
        ]
    },
    {
        degree: "Matriculation",
        institution: "Kendriya Vidyalaya No.2 Air Force Jodhpur",
        period: "Apr 2016 – Mar 2017",
        grade: "10 CGPA",
        details: []
    }
];

function educationToMarkdown() {
    return educationData
        .map(
            (edu) => `### ${edu.degree}
**${edu.institution}** (${edu.period})  
${edu.grade}
${edu.details.length ? "\n" + edu.details.map(d => `- ${d}`).join("\n") : ""}`
        )
        .join("\n\n");
}

export const getEducation = tool({
    description: "This tool shows my education background and the corresponding extra-curricular and co-curricular activities.",
    parameters: z.object({}),
    execute: async () => {
        return educationToMarkdown().trim();
    },
});