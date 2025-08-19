"use client";
import { SetStateAction, useState, useRef, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import Query from "./query";
import type { Chat } from "./tldr";

export default function chat({ setMode, messages, setMessages }: {
    setMode: React.Dispatch<SetStateAction<boolean>>,
    messages: Chat[],
    setMessages: React.Dispatch<React.SetStateAction<Chat[]>>
}) {
    const [loading, setLoading] = useState(false);
    const [closing, setClosing] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (loading) {
            scrollToBottom();
        }
    }, [loading]);

    const handleClose = () => {
        setClosing(true);
        setTimeout(() => setMode(false), 500); // Wait for animation to complete
    };

    return (
        <div className={`md:w-[25rem] my-auto mx-5 w-[80vw] h-[85vh] bg-white 
            ${closing ? 'close' : 'produce'} rounded-lg overflow-hidden flex flex-col`}>
            <nav className="h-8 bg-gray-300 w-full p-2 box-border flex-none">
                <ul className="flex items-center h-full w-full gap-1">
                    <li><button className="rounded-full bg-red-600 w-3 h-3 active:bg-red-400"
                        onClick={handleClose}></button></li>
                    <li><button className="rounded-full bg-yellow-400 w-3 h-3 active:bg-yellow-200" onClick={handleClose}></button></li>
                    <li><button className="rounded-full bg-green-600 w-3 h-3 active:bg-green-400"></button></li>
                </ul>
            </nav>
            <main className="bg-gray-800 w-full flex-1 flex flex-col p-2 overflow-hidden">
                <div className="flex flex-col w-full gap-2 p-2 overflow-y-auto flex-1">
                    <div className={`max-w-[80%] w-fit h-fit self-start
                            box-border p-2 text-sm rounded-xl bg-gray-200 text-black prose prose-sm`}>
                        <ReactMarkdown rehypePlugins={[rehypeSanitize]}>
                            {"I am here to help you. You can ask me any question about Rajat."}
                        </ReactMarkdown>
                    </div>
                    {messages.map((chat, index) => (
                        <div key={index}
                            className={`max-w-[80%] w-fit h-fit ${chat.role === "user" ? "self-end" : "self-start"
                                } box-border p-2 text-sm break-all rounded-xl bg-gray-200 text-black prose prose-sm`}>
                            <ReactMarkdown
                                rehypePlugins={[rehypeSanitize]}
                                components={{
                                    a: ({ node, ...props }) => (
                                        <a {...props} target="_blank" rel="noopener noreferrer" />
                                    )
                                }}
                            >
                                {chat.content}
                            </ReactMarkdown>
                        </div>
                    ))}
                    {loading && (
                        <div className={`w-[80%] h-fit self-start
                            box-border p-2 text-sm rounded-xl bg-gray-200 animate-pulse italic text-2 text-gray-700`}>
                            Processing...
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                <Query messages={messages} setMessages={setMessages} loading={loading} setLoading={setLoading} />
            </main>
        </div>
    );
}