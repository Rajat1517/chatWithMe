"use client";
import { useRef } from "react";

export default function GradientBG() {
    const bgRef = useRef<HTMLDivElement>(null);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        if (bgRef.current) {
            bgRef.current.style.background = `
                radial-gradient(circle 100px at ${x}% ${y}%, #2563eb88 0%, transparent 80%),
                linear-gradient(to bottom right, #1e3a8a, #0a0a0a, #1e40af)`;
        }
    }

    function handleMouseLeave() {
        if (bgRef.current) {
            bgRef.current.style.background = "";
        }
    }

    return (
        <div
            ref={bgRef}
            className="fixed inset-0 z-0 bg-gradient-to-br from-blue-900 via-neutral-950 to-blue-800 transition-[background] duration-1500 ease-out"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            aria-hidden
        />
    );
}