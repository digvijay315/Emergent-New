"use client";

import React, { useState,useEffect } from "react";
import { X, MessageCircle, Send } from "lucide-react";
import api from "@/components/api"

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);


const [QUESTIONS, setQuestions] = useState([]);
const [ANSWERS, setAnswers] = useState({});



const fetchFaqs = async () => {
  try {
    const res = await api.get("api/chatbot/Get-faq");
    const data = await res.data.data;
    console.log(data);
    

    // Filter only active FAQs
    const activeFaqs = data.filter(faq => faq.isActive);

    // Create QUESTIONS array
    const questionsArray = activeFaqs.map(faq => faq.question);

    // Create ANSWERS object
    const answersObject = activeFaqs.reduce((acc, faq) => {
      acc[faq.question] = faq.answer;
      return acc;
    }, {});

    setQuestions(questionsArray);
    setAnswers(answersObject);
  } catch (error) {
    console.error("Failed to fetch FAQs:", error);
  }
};

useEffect(() => {
  fetchFaqs();
}, []);

console.log(QUESTIONS);
console.log(ANSWERS);


  // const QUESTIONS = [
  //   "What services does IntelliviaAI provide?",
  //   "How does automation help my business?",
  //   "What industries do you work with?",
  //   "How secure is my data?",
  //   "How can I contact your team?",
  // ];

  // const ANSWERS = {
  //   "What services does IntelliviaAI provide?":
  //     "IntelliviaAI provides AI-powered workflow automation, system integration, custom AI solutions, and ongoing automation maintenance.",
  //   "How does automation help my business?":
  //     "Automation reduces manual work, minimizes errors, speeds up operations, and allows your team to focus on strategic tasks.",
  //   "What industries do you work with?":
  //     "We work with real estate, e-commerce, healthcare, finance, education, and service-based businesses.",
  //   "How secure is my data?":
  //     "Your data always remains under your control. We integrate automation using your own secure tools and follow best security practices.",
  //   "How can I contact your team?":
  //     "You can contact our team through the Contact page on our website or email us directly. We usually respond within 24 hours.",
  // };

  // const [messages, setMessages] = useState([
  //   {
  //     type: "bot",
  //     text: "Hi 👋 I'm IntelliviaAI Assistant. Please choose a question below:",
  //     options: QUESTIONS,
  //   },
  // ]);

  const [messages, setMessages] = useState([])
  useEffect(() => {
  if (QUESTIONS.length > 0) {
    setMessages([
      {
        type: "bot",
        text: "Hi 👋 I'm IntelliviaAI Assistant. Please choose a question below:",
        options: QUESTIONS,
      },
    ]);
  }
}, [QUESTIONS]);


  const handleOptionClick = (option) => {
    setMessages((prev) => [...prev, { type: "user", text: option }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: ANSWERS[option] || "Please select a valid question.",
          options: QUESTIONS,
        },
      ]);
    }, 400);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "#0066cc",
            color: "#FFFFFF",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0, 102, 204, 0.4)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            zIndex: 9999,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow =
              "0 6px 20px rgba(0, 102, 204, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 4px 12px rgba(0, 102, 204, 0.4)";
          }}
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            width: "380px",
            height: "600px",
            backgroundColor: "#FFFFFF",
            borderRadius: "12px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
            display: "flex",
            flexDirection: "column",
            zIndex: 9999,
            overflow: "hidden",
          }}
          className="chatbot-window"
        >
          {/* Header */}
          <div
            style={{
              marginTop: "60px",
              padding: "20px",
              backgroundColor: "#0066cc",
              color: "#FFFFFF",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img
                src="https://customer-assets.emergentagent.com/job_df8ed64a-1a0a-45e5-9844-fb555bbfa098/artifacts/r7mvuvfq_Blue%20and%20Purple%20Illustrative%20Brain%20Tech%20Artificial%20Intelligence%20Logo1.png"
                alt="IntelliviaAI"
                style={{ height: "32px" }}
              />
              <div>
                <div style={{ fontWeight: 600 }}>IntelliviaAI</div>
                <div style={{ fontSize: "12px", opacity: 0.9 }}>
                  AI Automation Assistant
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "#FFFFFF",
                cursor: "pointer",
              }}
            >
              <X size={24} />
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {messages.map((msg, idx) => (
              <div key={idx}>
                <div
                  style={{
                    padding: "12px 16px",
                    borderRadius: "12px",
                    backgroundColor:
                      msg.type === "bot" ? "#f5f5f5" : "#0066cc",
                    color: msg.type === "bot" ? "#1a1a1a" : "#FFFFFF",
                    maxWidth: "80%",
                    alignSelf:
                      msg.type === "bot" ? "flex-start" : "flex-end",
                    marginLeft: msg.type === "user" ? "auto" : "0",
                    whiteSpace: "pre-line",
                    fontSize: "14px",
                  }}
                >
                  {msg.text}
                </div>

                {msg.options && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      marginTop: "8px",
                      maxWidth: "80%",
                    }}
                  >
                    {msg.options.map((option, i) => (
                      <button
                        key={i}
                        onClick={() => handleOptionClick(option)}
                        style={{
                          padding: "10px 16px",
                          borderRadius: "8px",
                          border: "1px solid #0066cc",
                          backgroundColor: "#FFFFFF",
                          color: "#0066cc",
                          cursor: "pointer",
                          fontSize: "14px",
                          textAlign: "left",
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input (Disabled but UI same) */}
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{
              padding: "16px",
              borderTop: "1px solid #e5e5e5",
              display: "flex",
              gap: "8px",
            }}
          >
            <input
              disabled
              placeholder="Select a question above..."
              style={{
                flex: 1,
                padding: "10px 16px",
                borderRadius: "24px",
                border: "1px solid #e5e5e5",
                fontSize: "14px",
                backgroundColor: "#f9f9f9",
              }}
            />
            <button
              disabled
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#0066cc",
                color: "#FFFFFF",
                border: "none",
              }}
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .chatbot-window {
            width: calc(100vw - 32px) !important;
            height: calc(100vh - 100px) !important;
            bottom: 16px !important;
            right: 16px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Chatbot;
