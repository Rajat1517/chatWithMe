import { tool } from "ai";
import { z } from "zod";

export const PROJECT_CONTENT = [
        {
                title: 'Form Builder App',
                description:
                        'A JSON-schema based UI form creator with Firebase storage. It allows users to build forms dynamically with real-time preview and validation support.',
                techStack: [
                        'React',
                        'Firebase',
                        'JavaScript',
                        'TailwindCSS'
                ],
                date: '2025',
                links: [
                        {
                                name: 'Website',
                                url: 'https://form-builder-app-rjm.web.app/',
                        },
                        {
                                name: 'GitHub',
                                url: 'https://github.com/Rajat1517/form-builder',
                        },
                ],
                images: [
                        {
                                src: '/formbuilder1.png',
                                alt: 'Form Builder interface',
                        },
                        {
                                src: '/formbuilder2.png',
                                alt: 'Form Builder preview example',
                        }
                ],
        },
        {
                title: 'Document Reader App (Android)',
                description:
                        'An offline Android app with TTS-enabled reading experience. Provides customizable reading features and supports background playback for documents.',
                techStack: [
                        'React Native',
                        'JavaScript',
                        'Android',
                        'Text-to-Speech (TTS)',
                        'Expo'
                ],
                date: '2025',
                links: [
                        {
                                name: 'APK Download',
                                url: 'https://drive.google.com/file/d/1-xksA2bI-AimEBv-YGjEHIFulcYOgIpi/view?usp=sharing',
                        },
                        {
                                name: 'GitHub',
                                url: 'https://github.com/Rajat1517/documentReader',
                        },
                ],
                images: [
                        {
                                src: '/documentreader1.png',
                                alt: 'Document Reader home screen',
                        },
                        {
                                src: '/documentreader2.png',
                                alt: 'Document Reader playback screen',
                        }
                ],
        },
        {
                title: 'npm: react-native-tts-reader',
                description:
                        'Published a fully tested, MIT-licensed tts reader library with multiple downloads. It leverages TTS while converting a string input into structured chunks with array simulation for play/pause features.',
                techStack: [
                        'React Native',
                        'Typescript',
                        'Android',
                        'Text-to-Speech (TTS)',
                        'Expo'
                ],
                date: '2025',
                links: [
                        {
                                name: 'NPM Package',
                                url: 'https://www.npmjs.com/package/react-native-tts-reader',
                        },
                        {
                                name: 'Download Analytics',
                                url: 'https://npm-stat.com/charts.html?package=react-native-tts-reader',
                        },
                ],
        },
];

// Helper to format as Markdown
function projectsToMarkdown() {
        const  projects= PROJECT_CONTENT;
	return projects
		.map(
			(p) => `
### ${p.title}
${p.description}

**Tech Stack:** ${p.techStack.join(", ")}
**Year:** ${p.date}

${p.links.map((link) => `[${link.name}](${link.url})`).join(" | ")}

${
		p.images && p.images.length
			? p.images.map((img) => `![${img.alt}](${img.src})`).join("\n")
			: ""
}
`
		)
		.join("\n---\n");
}

export const getProjects = tool({
	description: "This tool will show a list of all projects made by Rajat",
	parameters: z.object({}),
	execute: async () => {
		return projectsToMarkdown().trim();
	},
});



