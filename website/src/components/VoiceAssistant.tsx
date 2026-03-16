'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VoiceAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [agentId, setAgentId] = useState<string>('');

  useEffect(() => {
    setAgentId(process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || '');
  }, []);

  useEffect(() => {
    if (isOpen && agentId) {
      const script = document.createElement('script');
      script.src = 'https://elevenlabs.io/convai-widget/index.js';
      script.async = true;
      script.type = 'text/javascript';
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen, agentId]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 bg-[#0f0f1a] border border-[#00d4ff33] rounded-2xl p-4 w-80 shadow-[0_0_40px_#00d4ff22]"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
                <span className="text-white text-sm font-semibold">RoboCore AI Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white text-lg leading-none"
              >
                ×
              </button>
            </div>
            {agentId ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: `<elevenlabs-convai agent-id="${agentId}"></elevenlabs-convai>`,
                }}
              />
            ) : (
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#7b2fff] flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <p className="text-gray-300 text-sm font-medium">AI Voice Assistant</p>
                <p className="text-gray-500 text-xs mt-1">Configure NEXT_PUBLIC_ELEVENLABS_AGENT_ID to enable</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#7b2fff] flex items-center justify-center shadow-[0_0_30px_#00d4ff44] hover:shadow-[0_0_40px_#00d4ff66] transition-shadow"
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        )}
      </motion.button>
    </div>
  );
}
