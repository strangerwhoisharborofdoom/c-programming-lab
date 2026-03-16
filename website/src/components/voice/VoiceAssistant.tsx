"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, X, Volume2 } from "lucide-react";

export default function VoiceAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const agentId = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-72 bg-[#0a1628] border border-cyan-500/30 rounded-xl p-4 shadow-xl"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-semibold text-white">AI Voice Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Close voice assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-400 mb-3">
              Powered by ElevenLabs Conversational AI. Your robotics automation consultant.
            </p>
            {agentId ? (
              <button
                onClick={() => setIsListening(!isListening)}
                className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                  isListening
                    ? "bg-red-500/20 border border-red-500 text-red-400"
                    : "bg-cyan-500/20 border border-cyan-500 text-cyan-400"
                }`}
              >
                {isListening ? "Stop Listening" : "Start Conversation"}
              </button>
            ) : (
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-2">
                <p className="text-xs text-yellow-400">
                  Configure <code className="font-mono">NEXT_PUBLIC_ELEVENLABS_AGENT_ID</code> to enable voice assistant.
                </p>
              </div>
            )}
            {isListening && (
              <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                Listening... Ask about our robotics services
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI voice assistant"
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all ${
          isListening
            ? "bg-red-500 animate-pulse-glow"
            : "bg-gradient-to-r from-cyan-500 to-purple-600 glow-cyan"
        }`}
      >
        {isListening ? (
          <MicOff className="w-6 h-6 text-white" />
        ) : (
          <Mic className="w-6 h-6 text-white" />
        )}
      </motion.button>
    </div>
  );
}
