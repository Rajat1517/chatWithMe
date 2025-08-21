import { tool } from "ai";
import { z } from "zod";

export const getProjects = tool({
    description: "This tool will show a list of all projects made by Rajat",
    parameters: z.object({}),
    execute: async () => {
        return `
## Projects

### [Form Builder App](https://form-builder-app-rjm.web.app/)
- JSON‑schema based UI form creator with Firebase storage  
- Real-time preview & validation  
- [GitHub Repo](https://github.com/Rajat1517/form-builder)

---

### [Document Reader App (Android)](https://drive.google.com/file/d/1-xksA2bI-AimEBv-YGjEHIFulcYOgIpi/view?usp=sharing)
- Offline TTS‑enabled reading experience  
- Customizable reading features with background playback  
- [GitHub Repo](https://github.com/Rajat1517/documentReader)
        `.trim();
},
});



// export const getProjects = {
//   description: "Get information about Rajat's projects",
//   parameters: {
//     type: "object",
//     properties: {
//       projectType: {
//         type: "string",
//         description: "Type of project to retrieve (optional)",
//         enum: ["web", "mobile", "all"]
//       }
//     }
//   },
//   execute: async ({ projectType = "all" }) => {
//     // Your actual project data
//     const projects = {
//       formBuilder: {
//         name: "Form Builder App",
//         url: "https://form-builder-app-rjm.web.app/",
//         description: "JSON-schema based UI form creator with Firebase storage",
//         features: ["Real-time preview", "Validation"],
//         github: "https://github.com/Rajat1517/form-builder"
//       },
//       documentReader: {
//         name: "Document Reader App (Android)",
//         url: "https://drive.google.com/file/d/1-xksA2bI-AimEBv-YGjEHIFulcYOgIpi/view?usp=sharing",
//         description: "Offline TTS-enabled reading experience",
//         features: ["Customizable reading features", "Background playback"],
//         github: "https://github.com/Rajat1517/documentReader"
//       }
//     };
    
//     return JSON.stringify(projects);
//   }
// };

