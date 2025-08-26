import { tool } from "ai";
import { z } from "zod";

export const getResume = tool({
  description: "This tool shows my resume download and view links.",
  parameters: z.object({}),
  execute: async () => {
    return `
**You can view or download my resume:**

- [View on Google Drive](https://drive.google.com/file/d/16RGBdeFWhRDuV1Tj9cxMCFZBfWOZLLV3/view?usp=sharing)
- [Download PDF](/Resume.Rajat.pdf)
    `.trim();
  },
});