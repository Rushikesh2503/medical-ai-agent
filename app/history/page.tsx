"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { FaRegComments } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const ConversationDetail = dynamic(() => import("../_components/ConversationDetail"), { ssr: false });

export default function HistoryPage() {
  const [conversations, setConversations] = useState<any[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/conversations")
      .then(res => res.json())
      .then(data => {
        setConversations(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching conversations:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="max-w-full sm:max-w-5xl mx-auto py-6 sm:py-12 min-h-[70vh] px-2 sm:px-0">
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
          <FaRegComments className="text-teal-600" /> Conversation History
        </h1>
        <div className="relative group">
          <FaInfoCircle className="text-teal-500 text-lg cursor-help" />
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs sm:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
            Click on any conversation to view details
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        </div>
      </div>
      
      {isLoading ? (
        <div className="flex items-center justify-center py-8 sm:py-12">
          <div className="flex items-center gap-3">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
            <span className="text-teal-600 font-medium text-base sm:text-lg">Loading conversations...</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {conversations.length === 0 && (
            <div className="text-gray-400 italic col-span-full text-center py-8">No conversations yet.</div>
          )}
          {conversations.map(conv => (
            <button
              key={conv.id}
              className={`w-full text-left px-3 sm:px-4 py-4 sm:py-5 rounded-2xl shadow-lg transition-all flex flex-col border bg-white/80 hover:bg-teal-50 border-gray-200 cursor-pointer
                ${selectedId === conv.id ? "ring-2 ring-teal-400" : ""}
              `}
              onClick={() => setSelectedId(conv.id)}
            >
              <span className="flex items-center gap-2 text-base sm:text-lg font-semibold mb-2">
                <FaRegComments className="text-teal-400" />
                Conversation {conv.id}
              </span>
              <span className="block text-xs text-gray-500">
                {new Date(conv.startedAt).toLocaleString()}
              </span>
            </button>
          ))}
        </div>
      )}
      
      {/* Popup/modal for conversation details */}
      {selectedId && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 px-2">
          <div className="bg-white/90 rounded-2xl shadow-2xl p-0 w-full max-w-lg sm:max-w-2xl relative border border-teal-100 max-h-[80vh] flex flex-col">
            <div className="sticky top-0 z-10 bg-white/90 rounded-t-2xl px-4 sm:px-8 pt-6 sm:pt-8 pb-3 sm:pb-4 flex items-center justify-between border-b border-teal-100">
              <h2 className="font-semibold flex items-center gap-2 text-base sm:text-lg">
                <span className="text-teal-600">Messages</span>
              </h2>
              <button
                className="text-gray-500 hover:text-gray-800 text-2xl cursor-pointer"
                onClick={() => setSelectedId(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 sm:px-8 pb-6 sm:pb-8 hide-scrollbar">
              <ConversationDetail conversationId={selectedId} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}