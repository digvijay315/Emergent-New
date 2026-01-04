
"use client"
import React from "react";
import { CheckCircle } from "lucide-react";
import BookAppointment from "../../../components/BookAppointment";
import FAQSection from "../../../components/FAQSection";
import Header from "@/components/Header";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";

export const Ecommerce = () => {
  const challenges = [
    {
      title: "Order Volume Overwhelming Operations",
      description: "Peak seasons and promotions create order backlogs. Manual processing can't keep pace, leading to delayed shipments and customer complaints.",
    },
    {
      title: "Inventory Sync Issues Across Channels",
      description: "Stock levels differ between your website, marketplaces, and warehouse system. Overselling leads to cancellations; underselling leaves money on the table.",
    },
    {
      title: "Customer Inquiries Burying Your Team",
      description: "Where's my order? Is this in stock? Can I change my address? Same questions answered repeatedly instead of being resolved automatically.",
    },
    {
      title: "Returns Process Creating Friction",
      description: "Manual return approvals, refund processing, and restocking workflows slow down what should be a seamless experience for customers.",
    },
  ];

  const useCases = [
    {
      title: "Intelligent Order Processing & Routing",
      description: "Automatically validate orders, check inventory, route to fulfillment centers based on location and stock levels, generate shipping labels, and send tracking updates without manual touchpoints.",
    },
    {
      title: "Multi-Channel Inventory Synchronization",
      description: "Real-time inventory updates across all sales channels. When stock drops below thresholds, automatically pause listings, trigger restock alerts, and prevent overselling.",
    },
    {
      title: "Customer Service Automation",
      description: "Auto-respond to common inquiries with order status updates, shipping information, and product availability. Route complex issues to human agents with full context already gathered.",
    },
    {
      title: "Returns & Refunds Workflow",
      description: "Automated return authorization, label generation, refund processing upon receipt, and restocking notifications. Fraud detection flags suspicious return patterns.",
    },
    {
      title: "Dynamic Pricing & Promotion Management",
      description: "Monitor competitor pricing, adjust rates based on inventory velocity and margin targets, apply promotional codes automatically, and track campaign performance in real-time.",
    },
    {
      title: "Abandoned Cart Recovery",
      description: "Detect cart abandonment, send personalized recovery emails with timing optimization, track conversion rates, and adjust messaging based on customer segments.",
    },
  ];

  const outcomes = [
    "Order processing time reduced from hours to minutes",
    "Inventory accuracy improved to 99%+ across all channels",
    "Customer service inquiries resolved 60% faster",
    "Return processing time cut by 70%",
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
            <span style={{ color: "#0066cc" }}>E-commerce & Retail</span>
          </h1>
          <p className="body-text-large" style={{ maxWidth: "800px", margin: "0 auto 48px", color: "#a0a0a0" }}>
            Scale your e-commerce operations during peak demand without proportional headcount growth. Automate order processing, inventory sync, customer service, and returns management.
          </p>
          <BookAppointment buttonText="Book Free Consultation" />
        </div>
      </section>

      {/* Challenges */}
      <section className="section-spacing">
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center" }}>
            E-commerce Operational Challenges
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
            How AI Automation Works in E-commerce
          </h2>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p className="body-text-large" style={{ color: "#666666", marginBottom: "32px", textAlign: "center" }}>
              AI agents integrate with your e-commerce platform, inventory system, marketplace accounts, and fulfillment providers to create seamless automated workflows.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                "Connects Shopify, WooCommerce, Amazon, eBay, and fulfillment APIs",
                "Processes orders and updates in real-time across all channels",
                "Monitors inventory levels and prevents stockouts automatically",
                "Scales effortlessly during peak sales periods",
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
            E-commerce Automation Use Cases
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
            Why E-commerce Brands Choose IntelliviaAI
          </h2>
          <div className="grid-2">
            {[
              { title: "Platform-Agnostic Integration", desc: "Works with any e-commerce platform, marketplace, or custom solution. No forced migrations or platform lock-in." },
              { title: "Peak Season Ready", desc: "Systems designed to handle 10x order volume spikes without performance degradation or additional manual work." },
              { title: "Customer Data Control", desc: "All automation runs on your infrastructure. Customer purchase data and behavior insights remain yours." },
              { title: "Continuous Optimization", desc: "Weekly maintenance includes performance monitoring, workflow improvements, and adaptation to changing sales patterns." },
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
            Business Outcomes for E-commerce
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
        title="E-commerce Automation FAQs"
        faqs={[
          {
            question: "Can automation handle flash sales and peak traffic periods?",
            answer: "Yes. The system is designed for variable load. During Black Friday or flash sales, automation scales to process thousands of orders per hour without manual intervention or performance degradation.",
          },
          {
            question: "Will it work with our existing e-commerce platform?",
            answer: "We integrate with all major platforms (Shopify, WooCommerce, Magento, BigCommerce) and marketplaces (Amazon, eBay, Walmart). Custom platforms work too—if it has an API or webhook, we can connect it.",
          },
          {
            question: "How do you prevent overselling across multiple channels?",
            answer: "Real-time inventory synchronization. When an item sells on any channel, inventory updates everywhere instantly. Buffer thresholds prevent overselling during high-velocity periods.",
          },
          {
            question: "Can we customize the automation for our specific workflows?",
            answer: "Absolutely. Every e-commerce business operates differently. We map your actual fulfillment process, return policies, and customer service approach—then build automation that matches how you work.",
          },
          {
            question: "What happens if a marketplace API changes?",
            answer: "Weekly maintenance monitors for API changes and platform updates. When marketplaces modify their APIs, we update integrations proactively to prevent disruptions.",
          },
        ]}
      />

      {/* Final CTA */}
      <section className="section-spacing" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="container" style={{ textAlign: "center", padding: "96px 48px", color: "#FFFFFF" }}>
          <h2 style={{ fontSize: "48px", fontWeight: 300, marginBottom: "24px", color: "#FFFFFF" }}>
            See How AI Automation Can Improve Your E-commerce Operations
          </h2>
          <p style={{ fontSize: "18px", color: "#a0a0a0", marginBottom: "48px", maxWidth: "700px", margin: "0 auto 48px" }}>
            Discuss your order volume, channel strategy, and operational bottlenecks. Discover where automation delivers immediate efficiency gains.
          </p>
          <BookAppointment buttonText="Book Appointment" buttonStyle="secondary" />
        </div>
      </section>
      <Chatbot/>
      <Footer/>
    </div>
  );
};

export default Ecommerce;
