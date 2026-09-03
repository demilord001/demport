"use client";

import React, { useState } from "react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  // CONFIGURATION: Replace with your phone number (Country Code + Number, NO spaces or '+' sign)
  const phoneNumber = "2348113331113"; 

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Encodes user text safely for URL format
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Opens WhatsApp (App or Web) in a new tab with the pre-typed message ready to send
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Optional: Reset input and close box
    setMessage("");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* POP-UP CHAT BOX */}
      {isOpen && (
        <div className="mb-4 w-100 overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-100 transition-all duration-300">
          {/* Header */}
          <div className="bg-[#075e54] p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative h-10 w-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white">
                  LD
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 border-2 border-[#075e54]"></span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Luis Dem</h3>
                  <p className="text-xs text-green-100">Bring your next ideas to life.</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Chat Body */}
          <div className="bg-[#efeae2] p-4 h-48 overflow-y-auto flex flex-col justify-end">
            <div className="bg-white text-gray-800 text-sm p-3 rounded-lg shadow-sm max-w-[85%] self-start rounded-tl-none">
              👋 Hi there! Leave a message below to start a chat on WhatsApp.
            </div>
          </div>

          {/* Chat Input Form */}
          <form onSubmit={handleSendMessage} className="bg-white p-3 border-t flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 text-sm text-black border border-gray-300 rounded-full px-4 py-2 outline-none focus:border-[#128c7e] bg-blue-500"
            />
            <button
              type="submit"
              disabled={!message.trim()}
              className="bg-[#128c7e] hover:bg-[#075e54] text-white p-2 rounded-full transition-colors disabled:opacity-50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* FLOATING ACTION BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 active:scale-95 transition-transform duration-200"
        aria-label="Toggle WhatsApp Chat"
      >
        {isOpen ? (
          <span className="text-2xl font-bold">✕</span>
        ) : (
          <svg
            className="h-7 w-7 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        )}
      </button>
    </div>
  );
}