import { tool } from "ai";
import { z } from "zod";

export const getResume = tool({
  description: "This tool shows my resume download and view links.",
  parameters: z.object({}),
  execute: async () => {
    return `
**You can view or download my resume:**

- [View on Google Drive](https://drive.google.com/file/d/1irOw1gwM_Mg7GXNijmHrXY4jezXsQI50/view?usp=drive_link)
- [Download PDF](/Resume.Rajat.pdf)
    `.trim();
  },
});