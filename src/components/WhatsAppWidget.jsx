import React, { useState } from "react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  // REPLACE with your phone number (Country code + number, NO '+' or spaces, e.g. 234123456789)
  const phoneNumber = "2348113331113";

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setMessage("");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end font-sans">
      {/* POP-UP CHAT BOX */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-sm sm:w-80 rounded-2xl bg-gray-950 border border-[#00FF66]/40 shadow-[0_0_25px_rgba(0,255,102,0.15)] backdrop-blur-md overflow-hidden transition-all duration-300">
          {/* Header */}
          <div className="bg-gray-900/90 p-4 border-b border-gray-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative h-10 w-10 rounded-full bg-black border border-[#00FF66]/60 flex items-center justify-center font-bold text-[#00FF66] shadow-[0_0_10px_rgba(0,255,102,0.3)]">
                LD
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#00FF66] animate-pulse"></span>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-white tracking-wide">Luis Dem</h3>
                <p className="text-[11px] text-[#00FF66] font-mono">● Bring your next ideas to life!</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-[#00FF66] text-lg font-bold transition-colors p-1"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Chat Body */}
          <div className="bg-black/90 p-4 h-52 sm:h-48 overflow-y-auto flex flex-col justify-end space-y-3">
            <div className="bg-gray-900 border border-gray-800 text-gray-200 text-xs sm:text-sm p-3 rounded-2xl rounded-tl-none max-w-[88%] self-start shadow-inner">
              👋 Hey there! Have a project in mind or want to collaborate? Drop a message below!
            </div>
          </div>

          {/* Chat Input Form */}
          <form
            onSubmit={handleSendMessage}
            className="bg-gray-900/90 p-3 border-t border-gray-800 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 text-xs sm:text-sm bg-black text-white border border-gray-800 rounded-full px-4 py-2.5 outline-none focus:border-[#00FF66] focus:shadow-[0_0_8px_rgba(0,255,102,0.4)] transition-all placeholder-gray-500"
            />
            <button
              type="submit"
              disabled={!message.trim()}
              className="bg-[#00FF66] hover:bg-[#00cc52] text-black p-2.5 rounded-full transition-all duration-200 disabled:opacity-40 disabled:hover:bg-[#00FF66] shadow-[0_0_10px_rgba(0,255,102,0.4)] active:scale-95 flex items-center justify-center shrink-0"
            >
              <svg className="w-4 h-4 fill-current translate-x-[1px]" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* FLOATING TOGGLE BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center h-14 w-14 rounded-full bg-black border-2 border-[#00FF66] text-[#00FF66] shadow-[0_0_15px_rgba(0,255,102,0.4)] hover:shadow-[0_0_25px_rgba(0,255,102,0.7)] hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Toggle WhatsApp Chat"
      >
        {isOpen ? (
          <span className="text-xl font-bold text-[#00FF66]">✕</span>
        ) : (
          <svg
            className="h-6 w-6 fill-current"
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