import { tool } from "ai";
import { z } from "zod";

const achievementsData = [
    {
        title: "Specialist on Codeforces",
        description: "Maximum rating 1407.",
        year: "2020-2022",
    },
    {
        title: "4 Star on CodeChef",
        description: "Maximum rating 1816.",
        year: "2019-2021",
    },
    {
        title: "Global Rank 56",
        description: "Secured Global Rank 56 in Codechef Algomanic-Code for Future 2021 out of 8000+ participants. (Top 0.7%)",
        year: "2021",
    },
    {
        title: "Global Rank 115",
        description: "Secured Global Rank 115 in Codechef Snackdown Round-1B 2021 out of 7000+ participants.",
        year: "2021",
    },
    {
        title: "Google KickStart",
        description: "Secured Global Rank 1990 in Google KickStart H 2021 out of 18000+ Participants. (Top 11%)",
        year: "2021",
        certificate_link: "https://drive.google.com/file/d/15KZGKwYu2bO2NrFR_Z5dOEIizWcLlMRt/view?usp=sharing",
    },
    {
        title: "FaceBook Hackercup",
        description: "Advanced to the Round 2 Facebook Hackercup 2021 with Global Rank 2826 out of 15000+ participants. (Top 18.4%)",
        year: "2021",
        certificate_link: "https://drive.google.com/file/d/1txXDpzx9hZqkJqH2xVfCWAzAJW_9MYlh/view",
    },
    {
        title: "Google Codejam",
        description: "Advanced to the Round A Google Codejam 2022 with Global Rank 7115 out of 32000+ participants. (Top 22.2%)",
        year: "2022",
        certificate_link: "https://drive.google.com/file/d/1JNm3chB1oeZWfLcrEVrytWYEr3iPWUN6/view?usp=sharing",
    },
];

function achievementsToMarkdown() {
    return achievementsData
        .map(
            (ach) => `### ${ach.title} (${ach.year})
${ach.description}${ach.certificate_link ? `\n[View Certificate](${ach.certificate_link})` : ''}`
        )
        .join("\n\n");
}

export const getAchievements = tool({
    description: "This tool shows my notable achievements in competitive programming and contests.",
    parameters: z.object({}),
    execute: async () => {
        return achievementsToMarkdown().trim();
    },
});
