"use client"

import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export const Terms = () => {
  return (
    <div>
        <Header/>
      {/* Hero */}
      <section
        className="section-spacing"
        style={{
          paddingTop: "160px",
          paddingBottom: "64px",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h1 className="hero-headline" style={{ marginBottom: "24px" }}>
            Terms & Conditions
          </h1>
          <p
            className="body-text-large"
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#666666",
            }}
          >
            Last Updated: January 2026
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-spacing" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              backgroundColor: "#FFFFFF",
              padding: "64px",
              borderRadius: "4px",
              border: "1px solid #e5e5e5",
            }}
            className="terms-content"
          >
            {/* Introduction */}
            <div style={{ marginBottom: "48px" }}>
              <p className="body-text" style={{ color: "#666666" }}>
                These Terms and Conditions (&quot;Terms&quot;) govern the provision of AI
                automation services by IntelliviaAI (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) to clients
                (&quot;you"&quot;, &quot;your&quot;). By engaging our services, you agree to these Terms.
              </p>
            </div>

            {/* 1. Scope of Services */}
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                1. Scope of Services
              </h2>
              <p className="body-text" style={{ color: "#666666", marginBottom: "12px" }}>
                IntelliviaAI provides custom AI automation services, including:
              </p>
              <ul
                style={{
                  color: "#666666",
                  lineHeight: 1.7,
                  marginLeft: "24px",
                  marginBottom: "12px",
                }}
              >
                <li>Strategy and workflow analysis</li>
                <li>Custom automation system design and development</li>
                <li>System integration and deployment</li>
                <li>Ongoing maintenance and optimization</li>
              </ul>
              <p className="body-text" style={{ color: "#666666" }}>
                All systems are built specifically for your business requirements and
                deployed on your infrastructure.
              </p>
            </div>

            {/* 2. Client Responsibilities */}
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                2. Client Responsibilities
              </h2>
              <p className="body-text" style={{ color: "#666666", marginBottom: "12px" }}>
                You agree to:
              </p>
              <ul
                style={{
                  color: "#666666",
                  lineHeight: 1.7,
                  marginLeft: "24px",
                }}
              >
                <li>
                  Provide timely access to necessary systems, data, and personnel
                </li>
                <li>
                  Review and approve proposed solutions and implementations
                </li>
                <li>
                  Maintain your own accounts with third-party AI service providers
                  (OpenAI, Google, Anthropic, etc.)
                </li>
                <li>Provide clear feedback and communicate changes in requirements</li>
                <li>
                  Ensure adequate infrastructure (servers, cloud accounts) for system
                  deployment
                </li>
              </ul>
            </div>

            {/* 3. Payment Terms */}
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                3. Payment Terms
              </h2>
              <div style={{ marginBottom: "16px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    marginBottom: "8px",
                    color: "#1a1a1a",
                  }}
                >
                  One-Time Setup Cost
                </h3>
                <p className="body-text" style={{ color: "#666666" }}>
                  Payment for initial system development is due according to the
                  payment schedule outlined in your custom quote. Typical structure:
                  50% upfront, 50% upon completion.
                </p>
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    marginBottom: "8px",
                    color: "#1a1a1a",
                  }}
                >
                  Weekly Maintenance
                </h3>
                <p className="body-text" style={{ color: "#666666" }}>
                  Ongoing maintenance fees are billed weekly in advance. Payment is due
                  within 7 days of invoice date.
                </p>
              </div>
            </div>

            {/* 4. Third-Party Services Disclaimer */}
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                4. Third-Party Services Disclaimer
              </h2>
              <div
                style={{
                  padding: "24px",
                  backgroundColor: "#fff9e6",
                  borderRadius: "4px",
                  border: "1px solid #ffd966",
                  marginBottom: "16px",
                }}
              >
                <p className="body-text" style={{ color: "#1a1a1a", fontWeight: 600 }}>
                  Important: Third-Party AI Tool Usage
                </p>
              </div>
              <p className="body-text" style={{ color: "#666666", marginBottom: "12px" }}>
                All AI tools, APIs, and third-party services (including but not limited
                to OpenAI, Google, Anthropic, Claude, ChatGPT, Gemini) are connected
                through your own accounts.
              </p>
              <p className="body-text" style={{ color: "#666666" }}>
                <strong>
                  IntelliviaAI does not resell, mark up, or bill for third-party usage
                  costs.
                </strong>{" "}
                All usage fees from these services are billed directly to you by the
                respective providers at their standard rates. You are solely
                responsible for managing and paying these accounts.
              </p>
            </div>

            {/* 5. Intellectual Property */}
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                5. Intellectual Property
              </h2>
              <p className="body-text" style={{ color: "#666666", marginBottom: "12px" }}>
                Upon full payment of the setup cost, you own all custom code,
                configurations, and systems we build specifically for your business.
              </p>
              <p className="body-text" style={{ color: "#666666" }}>
                IntelliviaAI retains ownership of proprietary methodologies, frameworks,
                and pre-existing tools used in delivering our services.
              </p>
            </div>

            {/* 6. Limitation of Liability */}
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                6. Limitation of Liability
              </h2>
              <p className="body-text" style={{ color: "#666666", marginBottom: "12px" }}>
                IntelliviaAI provides services with reasonable skill and care. However,
                we are not liable for:
              </p>
              <ul
                style={{
                  color: "#666666",
                  lineHeight: 1.7,
                  marginLeft: "24px",
                  marginBottom: "12px",
                }}
              >
                <li>
                  Issues caused by third-party services, APIs, or tools outside our
                  control
                </li>
                <li>
                  Data loss or system failures due to inadequate client infrastructure
                </li>
                <li>
                  Business losses resulting from delays in client approvals or feedback
                </li>
                <li>Indirect, consequential, or incidental damages</li>
              </ul>
              <p className="body-text" style={{ color: "#666666" }}>
                Our total liability under these Terms is limited to the amount paid by
                you for services in the preceding 3 months.
              </p>
            </div>

            {/* 7. Termination and Suspension */}
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                7. Termination and Suspension
              </h2>
              <p className="body-text" style={{ color: "#666666", marginBottom: "12px" }}>
                <strong>By Client:</strong> You may terminate ongoing maintenance at
                any time with 7 day&apos;s written notice. No refunds for unused portions of
                prepaid maintenance.
              </p>
              <p className="body-text" style={{ color: "#666666", marginBottom: "12px" }}>
                <strong>By IntelliviaAI:</strong> We may suspend or terminate services
                if payment is more than 14 days overdue or if you materially breach
                these Terms.
              </p>
              <p className="body-text" style={{ color: "#666666" }}>
                Upon termination, you retain full ownership and access to all systems
                built for you.
              </p>
            </div>

            {/* 8. Confidentiality */}
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                8. Confidentiality
              </h2>
              <p className="body-text" style={{ color: "#666666" }}>
                Both parties agree to keep confidential any proprietary or sensitive
                information disclosed during the engagement. This obligation continues
                for 2 years after termination of services.
              </p>
            </div>

            {/* 9. Governing Law */}
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                9. Governing Law
              </h2>
              <p className="body-text" style={{ color: "#666666" }}>
                These Terms are governed by the laws of the United Kingdom. Any disputes
                shall be resolved in the courts of the United Kingdom.
              </p>
            </div>

            {/* 10. Changes to Terms */}
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                10. Changes to Terms
              </h2>
              <p className="body-text" style={{ color: "#666666" }}>
                We may update these Terms from time to time. Material changes will be
                communicated to active clients via email. Continued use of our services
                after changes constitutes acceptance of the updated Terms.
              </p>
            </div>

            {/* Contact Information */}
            <div
              style={{
                padding: "32px",
                backgroundColor: "#fafafa",
                borderRadius: "4px",
                border: "1px solid #e5e5e5",
              }}
            >
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                Contact Information
              </h2>
              <p className="body-text" style={{ color: "#666666", marginBottom: "8px" }}>
                <strong>IntelliviaAI</strong>
              </p>
              <p className="body-text" style={{ color: "#666666", marginBottom: "4px" }}>
                Website:{" "}
                <a
                  href="https://www.intelliviaai.com"
                  style={{ color: "#0066cc", textDecoration: "none" }}
                >
                  www.intelliviaai.com
                </a>
              </p>
              <p className="body-text" style={{ color: "#666666", marginBottom: "4px" }}>
                Email:{" "}
                <a
                  href="mailto:info@intelliviaai.com"
                  style={{ color: "#0066cc", textDecoration: "none" }}
                >
                  info@intelliviaai.com
                </a>
              </p>
              <p className="body-text" style={{ color: "#666666", margin: 0 }}>
                Phone:{" "}
                <a
                  href="tel:+447858350634"
                  style={{ color: "#0066cc", textDecoration: "none" }}
                >
                  +44 07858 350634
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .terms-content {
            padding: 32px 24px !important;
          }
        }
      `}</style>
      <Chatbot/>
      <Footer/>
    </div>
  );
};

export default Terms;
