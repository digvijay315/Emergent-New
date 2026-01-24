"use client"
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useState } from "react";

export const SupportHelpCenter = () => {

  const faqs = [
  {
    q: "What is AI automation?",
    a: "AI automation uses intelligent agents to automate repetitive, manual business tasks freeing up time, reducing errors, and improving operational efficiency."
  },
  {
    q: "How quickly can automation be implemented?",
    a: "Implementation timelines vary by workflow complexity, but typical deployment ranges from a few days to several weeks."
  },
  {
    q: "Is AI automation suitable for my business size?",
    a: "Yes, solutions are scalable for startups, SMEs, and enterprises."
  },
  {
    q: "Where does my data live?",
    a: "Your data stays completely under your control, hosted on your infrastructure or systems."
  },
  {
    q: "Can I automate only specific processes?",
    a: "Absolutely, automation can be tailored to specific parts of your operations."
  }
];


  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


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
            Support & Help Center
          </h1>
          <p
            className="body-text-large"
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#666666",
            }}
          >
           At IntelliviaAI, we’re committed to helping you get the most value from your AI automation
solutions. Whether you’re exploring features, troubleshooting issues, or planning next steps in
your automation journey, our Support Team is here to assist you every step of the way.
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

            {/*  1. Get Help - Contact Support */}
         <div
  style={{
    marginBottom: "48px",
    backgroundColor: "#fff9e6", // ✅ light yellow background
    padding: "24px",
    borderRadius: "6px",
    border: "1px solid #ffd966",
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
    Get Help - Contact Support
  </h2>

  <p className="body-text" style={{ color: "#666666", marginBottom: "16px" }}>
    If you need personalized assistance, our support specialists are ready to help.
  </p>


<h3>
      Email Support:
      </h3>
      <p>support@intelliviaai.com (Response within 24 business hours)
</p>

<h3>
      Phone Support:
      </h3>
      <p>+44 7734862101 (Available Mon–Fri, 9 AM–5 PM UTC)
</p>

<h3>
     Live Chat:
      </h3>
      <p>Available on this site (click the Chat icon in the bottom-right corner)
</p>


</div>


            {/*question */}

 <div style={{ marginBottom: "48px" }}>
      <h2 style={{ fontSize: "28px", fontWeight: 600, marginBottom: "16px", color: "#1a1a1a" }}>
        Frequently Asked Questions (FAQs)
      </h2>

      <p style={{ color: "#343333", marginBottom: "12px", fontWeight: "bold" }}>
        General Support Topics
      </p>

      {faqs.map((item, index) => (
        <div key={index} style={{ borderBottom: "1px solid #ddd", padding: "12px 0" }}>
          
          {/* Question */}
          <div
            onClick={() => toggleFAQ(index)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer"
            }}
          >
            <h3 style={{ margin: 0 }}>{item.q}</h3>
            <span style={{ fontSize: "22px", fontWeight: "bold" }}>
              {openIndex === index ? "−" : "+"}
            </span>
          </div>

          {/* Answer */}
          {openIndex === index && (
            <p style={{ marginTop: "8px", color: "#444" }}>
              {item.a}
            </p>
          )}
        </div>
      ))}

      <p style={{ marginTop: "16px", color: "#666" }}>
        (You can expand FAQ answers with analytics tools, reporting questions, integrations, etc.)
      </p>
    </div>


            {/*  � Technical Support*/}

          <div style={{ marginBottom: "48px" }}>
  <h2
    style={{
      fontSize: "28px",
      fontWeight: 600,
      marginBottom: "16px",
      color: "#1a1a1a",
    }}
  >
    Technical Support
  </h2>

  <p className="body-text" style={{ color: "#666666", marginBottom: "12px" }}>
    If you&apos;re experiencing an issue with deployed automation or integrations:
  </p>

   <h3>
      1. Check System Status
      </h3>
      <p>Ensure connected apps/services are online.
</p>

   <h3>
      2. Restart Workflow Automations
      </h3>
      <p>Turn off and on automated tasks in your dashboard.
</p>


       <h3>
      3. Provide Diagnostic Details
      </h3>
      <p>Include:
</p>
  <ul
    style={{
      lineHeight: 1.7,
      marginLeft: "24px",
      marginBottom: "16px",
    }}
  >

    <li>Workflow names</li>
    <li>Screenshots or logs</li>
    <li>Error messages</li>
    <li>Steps to reproduce</li>
  </ul>

  <p className="body-text" style={{ color: "#666666" }}>
    Send it via support@intelliviaai.com for faster resolution.
  </p>
</div>


            {/*  Knowledge Base & Documentation (Coming Soon) */}
       <div style={{ marginBottom: "48px" }}>
  <h2
    style={{
      fontSize: "28px",
      fontWeight: 600,
      marginBottom: "16px",
      color: "#1a1a1a",
    }}
  >
    Knowledge Base & Documentation (Coming Soon)
  </h2>

  <p className="body-text" style={{ color: "#666666", marginBottom: "16px" }}>
    We’re building a library of self-help guides and tutorials covering:
  </p>


   <ul
    style={{
      lineHeight: 1.7,
      marginLeft: "24px",
      marginBottom: "16px",
    }}
  >

    <li>Setup & onboarding</li>
    <li>Managing workflows</li>
    <li>Reporting & analytics</li>
    <li>Troubleshooting integrations</li>
    <li>Performance optimization</li>
  </ul>

  <p className="body-text" style={{ color: "#666666" }}>
    (Link will be available here once launched.)
  </p>


</div>


            {/*  Book a Live Consultation */}
       <div style={{ marginBottom: "48px" }}>
  <h2
    style={{
      fontSize: "28px",
      fontWeight: 600,
      marginBottom: "16px",
      color: "#1a1a1a",
    }}
  >
    Book a Live Consultation
  </h2>

  <p className="body-text" style={{ color: "#666666", marginBottom: "16px" }}>
    Need deeper help — strategy reviews, custom troubleshooting, or workflow optimization?:
  </p>

  <p className="body-text" style={{ color: "#666666" }}>
    <span style={{fontWeight:"bold",fontSize:"18px"}}>Book a Support Consultation</span> on our Book Appointment page.
  </p>
</div>


            {/* � Community & Feedback */}

         <div style={{ marginBottom: "48px" }}>
  <h2
    style={{
      fontSize: "28px",
      fontWeight: 600,
      marginBottom: "16px",
      color: "#1a1a1a",
    }}
  >
    Community & Feedback
  </h2>

  <p className="body-text" style={{ color: "#666666", marginBottom: "16px" }}>
    Join our <span style={{fontWeight:"bold",fontSize:"18px"}}>user community</span> to:
  </p>

  <ul
    style={{
      color: "#666666",
      lineHeight: 1.7,
      marginLeft: "24px",
      marginBottom: "16px",
    }}
  >
    <li>Ask questions</li>
    <li>Share insights</li>
    <li>Get tips from other IntelliviaAI users</li>
  </ul>

  <p className="body-text" style={{ color: "#666666" }}>
    Have ideas or feedback?<br></br>We’d love to hear them: feedback@intelliviaai.com
  </p>
</div>

            {/* Contact Information */}
 <div style={{ marginBottom: "48px",backgroundColor:"#fff9e6",padding: "24px",border: "1px solid #ffd966",borderRadius: "4px",}}>
  <h2
    style={{
      fontSize: "28px",
      fontWeight: 600,
      marginBottom: "16px",
      color: "#1a1a1a",
      display:"inline-block",
      
    }}
  >
     Support Hours
  </h2>
   <table
    style={{
      borderCollapse: "collapse",
      marginTop: "16px",
      width: "100%",
      maxWidth: "500px",
    }}
  >
    <thead>
      <tr>
        <th
          style={{
            textAlign: "left",
            fontSize: "16px",
            fontWeight: 600,
            paddingBottom: "8px",
            color: "#333",
          }}
        >
          Region
        </th>
        <th
          style={{
            textAlign: "left",
            fontSize: "16px",
            fontWeight: 600,
            paddingBottom: "8px",
            color: "#333",
          }}
        >
          Hours
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td style={{ padding: "6px 0", color: "#555" }}>UTC</td>
        <td style={{ padding: "6px 0", color: "#555" }}>
          9 AM — 5 PM (Mon–Fri)
        </td>
      </tr>
      <tr>
        <td style={{ padding: "6px 0", color: "#555" }}>Americas</td>
        <td style={{ padding: "6px 0", color: "#555" }}>
          9 AM — 5 PM (Local)
        </td>
      </tr>
      <tr>
        <td style={{ padding: "6px 0", color: "#555" }}>Europe / EMEA</td>
        <td style={{ padding: "6px 0", color: "#555" }}>
          9 AM — 5 PM (Local)
        </td>
      </tr>
    </tbody>
  </table>

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
 Emergency support available 24/7 for critical production issues contact
support@intelliviaai.com with “URGENT ‼️” in the subject.
  </p>
</div>

            {/* � Support Policies */}
        <div style={{ marginBottom: "48px" }}>
  <h2
    style={{
      fontSize: "28px",
      fontWeight: 600,
      marginBottom: "16px",
      color: "#1a1a1a",
    }}
  >
    Support Policies
  </h2>
<h3>Response Time</h3>

  <ul
    style={{
      color: "#666666",
      lineHeight: 1.7,
      marginLeft: "24px",
      marginBottom: "16px",
    }}
  >
    <li>Standard inquiries — within 24 hours</li>
    <li>Critical issues — within 2 hours during support hours</li>
  </ul>
  <h3>Service Level Agreements (SLAs)</h3>
  <p>Enterprise customers can request custom SLAs under their agreement.</p>

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

export default SupportHelpCenter;
