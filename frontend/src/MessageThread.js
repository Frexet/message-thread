import React, { useEffect, useState } from "react";
import "./App.css";

const API_URL = "http://localhost:5228/api/messages";

function MessageThread() {
  const [messages, setMessages] = useState([]);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setMessages);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMessage = { author, text };

    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMessage),
    });

    const saved = await res.json();
    setMessages([...messages, saved]);
    setText("");
  };

  return (
    <div className="message-container">
      <h1>DJs Talks 🎧</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Namn"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <textarea
          placeholder="Vad vill du säga?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit">Skicka</button>
      </form>

      <ul className="messages">
        {messages.map((m) => (
          <li key={m.id}>
            <strong>{m.author}</strong>: {m.text}
            <br />
            <small>{new Date(m.timestamp).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MessageThread;