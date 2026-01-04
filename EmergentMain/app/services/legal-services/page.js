"use client"
import React from "react";
import { CheckCircle } from "lucide-react";
import BookAppointment from "../../../components/BookAppointment";
import FAQSection from "../../../components/FAQSection";
import Header from "@/components/Header";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";

export const LegalServices = () => {
  const challenges = [
    {
      title: "Document Review Consuming Attorney Time",
      description: "Associates spend hours reviewing contracts and documents manually. High-value legal expertise gets buried in administrative work that doesn't require a law degree.",
    },
    {
      title: "Client Intake Creating Bottlenecks",
      description: "New client onboarding involves multiple forms, conflict checks, and document collection. Manual coordination delays case initiation and frustrates potential clients."
    },
    {
      title: "Billing and Time Entry Inconsistent",
      description: "Attorneys forget to log time, entries lack detail, and billing compilation requires manual review. Revenue leaks through unbilled hours and contested invoices."
    },
    {
      title: "Contract Management Scattered Across Systems",
      description: "Key dates get missed, renewal deadlines slip by, and finding specific clauses requires searching through multiple document repositories."
    },
  ];

  const useCases = [
    {
      title: "Intelligent Document Review & Analysis",
      description: "AI scans contracts and legal documents to extract key terms, flag unusual clauses, identify risks, and summarize contents—reducing review time while improving thoroughness."
    },
    {
      title: "Automated Client Intake & Conflict Checks",
      description: "Collect client information through secure digital forms, run conflict checks automatically against your database, and route new matters for appropriate assignment."
    },
    {
      title: "Time Capture & Billing Automation",
      description: "Capture time entries from calendar events, emails, and document activity. Generate detailed billing narratives and compile invoices with minimal manual intervention."
    },
    {
      title: "Contract Lifecycle Management",
      description: "Track key dates, renewal deadlines, and obligations automatically. Alert responsible parties before deadlines, maintain searchable clause libraries, and generate reports on contract portfolios."
    },
    {
      title: "Legal Research Assistance",
      description: "Automate preliminary research tasks—case law searches, statutory updates, and jurisdiction-specific requirements—so attorneys start from a foundation of relevant information."
    },
    {
      title: "Matter Management & Workflow Routing",
      description: "Automate task assignment based on matter type, track progress against deadlines, and ensure nothing falls through the cracks with intelligent workflow management."
    },
  ];

  const outcomes = [
    "Document review time reduced by 60-70%",
    "Client intake process completed in hours instead of days",
    "Billing capture improved by 25%+ through automated time tracking",
    "Zero missed contract deadlines with automated monitoring",
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
            <span style={{ color: "#0066cc" }}>Legal Services</span>
          </h1>
          <p className="body-text-large" style={{ maxWidth: "800px", margin: "0 auto 48px", color: "#a0a0a0" }}>
            Free attorneys from administrative burden. Automate document review, client intake, contract management, and billing workflows so legal expertise focuses on client outcomes.
          </p>
          <BookAppointment buttonText="Book Free Consultation" />
        </div>
      </section>

      {/* Challenges */}
      <section className="section-spacing">
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center" }}>
            Legal Practice Management Challenges
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
            How AI Automation Works in Legal
          </h2>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p className="body-text-large" style={{ color: "#666666", marginBottom: "32px", textAlign: "center" }}>
              AI agents integrate with your practice management, document systems, and billing platforms to automate administrative workflows while maintaining confidentiality and compliance.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                "Integrates with Clio, PracticePanther, MyCase, and other legal platforms",
                "Maintains attorney-client privilege with secure, confidential processing",
                "Creates searchable, organized document repositories automatically",
                "Ensures compliance with legal ethics rules and jurisdiction requirements",
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
            Legal Automation Use Cases
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
            Why Law Firms Choose IntelliviaAI
          </h2>
          <div className="grid-2">
            {[
              { title: "Confidentiality First", desc: "All automation processes respect attorney-client privilege. Data stays on your infrastructure, never used to train external models, and access is strictly controlled." },
              { title: "Legal Practice Integration", desc: "We understand legal workflows. Integrations with practice management, document management, and billing systems are built specifically for how law firms operate." },
              { title: "Ethics Compliance Built In", desc: "Automation workflows designed with bar association ethics rules in mind. Conflict checks, matter separation, and proper supervision structures maintained." },
              { title: "Continuous Improvement", desc: "Weekly maintenance includes workflow optimization, accuracy monitoring, and adaptation to your evolving practice needs and new matter types." },
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
            Business Outcomes for Legal Practices
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
        title="Legal Automation FAQs"
        faqs={[
          {
            question: "How do you ensure attorney-client privilege is maintained?",
            answer: "All automation runs on your infrastructure or in isolated, encrypted environments. Client data is never shared, never used to train external AI models, and access is controlled through your existing firm permissions. We design systems with confidentiality as the foundational requirement.",
          },
          {
            question: "Can AI really assist with document review accurately?",
            answer: "AI excels at pattern recognition and data extraction—identifying clause types, flagging deviations from standard language, and summarizing contents. It doesn't replace attorney judgment but significantly reduces the time needed to get to the issues that require human legal expertise.",
          },
          {
            question: "Will this integrate with our current practice management software?",
            answer: "We integrate with major legal practice platforms including Clio, PracticePanther, MyCase, Rocket Matter, and others. Custom or legacy systems connect through APIs or structured data exports. The goal is automation that fits your existing technology, not forced migration.",
          },
          {
            question: "How do you handle different matter types with different workflows?",
            answer: "Automation is configured by matter type with custom workflows for litigation, corporate transactions, real estate, family law, or whatever your practice focuses on. Each matter type gets appropriate intake forms, document templates, deadline tracking, and billing structures.",
          },
          {
            question: "What about compliance with bar association rules?",
            answer: "We design automation with ethics rules in mind—proper supervision structures, conflict checking procedures, trust account separation, and record retention. Systems support compliance rather than creating risk.",
          },
        ]}
      />

      {/* Final CTA */}
      <section className="section-spacing" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="container" style={{ textAlign: "center", padding: "96px 48px", color: "#FFFFFF" }}>
          <h2 style={{ fontSize: "48px", fontWeight: 300, marginBottom: "24px", color: "#FFFFFF" }}>
            See How AI Automation Can Improve Your Legal Practice
          </h2>
          <p style={{ fontSize: "18px", color: "#a0a0a0", marginBottom: "48px", maxWidth: "700px", margin: "0 auto 48px" }}>
            Discuss your practice management challenges, billing inefficiencies, and document workflow bottlenecks. Discover where automation delivers measurable productivity gains.
          </p>
          <BookAppointment buttonText="Book Appointment" buttonStyle="secondary" />
        </div>
      </section>
      <Chatbot/>
      <Footer/>
    </div>
  );
};

export default LegalServices;
