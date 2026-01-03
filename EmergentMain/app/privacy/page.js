"use client"
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export const Privacy = () => {
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
            Privacy Policy
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

      {/* Privacy Content */}
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
            className="privacy-content"
          >
            {/* Introduction */}
            <div style={{ marginBottom: "48px" }}>
              <p className="body-text" style={{ color: "#666666" }}>
                IntelliviaAI (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use, store, and
                protect your personal information when you use our website and services.
              </p>
            </div>

            {/* 1. Information We Collect */}
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                1. Information We Collect
              </h2>
              
              <div style={{ marginBottom: "24px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    marginBottom: "12px",
                    color: "#1a1a1a",
                  }}
                >
                  Information You Provide
                </h3>
                <p className="body-text" style={{ color: "#666666", marginBottom: "8px" }}>
                  When you contact us or request services, we may collect:
                </p>
                <ul
                  style={{
                    color: "#666666",
                    lineHeight: 1.7,
                    marginLeft: "24px",
                  }}
                >
                  <li>Name and contact information (email, phone number)</li>
                  <li>Company name and business information</li>
                  <li>Project requirements and workflow descriptions</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    marginBottom: "12px",
                    color: "#1a1a1a",
                  }}
                >
                  Automatically Collected Information
                </h3>
                <p className="body-text" style={{ color: "#666666", marginBottom: "8px" }}>
                  When you visit our website, we may automatically collect:
                </p>
                <ul
                  style={{
                    color: "#666666",
                    lineHeight: 1.7,
                    marginLeft: "24px",
                  }}
                >
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on site</li>
                  <li>Referring website or source</li>
                </ul>
              </div>
            </div>

            {/* 2. How We Use Your Information */}
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                2. How We Use Your Information
              </h2>
              <p className="body-text" style={{ color: "#666666", marginBottom: "12px" }}>
                We use collected information to:
              </p>
              <ul
                style={{
                  color: "#666666",
                  lineHeight: 1.7,
                  marginLeft: "24px",
                }}
              >
                <li>Respond to your inquiries and provide requested information</li>
                <li>
                  Deliver AI automation services and ongoing maintenance
                </li>
                <li>Communicate about projects, updates, and service improvements</li>
                <li>Improve our website and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* 3. Data Storage and Security */}
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                3. Data Storage and Security
              </h2>
              <p className="body-text" style={{ color: "#666666", marginBottom: "12px" }}>
                We implement appropriate technical and organizational measures to
                protect your personal information, including:
              </p>
              <ul
                style={{
                  color: "#666666",
                  lineHeight: 1.7,
                  marginLeft: "24px",
                  marginBottom: "16px",
                }}
              >
                <li>Encryption of data in transit (HTTPS/TLS)</li>
                <li>Secure storage with access controls</li>
                <li>Regular security assessments</li>
                <li>Limited access to personal data by authorized personnel only</li>
              </ul>
              <p className="body-text" style={{ color: "#666666" }}>
                While we strive to protect your information, no method of transmission
                over the internet is 100% secure. We cannot guarantee absolute security.
              </p>
            </div>

            {/* 4. Third-Party Services */}
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                4. Use of Third-Party Tools
              </h2>
              <div style={{ marginBottom: "24px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    marginBottom: "12px",
                    color: "#1a1a1a",
                  }}
                >
                  Website Hosting and Analytics
                </h3>
                <p className="body-text" style={{ color: "#666666" }}>
                  Our website may use third-party services for hosting, analytics, and
                  performance monitoring. These services may collect anonymized usage
                  data to help us improve our website.
                </p>
              </div>

              <div style={{ marginBottom: "24px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    marginBottom: "12px",
                    color: "#1a1a1a",
                  }}
                >
                  Meta Pixel and Advertising
                </h3>
                <p className="body-text" style={{ color: "#666666", marginBottom: "12px" }}>
                  We use Meta Pixel (Facebook Pixel) for advertising measurement and
                  optimization. This tool helps us:
                </p>
                <ul
                  style={{
                    color: "#666666",
                    lineHeight: 1.7,
                    marginLeft: "24px",
                    marginBottom: "12px",
                  }}
                >
                  <li>Measure the effectiveness of our advertising campaigns</li>
                  <li>Understand how users interact with our website after viewing ads</li>
                  <li>Improve ad targeting and performance</li>
                  <li>Build custom audiences for relevant advertising</li>
                </ul>
                <p className="body-text" style={{ color: "#666666" }}>
                  Meta Pixel may collect information about your device, browser, and
                  interactions with our website. For more information about Meta&apos;s data
                  practices, please visit{" "}
                  <a
                    href="https://www.facebook.com/privacy/explanation"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#0066cc", textDecoration: "none" }}
                  >
                    Meta&apos;s Privacy Policy
                  </a>
                  .
                </p>
              </div>

              <div
                style={{
                  padding: "24px",
                  backgroundColor: "#fff9e6",
                  borderRadius: "4px",
                  border: "1px solid #ffd966",
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    marginBottom: "12px",
                    color: "#1a1a1a",
                  }}
                >
                  AI Services for Clients
                </h3>
                <p className="body-text" style={{ color: "#1a1a1a" }}>
                  <strong>Important:</strong> When we build AI automation systems for
                  you, all third-party AI tools (OpenAI, Google, Anthropic, etc.) connect
                  through <strong>your own accounts</strong>. IntelliviaAI does not have
                  access to your data processed by these services. You are responsible for
                  reviewing and complying with those providers privacy policies.
                </p>
              </div>
            </div>

            {/* 5. Client Data Ownership and Confidentiality */}
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                5. Client Data Ownership and Confidentiality
              </h2>
              <p className="body-text" style={{ color: "#666666", marginBottom: "12px" }}>
                When providing AI automation services:
              </p>
              <ul
                style={{
                  color: "#666666",
                  lineHeight: 1.7,
                  marginLeft: "24px",
                }}
              >
                <li>
                  <strong>You own your data.</strong> All business data processed by
                  systems we build remains your property.
                </li>
                <li>
                  Systems run on <strong>your infrastructure</strong> (your servers,
                  cloud accounts).
                </li>
                <li>
                  We treat all client business information as{" "}
                  <strong>confidential</strong> and do not share it with third parties.
                </li>
                <li>
                  We do not use your data for training AI models or any purpose beyond
                  delivering your services.
                </li>
              </ul>
            </div>

            {/* 6. Cookies and Tracking */}
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                6. Cookies and Website Tracking
              </h2>
              <p className="body-text" style={{ color: "#666666", marginBottom: "12px" }}>
                Our website may use cookies and similar technologies to:
              </p>
              <ul
                style={{
                  color: "#666666",
                  lineHeight: 1.7,
                  marginLeft: "24px",
                  marginBottom: "16px",
                }}
              >
                <li>Remember your preferences</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve website functionality and user experience</li>
              </ul>
              <p className="body-text" style={{ color: "#666666" }}>
                You can control cookies through your browser settings. Disabling cookies
                may affect website functionality.
              </p>
            </div>

            {/* 7. Data Retention */}
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                7. Data Retention
              </h2>
              <p className="body-text" style={{ color: "#666666" }}>
                We retain personal information only as long as necessary to provide
                services and comply with legal obligations. Contact form submissions are
                kept for up to 2 years. Client project information is retained for the
                duration of the engagement and up to 3 years thereafter for support and
                legal compliance purposes.
              </p>
            </div>

            {/* 8. Your Rights */}
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                8. Your Rights (GDPR and UK Data Protection)
              </h2>
              <p className="body-text" style={{ color: "#666666", marginBottom: "12px" }}>
                Under UK and EU data protection laws, you have the right to:
              </p>
              <ul
                style={{
                  color: "#666666",
                  lineHeight: 1.7,
                  marginLeft: "24px",
                  marginBottom: "16px",
                }}
              >
                <li>
                  <strong>Access:</strong> Request a copy of the personal data we hold
                  about you
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate or
                  incomplete data
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal data
                  (subject to legal obligations)
                </li>
                <li>
                  <strong>Restriction:</strong> Request restriction of processing in
                  certain circumstances
                </li>
                <li>
                  <strong>Portability:</strong> Receive your data in a structured,
                  machine-readable format
                </li>
                <li>
                  <strong>Object:</strong> Object to processing based on legitimate
                  interests
                </li>
              </ul>
              <p className="body-text" style={{ color: "#666666" }}>
                To exercise any of these rights, please contact us using the details
                below.
              </p>
            </div>

            {/* 9. International Data Transfers */}
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                9. International Data Transfers
              </h2>
              <p className="body-text" style={{ color: "#666666" }}>
                Your information may be transferred to and stored in countries outside
                the UK/EU. Where this occurs, we ensure appropriate safeguards are in
                place to protect your data in accordance with applicable data protection
                laws.
              </p>
            </div>

            {/* 10. Children's Privacy */}
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                10. Children&apos;s Privacy
              </h2>
              <p className="body-text" style={{ color: "#666666" }}>
                Our services are not directed to individuals under 18 years of age. We do
                not knowingly collect personal information from children. If you believe
                we have inadvertently collected information from a child, please contact
                us immediately.
              </p>
            </div>

            {/* 11. Changes to Privacy Policy */}
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                11. Changes to This Privacy Policy
              </h2>
              <p className="body-text" style={{ color: "#666666" }}>
                We may update this Privacy Policy from time to time to reflect changes in
                our practices or legal requirements. Material changes will be communicated
                via email to active clients or through a notice on our website. The &quot;Last
                Updated&quot; date at the top indicates when changes were last made.
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
                Contact Us
              </h2>
              <p className="body-text" style={{ color: "#666666", marginBottom: "12px" }}>
                If you have questions about this Privacy Policy or wish to exercise your
                data protection rights, please contact us:
              </p>
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
          .privacy-content {
            padding: 32px 24px !important;
          }
        }
      `}</style>
      <Chatbot/>
      <Footer/>
    </div>
  );
};

export default Privacy;
