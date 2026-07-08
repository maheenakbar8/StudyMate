import {
  FiPlus,
  FiFileText,
  FiBookOpen,
  FiEdit3,
  FiDatabase,
} from "react-icons/fi";

import "../../styles/Workspace.css";

const chats = [
  {
    title: "AI Notes",
    time: "Yesterday",
    icon: FiFileText,
  },
  {
    title: "DSA Revision",
    time: "2 hours ago",
    icon: FiBookOpen,
  },
  {
    title: "OOP Quiz",
    time: "Monday",
    icon: FiEdit3,
  },
  {
    title: "Database Help",
    time: "Last Week",
    icon: FiDatabase,
  },
];

export default function ChatHistory() {
  return (
    <div className="chat-history">

      <div className="history-header">
        <h2>Recent Chats</h2>

        <button className="new-chat-btn">
          <FiPlus />
          New Chat
        </button>
      </div>

      <div className="history-list">

        {chats.map((chat) => {

          const Icon = chat.icon;

          return (

            <div className="history-card" key={chat.title}>

              <div className="history-icon">
                <Icon />
              </div>

              <div>

                <h4>{chat.title}</h4>

                <span>{chat.time}</span>

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}