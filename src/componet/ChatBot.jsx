import React, { useState, useRef, useEffect } from "react";
import { getIntent } from "../Api/witService"; // Import your Wit.ai API function

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! 👋 Ask me anything about Solomon or Argonix Tech Solution." }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // API call for real response (now uses Wit.ai)
  async function fetchBotReply(userMsg) {
    try {
      const witData = await getIntent(userMsg);
      if (!witData) return "Sorry, there was an error contacting the bot API. Please try again later.";
      const intent = witData.intents && witData.intents[0] ? witData.intents[0].name : null;
      // Custom responses based on detected intent
      if (intent) {
        switch (intent) {
          case "about_me":
            return "I'm Solomon, a passionate developer and founder of Argonix Tech Solution. I love building web projects and helping others learn tech!";
          case "contact_info":
            return "You can reach Solomon at solomonjohnbull676@gmail.com or +234 9155472765.";
          case "argonix_info":
            return "Argonix Tech Solution is a creative tech company focused on web development, digital solutions, and innovation.";
          case "greeting":
            return "Hello! 👋 How can I help you today?";
          case "thanks":
            return "You're welcome! If you have more questions, just ask.";
          case "goodbye":
            return "Goodbye! Have a great day!";
          // Add more intent cases as needed
          default:
            return `I detected your intent as: "${intent}". (Wit.ai confidence: ${witData.intents[0].confidence})`;
        }
      }
      // fallback to Wit.ai's text or a default message
      return witData.text || "Sorry, I couldn't understand your question.";
    } catch (e) {
      return "Sorry, there was an error contacting the bot API. Please try again later.";
    }
  }

  // Fun/crazy bot reply generator (fallback)
  function getCrazyReply(userMsg) {
    const crazyReplies = [
      "🤖 Beep boop! Did you just say: \"" + userMsg + "\"? That's wild! 🚀",
      "🦄 I'm powered by coffee and code! Ask me anything!",
      "🎉 SolomonBot is here to party and answer your questions!",
      "😎 Did you know? Argonix Tech runs on pure awesomeness!",
      "👾 Bleep blorp! I love talking tech. Try me!",
      "🔥 That's a hot question! But I'm even hotter! 😜",
      "🌈 If you can dream it, Argonix Tech can build it!",
      "💡 Fun fact: I never sleep. I'm always here for you!",
      "🛸 Whoa! That question just took me to another galaxy!",
      "😂 LOL! Good one. Want to ask me something else?"
    ];
    return crazyReplies[Math.floor(Math.random() * crazyReplies.length)];
  }

  // Update handleSend to use API if available
  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [
      ...msgs,
      { from: "user", text: input }
    ]);
    setInput("");
    // Try API, fallback to crazy reply
    let reply;
    try {
      reply = await fetchBotReply(input);
    } catch {
      reply = getCrazyReply(input);
    }
    setMessages((msgs) => [
      ...msgs,
      { from: "bot", text: reply }
    ]);
  };

  return (
    <>
      {/* Floating Chat Icon */}
      {!open && (
        <button
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-blue-500 via-pink-400 to-yellow-300 text-white rounded-full shadow-2xl p-5 flex items-center gap-2 hover:scale-110 hover:rotate-6 transition-all border-4 border-white animate-bounce"
          onClick={() => setOpen(true)}
          aria-label="Open chat"
          style={{ boxShadow: "0 8px 32px 0 rgba(58, 123, 213, 0.3)" }}
        >
          <span role="img" aria-label="chat" className="text-2xl animate-spin-slow">🤖</span>
          <span className="font-extrabold text-lg hidden sm:inline drop-shadow">SolomonBot</span>
        </button>
      )}

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[95vw] bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 dark:from-[#232946] dark:via-[#232946] dark:to-[#232946] rounded-3xl shadow-2xl flex flex-col border-4 border-blue-400 animate__animated animate__fadeInUpBig"
          style={{ boxShadow: "0 8px 32px 0 rgba(58, 123, 213, 0.3)" }}>
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-400 text-white rounded-t-3xl">
            <span className="font-extrabold text-xl tracking-wider flex items-center gap-2">
              <span role="img" aria-label="bot">🤖</span> SolomonBot
            </span>
            <button
              className="text-white text-2xl font-bold hover:text-yellow-200 hover:rotate-12 transition-transform"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-transparent"
            style={{ maxHeight: "320px", fontFamily: "Comic Sans MS, Comic Sans, cursive" }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl text-base shadow-lg transition-all ${
                    msg.from === "user"
                      ? "bg-gradient-to-r from-blue-400 to-pink-400 text-white font-bold animate__animated animate__bounceInRight"
                      : "bg-white/80 dark:bg-[#232946] text-blue-900 dark:text-yellow-300 font-semibold animate__animated animate__bounceInLeft"
                  }`}
                  style={{
                    maxWidth: "80%",
                    wordBreak: "break-word",
                    border: msg.from === "user" ? "2px solid #fff" : "2px solid #3b82f6"
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          {/* Input */}
          <form onSubmit={handleSend} className="flex border-t border-blue-200 bg-white/70 dark:bg-[#232946] rounded-b-3xl">
            <input
              className="flex-1 px-3 py-3 rounded-bl-3xl outline-none bg-transparent text-blue-900 dark:text-yellow-200 font-bold placeholder:text-blue-400"
              type="text"
              placeholder="Type your wildest question..."
              value={input}
              onChange={e => setInput(e.target.value)}
              autoFocus
            />
            <button
              type="submit"
              className="px-5 py-3 bg-gradient-to-r from-pink-400 to-blue-500 text-white rounded-br-3xl font-extrabold hover:scale-110 transition-transform"
            >
              🚀
            </button>
          </form>
        </div>
      )}

      {/* Custom animation for the icon */}
      <style>
        {`
          @keyframes spin-slow {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
          .animate-spin-slow {
            animation: spin-slow 2.5s linear infinite;
          }
        `}
      </style>
    </>
  );
}

export default ChatBot;
