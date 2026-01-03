import React, { useState } from "react";
import { X, MessageCircle, Send } from "lucide-react";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hello! Welcome to IntelliviaAI. I help businesses automate workflows and save time. How can I assist you today?",
      options: [
        "Learn about your services",
        "Understand pricing",
        "Ask about automation solutions",
        "Book a consultation",
        "Other questions",
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [currentFlow, setCurrentFlow] = useState("initial");
  const [leadData, setLeadData] = useState({
    businessName: "",
    userName: "",
    email: "",
    phone: "",
    businessSize: "",
    painPoint: "",
  });

  const handleOptionClick = (option) => {
    // Add user message
    setMessages((prev) => [...prev, { type: "user", text: option }]);

    // Bot response based on option
    setTimeout(() => {
      if (option === "Learn about your services") {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "IntelliviaAI helps businesses automate workflows to reduce repetitive work, scale without adding staff, maintain full data ownership, and receive weekly maintenance. What would you like to know more about?",
            options: ["Detailed services", "How it works", "Go back"],
          },
        ]);
        setCurrentFlow("services");
      } else if (option === "Understand pricing") {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "Our pricing includes:\n\n• One-time setup cost: Strategy, design, development, and deployment\n• Weekly maintenance: Updates, fixes, and optimization\n\nImportant: Any third-party AI tools (ChatGPT, Gemini, Claude, etc.) are billed directly from your own accounts. We don't mark up or resell usage costs.\n\nWould you like a custom quote?",
            options: ["Get a custom quote", "Tell me more", "Go back"],
          },
        ]);
        setCurrentFlow("pricing");
      } else if (option === "Ask about automation solutions") {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "I can help you understand how automation solves common business challenges:\n\n• Decision delays from manual data gathering\n• Knowledge locked in people's heads\n• Silent inefficiencies nobody questions\n• Systems breaking during growth\n\nWhich challenge resonates most with your business?",
            options: [
              "Decision delays",
              "Knowledge silos",
              "Growth problems",
              "Get a custom quote",
            ],
          },
        ]);
        setCurrentFlow("solutions");
      } else if (option === "Book a consultation") {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "Great! Let me collect some information. First, what's your business name?",
          },
        ]);
        setCurrentFlow("lead_businessName");
      } else if (option === "Detailed services") {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "Our services include:\n\n1. Workflow Automation - Transform manual processes into intelligent workflows\n2. System Integration - Connect disparate tools into a unified ecosystem\n3. AI Optimization - Apply machine learning to improve processes\n4. Ongoing Maintenance - Continuous monitoring and optimization\n\nReady to get started?",
            options: ["Get a custom quote", "Book a consultation", "Go back"],
          },
        ]);
      } else if (option === "How it works") {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "Our process:\n\n1️⃣ Understand - Analyze your workflows and identify bottlenecks\n2️⃣ Design - Create custom automation solutions\n3️⃣ Deploy - Integrate seamlessly with your systems\n4️⃣ Maintain - Ongoing optimization and support\n\nInterested in starting?",
            options: ["Get a custom quote", "Book a consultation", "Go back"],
          },
        ]);
      } else if (option === "Get a custom quote" || option === "Tell me more") {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "Perfect! To provide you with an accurate quote, I need some information. What's your business name?",
          },
        ]);
        setCurrentFlow("lead_businessName");
      } else if (option === "Go back") {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "No problem! How else can I help you?",
            options: [
              "Learn about your services",
              "Understand pricing",
              "Ask about automation solutions",
              "Book a consultation",
            ],
          },
        ]);
        setCurrentFlow("initial");
      } else {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "Feel free to ask any questions about automation, pricing, or our services. You can also:",
            options: [
              "Learn about services",
              "Get pricing info",
              "Book consultation",
            ],
          },
        ]);
      }
    }, 500);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    setMessages((prev) => [...prev, { type: "user", text: userMessage }]);
    setInputValue("");

    // Handle lead qualification flow
    setTimeout(() => {
      if (currentFlow === "lead_businessName") {
        setLeadData((prev) => ({ ...prev, businessName: userMessage }));
        setMessages((prev) => [
          ...prev,
          { type: "bot", text: "Great! And what's your name?" },
        ]);
        setCurrentFlow("lead_userName");
      } else if (currentFlow === "lead_userName") {
        setLeadData((prev) => ({ ...prev, userName: userMessage }));
        setMessages((prev) => [
          ...prev,
          { type: "bot", text: "Thanks! What's your email address?" },
        ]);
        setCurrentFlow("lead_email");
      } else if (currentFlow === "lead_email") {
        setLeadData((prev) => ({ ...prev, email: userMessage }));
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "Phone number? (Optional - you can skip by typing 'skip')",
          },
        ]);
        setCurrentFlow("lead_phone");
      } else if (currentFlow === "lead_phone") {
        setLeadData((prev) => ({ ...prev, phone: userMessage }));
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "What's your business size?",
            options: ["Less than 10", "10-50 employees", "50+ employees"],
          },
        ]);
        setCurrentFlow("lead_businessSize");
      } else if (currentFlow === "lead_painPoint") {
        setLeadData((prev) => ({ ...prev, painPoint: userMessage }));
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "Perfect! Thanks for sharing that information. Our team will reach out to you shortly at the email you provided. You can also schedule a call directly through our contact page.",
            options: ["Go to contact page", "Ask another question"],
          },
        ]);
        setCurrentFlow("complete");
      } else {
        // General question handling
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "That's a great question! For detailed answers, I recommend contacting our team directly. Would you like to:",
            options: [
              "Book a consultation",
              "Visit contact page",
              "Learn about services",
            ],
          },
        ]);
      }
    }, 500);
  };

  // Handle business size selection
  const handleBusinessSizeClick = (size) => {
    setMessages((prev) => [...prev, { type: "user", text: size }]);
    setLeadData((prev) => ({ ...prev, businessSize: size }));

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: "Last question: What's your main goal or workflow pain point?",
        },
      ]);
      setCurrentFlow("lead_painPoint");
    }, 500);
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
                style={{ height: "32px", width: "auto" }}
              />
              <div>
                <div style={{ fontWeight: 600, fontSize: "16px" }}>
                  IntelliviaAI
                </div>
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
                padding: "4px",
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
                    alignSelf: msg.type === "bot" ? "flex-start" : "flex-end",
                    marginLeft: msg.type === "user" ? "auto" : "0",
                    whiteSpace: "pre-line",
                    fontSize: "14px",
                    lineHeight: 1.5,
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
                    {msg.options.map((option, optIdx) => (
                      <button
                        key={optIdx}
                        onClick={() => {
                          if (
                            currentFlow === "lead_businessSize" &&
                            [
                              "Less than 10",
                              "10-50 employees",
                              "50+ employees",
                            ].includes(option)
                          ) {
                            handleBusinessSizeClick(option);
                          } else if (option === "Go to contact page") {
                            window.location.href = "/contact";
                          } else if (option === "Visit contact page") {
                            window.location.href = "/contact";
                          } else {
                            handleOptionClick(option);
                          }
                        }}
                        style={{
                          padding: "10px 16px",
                          borderRadius: "8px",
                          border: "1px solid #0066cc",
                          backgroundColor: "#FFFFFF",
                          color: "#0066cc",
                          cursor: "pointer",
                          fontSize: "14px",
                          fontWeight: 500,
                          transition: "all 0.2s ease",
                          textAlign: "left",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#0066cc";
                          e.currentTarget.style.color = "#FFFFFF";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#FFFFFF";
                          e.currentTarget.style.color = "#0066cc";
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

          {/* Input */}
          <form
            onSubmit={handleInputSubmit}
            style={{
              padding: "16px",
              borderTop: "1px solid #e5e5e5",
              display: "flex",
              gap: "8px",
            }}
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: "10px 16px",
                borderRadius: "24px",
                border: "1px solid #e5e5e5",
                fontSize: "14px",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#0066cc",
                color: "#FFFFFF",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
