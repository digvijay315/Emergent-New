"use client"
import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import BookAppointment from "../../../components/BookAppointment";
import Header from "@/components/Header";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";

export const RealEstate = () => {
  const problems = [
    "Lead follow-ups delayed by manual CRM entry",
    "Site visit scheduling requiring multiple back-and-forth emails",
    "Property documents scattered across systems",
    "Sales and leasing workflows breaking under volume",
    "Client information lost between team members",
  ];

  const useCases = [
    {
      title: "Automated Lead Management",
      description: "Capture leads from multiple sources, validate information, and route to the right agent automatically. No more manual data entry or missed opportunities.",
      outcomes: ["80% faster lead response time", "Zero lead leakage", "Automatic CRM updates"],
    },
    {
      title: "Site Visit Scheduling",
      description: "Automated calendar management that syncs availability, sends confirmations, and handles rescheduling without manual coordination.",
      outcomes: ["Eliminate scheduling back-and-forth", "Automatic reminders", "Reduced no-shows by 60%"],
    },
    {
      title: "Document Workflow Automation",
      description: "Route contracts, agreements, and property documents through approval workflows automatically. Track status and ensure nothing falls through cracks.",
      outcomes: ["50% faster document turnaround", "Complete audit trail", "Compliance assurance"],
    },
    {
      title: "Client Communication Automation",
      description: "Personalized updates on property matches, viewing confirmations, and transaction progress sent automatically based on workflow stages.",
      outcomes: ["Consistent client engagement", "Reduced admin time by 70%", "Improved satisfaction"],
    },
  ];

  return (
    <div>
        <Header/>
      {/* Hero */}
      <section className="section-spacing" style={{ paddingTop: "160px", paddingBottom: "96px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 className="hero-headline" style={{ marginBottom: "24px" }}>
            AI Automation for
            <br />
            <span className="accent-text">Real Estate Operations</span>
          </h1>
          <p className="body-text-large" style={{ maxWidth: "800px", margin: "0 auto 48px", color: "#666666" }}>
            Streamline lead management, automate scheduling, and scale your real estate operations without adding administrative overhead.
          </p>
          <BookAppointment buttonText="Discuss Your Workflows" />
        </div>
      </section>

      {/* Problems */}
      <section className="section-spacing" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center" }}>
            Real Estate Operational Challenges
          </h2>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {problems.map((problem, idx) => (
                <li key={idx} style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "20px", backgroundColor: "#FFFFFF", borderRadius: "4px", border: "1px solid #e5e5e5" }}>
                  <div style={{ width: "6px", height: "6px", backgroundColor: "#0066cc", borderRadius: "50%", marginTop: "10px", flexShrink: 0 }} />
                  <span className="body-text" style={{ color: "#1a1a1a", fontSize: "17px" }}>{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-spacing">
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center" }}>
            AI Automation Use Cases
          </h2>
          {useCases.map((useCase, index) => (
            <div key={index} style={{ marginBottom: index < useCases.length - 1 ? "64px" : "0", maxWidth: "1000px", margin: "0 auto 64px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }} className="use-case-grid">
                <div>
                  <h3 style={{ fontSize: "28px", fontWeight: 600, marginBottom: "16px", color: "#1a1a1a" }}>{useCase.title}</h3>
                  <p className="body-text" style={{ color: "#666666" }}>{useCase.description}</p>
                </div>
                <div style={{ padding: "32px", backgroundColor: "#fafafa", borderRadius: "4px", border: "1px solid #e5e5e5" }}>
                  <h4 style={{ fontSize: "16px", fontWeight: 600, marginBottom: "16px", color: "#0066cc" }}>OUTCOMES</h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                    {useCase.outcomes.map((outcome, idx) => (
                      <li key={idx} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                        <CheckCircle size={20} color="#0066cc" strokeWidth={2} style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span className="body-text" style={{ color: "#1a1a1a" }}>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why IntelliviaAI */}
      <section className="section-spacing" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center" }}>
            Why IntelliviaAI for Real Estate
          </h2>
          <div className="grid-2">
            {[
              { title: "Data Security & Compliance", description: "All systems run on your infrastructure. Client data remains secure and compliant with data protection regulations." },
              { title: "Custom Real Estate Workflows", description: "Built specifically for your sales, leasing, and property management processes—not generic automation templates." },
              { title: "Integration With Your Tools", description: "Seamlessly connects with your CRM, property management software, communication tools, and document systems." },
              { title: "Long-Term Support", description: "Weekly maintenance ensures your automation adapts as your business scales and market conditions change." },
            ].map((item, idx) => (
              <div key={idx} style={{ padding: "32px", backgroundColor: "#FFFFFF", borderRadius: "4px", border: "1px solid #e5e5e5" }}>
                <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px", color: "#1a1a1a" }}>{item.title}</h3>
                <p className="body-text" style={{ color: "#666666", margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="container" style={{ textAlign: "center", padding: "96px 48px", backgroundColor: "#000000", borderRadius: "4px", color: "#FFFFFF" }}>
          <h2 style={{ fontSize: "48px", fontWeight: 300, marginBottom: "24px" }}>
            Transform Your Real Estate Operations
          </h2>
          <p style={{ fontSize: "18px", color: "#a0a0a0", marginBottom: "48px", maxWidth: "700px", margin: "0 auto 48px" }}>
            Discuss your operational challenges and discover how AI automation can streamline your real estate workflows.
          </p>
          <BookAppointment buttonText="Schedule Consultation" buttonStyle="secondary" />
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .use-case-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <Chatbot/>
      <Footer/>
    </div>
  );
};

export default RealEstate;
