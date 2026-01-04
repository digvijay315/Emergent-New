"use client"
import React from "react";
import { CheckCircle } from "lucide-react";
import BookAppointment from "../../../components/BookAppointment";
import FAQSection from "../../../components/FAQSection";
import Header from "@/components/Header";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";

export const SaaS = () => {
  const challenges = [
    {
      title: "Customer Onboarding Bottlenecks",
      description: "New users get stuck in setup processes requiring manual support intervention, delaying time-to-value and overwhelming your team.",
    },
    {
      title: "Support Tickets Drowning Your Team",
      description: "Volume of customer inquiries grows faster than your ability to respond. Similar questions get answered repeatedly instead of being routed intelligently.",
    },
    {
      title: "Churn Signals Going Unnoticed",
      description: "Usage patterns that predict cancellations remain invisible until it's too late. No proactive alerts when engagement drops.",
    },
    {
      title: "Revenue Operations Fragmented Across Systems",
      description: "Billing data, usage metrics, and customer communication exist in separate silos. Reporting requires manual compilation from multiple sources.",
    },
  ];

  const useCases = [
    {
      title: "Intelligent Onboarding Orchestration",
      description: "Automatically guide new customers through setup based on their plan type, trigger welcome sequences, provision accounts, and notify your team only when human intervention is genuinely needed.",
    },
    {
      title: "Support Ticket Classification & Routing",
      description: "Analyze incoming tickets for urgency, topic, and technical complexity. Route to the right team member automatically while suggesting relevant knowledge base articles.",
    },
    {
      title: "Usage-Based Alerting & Engagement Monitoring",
      description: "Track product usage patterns in real-time. Alert your success team when customers show disengagement signals or hit upgrade thresholds.",
    },
    {
      title: "Automated Billing & Subscription Management",
      description: "Handle plan changes, proration calculations, failed payment recovery workflows, and dunning sequences without manual finance team involvement.",
    },
    {
      title: "Internal Operations Automation",
      description: "Automate developer onboarding, deployment approvals, incident response workflows, and internal reporting so your team focuses on product development.",
    },
    {
      title: "Customer Health Score Calculation",
      description: "Aggregate usage data, support interactions, NPS scores, and payment history into real-time health scores with automatic escalation triggers.",
    },
  ];

  const outcomes = [
    "Onboarding time reduced from days to hours",
    "Support response times cut by 70%",
    "Proactive churn prevention through early alerts",
    "Revenue operations running 24/7 without manual oversight",
  ];

  return (
    <div>
        <Header/>
      {/* Hero */}
      <section className="section-spacing" style={{ paddingTop: "160px", paddingBottom: "96px", backgroundColor: "#0a0a0a", color: "#FFFFFF" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 className="hero-headline" style={{ marginBottom: "24px", color: "#FFFFFF" }}>
            AI Automation for
            <br />
            <span style={{ color: "#0066cc" }}>SaaS Companies</span>
          </h1>
          <p className="body-text-large" style={{ maxWidth: "800px", margin: "0 auto 48px", color: "#a0a0a0" }}>
            Scale your SaaS operations without scaling your support and ops teams proportionally. Automate onboarding, support routing, billing workflows, and customer engagement monitoring.
          </p>
          <BookAppointment buttonText="Book Free Consultation" />
        </div>
      </section>

      {/* Challenges */}
      <section className="section-spacing">
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center" }}>
            SaaS Operational Challenges
          </h2>
          <div className="grid-2">
            {challenges.map((challenge, idx) => (
              <div key={idx} style={{ padding: "32px", backgroundColor: "#fafafa", borderRadius: "4px", border: "1px solid #e5e5e5" }}>
                <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px", color: "#1a1a1a" }}>{challenge.title}</h3>
                <p className="body-text" style={{ color: "#666666", margin: 0 }}>{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-spacing" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center" }}>
            How AI Automation Works in SaaS
          </h2>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p className="body-text-large" style={{ color: "#666666", marginBottom: "32px", textAlign: "center" }}>
              AI agents integrate directly with your product stack—CRM, support platform, billing system, analytics tools—to create intelligent workflows that operate continuously.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                "Connects with Stripe, Intercom, Zendesk, Segment, and your internal APIs",
                "Monitors events and triggers actions based on customer behavior",
                "Escalates only when human judgment is required",
                "Learns from patterns to improve routing and responses over time",
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", gap: "16px", alignItems: "start", padding: "20px", backgroundColor: "#FFFFFF", borderRadius: "4px", border: "1px solid #e5e5e5" }}>
                  <CheckCircle size={24} color="#0066cc" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span className="body-text" style={{ color: "#1a1a1a", fontSize: "17px" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-spacing">
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center" }}>
            SaaS Automation Use Cases
          </h2>
          <div className="grid-2">
            {useCases.map((useCase, idx) => (
              <div key={idx} style={{ padding: "32px", backgroundColor: "#fafafa", borderRadius: "4px", border: "1px solid #e5e5e5" }}>
                <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px", color: "#1a1a1a" }}>{useCase.title}</h3>
                <p className="body-text" style={{ color: "#666666", margin: 0 }}>{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IntelliviaAI Approach */}
      <section className="section-spacing" style={{ backgroundColor: "#0a0a0a", color: "#FFFFFF" }}>
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center", color: "#FFFFFF" }}>
            Why SaaS Companies Choose IntelliviaAI
          </h2>
          <div className="grid-2">
            {[
              { title: "Your Infrastructure, Your Data", desc: "Automation runs on your AWS/GCP environment. Customer data never leaves your control." },
              { title: "No Vendor Lock-In", desc: "All code and workflows are yours. Migrate or modify systems without dependency on our platform." },
              { title: "Transparent Pricing", desc: "Pay for our development and maintenance. Third-party API costs (OpenAI, etc.) billed directly to you." },
              { title: "Built for Scale", desc: "Systems designed to handle 10x customer growth without 10x operational cost increase." },
            ].map((item, idx) => (
              <div key={idx} style={{ padding: "32px", backgroundColor: "#1a1a1a", borderRadius: "4px", border: "1px solid #333333" }}>
                <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px", color: "#FFFFFF" }}>{item.title}</h3>
                <p className="body-text" style={{ color: "#a0a0a0", margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-spacing">
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center" }}>
            Business Outcomes for SaaS
          </h2>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {outcomes.map((outcome, idx) => (
                <li key={idx} style={{ display: "flex", gap: "16px", alignItems: "center", padding: "20px", backgroundColor: "#fafafa", borderRadius: "4px", border: "1px solid #e5e5e5" }}>
                  <CheckCircle size={24} color="#0066cc" style={{ flexShrink: 0 }} />
                  <span className="body-text" style={{ color: "#1a1a1a", fontSize: "18px" }}>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title="SaaS Automation FAQs"
        faqs={[
          {
            question: "How does AI automation integrate with our existing SaaS tools?",
            answer: "We build custom integrations with your product stack—CRM, support platform, billing system, analytics, and internal APIs. The automation layer sits on top of your existing tools, connecting them intelligently without requiring you to replace anything.",
          },
          {
            question: "Will automation affect our customer experience negatively?",
            answer: "No. The goal is faster, more consistent responses. Automation handles routing, data validation, and repetitive tasks. Complex customer issues still escalate to your team, but they arrive with context and urgency already assessed.",
          },
          {
            question: "Can we start with one workflow and expand later?",
            answer: "Absolutely. Most SaaS companies start with onboarding or support ticket routing, validate the impact, then expand to billing automation, health score monitoring, and internal ops. We build with scalability in mind from day one.",
          },
          {
            question: "How do you ensure our customer data remains secure?",
            answer: "All automation runs on your infrastructure (AWS, GCP, Azure). Customer data flows through systems you already control. We build the workflows; you maintain full ownership of data, access controls, and compliance.",
          },
          {
            question: "What happens if we need to modify workflows as our product evolves?",
            answer: "That's what weekly maintenance covers. As your product changes, we adapt automation logic, add new triggers, update integrations, and optimize based on performance data. Your automation evolves with your business.",
          },
        ]}
      />

      {/* Final CTA */}
      <section className="section-spacing" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="container" style={{ textAlign: "center", padding: "96px 48px", color: "#FFFFFF" }}>
          <h2 style={{ fontSize: "48px", fontWeight: 300, marginBottom: "24px", color: "#FFFFFF" }}>
            See How AI Automation Can Improve Your SaaS Operations
          </h2>
          <p style={{ fontSize: "18px", color: "#a0a0a0", marginBottom: "48px", maxWidth: "700px", margin: "0 auto 48px" }}>
            Discuss your customer workflows, support volume, and operational challenges. Discover where automation delivers the biggest impact.
          </p>
          <BookAppointment buttonText="Book Appointment" buttonStyle="secondary" />
        </div>
      </section>
      <Chatbot/>
      <Footer/>
    </div>
  );
};

export default SaaS;
