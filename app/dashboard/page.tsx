"use client";
import React, { useEffect, useRef, useState } from "react";
import Vapi from "@vapi-ai/web";
import { FaUserMd, FaUser } from "react-icons/fa";

const VAPI_ASSISTANT_ID = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID!;
const VAPI_PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY!;

export default function Dashboard() {
  const [isTalking, setIsTalking] = useState(false);
  const [transcripts, setTranscripts] = useState<string[]>([]);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [conversationStart, setConversationStart] = useState<Date | null>(null);
  const [showLoader, setShowLoader] = useState(false);
  const [firstAgentMessage, setFirstAgentMessage] = useState(false);
  const [shouldStartAgent, setShouldStartAgent] = useState(false);
  const vapiRef = useRef<any>(null);

  useEffect(() => {
    if (!vapiRef.current) {
      vapiRef.current = new Vapi(VAPI_PUBLIC_KEY);
      vapiRef.current.on("message", (message: any) => {
        if (message.type === "transcript" && message.transcriptType === "final") {
          setTranscripts((prev) => [...prev, `${message.role}: ${message.transcript}`]);
          setMessages((prev) => [...prev, { role: message.role, content: message.transcript }]);
          if (message.role === "assistant" && !firstAgentMessage) {
            setShowLoader(false);
            setFirstAgentMessage(true);
          }
        }
      });
      vapiRef.current.on("audio", (audio: any) => {
        // Vapi handles playback automatically
      });
    }
  }, [firstAgentMessage]);

  const startConversation = () => {
    setTranscripts([]);
    setMessages([]);
    setConversationStart(new Date());
    setIsTalking(true);
    setShowLoader(true);
    setFirstAgentMessage(false);
    vapiRef.current.start(VAPI_ASSISTANT_ID);
  };

  useEffect(() => {
    if (shouldStartAgent) {
      vapiRef.current.start(VAPI_ASSISTANT_ID);
      setShouldStartAgent(false);
    }
  }, [shouldStartAgent]);

  const stopConversation = async () => {
    setIsTalking(false);
    vapiRef.current.stop();
    setShowLoader(false);
    if (!messages.length) return;

    // 1. Create the conversation
    const res = await fetch("/api/conversations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Conversation with AI",
        startedAt: conversationStart,
      }),
    });
    const conversation = await res.json();
    // 2. Post all messages
    await Promise.all(
      messages.map((msg) =>
        fetch(`/api/conversations/${conversation.id}/messages`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            role: msg.role,
            content: msg.content,
          }),
        })
      )
    );
  };

  return (
    <div className="w-full max-w-xl mx-auto py-6 px-2 sm:px-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
        <FaUserMd className="text-teal-600" /> Talk to Your Medical AI Agent
      </h1>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4 sm:mb-6 w-full">
        <button
          onClick={startConversation}
          disabled={isTalking}
          className="bg-teal-600 text-white px-4 sm:px-6 py-2 rounded-lg font-semibold shadow hover:bg-teal-700 transition disabled:opacity-50 w-full sm:w-auto"
        >
          Start Conversation
        </button>
        <button
          onClick={stopConversation}
          disabled={!isTalking}
          className="bg-gray-300 text-gray-700 px-4 sm:px-6 py-2 rounded-lg font-semibold shadow hover:bg-gray-400 transition disabled:opacity-50 w-full sm:w-auto"
        >
          Stop
        </button>
      </div>
      <div className="bg-white rounded-lg shadow p-2 sm:p-4 min-h-[200px] max-h-96 overflow-y-auto w-full">
        <h2 className="font-semibold mb-2 flex items-center gap-2 text-base sm:text-lg">
          <FaUserMd className="text-teal-600" /> Transcription
        </h2>
        {showLoader && (
          <div className="flex flex-col items-center justify-center py-8">
            <span className="animate-spin text-4xl sm:text-5xl text-teal-500 mb-2">🩺</span>
            <span className="text-teal-700 font-medium text-base sm:text-lg">Connecting to your medical assistant...</span>
          </div>
        )}
        <div className="space-y-3 text-xs sm:text-sm">
          {transcripts.length === 0 && !showLoader && (
            <div className="text-gray-400">No conversation yet.</div>
          )}
          {messages.map((msg, idx) => {
            const isAssistant = msg.role === "assistant";
            const isLatest = idx === messages.length - 1;
            const lastMsgRef = isLatest
              ? (el: HTMLDivElement | null) => {
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "end" });
                }
              : undefined;
            return (
              <div
                key={idx}
                ref={lastMsgRef}
                className={`flex items-end gap-2 ${isAssistant ? "justify-start" : "justify-end"}`}
              >
                {isAssistant && <FaUserMd className="text-xl sm:text-2xl text-teal-500" />}
                <span
                  className={`px-3 sm:px-4 py-2 rounded-2xl shadow max-w-[90%] sm:max-w-[70%] break-words text-xs sm:text-sm ${
                    isAssistant
                      ? isLatest
                        ? "bg-teal-100 border-l-4 border-teal-500"
                        : "bg-teal-50 text-teal-900"
                      : isLatest
                      ? "bg-blue-100 border-r-4 border-blue-500"
                      : "bg-blue-50 text-blue-900"
                  }`}
                >
                  {msg.content}
                </span>
                {!isAssistant && <FaUser className="text-xl sm:text-2xl text-blue-500" />}
              </div>
            );
          })}
        </div>
      </div>
      <a
        href="/history"
        className="text-teal-700 hover:underline block mt-4 text-center sm:text-left"
      >
        View Conversation History
      </a>
    </div>
  );
} 