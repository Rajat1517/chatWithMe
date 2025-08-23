
# Rajat Mishra – AI-Powered Interactive Portfolio

>This is an interactive portfolio web app built with Next.js, TypeScript, Tailwind CSS, and Vercel AI SDK. It features an AI-powered chat that answers questions about Rajat's professional background, projects, skills, experience, education, achievements, and more.

## 🚀 Features

- **AI Chatbot**: Ask anything about Rajat's career, skills, projects, resume, and get smart, context-aware answers.
- **Quick Questions**: One-click quick questions for instant info.
- **Tool-Driven Responses**: All answers are powered by real data/tools, no hallucination.
- **Beautiful UI**: Modern, responsive, accessible design with animated gradients and chat effects.
- **Portfolio Sections**: Projects, Skills, Experience, Achievements, Education, Contact, Resume, Location, Competitive Programming.
- **Downloadable Resume**: Direct PDF download and Google Drive view from chat.
- **SEO Optimized**: Metadata for better discoverability.

## 🛠️ Tech Stack

- Next.js 14+
- React 18+
- TypeScript
- Tailwind CSS
- Vercel AI SDK (Gemini, Claude, etc.)
- Framer Motion (animations)
- React Icons

## 🏁 Getting Started

1. Install dependencies:
	```bash
	npm install
	# or
	yarn install
	```
2. Run the development server:
	```bash
	npm run dev
	```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Project Structure

- `src/app/components/AIChat.tsx` – Chat UI and logic
- `src/app/api/chat/tools/` – Data tools for projects, skills, experience, achievements, education, resume, contact, location, competitive programming
- `public/` – Images, resume PDF, icons
- `src/app/page.tsx` – Main landing page

## ✨ How It Works

- The AI chat uses Gemini API and custom tools to answer questions about Rajat.
- All data (projects, skills, etc.) is stored in structured JSON and Markdown for accuracy.
- The UI is fully responsive, accessible, and animated for a modern experience.

## 📄 License

MIT

---
**Made by Rajat Mishra**
