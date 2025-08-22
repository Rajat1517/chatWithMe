"use client"
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import React, { FormEvent, useState } from "react";
import type { Chat } from "./tldr";

type Props = {
    messages: Chat[],
    setMessages: React.Dispatch<React.SetStateAction<Chat[]>>,
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
};

export default function Query({ messages, setMessages, loading, setLoading }: Props) {
    const [query, setQuery] = useState("");

    const sendMessage = async () => {
        const newMessages: Chat[] = [...messages, { role: "user", content: query }];
        setMessages(newMessages);
        setQuery("");
        setLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: newMessages }),
            });
            //console.log("Response from API:", res);
            if (res.status !== 200)
                throw new Error(`Error: ${res.status}`);
            const data = await res.json();
            setMessages([...newMessages, { role: "assistant", content: data.text }]);
            setLoading(false);
        } catch (error: unknown) {
            console.error("Error fetching response:", error);
            if (error instanceof Error) {
                setMessages([...newMessages, { role: "assistant", content: error.message || "An error occurred while fetching the response" }]);
                setLoading(false);
            }
        }
    };


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (loading) return;
        sendMessage();
    };
    return (
        <form className="h-10 w-full bg-gray-50 rounded-xl flex justify-between outline-2 outline-slate-600 text-black 
        flex-none" onSubmit={handleSubmit}>
            <div className=" text-center p-2 rounded-l-xl bg-slate-600 w-12"><ChatBubbleBottomCenterIcon className="text-neutral-200 size-7" /></div>
            <input type="text" name="query" autoComplete="off" id="query" className="flex-1 p-2 text-md italic outline-none text-slate-500" placeholder="Tell me something about Rajat" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button disabled={loading || query.trim().length === 0} className={`rounded-xl bg-slate-600 w-10 h-10 p-2 text-center ${loading || query.trim().length === 0 ? "" : "active:bg-slate-400"} ${loading || query.trim().length === 0 ? "cursor-not-allowed" : "cursor-pointer"} disabled:opacity-50`}>{!loading ? <PaperAirplaneIcon className="size-6 text-neutral-200" /> : <p className="w-6 h-6 rounded-full border-0 border-t-2 border-gray-200 animate-spin"></p>}</button>
        </form>
    )
}






