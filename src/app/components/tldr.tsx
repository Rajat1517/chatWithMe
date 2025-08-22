'use client'
import { useState } from "react"
import Chat from "../components/chat";

export type Chat = {
    role: "user" | "assistant",
    content: string
}

export default function Tldr() {
    const [mode, setMode] = useState(false);
    const [messages, setMessages] = useState<Chat[]>([]);
    return (
        <div className="fixed left-5 top-5">
            {!mode && (
                <button
                    className="bg-blue-500 rounded-full w-10 h-10 animate-bounce fade-in"
                    onClick={() => setMode(true)}
                >
                    AI
                </button>
            )}
            {mode && <Chat setMode={setMode} messages={messages} setMessages={setMessages} />}
        </div>
    )
}