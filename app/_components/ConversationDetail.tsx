"use client";
import React, { useEffect, useState } from "react";
import { FaUserMd, FaUser } from "react-icons/fa";

export default function ConversationDetail({ conversationId }: { conversationId: number }) {
  const [messages, setMessages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (conversationId) {
      setIsLoading(true);
      fetch(`/api/conversations/${conversationId}/messages`)
        .then(res => res.json())
        .then(data => {
          setMessages(data);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching messages:', error);
          setIsLoading(false);
        });
    }
  }, [conversationId]);

  if (!conversationId) return null;

  return (
    <div>
      <h2 className="font-semibold mb-4 flex items-center gap-2">
        <FaUserMd className="text-teal-600" /> Messages
      </h2>
      {isLoading ? (
        <div className="flex items-center justify-center py-8">
          <div className="flex items-center gap-3">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-teal-600"></div>
            <span className="text-teal-600 font-medium">Loading messages...</span>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {messages.map((msg, idx) => {
            const isAssistant = msg.role === "assistant";
            return (
              <div
                key={msg.id}
                className={`flex items-end gap-2 ${isAssistant ? "justify-start" : "justify-end"}`}
              >
                {isAssistant && <FaUserMd className="text-2xl text-teal-500" />}
                <span
                  className={`px-4 py-2 rounded-2xl shadow max-w-[70%] break-words ${
                    isAssistant
                      ? "bg-teal-50 text-teal-900"
                      : "bg-blue-50 text-blue-900"
                  }`}
                >
                  {msg.content}
                </span>
                {!isAssistant && <FaUser className="text-2xl text-blue-500" />}
                {msg.audioUrl && (
                  <audio controls src={msg.audioUrl} className="ml-2" />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}