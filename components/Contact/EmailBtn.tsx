"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Copy, Mail } from "lucide-react";
import { useState } from "react";

export const EmailBtn = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("harry.coad@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      onClick={handleCopyEmail}
      className="group flex items-center justify-center gap-4 cursor-pointer"
    >
      <Mail className="w-8 h-8" />
      <AnimatePresence mode="wait" initial={false}>
        {!copied ? (
          <motion.span
            key="email"
            initial={{ opacity: 0, x: 0, rotateX: 0 }}
            exit={{ opacity: 0, x: -30, rotateX: -90 }}
            animate={{ opacity: 1, x: 0, rotateX: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-block min-w-48"
          >
            harry.coad@gmail.com
          </motion.span>
        ) : (
          <motion.span
            key="copied"
            initial={{ opacity: 0, x: 30, rotateX: 90 }}
            animate={{ opacity: 1, x: 0, rotateX: 0 }}
            exit={{ opacity: 0, x: 30, rotateX: 90 }}
            transition={{ duration: 0.3 }}
            className="inline-block min-w-48"
          >
            Copied!
          </motion.span>
        )}
      </AnimatePresence>
      <Copy className="w-4 h-4 group-hover:stroke-orange-800" />
    </div>
  );
};
