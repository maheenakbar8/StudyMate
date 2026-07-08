import { useEffect, useRef } from "react";
import "../../styles/Workspace.css";

export default function ChatArea({
  setMessage,
  messages,
  isTyping,
  selectedFile,
}) {

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  return (
    <div className="chat-area">

      {messages.length === 0 ? (

        <div className="empty-chat">

          <div className="ai-orb">🤖</div>

          <h1>StudyMate AI</h1>

          <p>
            Your intelligent study companion.
            Ask questions, summarize notes,
            generate quizzes and learn faster.
          </p>

          <div className="prompt-grid">

            <div
              className="prompt-card"
              onClick={() =>
                setMessage("Summarize my uploaded lecture notes.")
              }
            >
              📄
              <h3>Summarize Notes</h3>
              <p>Turn long lectures into concise notes.</p>
            </div>

            <div
              className="prompt-card"
              onClick={() =>
                setMessage("Create flashcards from this chapter.")
              }
            >
              🧠
              <h3>Create Flashcards</h3>
              <p>Generate flashcards instantly.</p>
            </div>

            <div
              className="prompt-card"
              onClick={() =>
                setMessage("Generate a quiz from my notes.")
              }
            >
              ❓
              <h3>Generate Quiz</h3>
              <p>Test your understanding with AI.</p>
            </div>

            <div
              className="prompt-card"
              onClick={() =>
                setMessage("Create a mind map for this topic.")
              }
            >
              🗺️
              <h3>Create Mind Map</h3>
              <p>Visualize complex topics.</p>
            </div>

            <div
              className="prompt-card"
              onClick={() =>
                setMessage("Explain this concept in simple terms.")
              }
            >
              📚
              <h3>Explain Concept</h3>
              <p>Get simple explanations for difficult ideas.</p>
            </div>

            <div
              className="prompt-card"
              onClick={() =>
                setMessage("Create a personalized study plan for my exams.")
              }
            >
              🎯
              <h3>Study Plan</h3>
              <p>Generate a personalized study schedule.</p>
            </div>

          </div>

        </div>

      ) : (

        <div className="chat-messages">

          {selectedFile && (
            <div className="uploaded-file-banner">

              <span>📄</span>

              <div>
                <strong>{selectedFile.name}</strong>
                <p>Ready to chat with this document</p>
              </div>

            </div>
          )}

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`message-wrapper ${msg.sender}`}
            >

              {msg.sender === "ai" && (

                <div className="message-header">

                  <div className="ai-badge">
                    🤖
                  </div>

                  <span>StudyMate</span>

                </div>

              )}

              <div className={`bubble ${msg.sender}`}>
                {msg.text}
              </div>

            </div>

          ))}

          {isTyping && (

            <div className="message-wrapper ai">

              <div className="message-header">

                <div className="ai-badge">
                  🤖
                </div>

                <span>StudyMate</span>

              </div>

              <div className="bubble ai typing">
                <span></span>
                <span></span>
                <span></span>
              </div>

            </div>

          )}

          <div ref={messagesEndRef} />

        </div>

      )}

    </div>
  );
}