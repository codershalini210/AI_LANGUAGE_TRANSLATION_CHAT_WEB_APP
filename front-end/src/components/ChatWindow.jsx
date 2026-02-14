// components/ChatWindow.jsx
import MessageBubble from "./MessageBubble";
import { useState } from "react";

export default function ChatWindow() {
  const [message, setMessage] = useState("");

  const messages = [
    {
      original: "नमस्ते, आप कैसे हैं?",
      translated: "Hello, how are you?",
      sender: "other",
    },
    {
      original: "I am fine.",
      translated: "मैं ठीक हूँ।",
      sender: "me",
    },
  ];

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
        {messages.map((msg, index) => (
          <MessageBubble key={index} message={msg} />
        ))}
      </div>

      <div className="p-4 flex">
        <input
          type="text"
          className="flex-1 p-2 border rounded"
          placeholder="Type message..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="ml-2 bg-blue-600 text-white px-4 rounded">
          Send
        </button>
      </div>
    </div>
  );
}
