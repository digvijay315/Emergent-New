"use client"
import React from "react";
import { CheckCircle } from "lucide-react";
import BookAppointment from "../../../components/BookAppointment";
import FAQSection from "../../../components/FAQSection";
import Header from "@/components/Header";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";

export const FinanceAccounting = () => {
  const challenges = [
    {
      title: "Month-End Close Taking Days Instead of Hours",
      description: "Reconciliation requires pulling data from multiple systems, manual spreadsheet work, and back-and-forth with departments. Closing the books extends well into the next month.",
    },
    {
      title: "Invoice Processing Drowning AP Teams",
      description: "Vendors send invoices in different formats. Each requires manual data entry, approval routing, payment scheduling, and reconciliation against purchase orders."
    },
    {
      title: "Expense Reports Creating Compliance Risks",
      description: "Manual review of employee expenses misses policy violations. Receipts go missing, approvals get delayed, and reimbursements lag behind submissions."
    },
    {
      title: "Financial Reporting Requiring Manual Compilation",
      description: "Executive dashboards and investor reports need data from accounting, CRM, operations, and HR systems. Someone manually compiles everything each period."
    },
  ];

  const useCases = [
    {
      title: "Automated Reconciliation Workflows",
      description: "Match transactions across bank accounts, credit cards, and accounting systems automatically. Flag discrepancies for review, suggest entries, and maintain complete audit trails."
    },
    {
      title: "Intelligent Invoice Processing (AP Automation)",
      description: "Extract data from invoices via OCR, match against POs and contracts, route for approval based on amount and department, schedule payments, and update accounting records."
    },
    {
      title: "Expense Management & Policy Enforcement",
      description: "Validate receipts, check policy compliance, flag duplicate submissions, route approvals based on thresholds, process reimbursements, and categorize expenses automatically."
    },
    {
      title: "Financial Close Automation",
      description: "Run standard journal entries, perform account reconciliations, generate variance reports, consolidate multi-entity financials, and create close checklists with status tracking."
    },
    {
      title: "Cash Flow Forecasting & Monitoring",
      description: "Aggregate AR, AP, and operational data to project cash positions. Alert finance teams when balances drop below thresholds or when major payments impact liquidity."
    },
    {
      title: "Compliance Reporting & Audit Prep",
      description: "Maintain documentation trails, generate compliance reports, track internal controls, prepare audit schedules, and ensure all transactions have proper support documentation."
    },
  ];

  const outcomes = [
    "Month-end close time reduced by 50-70%",
    "Invoice processing cost per transaction down 80%",
    "Expense policy violations caught before reimbursement",
    "Real-time financial visibility instead of trailing reports",
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
            <span style={{ color: "#0066cc" }}>Finance & Accounting</span>
          </h1>
          <p className="body-text-large" style={{ maxWidth: "800px", margin: "0 auto 48px", color: "#a0a0a0" }}>
            Accelerate your financial close, automate accounts payable, enforce expense policies, and maintain real-time visibility into financial performance without manual data compilation.
          </p>
          <BookAppointment buttonText="Book Free Consultation" />
        </div>
      </section>

      {/* Challenges */}
      <section className="section-spacing">
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center" }}>
            Finance & Accounting Challenges
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
            How AI Automation Works in Finance
          </h2>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p className="body-text-large" style={{ color: "#666666", marginBottom: "32px", textAlign: "center" }}>
              AI agents integrate with your accounting software, banking platforms, ERP systems, and expense tools to automate data flow and processing while maintaining compliance.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                "Integrates with QuickBooks, NetSuite, SAP, Oracle, and banking APIs",
                "Maintains complete audit trails for all automated transactions",
                "Enforces approval hierarchies and segregation of duties",
                "Operates within your existing accounting policies and controls",
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
            Finance Automation Use Cases
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
            Why Finance Teams Choose IntelliviaAI
          </h2>
          <div className="grid-2">
            {[
              { title: "SOX Compliance Maintained", desc: "Automation preserves segregation of duties, maintains audit trails, and enforces approval workflows required for financial controls." },
              { title: "Your Data Stays Secure", desc: "Financial data remains in your accounting system and secure infrastructure. Automation accesses data through encrypted connections only." },
              { title: "Designed for Growth", desc: "Systems scale with transaction volume. Going from 1,000 to 10,000 invoices monthly doesn't require proportional staff increases." },
              { title: "Adaptable to Policy Changes", desc: "When accounting policies, approval thresholds, or compliance requirements change, workflows update accordingly during weekly maintenance." },
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
            Business Outcomes for Finance
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
        title="Finance Automation FAQs"
        faqs={[
          {
            question: "Is AI automation compliant with financial regulations and SOX requirements?",
            answer: "Yes, when built correctly. We maintain segregation of duties, enforce approval hierarchies, create complete audit trails, and ensure no single person can both initiate and approve transactions. All controls remain intact.",
          },
          {
            question: "Can automation handle complex multi-entity accounting?",
            answer: "Absolutely. We automate intercompany eliminations, currency conversions, consolidation workflows, and multi-entity reporting. The system handles complexity that would otherwise require hours of manual spreadsheet work.",
          },
          {
            question: "What if our auditors have questions about automated processes?",
            answer: "Everything is documented and auditable. Every automated transaction includes timestamps, triggering events, approval chains, and can be traced back to source documents. Auditors can review process logic just like manual procedures.",
          },
          {
            question: "How do you ensure accuracy in automated financial processes?",
            answer: "Validation rules at every step. Transactions outside normal parameters trigger human review. Reconciliations include variance thresholds. The system flags anomalies instead of processing errors through to the general ledger.",
          },
          {
            question: "Can we customize automation for our chart of accounts and policies?",
            answer: "Yes. Every finance team has unique account structures, approval hierarchies, and policies. We map your actual workflows—not generic finance templates—to ensure automation matches how your organization operates.",
          },
        ]}
      />

      {/* Final CTA */}
      <section className="section-spacing" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="container" style={{ textAlign: "center", padding: "96px 48px", color: "#FFFFFF" }}>
          <h2 style={{ fontSize: "48px", fontWeight: 300, marginBottom: "24px", color: "#FFFFFF" }}>
            See How AI Automation Can Improve Your Finance Operations
          </h2>
          <p style={{ fontSize: "18px", color: "#a0a0a0", marginBottom: "48px", maxWidth: "700px", margin: "0 auto 48px" }}>
            Discuss your month-end close timeline, AP volume, and reporting requirements. Discover where automation delivers immediate time savings.
          </p>
          <BookAppointment buttonText="Book Appointment" buttonStyle="secondary" />
        </div>
      </section>
      <Chatbot/>
      <Footer/>
    </div>
  );
};

export default FinanceAccounting;
