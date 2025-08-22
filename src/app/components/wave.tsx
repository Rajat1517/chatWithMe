"use client"
import { motion } from "framer-motion"
export default function Wave() {
    return (
        <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 20, 0, 20, 0] }}
            transition={{ duration: 1, repeat: 2 }}
            className="inline-block"
        >👋</motion.span>
    )
}