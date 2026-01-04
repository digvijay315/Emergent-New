"use client"
import React from "react";
import { CheckCircle } from "lucide-react";
import BookAppointment from "../../../components/BookAppointment";
import FAQSection from "../../../components/FAQSection";
import Header from "@/components/Header";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";

export const Manufacturing = () => {
  const challenges = [
    {
      title: "Production Reporting Lagging Behind Reality",
      description: "Shop floor data sits in machines and spreadsheets. By the time reports reach management, production issues have already cost hours or shifted to the next shift.",
    },
    {
      title: "Inventory Discrepancies Creating Delays",
      description: "Physical counts don't match system records. Rush orders get delayed because materials thought available aren't actually on hand.",
    },
    {
      title: "Quality Control Checks Inconsistent",
      description: "Inspection processes vary by shift and operator. Defects slip through when checks rely on manual verification without standardized tracking.",
    },
    {
      title: "Vendor Coordination Consuming Time",
      description: "Procurement teams spend hours chasing delivery confirmations, managing PO changes, and reconciling invoices against shipments.",
    },
  ];

  const useCases = [
    {
      title: "Real-Time Production Monitoring & Alerting",
      description: "Pull data from PLCs, SCADA systems, and production terminals automatically. Alert supervisors when lines go down, cycle times exceed thresholds, or quality metrics drift.",
    },
    {
      title: "Automated Inventory Tracking & Replenishment",
      description: "Monitor material consumption in real-time, trigger reorder workflows when stock hits thresholds, reconcile deliveries against POs, and flag discrepancies for investigation.",
    },
    {
      title: "Quality Control Workflow Enforcement",
      description: "Digitize inspection checklists, require photo documentation at key stages, route failures to correct departments, and maintain complete traceability for audits.",
    },
    {
      title: "Vendor Communication & PO Management",
      description: "Automatically send POs, track acknowledgments, monitor delivery windows, escalate delays, and reconcile invoices against receipts without manual coordination.",
    },
    {
      title: "Maintenance Scheduling Based on Usage",
      description: "Track machine hours and production cycles. Schedule preventive maintenance automatically, order parts before breakdowns, and maintain equipment history logs.",
    },
    {
      title: "Production Reporting & OEE Calculation",
      description: "Aggregate data from multiple sources to calculate Overall Equipment Effectiveness, identify bottlenecks, and generate executive reports without manual compilation.",
    },
  ];

  const outcomes = [
    "Production visibility in real-time instead of end-of-shift",
    "Inventory accuracy improved from 85% to 98%",
    "Quality defects caught earlier in the process",
    "Procurement lead time reduced by 30%",
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
            <span style={{ color: "#0066cc" }}>Manufacturing Operations</span>
          </h1>
          <p className="body-text-large" style={{ maxWidth: "800px", margin: "0 auto 48px", color: "#a0a0a0" }}>
            Connect shop floor data to decision-makers in real-time. Automate inventory tracking, quality control workflows, vendor coordination, and production reporting.
          </p>
          <BookAppointment buttonText="Book Free Consultation" />
        </div>
      </section>

      {/* Challenges */}
      <section className="section-spacing">
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center" }}>
            Manufacturing Operational Challenges
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
            How AI Automation Works in Manufacturing
          </h2>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p className="body-text-large" style={{ color: "#666666", marginBottom: "32px", textAlign: "center" }}>
              AI agents connect directly to your production systems—PLCs, ERPs, MES platforms—to create intelligent monitoring and response workflows that operate continuously.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                "Integrates with existing production equipment and software",
                "Monitors operations 24/7 across all shifts",
                "Triggers alerts and workflows based on real conditions",
                "No disruption to current production processes",
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
            Manufacturing Automation Use Cases
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
            Why Manufacturers Choose IntelliviaAI
          </h2>
          <div className="grid-2">
            {[
              { title: "Shop Floor Integration Expertise", desc: "We connect with PLCs, SCADA, MES, and ERP systems. Automation works with your existing production infrastructure." },
              { title: "Your Network, Your Control", desc: "All automation runs on your internal network. Production data stays within your facility's security perimeter." },
              { title: "Built for 24/7 Operations", desc: "Systems designed to monitor and respond across all shifts without requiring IT staff on-site at night." },
              { title: "Continuous Optimization", desc: "Weekly maintenance includes performance analysis, threshold adjustments, and workflow improvements based on production patterns." },
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
            Business Outcomes for Manufacturing
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
        title="Manufacturing Automation FAQs"
        faqs={[
          {
            question: "Can AI automation integrate with our legacy production equipment?",
            answer: "Yes. We work with PLCs, SCADA systems, and older equipment through data gateways and protocol converters. If your equipment generates data in any format, we can capture and use it for automation without requiring equipment replacement.",
          },
          {
            question: "Will automation disrupt current production schedules?",
            answer: "No. Implementation happens in parallel with existing operations. We test integrations offline, validate data accuracy, and phase in automation gradually. Production continues uninterrupted.",
          },
          {
            question: "How do you handle data security in manufacturing environments?",
            answer: "All automation runs on your internal network. Data never leaves your facility unless you explicitly configure external reporting. We follow OT security best practices and work within your existing network segmentation.",
          },
          {
            question: "What if our production processes change frequently?",
            answer: "That's normal in manufacturing. Weekly maintenance includes workflow updates as processes evolve. We modify thresholds, add new monitoring points, and adjust alerts based on your changing production reality.",
          },
          {
            question: "Can we start with one production line and expand?",
            answer: "Absolutely. Most manufacturers pilot automation on a single line, measure impact on OEE and quality metrics, then roll out to additional lines. Systems are built for scalability from day one.",
          },
        ]}
      />

      {/* Final CTA */}
      <section className="section-spacing" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="container" style={{ textAlign: "center", padding: "96px 48px", color: "#FFFFFF" }}>
          <h2 style={{ fontSize: "48px", fontWeight: 300, marginBottom: "24px", color: "#FFFFFF" }}>
            See How AI Automation Can Improve Your Manufacturing Operations
          </h2>
          <p style={{ fontSize: "18px", color: "#a0a0a0", marginBottom: "48px", maxWidth: "700px", margin: "0 auto 48px" }}>
            Discuss your production challenges, inventory management, and quality control processes. Discover where automation delivers measurable efficiency gains.
          </p>
          <BookAppointment buttonText="Book Appointment" buttonStyle="secondary" />
        </div>
      </section>
      <Chatbot/>
      <Footer/>
    </div>
  );
};

export default Manufacturing;
