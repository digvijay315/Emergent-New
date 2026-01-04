"use client"
import React from "react";
import { CheckCircle } from "lucide-react";
import BookAppointment from "../../../components/BookAppointment";
import FAQSection from "../../../components/FAQSection";
import Header from "@/components/Header";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";

export const Healthcare = () => {
  const challenges = [
    {
      title: "Patient Intake Consuming Staff Hours",
      description: "Administrative staff spend hours collecting, validating, and entering patient information that could be captured automatically through digital forms and verification systems.",
    },
    {
      title: "Appointment Scheduling Chaos",
      description: "Phone-based scheduling creates bottlenecks, double-bookings, and missed appointments. Confirmation calls drain staff time without reducing no-shows effectively.",
    },
    {
      title: "Compliance Documentation Burden",
      description: "HIPAA, insurance verification, and clinical documentation requirements consume clinician time that should be spent on patient care.",
    },
    {
      title: "Communication Gaps Between Departments",
      description: "Lab results, referrals, and care coordination require manual phone calls and follow-ups. Information sits in different systems waiting for someone to connect the dots.",
    },
  ];

  const useCases = [
    {
      title: "Automated Patient Intake & Verification",
      description: "Digital forms capture patient information, verify insurance eligibility, check for previous records, and flag discrepancies before the appointment—reducing front-desk workload by 60%.",
    },
    {
      title: "Intelligent Appointment Management",
      description: "Automated scheduling with availability sync, appointment reminders via SMS/email, rescheduling workflows, and waitlist management that fills cancellations automatically.",
    },
    {
      title: "Clinical Documentation Assistance",
      description: "Extract structured data from clinical notes, auto-populate forms, suggest ICD-10 codes, and ensure compliance documentation is complete before claim submission.",
    },
    {
      title: "Lab & Referral Coordination",
      description: "Automatically route lab orders, track results, notify providers when critical values arrive, and manage referral workflows between specialists.",
    },
    {
      title: "Billing & Insurance Workflow",
      description: "Verify coverage, submit claims automatically, track denial reasons, trigger resubmission workflows, and alert billing staff only when manual intervention is needed.",
    },
    {
      title: "Care Team Communication Hub",
      description: "Route messages to the right department, escalate urgent items, maintain audit trails for compliance, and reduce phone tag between clinical and administrative staff.",
    },
  ];

  const outcomes = [
    "Administrative time freed for patient-facing work",
    "Appointment no-show rates reduced by 40-50%",
    "Compliance documentation accuracy improved to 98%+",
    "Faster claim submission and fewer denials",
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
            <span style={{ color: "#0066cc" }}>Healthcare Operations</span>
          </h1>
          <p className="body-text-large" style={{ maxWidth: "800px", margin: "0 auto 48px", color: "#a0a0a0" }}>
            Reduce administrative burden on your clinical staff. Automate patient intake, appointment scheduling, compliance documentation, and care coordination while maintaining HIPAA compliance.
          </p>
          <BookAppointment buttonText="Book Free Consultation" />
        </div>
      </section>

      {/* Challenges */}
      <section className="section-spacing">
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center" }}>
            Healthcare Operational Challenges
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
            HIPAA-Compliant Automation for Healthcare
          </h2>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p className="body-text-large" style={{ color: "#666666", marginBottom: "32px", textAlign: "center" }}>
              AI agents integrate with your EHR, practice management system, and communication platforms while maintaining strict HIPAA compliance and security standards.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                "Operates within your secure healthcare infrastructure",
                "Maintains complete audit trails for compliance",
                "Encrypted data handling at every step",
                "No PHI sent to external AI services without BAA agreements",
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
            Healthcare Automation Use Cases
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
            Why Healthcare Providers Choose IntelliviaAI
          </h2>
          <div className="grid-2">
            {[
              { title: "HIPAA-First Design", desc: "Every automation is built with healthcare compliance requirements from day one. Full audit trails and encrypted handling." },
              { title: "Your Infrastructure Only", desc: "Automation runs on your servers. Patient data stays within your controlled environment at all times." },
              { title: "Clinical Workflow Understanding", desc: "We map actual provider workflows—not generic healthcare templates—to ensure automation supports care delivery." },
              { title: "Ongoing Compliance Monitoring", desc: "Weekly maintenance includes compliance checks, security updates, and adaptation to regulatory changes." },
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
            Business Outcomes for Healthcare
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
        title="Healthcare Automation FAQs"
        faqs={[
          {
            question: "Is AI automation HIPAA compliant?",
            answer: "Yes, when built correctly. All automation runs on your infrastructure. We sign BAAs where required, maintain audit trails, use encrypted communication, and follow HIPAA technical safeguards. Patient data never leaves your controlled environment.",
          },
          {
            question: "Will automation work with our existing EHR system?",
            answer: "We integrate with major EHR platforms (Epic, Cerner, Athenahealth, etc.) through their APIs and HL7 interfaces. The automation layer connects your systems without requiring EHR replacement or major configuration changes.",
          },
          {
            question: "How do you handle patient consent and data access?",
            answer: "Automation follows the same access controls already configured in your systems. If a staff member doesn't have permission to view certain patient data, neither does the automation. Consent workflows are built into every relevant process.",
          },
          {
            question: "Can we audit what the automation is doing?",
            answer: "Absolutely. Every action is logged with timestamps, triggering events, and outcomes. Audit trails are accessible through dashboards and can be exported for compliance reviews or investigations.",
          },
          {
            question: "What if regulations change?",
            answer: "Weekly maintenance includes regulatory monitoring. When healthcare compliance requirements change, we update workflows to maintain conformance. You're notified of any changes that affect your operations.",
          },
        ]}
      />

      {/* Final CTA */}
      <section className="section-spacing" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="container" style={{ textAlign: "center", padding: "96px 48px", color: "#FFFFFF" }}>
          <h2 style={{ fontSize: "48px", fontWeight: 300, marginBottom: "24px", color: "#FFFFFF" }}>
            See How AI Automation Can Improve Your Healthcare Operations
          </h2>
          <p style={{ fontSize: "18px", color: "#a0a0a0", marginBottom: "48px", maxWidth: "700px", margin: "0 auto 48px" }}>
            Discuss your administrative challenges, compliance requirements, and workflow pain points. Discover where automation delivers immediate relief.
          </p>
          <BookAppointment buttonText="Book Appointment" buttonStyle="secondary" />
        </div>
      </section>
      <Chatbot/>
      <Footer/>
    </div>
  );
};

export default Healthcare;
