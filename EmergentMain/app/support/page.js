"use client"
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export const Support = () => {
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
            Support Policy
          </h1>
          <p
            className="body-text-large"
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#666666",
            }}
          >
            Last Updated: January 2026<br></br>
            Website: www.intelliviaai.com
          </p>
          <p
            className="body-text-large"
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              color: "#666666",
            }}
          >
          At <b>IntelliviaAI</b>, we are committed to providing reliable, transparent, and timely support to ensure
your AI automations run smoothly and deliver consistent value to your business.
          </p>
                    <p
            className="body-text-large"
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              color: "#666666",
            }}
          >
This Support Policy explains how our support works, what’s included, and what to expect when
you contact us.
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
            {/* Scope of Support */}
          <div style={{ marginBottom: "48px" }}>
  <h2
    style={{
      fontSize: "28px",
      fontWeight: 600,
      marginBottom: "16px",
      color: "#1a1a1a",
    }}
  >
    1. Scope of Support
  </h2>

  <p className="body-text" style={{ color: "#666666", marginBottom: "16px" }}>
    IntelliviaAI Support covers:
  </p>

  <ul
    className="body-text"
    style={{
      color: "#666666",
      paddingLeft: "20px",
      marginBottom: "24px",
      lineHeight: 1.7,
    }}
  >
    <li>AI workflow automation setup and usage</li>
    <li>Deployed automation troubleshooting</li>
    <li>Platform-related issues and errors</li>
    <li>Integration support for approved third-party tools</li>
    <li>Performance optimization guidance</li>
    <li>General product and service inquiries</li>
  </ul>

  <p className="body-text" style={{ color: "#666666", marginBottom: "16px" }}>
    Support does not include:
  </p>

  <ul
    className="body-text"
    style={{
      color: "#666666",
      paddingLeft: "20px",
      lineHeight: 1.7,
    }}
  >
    <li>Custom development beyond the agreed scope</li>
    <li>Third-party service outages or failures</li>
    <li>Issues caused by unauthorized modifications</li>
    <li>Business, legal, or compliance advice</li>
    <li>Training outside contracted onboarding or support plans</li>
  </ul>
</div>


            {/*  2. Support Channels */}
         <div
  style={{
    marginBottom: "48px",
    backgroundColor: "#fff9e6", // ✅ light yellow background
    padding: "24px",
    borderRadius: "6px",
  }}
>
  <h2
    style={{
      fontSize: "28px",
      fontWeight: 600,
      marginBottom: "16px",
      color: "#1a1a1a",
    }}
  >
    2. Support Channels
  </h2>

  <p className="body-text" style={{ color: "#666666", marginBottom: "16px" }}>
    You can reach our support team through:
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
      <strong>Email:</strong> support@intelliviaai.com
    </li>
    <li>
      <strong>Live Chat:</strong> Available via the website (where enabled)
    </li>
    <li>
      <strong>Scheduled Calls:</strong> Available upon request
    </li>
  </ul>

  <p className="body-text" style={{ color: "#666666" }}>
    All support requests should include clear details to help us resolve issues
    faster.
  </p>
</div>


            {/*Support Hours */}

         <div style={{ marginBottom: "48px" }}>
  <h2
    style={{
      fontSize: "28px",
      fontWeight: 600,
      marginBottom: "16px",
      color: "#1a1a1a",
    }}
  >
    3. Support Hours
  </h2>

  <p className="body-text" style={{ color: "#666666", marginBottom: "12px" }}>
    Standard Support Hours:
  </p>

  <ul
    style={{
      color: "#666666",
      lineHeight: 1.7,
      marginLeft: "24px",
      marginBottom: "16px",
    }}
  >
    <li>Monday – Friday</li>
    <li>9:00 AM – 5:00 PM (UTC)</li>
  </ul>

  <p className="body-text" style={{ color: "#666666", marginBottom: "12px" }}>
    Requests received outside support hours will be handled on the next business
    day.
  </p>

  <p className="body-text" style={{ color: "#666666" }}>
    Emergency support may be available for critical issues, subject to your
    service agreement.
  </p>
</div>


            {/* 4. Response Time Guidelines*/}

          <div style={{ marginBottom: "48px" }}>
  <h2
    style={{
      fontSize: "28px",
      fontWeight: 600,
      marginBottom: "16px",
      color: "#1a1a1a",
    }}
  >
    4. Response Time Guidelines
  </h2>

  <p className="body-text" style={{ color: "#666666", marginBottom: "12px" }}>
    We aim to respond within the following timeframes:
  </p>

  <ul
    style={{
      color: "#666666",
      lineHeight: 1.7,
      marginLeft: "24px",
      marginBottom: "16px",
    }}
  >
    <li>General inquiries: Within 24 business hours</li>
    <li>Technical issues: Within 12–24 business hours</li>
    <li>
      Critical system issues: Within 2–4 business hours during support hours
    </li>
  </ul>

  <p className="body-text" style={{ color: "#666666" }}>
    Response times may vary depending on request complexity and your support
    plan.
  </p>
</div>


            {/* 5.  Issue Severity Levels */}
       <div style={{ marginBottom: "48px" }}>
  <h2
    style={{
      fontSize: "28px",
      fontWeight: 600,
      marginBottom: "16px",
      color: "#1a1a1a",
    }}
  >
    5. Issue Severity Levels
  </h2>

  <p className="body-text" style={{ color: "#666666", marginBottom: "16px" }}>
    To prioritize effectively, issues are categorized as:
  </p>

  <h3
    style={{
      fontSize: "20px",
      fontWeight: 600,
      marginBottom: "8px",
      color: "#1a1a1a",
    }}
  >
    Critical
  </h3>
  <ul
    style={{
      color: "#666666",
      lineHeight: 1.7,
      marginLeft: "24px",
      marginBottom: "16px",
    }}
  >
    <li>Production systems unavailable</li>
    <li>Automation failure causing major business disruption</li>
  </ul>

  <h3
    style={{
      fontSize: "20px",
      fontWeight: 600,
      marginBottom: "8px",
      color: "#1a1a1a",
    }}
  >
    High
  </h3>
  <ul
    style={{
      color: "#666666",
      lineHeight: 1.7,
      marginLeft: "24px",
      marginBottom: "16px",
    }}
  >
    <li>Core functionality impaired</li>
    <li>Workflows partially failing without a workaround</li>
  </ul>

  <h3
    style={{
      fontSize: "20px",
      fontWeight: 600,
      marginBottom: "8px",
      color: "#1a1a1a",
    }}
  >
    Medium
  </h3>
  <ul
    style={{
      color: "#666666",
      lineHeight: 1.7,
      marginLeft: "24px",
      marginBottom: "16px",
    }}
  >
    <li>Non-critical features affected</li>
    <li>Minor automation delays or errors</li>
  </ul>

  <h3
    style={{
      fontSize: "20px",
      fontWeight: 600,
      marginBottom: "8px",
      color: "#1a1a1a",
    }}
  >
    Low
  </h3>
  <ul
    style={{
      color: "#666666",
      lineHeight: 1.7,
      marginLeft: "24px",
    }}
  >
    <li>General questions</li>
    <li>Feature requests or documentation clarification</li>
  </ul>
</div>


            {/* 6. Client Responsibilities */}
       <div style={{ marginBottom: "48px" }}>
  <h2
    style={{
      fontSize: "28px",
      fontWeight: 600,
      marginBottom: "16px",
      color: "#1a1a1a",
    }}
  >
    6. Client Responsibilities
  </h2>

  <p className="body-text" style={{ color: "#666666", marginBottom: "16px" }}>
    To ensure efficient support, clients are expected to:
  </p>

  <ul
    style={{
      color: "#666666",
      lineHeight: 1.7,
      marginLeft: "24px",
      marginBottom: "16px",
    }}
  >
    <li>Provide accurate and complete information</li>
    <li>Share relevant logs, screenshots, or error messages</li>
    <li>Grant necessary access where applicable</li>
    <li>Avoid unauthorized system changes</li>
    <li>Maintain supported third-party integrations</li>
  </ul>

  <p className="body-text" style={{ color: "#666666" }}>
    Incomplete information may delay resolution.
  </p>
</div>


            {/* 7. Third-Party Services */}

         <div style={{ marginBottom: "48px" }}>
  <h2
    style={{
      fontSize: "28px",
      fontWeight: 600,
      marginBottom: "16px",
      color: "#1a1a1a",
    }}
  >
    7. Third-Party Services
  </h2>

  <p className="body-text" style={{ color: "#666666", marginBottom: "16px" }}>
    IntelliviaAI integrates with third-party platforms. While we assist with integration
    guidance, we are not responsible for:
  </p>

  <ul
    style={{
      color: "#666666",
      lineHeight: 1.7,
      marginLeft: "24px",
      marginBottom: "16px",
    }}
  >
    <li>Third-party outages or downtime</li>
    <li>API changes or limitations</li>
    <li>Service disruptions outside our control</li>
  </ul>

  <p className="body-text" style={{ color: "#666666" }}>
    Resolution may depend on the third-party provider.
  </p>
</div>


            {/* 8. Updates & Maintenance */}
        <div style={{ marginBottom: "48px" }}>
  <h2
    style={{
      fontSize: "28px",
      fontWeight: 600,
      marginBottom: "16px",
      color: "#1a1a1a",
    }}
  >
    8. Updates & Maintenance
  </h2>

  <p className="body-text" style={{ color: "#666666", marginBottom: "16px" }}>
    We may perform updates or maintenance to improve performance and security.
    Whenever possible, advance notice will be provided.
  </p>
    <p className="body-text" style={{ color: "#666666", marginBottom: "16px" }}>
   Emergency maintenance may occur
    without prior notice if required to protect system integrity.
  </p>
</div>


            {/* 9. Fair Use Policy */}
      <div style={{ marginBottom: "48px" }}>
  <h2
    style={{
      fontSize: "28px",
      fontWeight: 600,
      marginBottom: "16px",
      color: "#1a1a1a",
    }}
  >
    9. Fair Use Policy
  </h2>

  <p className="body-text" style={{ color: "#666666", marginBottom: "16px" }}>
    Support services are provided on a fair-use basis.
Excessive, repetitive, or non-support-related requests may require an upgraded support plan or
separate agreement.
  </p>
</div>


            {/* 10. Policy Changes */}
         <div style={{ marginBottom: "48px" }}>
  <h2
    style={{
      fontSize: "28px",
      fontWeight: 600,
      marginBottom: "16px",
      color: "#1a1a1a",
    }}
  >
    10. Policy Changes
  </h2>

  <p className="body-text" style={{ color: "#666666", marginBottom: "16px" }}>
    IntelliviaAI reserves the right to update this Support Policy at any time.
Changes will be published on our website and become effective immediately upon posting.
  </p>
</div>

            {/* Contact Information */}
 <div style={{ marginBottom: "48px",backgroundColor:"#fff9e6",padding:"24px" }}>
  <h2
    style={{
      fontSize: "28px",
      fontWeight: 600,
      marginBottom: "16px",
      color: "#1a1a1a",
      display:"inline-block",
      
    }}
  >
    11. Contact Us
  </h2><br></br>

  <p
    className="body-text"
    style={{
      display: "inline-block",
      padding: "8px 12px",
      borderRadius: "4px",
      color: "#1a1a1a",
      lineHeight: 1.7,
    }}
  >
    For support-related questions or assistance: <br />
    📧 <strong>support@intelliviaai.com</strong> <br />
    We’re here to help - calmly, clearly, and efficiently.
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

export default Support;
