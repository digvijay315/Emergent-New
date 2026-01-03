"use client"
import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import FAQSection from "../../components/FAQSection";
import BookAppointment from "../../components/BookAppointment";
import Header from "@/components/Header";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";

export const Services = () => {
  const problems = [
    {
      title: "Hours Lost to Manual Data Entry",
      description: "Your team spends valuable time copying information between systems instead of focusing on strategic work.",
    },
    {
      title: "Decision Delays from Fragmented Information",
      description: "Critical data is scattered across multiple platforms, slowing down decision-making and creating bottlenecks.",
    },
    {
      title: "Operational Costs Growing Faster Than Revenue",
      description: "As your business scales, you're forced to hire more people to handle increasing process volume.",
    },
    {
      title: "Human Errors Impacting Quality and Trust",
      description: "Manual workflows lead to inconsistent execution, mistakes, and customer dissatisfaction.",
    },
    {
      title: "Systems Breaking Under Growth Pressure",
      description: "Processes that worked at 10 clients fail at 100. Your operations don't scale with your ambitions.",
    },
  ];

  const solutions = [
    {
      title: "Custom Workflow Automation",
      description: "Transform manual, repetitive processes into intelligent automated workflows that run 24/7 without human intervention.",
      outcomes: [
        "60-80% reduction in process completion time",
        "Eliminate manual data entry and routing",
        "Consistent execution across all transactions",
        "Scale operations without proportional hiring",
      ],
    },
    {
      title: "Business Process Automation",
      description: "Automate end-to-end business processes from lead capture to fulfillment, ensuring seamless operations across departments.",
      outcomes: [
        "Reduce operational costs by up to 70%",
        "Improve process visibility and control",
        "Faster turnaround on customer requests",
        "Real-time monitoring and reporting",
      ],
    },
    {
      title: "System Integration & Data Flow",
      description: "Connect disparate tools and platforms into a unified ecosystem where data flows automatically and accurately.",
      outcomes: [
        "Break down data silos across systems",
        "Single source of truth for business data",
        "Eliminate duplicate data entry",
        "Real-time synchronization across platforms",
      ],
    },
    {
      title: "AI-Powered Optimization",
      description: "Apply machine learning to continuously improve processes based on performance data and business patterns.",
      outcomes: [
        "Predict bottlenecks before they occur",
        "Optimize resource allocation automatically",
        "Identify improvement opportunities from data",
        "Adapt to changing business conditions",
      ],
    },
  ];

  const industries = [
    {
      name: "Real Estate",
      link: "/services/real-estate",
      useCases: "Lead follow-ups, CRM automation, site scheduling",
    },
    {
      name: "SaaS",
      link: "/services/saas",
      useCases: "Onboarding, support routing, usage alerts",
    },
    {
      name: "Healthcare",
      link: "/services/healthcare",
      useCases: "Patient intake, appointments, compliance",
    },
    {
      name: "Manufacturing",
      link: "/services/manufacturing",
      useCases: "Inventory tracking, quality checks, reporting",
    },
  ];

  const whyChoose = [
    {
      title: "Your Data Stays Under Your Control",
      description: "All systems run on your infrastructure. Complete ownership, transparency, and compliance with your data governance policies.",
    },
    {
      title: "Secure, Enterprise-Grade Infrastructure",
      description: "Built with security best practices from day one. Your automation systems operate within your own secure environment.",
    },
    {
      title: "Built for Long-Term Scale",
      description: "Systems designed to handle 10x growth without 10x cost. Automation that amplifies efficiency as you scale.",
    },
    {
      title: "Ongoing Optimization & Support",
      description: "Weekly maintenance ensures your automation evolves with your business. Continuous monitoring, fixes, and improvements.",
    },
  ];

  return (
    <div>
      <Header/>
      {/* Hero - SEO Optimized */}
      <section
        className="section-spacing"
        style={{
          paddingTop: "160px",
          paddingBottom: "96px",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h1 className="hero-headline" style={{ marginBottom: "24px" }}>
            AI Automation Services That
            <br />
            <span className="accent-text">Scale With Your Business</span>
          </h1>
          <p
            className="body-text-large"
            style={{
              maxWidth: "900px",
              margin: "0 auto 48px",
              color: "#666666",
            }}
          >
            Custom AI automation solutions that reduce operational costs, eliminate
            repetitive tasks, and help businesses scale efficiently. Built on your
            infrastructure, maintained for long-term reliability.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <BookAppointment buttonText="Request Consultation" />
            <Link href="/pricing" className="btn-secondary">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Business Problems */}
      <section className="section-spacing" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center" }}>
            Business Problems AI Automation Solves
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {problems.map((problem, index) => (
              <div
                key={index}
                style={{
                  padding: "32px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "4px",
                  border: "1px solid #e5e5e5",
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    marginBottom: "12px",
                    color: "#1a1a1a",
                  }}
                >
                  {problem.title}
                </h3>
                <p className="body-text" style={{ color: "#666666", margin: 0 }}>
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="section-spacing">
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center" }}>
            Our AI Automation Solutions
          </h2>
          {solutions.map((solution, index) => (
            <div
              key={index}
              style={{
                marginBottom: index < solutions.length - 1 ? "64px" : "0",
                maxWidth: "1000px",
                margin: "0 auto 64px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "48px",
                  alignItems: "start",
                }}
                className="solution-item"
              >
                <div>
                  <h3
                    style={{
                      fontSize: "28px",
                      fontWeight: 600,
                      marginBottom: "16px",
                      color: "#1a1a1a",
                    }}
                  >
                    {solution.title}
                  </h3>
                  <p className="body-text" style={{ color: "#666666" }}>
                    {solution.description}
                  </p>
                </div>
                <div
                  style={{
                    padding: "32px",
                    backgroundColor: "#fafafa",
                    borderRadius: "4px",
                    border: "1px solid #e5e5e5",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      marginBottom: "16px",
                      color: "#0066cc",
                    }}
                  >
                    BUSINESS OUTCOMES
                  </h4>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    {solution.outcomes.map((outcome, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: "flex",
                          gap: "12px",
                          alignItems: "flex-start",
                        }}
                      >
                        <CheckCircle
                          size={20}
                          color="#0066cc"
                          strokeWidth={2}
                          style={{ flexShrink: 0, marginTop: "2px" }}
                        />
                        <span className="body-text" style={{ color: "#1a1a1a" }}>
                          {outcome}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose IntelliviaAI */}
      <section className="section-spacing" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center" }}>
            Why Choose IntelliviaAI
          </h2>
          <div className="grid-2">
            {whyChoose.map((reason, index) => (
              <div
                key={index}
                style={{
                  padding: "32px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "4px",
                  border: "1px solid #e5e5e5",
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    marginBottom: "12px",
                    color: "#1a1a1a",
                  }}
                >
                  {reason.title}
                </h3>
                <p className="body-text" style={{ color: "#666666", margin: 0 }}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="section-spacing">
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center" }}>
            Industry-Specific Solutions
          </h2>
          <p className="body-text-large" style={{ textAlign: "center", color: "#666666", marginBottom: "64px", maxWidth: "800px", margin: "0 auto 64px" }}>
            Explore how AI automation solves operational challenges in your industry
          </p>
          <div className="grid-2">
            {industries.map((industry, index) => (
              <Link
                key={index}
                href={industry.link}
                className="hover-lift"
                style={{
                  padding: "48px",
                  backgroundColor: "#fafafa",
                  borderRadius: "4px",
                  border: "1px solid #e5e5e5",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    marginBottom: "12px",
                    color: "#1a1a1a",
                  }}
                >
                  {industry.name}
                </h3>
                <p className="body-text" style={{ color: "#666666", marginBottom: "16px" }}>
                  {industry.useCases}
                </p>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#0066cc",
                    fontWeight: 500,
                    fontSize: "14px",
                  }}
                >
                  Learn More
                  <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Service FAQs"
        faqs={[
          {
            question: "What services does IntelliviaAI provide?",
            answer:
              "We provide custom AI automation services including workflow automation, system integration, AI optimization, and ongoing maintenance. Every solution is built specifically for your business needs—no templates or off-the-shelf products. We handle strategy, design, development, deployment, and continuous optimization.",
          },
          {
            question: "Do you build custom automation or use pre-built tools?",
            answer:
              "We build custom automation tailored to your specific workflows and systems. While we leverage powerful platforms (like Make, n8n, Zapier) and AI models (OpenAI, Anthropic, Google), every solution is designed from scratch to match your business processes. This ensures the automation fits your operations perfectly rather than forcing you to adapt to generic tools.",
          },
          {
            question: "Can IntelliviaAI integrate AI automation with existing systems?",
            answer:
              "Yes. Integration with your existing tools is core to what we do. We connect CRMs, ERPs, databases, communication platforms, and any other software you use. The goal is seamless automation that works within your current tech stack—not replacing systems, but making them work together intelligently.",
          },
          {
            question: "Do you offer ongoing support and maintenance after deployment?",
            answer:
              "Absolutely. Our weekly maintenance service ensures your automation continues running reliably as your business evolves. This includes monitoring, bug fixes, performance optimization, and adapting workflows to new requirements. Technology and business needs change—our maintenance keeps your systems current and effective.",
          },
          {
            question: "Can you build agentic AI or autonomous AI agents for workflows?",
            answer:
              "Yes. We build AI agents that can autonomously handle complex workflows—making decisions, processing information, and taking actions based on predefined logic and real-time data. These agents can manage customer inquiries, route tasks, validate data, generate reports, and more. The key is ensuring they operate within clear boundaries and maintain transparency in their decision-making.",
          },
        ]}
      />

      {/* CTA */}
      <section className="section-spacing" style={{ backgroundColor: "#fafafa" }}>
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
            Get Started With AI Automation
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#a0a0a0",
              marginBottom: "48px",
              maxWidth: "700px",
              margin: "0 auto 48px",
            }}
          >
            Transform your operations with custom AI automation. Schedule a consultation
            to discuss your workflows and discover how automation can drive efficiency.
          </p>
          <BookAppointment buttonText="Schedule Consultation" buttonStyle="secondary" />
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .solution-item {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <Chatbot/>
      <Footer/>
    </div>
  );
};

export default Services;
