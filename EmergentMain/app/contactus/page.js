"use client"

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const API_URL = process.env.REACT_APP_BACKEND_URL;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Thank you for reaching out. We will get back to you within 24 hours.");
        setFormData({ name: "", email: "", phone: "", company: "", industry: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Header/>
      {/* Hero */}
      <section
        className="section-spacing"
        style={{
          paddingTop: "160px",
          paddingBottom: "96px",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h1 className="hero-headline" style={{ marginBottom: "24px" }}>
            Let's Start a
            <br />
            <span className="accent-text">Conversation</span>
          </h1>
          <p
            className="body-text-large"
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#666666",
            }}
          >
            Ready to transform your business with AI automation? Get in touch and
            let's explore how we can help.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-spacing" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "start",
            }}
            className="contact-grid"
          >
            {/* Contact Information */}
            <div>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: 600,
                  marginBottom: "32px",
                }}
              >
                Get in Touch
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                <div style={{ display: "flex", gap: "16px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #e5e5e5",
                      borderRadius: "4px",
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        marginBottom: "8px",
                      }}
                    >
                      Email
                    </h4>
                    <a
                      href="mailto:info@intelliviaai.com"
                      style={{
                        fontSize: "16px",
                        color: "#0066cc",
                        textDecoration: "none",
                      }}
                    >
                      info@intelliviaai.com
                    </a>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #e5e5e5",
                      borderRadius: "4px",
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        marginBottom: "8px",
                      }}
                    >
                      Phone
                    </h4>
                    <a
                      href="tel:+447858350634"
                      style={{
                        fontSize: "16px",
                        color: "#0066cc",
                        textDecoration: "none",
                      }}
                    >
                      +44 07858 350634
                    </a>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #e5e5e5",
                      borderRadius: "4px",
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        marginBottom: "8px",
                      }}
                    >
                      Location
                    </h4>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#666666",
                        margin: 0,
                      }}
                    >
                      London, United Kingdom
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: "48px",
                  padding: "24px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "4px",
                  border: "1px solid #e5e5e5",
                }}
              >
                <p
                  className="body-text"
                  style={{ color: "#666666", margin: 0, fontStyle: "italic" }}
                >
                  <strong>Response Time:</strong> We typically respond to inquiries
                  within 24 hours during business days.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "48px",
                borderRadius: "4px",
                border: "1px solid #e5e5e5",
              }}
            >
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "24px" }}>
                  <label
                    htmlFor="name"
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: 600,
                      marginBottom: "8px",
                      color: "#1a1a1a",
                    }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    data-testid="contact-name-input"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      fontSize: "16px",
                      border: "1px solid #e5e5e5",
                      borderRadius: "4px",
                      outline: "none",
                      transition: "border-color 0.2s ease",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#0066cc")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e5e5")}
                  />
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: 600,
                      marginBottom: "8px",
                      color: "#1a1a1a",
                    }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    data-testid="contact-email-input"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      fontSize: "16px",
                      border: "1px solid #e5e5e5",
                      borderRadius: "4px",
                      outline: "none",
                      transition: "border-color 0.2s ease",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#0066cc")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e5e5")}
                  />
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label
                    htmlFor="phone"
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: 600,
                      marginBottom: "8px",
                      color: "#1a1a1a",
                    }}
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+44 07858 350634"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      fontSize: "16px",
                      border: "1px solid #e5e5e5",
                      borderRadius: "4px",
                      outline: "none",
                      transition: "border-color 0.2s ease",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#0066cc")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e5e5")}
                  />
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label
                    htmlFor="company"
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: 600,
                      marginBottom: "8px",
                      color: "#1a1a1a",
                    }}
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      fontSize: "16px",
                      border: "1px solid #e5e5e5",
                      borderRadius: "4px",
                      outline: "none",
                      transition: "border-color 0.2s ease",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#0066cc")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e5e5")}
                  />
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label
                    htmlFor="industry"
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: 600,
                      marginBottom: "8px",
                      color: "#1a1a1a",
                    }}
                  >
                    Industry *
                  </label>
                  <input
                    type="text"
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Healthcare, Finance, E-commerce"
                    data-testid="contact-industry-input"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      fontSize: "16px",
                      border: "1px solid #e5e5e5",
                      borderRadius: "4px",
                      outline: "none",
                      transition: "border-color 0.2s ease",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#0066cc")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e5e5")}
                  />
                </div>

                <div style={{ marginBottom: "32px" }}>
                  <label
                    htmlFor="message"
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: 600,
                      marginBottom: "8px",
                      color: "#1a1a1a",
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    data-testid="contact-message-input"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      fontSize: "16px",
                      border: "1px solid #e5e5e5",
                      borderRadius: "4px",
                      outline: "none",
                      transition: "border-color 0.2s ease",
                      resize: "vertical",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#0066cc")}
                    onBlur={(e) => (e.target.style.borderColor = "#e5e5e5")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  data-testid="contact-submit-btn"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                  }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <Footer/>
    </div>
  );
};

export default Contact;