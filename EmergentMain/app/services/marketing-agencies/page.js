"use client"
import React from "react";
import { CheckCircle } from "lucide-react";
import BookAppointment from "../../../components/BookAppointment";
import FAQSection from "../../../components/FAQSection";
import Header from "@/components/Header";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";

export const MarketingAgencies = () => {
  const challenges = [
    {
      title: "Client Reporting Consuming Creative Hours",
      description: "Your team spends days compiling reports from multiple platforms instead of developing campaigns. Data gathering and formatting eat into billable creative work.",
    },
    {
      title: "Campaign Data Scattered Across Platforms",
      description: "Performance data lives in Google, Meta, LinkedIn, email platforms, and analytics tools. Getting a unified view requires manual export and spreadsheet work."
    },
    {
      title: "Client Onboarding Taking Too Long",
      description: "New client setup involves access requests, platform connections, strategy documentation, and team briefings. The process delays campaign launch and frustrates clients."
    },
    {
      title: "Repetitive Tasks Limiting Agency Growth",
      description: "Ad scheduling, content posting, lead notification, and performance monitoring consume hours that could drive growth. Adding clients means adding proportional labor."
    },
  ];

  const useCases = [
    {
      title: "Automated Cross-Platform Reporting",
      description: "Pull data from Google Ads, Meta, LinkedIn, Google Analytics, email platforms, and CRMs automatically. Generate branded reports with insights, delivered on schedule without manual compilation."
    },
    {
      title: "Client Onboarding Workflow Automation",
      description: "Streamline new client setup with automated access requests, platform connection guides, document collection, and team notification. Get campaigns launched faster."
    },
    {
      title: "Lead Routing & Notification",
      description: "Capture leads from landing pages, ads, and forms. Route to appropriate team members instantly, update CRM records, trigger nurture sequences, and track conversion through the funnel."
    },
    {
      title: "Social Media Scheduling & Publishing",
      description: "Batch upload content, schedule across platforms, maintain content calendars, and track engagement—all from a unified workflow that eliminates platform-hopping."
    },
    {
      title: "Campaign Performance Monitoring & Alerts",
      description: "Monitor campaign metrics in real-time. Receive alerts when performance drops below thresholds, budgets approach limits, or anomalies appear that require attention."
    },
    {
      title: "Competitive Intelligence Gathering",
      description: "Automate tracking of competitor activity—ad launches, content publishing, pricing changes, and market positioning—compiled into actionable intelligence reports."
    },
  ];

  const outcomes = [
    "Client reporting time reduced by 80%",
    "New client onboarding completed in days instead of weeks",
    "Lead response time cut from hours to minutes",
    "Agency capacity increased without proportional headcount",
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
            <span style={{ color: "#0066cc" }}>Marketing & Agencies</span>
          </h1>
          <p className="body-text-large" style={{ maxWidth: "800px", margin: "0 auto 48px", color: "#a0a0a0" }}>
            Stop trading creative hours for administrative work. Automate reporting, client onboarding, lead management, and campaign operations so your team focuses on strategy and results.
          </p>
          <BookAppointment buttonText="Book Free Consultation" />
        </div>
      </section>

      {/* Challenges */}
      <section className="section-spacing">
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center" }}>
            Marketing & Agency Operational Challenges
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
            How AI Automation Works in Marketing
          </h2>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p className="body-text-large" style={{ color: "#666666", marginBottom: "32px", textAlign: "center" }}>
              AI agents connect your ad platforms, analytics tools, CRMs, and project management systems to create seamless workflows that operate without constant manual intervention.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                "Integrates with Google Ads, Meta Business, LinkedIn, HubSpot, and 100+ marketing tools",
                "Pulls data in real-time for accurate, up-to-date reporting",
                "Automates repetitive tasks while preserving creative control",
                "Scales operations without proportional team growth",
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
            Marketing Automation Use Cases
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
            Why Agencies Choose IntelliviaAI
          </h2>
          <div className="grid-2">
            {[
              { title: "Marketing Platform Expertise", desc: "Deep integration experience with advertising platforms, analytics tools, CRMs, and marketing automation systems. We speak the language of agency operations." },
              { title: "White-Label Capabilities", desc: "Reporting and client-facing automation can be branded as your own, maintaining your agency's professional image with clients." },
              { title: "Multi-Client Architecture", desc: "Systems designed to handle multiple client accounts with proper data separation, access controls, and scalable workflows." },
              { title: "Continuous Optimization", desc: "Weekly maintenance includes performance monitoring, workflow refinements, and adaptation to platform changes and new client requirements." },
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
            Business Outcomes for Marketing Teams
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
        title="Marketing Automation FAQs"
        faqs={[
          {
            question: "Can automation handle reporting for clients with different platform combinations?",
            answer: "Yes. Each client gets customized reporting based on their specific platform mix. Whether they use Google Ads alone or a combination of Meta, LinkedIn, email marketing, and multiple analytics tools, automation pulls from their specific sources and formats reports accordingly.",
          },
          {
            question: "Will clients know the reports are automated?",
            answer: "Not unless you want them to. Reports are fully customizable with your agency branding, formatting preferences, and insight narratives. Many agencies use automation to improve report quality and consistency while presenting them as their own work product.",
          },
          {
            question: "How do you handle platform API changes?",
            answer: "Marketing platforms update their APIs frequently. Weekly maintenance monitors for changes and updates integrations proactively. When Google or Meta makes changes, your automation adapts without requiring your team to troubleshoot technical issues.",
          },
          {
            question: "Can we automate just some processes and keep others manual?",
            answer: "Absolutely. Most agencies start with the highest-impact automation—usually reporting—then expand to other areas. You control what gets automated and what stays manual. The goal is eliminating tedious work, not removing human judgment from strategy.",
          },
          {
            question: "What if we add a new client or platform mid-month?",
            answer: "Adding new clients or platforms is straightforward. We configure new connections, set up appropriate workflows, and integrate with existing processes. Growth shouldn't create proportional administrative burden.",
          },
        ]}
      />

      {/* Final CTA */}
      <section className="section-spacing" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="container" style={{ textAlign: "center", padding: "96px 48px", color: "#FFFFFF" }}>
          <h2 style={{ fontSize: "48px", fontWeight: 300, marginBottom: "24px", color: "#FFFFFF" }}>
            See How AI Automation Can Scale Your Agency
          </h2>
          <p style={{ fontSize: "18px", color: "#a0a0a0", marginBottom: "48px", maxWidth: "700px", margin: "0 auto 48px" }}>
            Discuss your reporting bottlenecks, client management challenges, and operational inefficiencies. Discover where automation frees your team to focus on creative strategy.
          </p>
          <BookAppointment buttonText="Book Appointment" buttonStyle="secondary" />
        </div>
      </section>
      <Chatbot/>
      <Footer/>
    </div>
  );
};

export default MarketingAgencies;
