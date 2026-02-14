// components/MessageBubble.jsx
export default function MessageBubble({ message }) {
  const isMe = message.sender === "me";

  return (
    <div className={`mb-4 flex ${isMe ? "justify-end" : "justify-start"}`}>
      <div className={`p-3 rounded max-w-xs ${isMe ? "bg-blue-500 text-white" : "bg-white"}`}>
        <p className="font-medium">{message.original}</p>
        <p className="text-sm opacity-70 mt-1">
          {message.translated}
        </p>
      </div>
    </div>
  );
}
