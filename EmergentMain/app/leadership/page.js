"use client"
import React from "react";
import { Linkedin, Mail } from "lucide-react";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const Leadership = () => {
  const leaders = [
    {
      name: "Suraj Keshwar",
      title: "Founder & CEO",
      photo: "https://customer-assets.emergentagent.com/job_df8ed64a-1a0a-45e5-9844-fb555bbfa098/artifacts/85wrw4k0_IMG_4840.jpg",
      bio: "Suraj focuses on building scalable automation systems that deliver long-term operational efficiency. His approach centers on responsible AI implementation, ensuring businesses maintain clarity and control as they grow. With a strategic mindset, he helps organizations transform complex workflows into reliable, transparent systems.",
      email: "suraj@intelliviaai.com",
      linkedin: "https://www.linkedin.com/in/surajkeshwar",
    },
    {
      name: "Shreya Keshwar",
      title: "Director & Business Development Executive",
      photo: "https://customer-assets.emergentagent.com/job_df8ed64a-1a0a-45e5-9844-fb555bbfa098/artifacts/6bj6avau_IMG_0447.jpg",
      bio: "Shreya specializes in strategic growth and partnership development, bridging business needs with practical automation solutions. She works closely with clients to understand their operational challenges and translate them into actionable strategies. Her focus is on creating alignment between technology capabilities and business objectives.",
      email: "shreya@intelliviaai.com",
      linkedin: "https://www.linkedin.com/in/shreyakeshwar",
    },
  ];

  const testimonials = [
    {
      name: "Anton Boner",
      title: "Co-Founder of Screenloop",
      feedback:
        "IntelliviaAI built automation that handles our candidate screening pipeline end-to-end. What previously required manual review of hundreds of applications now runs automatically with accuracy we trust.",
      outcome: "Reduced screening time by 75%, improved candidate quality",
    },
    {
      name: "Shay Pomeroy",
      title: "Director of Marketing, Layer",
      feedback:
        "The marketing automation system they developed integrates our entire stack—from lead capture to campaign analytics. Real-time insights that used to take days of manual work are now instant.",
      outcome: "3x campaign velocity, eliminated 20+ hours weekly manual reporting",
    },
    {
      name: "Eric Brownrout",
      title: "CEO & Co-Founder of Frigade",
      feedback:
        "We needed product usage data flowing into our CRM automatically. IntelliviaAI built a system that captures, validates, and routes data without touching our core product code. Reliable and maintainable.",
      outcome: "100% data accuracy, zero engineering overhead",
    },
  ];

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
            Leadership & 
            <br />
            <span className="accent-text">Client Feedback</span>
          </h1>
          <p
            className="body-text-large"
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              color: "#666666",
            }}
          >
            Meet the team building reliable automation systems and hear from the
            businesses we&apos;ve helped scale.
          </p>
        </div>
      </section>

      {/* Leadership Profiles */}
      <section className="section-spacing" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center", marginBottom: "64px" }}>
            Leadership
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "64px",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {leaders.map((leader, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "4px",
                  overflow: "hidden",
                  border: "1px solid #e5e5e5",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "400px",
                    overflow: "hidden",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  <img
                    src={leader.photo}
                    alt={leader.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
                <div style={{ padding: "32px" }}>
                  <h3
                    style={{
                      fontSize: "28px",
                      fontWeight: 600,
                      marginBottom: "8px",
                      color: "#1a1a1a",
                    }}
                  >
                    {leader.name}
                  </h3>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#0066cc",
                      marginBottom: "24px",
                    }}
                  >
                    {leader.title}
                  </div>
                  <p
                    className="body-text"
                    style={{
                      color: "#666666",
                      lineHeight: 1.7,
                      marginBottom: "24px",
                    }}
                  >
                    {leader.bio}
                  </p>
                  <div style={{ display: "flex", gap: "16px" }}>
                    <a
                      href={`mailto:${leader.email}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "10px 20px",
                        backgroundColor: "#FFFFFF",
                        color: "#1a1a1a",
                        border: "1px solid #e5e5e5",
                        borderRadius: "4px",
                        textDecoration: "none",
                        fontSize: "14px",
                        fontWeight: 500,
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#0066cc";
                        e.currentTarget.style.color = "#0066cc";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#e5e5e5";
                        e.currentTarget.style.color = "#1a1a1a";
                      }}
                    >
                      <Mail size={16} />
                      Email
                    </a>
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "10px 20px",
                        backgroundColor: "#FFFFFF",
                        color: "#1a1a1a",
                        border: "1px solid #e5e5e5",
                        borderRadius: "4px",
                        textDecoration: "none",
                        fontSize: "14px",
                        fontWeight: 500,
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#0066cc";
                        e.currentTarget.style.color = "#0066cc";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#e5e5e5";
                        e.currentTarget.style.color = "#1a1a1a";
                      }}
                    >
                      <Linkedin size={16} />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section-spacing">
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center", marginBottom: "64px" }}>
            What Clients Say
          </h2>
          <div className="grid-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{
                  padding: "32px",
                  backgroundColor: "#fafafa",
                  borderRadius: "4px",
                  border: "1px solid #e5e5e5",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ marginBottom: "16px" }}>
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#1a1a1a",
                      marginBottom: "4px",
                    }}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#0066cc",
                      fontWeight: 500,
                    }}
                  >
                    {testimonial.title}
                  </div>
                </div>
                <p
                  className="body-text"
                  style={{
                    color: "#666666",
                    fontStyle: "italic",
                    lineHeight: 1.7,
                    marginBottom: "24px",
                    fontSize: "15px",
                  }}
                >
                  &quot;{testimonial.feedback}&quot;
                </p>
                <div
                  style={{
                    marginTop: "auto",
                    padding: "16px",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "4px",
                    borderLeft: "3px solid #0066cc",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#0066cc",
                      marginBottom: "4px",
                    }}
                  >
                    OUTCOME
                  </div>
                  <p
                    className="body-text"
                    style={{ color: "#1a1a1a", margin: 0, fontSize: "14px" }}
                  >
                    {testimonial.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Chatbot/>
      <Footer/>
    </div>
  );
};

export default Leadership;
