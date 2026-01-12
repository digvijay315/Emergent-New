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
            Last Updated: January 2026<br></br>
            Website: www.intelliviaai.com
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
                         <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                1. Introduction
              </h2>
              <p className="body-text" style={{ color: "#666666" }}>
               
IntelliviaAI Ltd (&quot;IntelliviaAI&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy
and complying with applicable data protection laws, including UK GDPR, EU GDPR, Data
Protection Act 2018, and applicable US privacy laws (CCPA/CPRA).
This Privacy Policy explains how we collect, use, disclose, and protect personal data
when you interact with our website, services, and AI automation solutions.

              </p>
            </div>

            {/*  2. Scope */}
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                2. Scope
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
                  This policy applies to
                </h3>
                <ul
                  style={{
                    color: "#666666",
                    lineHeight: 1.7,
                    marginLeft: "24px",
                  }}
                >
                  <li> Visitors to our website</li>
                  <li>Prospective and current clients</li>
                  <li>Users of our internal AI automation systems</li>
                  <li>Business contacts and partners</li>
                </ul>
              </div>

              <div>
                <p className="body-text" style={{ color: "#666666", marginBottom: "8px" }}>
                  It does NOT apply to third-party websites linked from our site.
                </p>
          
              </div>
            </div>

            {/*Roles Under Data Protection Law */}
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                3. Roles Under Data Protection Law
              </h2>
              <ul
                style={{
                  color: "#666666",
                  lineHeight: 1.7,
                  marginLeft: "24px",
                }}
              >
                <li>Clients: Data Controllers for their own systems and API integrations.</li>
                <li>
                  IntelliviaAI: Data Processor for client systems; Data Controller for our own operational
                </li>
              
              </ul>
                     <p className="body-text" style={{ color: "#666666", marginBottom: "12px" }}>
                use (website, internal marketing, social media automation).
              </p>
            </div>

            {/* 4. Personal Data We Collect*/}
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                4. Personal Data We Collect
              </h2>

                <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                4.1 Information Provided by Users
              </h3>
              <ul
                style={{
                  color: "#666666",
                  lineHeight: 1.7,
                  marginLeft: "24px",
                  marginBottom: "16px",
                }}
              >
                <li>Name, email, phone</li>
                <li>Company and role</li>
                <li>Inquiry submissions, support requests</li>
                <li>Newsletter sign-ups</li>
              </ul>

               <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                4.2 Automatic Collection- IP addresses, browser type, device info
              </h3>
              <ul
                style={{
                  color: "#666666",
                  lineHeight: 1.7,
                  marginLeft: "24px",
                  marginBottom: "16px",
                }}
              >
                <li>Usage logs, analytics</li>
                <li>Cookies and tracking technologies</li>
              </ul>

               <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                4.3 Client System Data
              </h3>
              <ul
                style={{
                  color: "#666666",
                  lineHeight: 1.7,
                  marginLeft: "24px",
                  marginBottom: "16px",
                }}
              >
                <li> Processed strictly for service delivery</li>
                <li>Data remains under client ownership and control</li>
              </ul>
     
            </div>

            {/* 5. API Integrations */}
          <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                5. API Integrations
              </h2>

              <ul
                style={{
                  color: "#666666",
                  lineHeight: 1.7,
                  marginLeft: "24px",
                  marginBottom: "16px",
                }}
              >
                <li>Integrations may include LinkedIn, X (Twitter), Google Workspace (Sheets, Drive,
Calendar, Gmail), CRMs, AI providers (OpenAI, Anthropic), and others.</li>
                <li>All systems are built using client-owned accounts and API keys.</li>
                <li>Data flow: Client system -&gt; Third-party API -&gt; Client system.</li>
                <li>IntelliviaAI does NOT store production data from client systems.</li>
                <li>Clients are responsible for lawful API use, obtaining consents, and compliance with
platform terms.</li>
              </ul>

            </div>

            {/* 5. 6. Client-Owned Infrastructure Model */}
          <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                6. Client-Owned Infrastructure Model
              </h2>

              <ul
                style={{
                  color: "#666666",
                  lineHeight: 1.7,
                  marginLeft: "24px",
                  marginBottom: "16px",
                }}
              >
                <li>Systems run on client servers or cloud accounts.</li>
                <li>Clients have full access and control at all times.</li>
                <li>No vendor lock-in or black-box solutions.</li>
                <li>Upon contract termination, clients retain full system access and data ownership.</li>
              </ul>
              
            </div>

            {/* 7. Cookies and Analytics */}
            <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                7. Cookies and Analytics
              </h2>

              <ul
                style={{
                  color: "#666666",
                  lineHeight: 1.7,
                  marginLeft: "24px",
                  marginBottom: "16px",
                }}
              >
                <li>We use cookies for essential functionality, analytics, and advertising/retargeting.</li>
                <li>Consent obtained via cookie banner; withdrawal possible at any time.</li>
                <li>Third-party tools include Google Analytics, Meta Pixel, LinkedIn Insight Tag, X Ads</li>
                
              </ul>
              
            </div>

            {/* 8. Log Files */}
          <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                8. Log Files
              </h2>

              <ul
                style={{
                  color: "#666666",
                  lineHeight: 1.7,
                  marginLeft: "24px",
                  marginBottom: "16px",
                }}
              >
                <li>IP address, device/browser info, date/time, referring pages.</li>
                <li>Purpose: security, troubleshooting, fraud detection.</li>
                
              </ul>
              
            </div>

            {/* 9. AI & Automated Processing */}
          <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                9. AI & Automated Processing
              </h2>

              <ul
                style={{
                  color: "#666666",
                  lineHeight: 1.7,
                  marginLeft: "24px",
                  marginBottom: "16px",
                }}
              >
                <li>No fully automated decisions with legal or significant effects without human oversight.- AI processing for client
systems uses client API keys.</li>
                <li>IntelliviaAI does not train AI models on client data.</li>
                <li>Clients are responsible for outputs of automated systems.</li>
              </ul>
              
            </div>

            {/* 10. Security Measures */}
           <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                10. Security Measures
              </h2>

              <ul
                style={{
                  color: "#666666",
                  lineHeight: 1.7,
                  marginLeft: "24px",
                  marginBottom: "16px",
                }}
              >
                <li>Encryption in transit and at rest.</li>
                <li>Access control and least privilege.</li>
                <li>Audit logs and monitoring.</li>
                <li>Secure handling of credentials.</li>
                <li>Incident response procedures.</li>
              </ul>
              
            </div>

            {/* 11. Marketing Communications & Newsletters */}
           <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                11. Marketing Communications & Newsletters
              </h2>

              <ul
                style={{
                  color: "#666666",
                  lineHeight: 1.7,
                  marginLeft: "24px",
                  marginBottom: "16px",
                }}
              >
                <li>Based on consent or legitimate interest.</li>
                <li>Users may unsubscribe at any time.</li>
                <li>Service providers act as processors.</li>
              </ul>
              
            </div>

            {/* 12. Data Retention */}
             <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                12. Data Retention
              </h2>

              <ul
                style={{
                  color: "#666666",
                  lineHeight: 1.7,
                  marginLeft: "24px",
                  marginBottom: "16px",
                }}
              >
                <li>Website inquiries and support: up to 2 years.</li>
                <li>Client project data: as per contract.</li>
                <li>Financial/contractual records: 6 years.</li>
                <li>Logs: limited retention for security/operations.</li>
              </ul>
              
            </div>

             {/* 13. International Data Transfers */}
             <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                13. International Data Transfers
              </h2>

              <ul
                style={{
                  color: "#666666",
                  lineHeight: 1.7,
                  marginLeft: "24px",
                  marginBottom: "16px",
                }}
              >
                <li>SCCs, UK IDTA, adequacy decisions, Transfer Impact Assessments where required.</li>
              </ul>
              
            </div>

              {/* 14. Client Responsibilities */}
             <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                14. Client Responsibilities
              </h2>

              <ul
                style={{
                  color: "#666666",
                  lineHeight: 1.7,
                  marginLeft: "24px",
                  marginBottom: "16px",
                }}
              >
                <li>Maintain their own privacy policies for end-users.</li>
                <li>Obtain necessary consents.</li>
                <li>Comply with API platform terms.</li>
                <li>Respond to data subject requests.</li>
              </ul>
              
            </div>

            {/* 15. Data Subject Rights */}
             <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                15. Data Subject Rights
              </h2>

              <ul
                style={{
                  color: "#666666",
                  lineHeight: 1.7,
                  marginLeft: "24px",
                  marginBottom: "16px",
                }}
              >
                <li>Access, rectification, erasure, restriction, objection, portability, withdraw consent.</li>
                <li>Requests via hello@intelliviaai.com16. Children&apos;s Data.</li>
                <li>Services not intended for children under 16; we do not knowingly collect such data.</li>
              </ul>
              
            </div>

                {/* 16. Changes to Privacy Policy */}
             <div style={{ marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  color: "#1a1a1a",
                }}
              >
                16. Changes to Privacy Policy
              </h2>

              <ul
                style={{
                  color: "#666666",
                  lineHeight: 1.7,
                  marginLeft: "24px",
                  marginBottom: "16px",
                }}
              >
                <li>Updates will be posted with revised date.</li>
                <li>Users encouraged to review periodically.</li>
                
              </ul>
              
            </div>

            {/* Contact Information */}
          <div
  style={{
    padding: "32px",
    backgroundColor: "#fafafa",
    borderRadius: "4px",
    border: "1px solid #e5e5e5",
    color:"#1a1a1a",
  
  }}
>

  <h2
    style={{
      fontSize: "24px",
      fontWeight: 600,
      marginBottom: "16px",
      display: "inline-block",padding: "2px 6px", margin: 0,backgroundColor:"yellow"
      
    }}
  >
    17. Contact Information
  </h2><br></br>

  <p style={{ display: "inline-block",padding: "2px 6px", margin: 0,backgroundColor:"yellow" }}>
    IntelliviaAI Ltd
  </p><br></br>

  <p style={{ display: "inline-block",padding: "2px 6px", margin: 0,backgroundColor:"yellow" }}>
    Email:{" "}
    <a
      href="mailto:info@intelliviaai.com"
      style={{ textDecoration: "none" }}
    >
      <span style={{color:"#1a1a1a"}}>info@intelliviaai.com</span>
    </a>
  </p><br></br>

  <p style={{ display: "inline-block",padding: "2px 6px", margin: 0,backgroundColor:"yellow" }}>
    Phone:{" "}
    <a
      href="tel:+44 7734862101"
      style={{  textDecoration: "none" }}
    >
      <span style={{color:"#1a1a1a"}}>+44 7734862101</span>
      
    </a>
  </p><br></br>

  <p style={{ display: "inline-block",padding: "2px 6px", margin: 0,backgroundColor:"yellow" }}>
    Jurisdiction: England & Wales
  </p>
</div>
  <p style={{ color: "#666666", margin: 4 }}>
    This Privacy Policy ensures full compliance with GDPR, CCPA/CPRA, and professional
enterprise standards. It reflects IntelliviaAI’s client-owned infrastructure model, AI
automation practices, API integrations, and operational data practices.
  </p>
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
