import ChatArea from "../components/workspace/ChatArea";
import MessageInput from "../components/workspace/MessageInput";
import ChatHistory from "../components/workspace/ChatHistory";
import { useState } from "react";
import FileUpload from "../components/workspace/FileUpload";

export default function AIWorkspace() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
const [isTyping, setIsTyping] = useState(false);

    const handleSend = () => {
  if (!message.trim()) return;

  const userMessage = {
    sender: "user",
    text: message,
  };

  setMessages((prev) => [...prev, userMessage]);

  setMessage("");

  setIsTyping(true);

  setTimeout(() => {

    const aiMessage = {
      sender: "ai",
      text: "This is a placeholder AI response. FastAPI will replace this later!",
    };

    setMessages((prev) => [...prev, aiMessage]);

    setIsTyping(false);

  }, 1500);
};
  return (
    <div className="workspace">

      <div className="workspace-sidebar">
  <ChatHistory />
</div>

      <div className="workspace-main">
        <ChatArea
  setMessage={setMessage}
  messages={messages}
  isTyping={isTyping}
/>
<FileUpload />
      <MessageInput
  message={message}
  setMessage={setMessage}
  handleSend={handleSend}
/>
      </div>

    </div>
  );
}