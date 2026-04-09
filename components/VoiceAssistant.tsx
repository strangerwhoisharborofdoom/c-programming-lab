"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, Square, Volume2, AlertCircle } from "lucide-react";

export default function VoiceAssistant() {
  const [active, setActive] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [agentId, setAgentId] = useState<string | null>(null);
  const [configError, setConfigError] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = process.env.NEXT_PUBLIC_ELEVEN_AGENT_ID ?? null;
    setAgentId(id);
  }, []);

  const handleToggle = useCallback(async () => {
    if (!agentId) {
      setConfigError(true);
      setTimeout(() => setConfigError(false), 4000);
      return;
    }

    if (!active) {
      try {
        await import("@elevenlabs/react");
        setActive(true);
      } catch {
        console.warn("ElevenLabs not available");
      }
    } else {
      setActive(false);
    }
  }, [active, agentId]);

  if (!mounted) return null;

  return (
    <div className="fixed z-50 flex flex-col items-end gap-2 safe-bottom safe-right">
      <AnimatePresence>
        {configError && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="bg-[#0a0c14] border border-rose-500/40 rounded-2xl p-3 text-xs text-slate-300 w-[min(220px,65vw)] shadow-xl"
          >
            <div className="flex items-center gap-2 mb-1">
              <AlertCircle size={12} className="text-rose-400 flex-shrink-0" />
              <span className="text-rose-400 font-medium">Not configured</span>
            </div>
            <p>Set NEXT_PUBLIC_ELEVEN_AGENT_ID to enable the voice assistant.</p>
          </motion.div>
        )}
        {active && !configError && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="bg-[#0a0c14] border border-cyan-500/30 rounded-2xl p-3 text-xs text-slate-300 w-[min(200px,60vw)] shadow-xl"
          >
            <div className="flex items-center gap-2 mb-1">
              <Volume2 size={12} className="text-cyan-400 animate-pulse flex-shrink-0" />
              <span className="text-cyan-400 font-medium">AI Assistant Active</span>
            </div>
            <p>Listening… Ask me about our robotics services.</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleToggle}
        className={`flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white shadow-xl transition-all min-h-[44px] ${
          active
            ? "bg-rose-500 hover:bg-rose-600"
            : "bg-gradient-to-r from-cyan-500 to-indigo-500 hover:shadow-cyan-500/25"
        }`}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        aria-label={active ? "Stop voice assistant" : "Start voice assistant"}
      >
        {active ? (
          <>
            <Square size={16} />
            <span>Stop</span>
          </>
        ) : (
          <>
            <Mic size={16} />
            <span>Ask AI</span>
          </>
        )}
      </motion.button>
    </div>
  );
}
