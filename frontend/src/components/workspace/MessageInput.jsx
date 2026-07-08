import { FiPaperclip, FiMic, FiSend } from "react-icons/fi";
import { useRef } from "react";
import "../../styles/Workspace.css";

export default function MessageInput({
  message,
  setMessage,
  handleSend,
  selectedFile,
  setSelectedFile,
}) {
  const fileInputRef = useRef(null);
  return (
  <>

    {selectedFile && (

      <div className="selected-file">

        <div className="selected-file-info">

          <span className="file-icon">📄</span>

          <span className="file-name">
            {selectedFile.name}
          </span>

        </div>

        <button
          className="remove-file-btn"
          onClick={() => setSelectedFile(null)}
        >
          ✕
        </button>

      </div>

    )}

    <div className="message-input">

      <button
        className="input-icon"
        onClick={() => fileInputRef.current.click()}
      >
        <FiPaperclip />
      </button>

      <input
        type="file"
        accept=".pdf"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={(e) => {
          if (e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
          }
        }}
      />

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

  </>
);
}