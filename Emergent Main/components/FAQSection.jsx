"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export const FAQSection = ({ faqs, title = "Frequently Asked Questions" }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-spacing" style={{ backgroundColor: "#fafafa" }}>
      <div className="container">
        <h2 className="section-header" style={{ textAlign: "center", marginBottom: "64px" }}>
          {title}
        </h2>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                marginBottom: "16px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #e5e5e5",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: "100%",
                  padding: "24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: openIndex === index ? "#f5f5f5" : "#FFFFFF",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background-color 0.2s ease",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    margin: 0,
                    paddingRight: "16px",
                  }}
                >
                  {faq.question}
                </h3>
                <ChevronDown
                  size={20}
                  style={{
                    flexShrink: 0,
                    transition: "transform 0.3s ease",
                    transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    color: "#666666",
                  }}
                />
              </button>
              {openIndex === index && (
                <div
                  style={{
                    padding: "0 24px 24px",
                    animation: "fadeIn 0.3s ease",
                  }}
                >
                  <p
                    className="body-text"
                    style={{
                      color: "#666666",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
