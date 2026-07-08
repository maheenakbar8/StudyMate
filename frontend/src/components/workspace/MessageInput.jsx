import { FiPaperclip, FiMic, FiSend } from "react-icons/fi";
import "../../styles/Workspace.css";

export default function MessageInput({
  message,
  setMessage,
  handleSend,
}) {
  return (
    <div className="message-input">

      <button className="input-icon">
        <FiPaperclip />
      </button>

      <input
  type="text"
  value={message}
  placeholder="Ask StudyMate anything..."
  onChange={(e) => setMessage(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  }}
/>

      <button className="input-icon">
        <FiMic />
      </button>

     <button
  className="send-btn"
  onClick={handleSend}
>
  <FiSend />
</button>

    </div>
  );
}