"use client"
import React from "react";
import Link from "next/link";
import { Heart, Target, Users, ArrowRight } from "lucide-react";
import { Linkedin, Mail } from "lucide-react";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const About = () => {
  const values = [
    {
      icon: Target,
      title: "Strategy First",
      description:
        "We believe technology should serve business strategy, not drive it. Every solution starts with understanding your goals and challenges.",
    },
    {
      icon: Heart,
      title: "Long-Term Partnership",
      description:
        "We're not here for quick wins. We build systems designed to evolve with your business and deliver value for years, not months.",
    },
    {
      icon: Users,
      title: "Transparent Collaboration",
      description:
        "No black boxes, no jargon barriers. We work alongside your team, ensuring you understand and control every aspect of your systems.",
    },
  ];

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
            Built on the Belief That
            <br />
            <span className="accent-text">Quality Compounds</span>
          </h1>
          <p
            className="body-text-large"
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              color: "#666666",
            }}
          >
            We&apos;re a mission-driven automation partner focused on building systems
            that deliver long-term efficiency and competitive advantage.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-spacing" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            <h2
              className="section-header"
              style={{ textAlign: "center", marginBottom: "48px" }}
            >
              Our Mission
            </h2>
            <div
              style={{
                fontSize: "24px",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "#1a1a1a",
                textAlign: "center",
              }}
            >
              <p style={{ marginBottom: "32px" }}>
                Most businesses are limited not by ideas or ambition, but by the
                friction in their operations. Hidden inefficiencies that drain
                resources and slow growth.
              </p>
              <p style={{ marginBottom: "32px" }}>
                We exist to eliminate that friction through intelligent automation—custom
                AI systems that transform how businesses operate at their core.
              </p>
              <p style={{ margin: 0 }}>
                Our focus isn&apos;t on flashy demos or trendy technology. It&apos;s on
                building reliable, transparent systems that deliver measurable
                business value from day one and compound that value over years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing">
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center" }}>
            What Drives Us
          </h2>
          <div className="grid-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  style={{
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      margin: "0 auto 24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid #e5e5e5",
                      borderRadius: "4px",
                    }}
                  >
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: 600,
                      marginBottom: "12px",
                    }}
                  >
                    {value.title}
                  </h3>
                  <p className="body-text" style={{ color: "#666666", margin: 0 }}>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-spacing" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "center",
            }}
            className="approach-grid"
          >
            <div>
              <h2 className="section-header">Why We&apos;re Different</h2>
              <p className="body-text" style={{ color: "#666666", marginBottom: "24px" }}>
                Most automation companies sell standardized solutions or chase the
                latest AI trends. We do neither.
              </p>
              <p className="body-text" style={{ color: "#666666" }}>
                Every engagement starts with deep understanding of your unique
                operations. We build custom systems that integrate seamlessly with
                your infrastructure and deliver ROI from day one.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "48px",
                borderRadius: "4px",
                border: "1px solid #e5e5e5",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  marginBottom: "24px",
                }}
              >
                Our Standards
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {[
                  "No off-the-shelf solutions—everything is custom",
                  "Strategy before technology, always",
                  "Your data stays on your infrastructure",
                  "Transparent, auditable systems—no black boxes",
                  "Built for long-term value, not quick demos",
                ].map((standard, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        backgroundColor: "#0066cc",
                        borderRadius: "50%",
                        marginTop: "8px",
                        flexShrink: 0,
                      }}
                    />
                    <span className="body-text" style={{ color: "#1a1a1a" }}>
                      {standard}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div
          className="container"
          style={{
            textAlign: "center",
            padding: "96px 48px",
            backgroundColor: "#000000",
            borderRadius: "4px",
            color: "#FFFFFF",
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              fontWeight: 300,
              marginBottom: "24px",
            }}
          >
            Ready to Work Together?
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#a0a0a0",
              marginBottom: "48px",
              maxWidth: "600px",
              margin: "0 auto 48px",
            }}
          >
            Let&apos;s discuss how we can help transform your operations through
            intelligent automation.
          </p>
          <Link
            href="/contactus"
            className="btn-secondary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>

         <div>
       
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
<div className="flex justify-center mt-8" style={{paddingTop:"20px"}}>
  <div className="w-[180px] h-[180px] rounded-full overflow-hidden ">
    <img
      src={leader.photo}
      alt={leader.name}
      className="w-full h-full object-cover object-center"
    />
  </div>
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
 
    </div>


      </section>

      <style>{`
        @media (max-width: 1024px) {
          .approach-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <Chatbot/>
      <Footer/>
    </div>
  );
};

export default About;
