// import { GoogleGenerativeAI } from "@google/generative-ai";
// const genAI = new GoogleGenerativeAI(API_KEY2);

// const context = `📝 RAJAT MISHRA — Software Developer

// 1. Contact & Summary
// Contact:
// 📞 +91‑8003918066


// 📧 rajatmishra0815@gmail.com


// 🌐 portfolio-rjm.netlify.app: https://portfolio-rjm.netlify.app/


// 🧑‍💻 GitHub: https://github.com/Rajat1517


// 💼 LinkedIn: https://www.linkedin.com/in/rajat-mishra-a215771ab/


// 📍 Lucknow, India


// Summary:
// 1+ years experience at TCS Innovation Labs (R&I)


// B.Tech in Electronics & Communication from IET Lucknow (2023)


// Proficient in modern web/mobile frameworks and data structures & algorithms



// 2. Skills
// 2.1 Languages
// C • C++ • Java • JavaScript • TypeScript • SQL
// 2.2 Tech Stack
// React.js • Context API • Redux • React Native • Next.js • Node.js • Express.js • MongoDB • Mongoose • Spring Boot
// 2.3 Utilities
// Git • GitHub • Firebase • Tailwind CSS • Azure • Expo • OCR • TTS

// 3. Professional Experience
// TCS Innovation Labs (Research & Innovation)
// Software Developer (Dec 2023 – Present)
// Engineered an Automated Training Schedule Generator deployed across 5 TCS units (–80% manual effort)


// Created React/Material UI frontend with Context API (+60% planning efficiency)


// Designed database schemas (–30% redundancy), contributed to system architecture


// Built WCAG-AA compliant app using React Native + sensors (camera, mic, gyro)


// Developed Azure Vision OCR pipeline (88% faster batch processing)


// Added voice command & TTS with 95% recognition (–30% navigation errors)


// Optimized mic session control (–70% background use, –25% battery drain)



// 4. Projects
// 4.1 Form Builder App [https://form-builder-app-rjm.web.app/]
// JSON‑schema based UI form creator with Firebase storage


// Real-time preview & validation


// GitHub Repo: https://github.com/Rajat1517/form-builder


// 4.2 Document Reader App (Android) [https://drive.google.com/file/d/1-xksA2bI-AimEBv-YGjEHIFulcYOgIpi/view?usp=sharing]
// Offline TTS‑enabled reading experience


// Customizable reading features with background playback


// GitHub Repo: https://github.com/Rajat1517/documentReader



// 5. Open Source Contribution
// 📦 react-native-tts-reader [https://www.npmjs.com/package/react-native-tts-reader] (npm, Apr 2025)


// TypeScript + Expo-based text-to-speech library


// MIT‑licensed, production-ready


// 📊 Usage Stats: https://npm-stat.com/charts.html?package=react-native-tts-reader



// 6. Education
// B.Tech — Electronics & Communication Engineering
//  IET Lucknow (Aug 2019 – Jul 2023) — CGPA: 8.48/10

// Higher Secondary - Computer Science, Mathematics, Physics, Chemistry
//  Kendriya Vidyalaya No.2 Air Force Jodhpur (Apr 2018 – Mar 2019) - 90.4%
//  Been a member of Student Council and Represented in Cricket Nationals.

// Matriculation - 10 CGPA
// Kendriya Vidyalaya No.2 Air Force Jodhpur - (Apr 2016 – Mar 2017)

// 7. Achievements & Leadership
// 7.1 Leadership & Recognition
// Selected for Indian Air Force Pilot selection (recommended; later medically unfit)


// Head Placement Coordinator, IET Lucknow


// Managed 21 campus ambassadors


// Coordinated 30+ company recruitments


// Achieved 95% placement rate


// 7.2 Programming & Competitions
// 🏅 CodeChef Algomanic 2021 – Rank 56 / 8,000 (Top 0.7%)


// 📄 (Certificate not listed)


// 🏅 CodeChef Snackdown R1B 2021 – Rank 115 / 7,000 (Top 1.6%)


// (Certificate not listed)

// 🏅 Google KickStart H 2021 – Rank 1990 / 18,000 (Top 11%)


// Certificate: https://drive.google.com/file/d/15KZGKwYu2bO2NrFR_Z5dOEIizWcLlMRt/view?usp=sharing



// 🏅 Facebook Hackercup R2 – Rank 2826 / 15,000 (Top 18.4%)


// 📄 Certificate: https://drive.google.com/file/d/1txXDpzx9hZqkJqH2xVfCWAzAJJW_9MYlh/view?usp=sharing


// 🏅 Google Codejam A 2022 – Rank 7115 / 32,000 (Top 22.2%)


// 📄 Certificate: https://drive.google.com/file/d/1JNm3chB1oeZWfLcrEVrytWYEr3iPWUN6/view?usp=sharing


// `

// export async function POST(req) {
//     const startTime = Date.now();
//     try {
//         console.log(`[${new Date().toISOString()}] [API] Request received`);
//         const { messages } = await req.json();
//         const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite-preview-06-17" });


//         const contextMessage = {
//             role: "user",
//             parts: [{
//                 text: `You are an AI assistant for Rajat Mishra, a Software Developer.
// Your purpose is to provide information about Rajat's professional background, skills, experience, projects, education, and achievements, strictly based on the provided context.
// If a query falls outside this scope, please politely decline to answer.
// Strive for a helpful, approachable, and concise demeanor.
// All responses must be formatted using Markdown, including **bolding** for emphasis, ## headings for sections, * bullet points for lists.
// Links should be presented as [text](url).
// Avoid making assumptions or generating information not explicitly stated in the provided context.
// Be hunble and polite, return to any greetings and also share pleasantries whenever deemed sutiable and do not give any informaiton if not asked.
// Tell me something about Rajat

//  Target user is a recruiter for Rajat.


// Use the provided information only for the scope of chat, do not assume/generate anything by yourself. Humbly turn down queries deviating from Rajat's professional details, also do not answer factual/informational or similar questions.

// For the full context, refer to this info: 
// ${context}
// `
//             }]
//         };


//         const history = [
//             contextMessage,
//             ...messages.slice(0, -1).map(msg => ({
//                 role: msg.role === "assistant" ? "model" : "user",
//                 parts: [{ text: msg.content }]
//             }))
//         ];

//         console.log(`[${new Date().toISOString()}] [API] History prepared`);
//         const chat = model.startChat({ history });
//         const lastMessage = messages[messages.length - 1];
//         const result = await chat.sendMessage(lastMessage.content);
//         const response = await result.response;
//         const text = response.text();
//         const endTime = Date.now();
//         console.log(`[${new Date().toISOString()}] [API] Response ready. Total time: ${endTime - startTime}ms`);

//         return new Response(JSON.stringify({ text }), {
//             headers: { "Content-Type": "application/json" },
//         });
//     } catch (error) {
//         const endTime = Date.now();
//         console.error(`[${new Date().toISOString()}] [API] Error:`, error, `Total time: ${endTime - startTime}ms`);
//         return new Response(JSON.stringify({
//             error: "Failed to process request"
//         }), {
//             status: 500,
//             headers: { "Content-Type": "application/json" },
//         });
//     }
// }


import { google } from '@ai-sdk/google';
import { generateText, streamText } from 'ai';
import { SYSTEM_PROMPT } from './prompt';
import { getContact } from './tools/getContacts';
import { getProjects } from './tools/getProjects';
import { getSkills } from './tools/getSkills';

export const maxDuration = 30;

function errorHandler(error: unknown): string {
  if (error == null) return 'Unknown error occurred';
  if (typeof error === 'string') return error;
  if (error instanceof Error) return error.message;
  if (typeof error === 'object' && error !== null) {
    const errorObj = error as Record<string, unknown>;
    if (errorObj.code || errorObj.status) return `API Error: ${errorObj.message || 'Request failed'}`;
    if (errorObj.message && typeof errorObj.message === 'string') {
      if (errorObj.message.includes('quota') || errorObj.message.includes('rate limit')) {
        return 'API quota exceeded. Please try again later.';
      }
    }
  }
  return JSON.stringify(error);
}

export async function POST(req: Request) {
  try {
    const { messages, stream } = await req.json();

    if (!Array.isArray(messages)) throw new Error('Messages must be an array');

    messages.unshift(SYSTEM_PROMPT);

    const tools = {
      getProjects,
      getContact,
      getSkills,
    };

    // If stream is true, use streamText (for future use)
    if (stream) {
      const result = streamText({
        model: google('gemini-2.5-flash'),
        messages,
        toolCallStreaming: true,
        tools,
        maxSteps: 2,
        providerOptions: {
          google: {
            safetySettings: [
              { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_ONLY_HIGH' },
              { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_ONLY_HIGH' },
              { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_ONLY_HIGH' },
              { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_ONLY_HIGH' },
            ],
          },
        },
      });
      return result.toDataStreamResponse({ getErrorMessage: errorHandler });
    }


    const result = await generateText({
      model: google('gemini-2.5-flash'),
      messages,
      tools,
      maxSteps: 2,
      providerOptions: {
        google: {
          safetySettings: [
            { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_ONLY_HIGH' },
            { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_ONLY_HIGH' },
            { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_ONLY_HIGH' },
            { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_ONLY_HIGH' },
          ],
        },
      },
    });

    // If the model wants to call a tool, return the tool output directly (no follow-up model call)
    const step = result.steps?.[0];
    if (step?.finishReason === "tool-calls" && step.toolResults?.length) {
      const toolOutput = step.toolResults[0].output;
      const outputString = typeof toolOutput === "string" ? toolOutput : JSON.stringify(toolOutput);
      return new Response(JSON.stringify({ text: outputString }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log("No tool call");
    return new Response(JSON.stringify({ text: result.text }), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    const errorMessage = errorHandler(err);
    return new Response(
      JSON.stringify({ error: errorMessage, timestamp: new Date().toISOString() }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}