import { tool } from 'ai';
import { z } from 'zod';

export const getSkills = tool({
  description:
    'This tool show a my contact informations.',
  parameters: z.object({}),
  execute: async () => {
    return "Here is my contact skills above, Feel free to contact me I will be happy to answer you 😉";
  },
});