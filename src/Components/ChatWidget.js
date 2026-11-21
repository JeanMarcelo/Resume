import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const WEBHOOK_URL = process.env.REACT_APP_N8N_WEBHOOK_URL || "https://programming-gsm-cut-referred.trycloudflare.com/webhook/portfolio-chat";

const createSessionId = () => {
  if (window.crypto && window.crypto.randomUUID) return window.crypto.randomUUID();
  return `jean-chat-${Date.now()}-${Math.random().toString(36).slice(2)}`;
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Oi! Sou o JeanBotIA. Quer saber algo sobre a trajetória, as experiências ou as skills do Jean?" },
  ]);
  const [sessionId] = useState(createSessionId);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const sendMessage = async (event) => {
    event.preventDefault();
    const question = message.trim();
    if (!question || isSending) return;

    setMessages((current) => [...current, { role: "user", content: question }]);
    setMessage("");

    if (!WEBHOOK_URL) {
      setMessages((current) => [...current, {
        role: "assistant",
        content: "Ainda estou sendo conectado. Configure REACT_APP_N8N_WEBHOOK_URL no arquivo .env.local para falar comigo.",
      }]);
      return;
    }

    setIsSending(true);
    try {
      const { data } = await axios.post(WEBHOOK_URL, { chatInput: question, sessionId });
      const result = Array.isArray(data) ? data[0] : data;
      const answer = typeof result === "string"
        ? result
        : result?.output || result?.response || result?.text || result?.answer || result?.message;

      if (!answer || typeof answer !== "string") throw new Error("Resposta do n8n em formato inesperado.");
      setMessages((current) => [...current, { role: "assistant", content: answer }]);
    } catch (error) {
      const description = error.response?.data?.message || error.message;
      setMessages((current) => [...current, {
        role: "assistant",
        content: `Não consegui falar com o n8n agora. ${description ? `(${description})` : "Confira se o webhook está ativo e permite requisições do site."}`,
      }]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="chat-widget">
      {isOpen && (
        <section className="chat-panel" aria-label="Conversa com JeanBotIA">
          <header className="chat-header">
            <div className="chat-avatar" aria-hidden="true">J</div>
            <div><h2>JeanBotIA</h2><p>Assistente do currículo</p></div>
            <button className="chat-close" onClick={() => setIsOpen(false)} aria-label="Fechar chat">×</button>
          </header>
          <div className="chat-messages" aria-live="polite">
            {messages.map((item, index) => (
              <div className={`chat-message chat-message--${item.role}`} key={`${item.role}-${index}`}>
                {item.content}
              </div>
            ))}
            {isSending && <div className="chat-message chat-message--assistant chat-typing">JeanBotIA está pensando…</div>}
            <div ref={messagesEndRef} />
          </div>
          <form className="chat-form" onSubmit={sendMessage}>
            <label className="visually-hidden" htmlFor="chat-question">Sua pergunta</label>
            <input
              id="chat-question"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Pergunte sobre o Jean…"
              disabled={isSending}
              autoComplete="off"
            />
            <button type="submit" disabled={!message.trim() || isSending} aria-label="Enviar pergunta">➤</button>
          </form>
          <p className="chat-caption">Respostas baseadas no currículo do Jean</p>
        </section>
      )}
      <button className="chat-launcher" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-label={isOpen ? "Fechar JeanBotIA" : "Conversar com JeanBotIA"}>
        <span aria-hidden="true">{isOpen ? "×" : "✦"}</span>
        {!isOpen && <span className="chat-launcher-label">Fale com o JeanBotIA</span>}
      </button>
    </div>
  );
};

export default ChatWidget;
