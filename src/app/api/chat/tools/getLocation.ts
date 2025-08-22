import { tool } from "ai";
import { z } from "zod";

export const getLocation = tool({
    description: "This tool shows my current location.",
    parameters: z.object({}),
    execute: async () => {
        return `**Current Location:**  
New Delhi, India 🇮🇳`;
    },
});