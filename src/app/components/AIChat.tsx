"use client"

import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import { motion, AnimatePresence } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";


type Chat = {
  role: "user" | "assistant";
  content: string;
  image?: string;
};

const quickQuestions = [
  {
    question: "Who are you?",
    view: "Summary",
  },
  {
    question: "Show me a project of yours.",
    view: "Project",
  },
  {
    question: "Mention your overall skills. What are your tehcinical interests?",
    view: "Skills",
  },
  {
    question: "What is your professional experience? What work do you do?",
    view: "Experience",

  },
  {
    question: "Tell me about your educational details?",
    view: "Education",

  },
  {
    question: "Tell me some of your acheivements?",
    view: "Achievements",

  },
  {
    question: "How can I contact you ?",
    view: "Contact",

  },

  {
    question: "Can you show me your formal resume?",
    view: "Resume",
  },


];

export default function AIChat() {
  const [messages, setMessages] = useState<Chat[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showQuick, setShowQuick] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg: Chat = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.text },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I couldn't process your request. Please try again." },
      ]);
    }
    setLoading(false);
  };

  return (
    <div
      className="w-full max-w-3xl mx-auto bg-gradient-to-br from-neutral-900 via-neutral-950 to-blue-900 shadow-2xl rounded-2xl p-4 border border-neutral-800 flex flex-col min-h-[70vh] h-[70vh] md:h-[75vh] relative"
      role="region"
      aria-label="AI Chat"
    >
      <div className="mb-2 font-bold text-lg text-neutral-100 flex items-center gap-2">
        <svg width="24" height="24" fill="none" className="text-blue-400" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" fill="currentColor" />
        </svg>
        Ask Me Anything!
      </div>
      {/* <div className="flex items-center mb-2">
        <button
          className="text-xs text-blue-300 hover:text-blue-100 underline focus:outline-none mr-2"
          onClick={() => setShowQuick((v) => !v)}
          aria-label={showQuick ? "Hide quick questions" : "Show quick questions"}
        >
          {showQuick ? "Hide Quick Questions" : "Show Quick Questions"}
        </button>
      </div> */}
      <button
        onClick={() => setShowQuick((prev) => !prev)}
        className="flex items-center gap-2 text-blue-400"
      >
        Quick Questions
        <motion.span
          animate={{ rotate: showQuick ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <FiChevronDown size={20} />
        </motion.span>
      </button>
      {showQuick && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="flex flex-wrap gap-2 mb-3"
        >
          {quickQuestions.map((q, idx) => (
            <button
              key={idx}
              className="bg-blue-800 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm transition"
              onClick={async () => {
                const userMsg: Chat = { role: "user", content: q.question };
                setMessages((prev: Chat[]) => [...prev, userMsg]);
                setLoading(true);
                try {
                  const res = await fetch("/api/chat", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ messages: [...messages, userMsg] }),
                  });
                  if (!res.ok) throw new Error("API error");
                  const data = await res.json();
                  setMessages((prev) => [
                    ...prev,
                    { role: "assistant", content: data.text },
                  ]);
                } catch {
                  setMessages((prev) => [
                    ...prev,
                    { role: "assistant", content: "Sorry, I couldn't process your request. Please try again." },
                  ]);
                }
                setLoading(false);
              }}
              aria-label={q.question}
            >
              {q.view}
            </button>
          ))}
        </motion.div>
      )}
      <div
        className="flex-1 overflow-y-auto mb-3 border border-neutral-800 rounded-lg p-2 bg-neutral-800/80 transition-colors"
        tabIndex={0}
        aria-live="polite"
      >
        {messages.length === 0 && (
          <div className="text-neutral-400 text-sm text-center py-8">
            How can I help you today?
          </div>
        )}
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`my-1 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.role === "assistant" ? (
                <motion.span
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30, opacity: { duration: 0.8 } }}
                  className="px-3 py-2 rounded-xl max-w-[80%] break-words text-sm prose prose-invert bg-neutral-700 text-blue-200 border border-blue-900"
                  aria-label="AI response"
                >
                  <ReactMarkdown
                    rehypePlugins={[rehypeSanitize]}
                    components={{
                      a: (props) => {
                        const isPdf = typeof props.href === "string" && props.href.endsWith(".pdf");
                        return (
                          <a
                            {...props}
                            className={
                              isPdf
                                ? "text-red-300 underline hover:text-red-500 flex items-center gap-1"
                                : "text-blue-600 underline hover:text-blue-300"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            download={isPdf ? true : undefined}
                          >
                            {props.children}
                            {isPdf && <FaFilePdf className="inline ml-1" />}
                          </a>
                        );
                      },
                    }}
                  >
                    {typeof msg.content === "string" ? msg.content : JSON.stringify(msg.content)}
                  </ReactMarkdown>
                </motion.span>
              ) : (
                <span
                  className="px-3 py-2 rounded-xl max-w-[80%] break-words text-sm prose prose-invert bg-blue-600 text-white"
                  aria-label="Your message"
                >
                  <ReactMarkdown rehypePlugins={[rehypeSanitize]}>
                    {typeof msg.content === "string" ? msg.content : JSON.stringify(msg.content)}
                  </ReactMarkdown>
                </span>
              )}
            </div>
          ))}
        </AnimatePresence>
        {loading && (
          <div className="my-1 flex justify-start">
            <span className="px-3 py-2 rounded-xl max-w-[80%] break-words text-sm bg-neutral-700 text-blue-200 border border-blue-900 animate-pulse italic">
              Processing...
            </span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border border-neutral-700 bg-neutral-800 text-neutral-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your question…"
          aria-label="Type your question"
          disabled={loading}
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition disabled:opacity-50"
          onClick={sendMessage}
          disabled={!input.trim() || loading}
          aria-label="Send message"
        >
          Send
        </button>
      </div>
    </div>
  );
}