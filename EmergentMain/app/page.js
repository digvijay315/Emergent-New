"use client";

import React from "react";
import Link from "next/link";
import {
  Zap,
  Clock,
  Shield,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import FAQSection from "../components/FAQSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import CookieConsent from "@/components/CookieConsent";

export const Home = () => {
  const problems = [
    {
      title: "Decision Delays",
      description:
        "Critical decisions wait on manual data gathering and analysis, slowing down your entire operation.",
    },
    {
      title: "Knowledge in People's Heads",
      description:
        "Your processes depend on specific team members. When they're unavailable, everything stops.",
    },
    {
      title: "Silent Inefficiencies",
      description:
        "Hours lost to repetitive tasks that no one questions because 'that's how we've always done it.'",
    },
    {
      title: "Systems Breaking During Growth",
      description:
        "What worked at 10 clients fails at 100. Manual processes don't scale with your ambitions.",
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save Time & Costs",
      description:
        "Automate repetitive tasks and free your team to focus on high-value work.",
    },
    {
      icon: CheckCircle,
      title: "Reduce Errors",
      description:
        "Eliminate human error with consistent, reliable automated processes.",
    },
    {
      icon: Shield,
      title: "Full Data Control",
      description:
        "Your data stays on your infrastructure. Complete ownership and transparency.",
    },
    {
      icon: Zap,
      title: "24/7 Operations",
      description:
        "AI systems work around the clock, ensuring business continuity.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Systems",
      description:
        "Build foundations that grow with your business without proportional cost increases.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Understand",
      description:
        "We analyze your workflows, identify bottlenecks, and map opportunities for automation.",
    },
    {
      number: "02",
      title: "Build",
      description:
        "Custom AI solutions designed specifically for your business needs and processes.",
    },
    {
      number: "03",
      title: "Deploy",
      description:
        "Seamless integration with your existing systems on your own infrastructure.",
    },
    {
      number: "04",
      title: "Maintain",
      description:
        "Ongoing optimization and support to ensure peak performance and reliability.",
    },
  ];

  return (
    <div>
      <Header/>
      {/* Hero Section */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: "80px",
        }}
      >
        {/* Abstract Geometric Shape */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: "400px",
            height: "400px",
            opacity: 0.03,
            pointerEvents: "none",
          }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#000000"
              d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.4C25.8,83.8,8.8,86,-8.6,83.8C-26,81.6,-43.4,75,-56.6,64.2C-69.8,53.4,-78.8,38.4,-83.4,21.8C-88,-5.2,-88.2,-33.8,-79.6,-56.8C-71,-79.8,-53.6,-97.2,-34.8,-100.4C-16,-103.6,3.2,-92.6,20.8,-80.8C38.4,-69,54.4,-56.4,44.7,-76.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="container" style={{ textAlign: "center" }}>
          <h1 className="hero-headline fade-in" style={{ marginBottom: "24px" }}>
            Automate Workflows,
            <br />
            <span className="accent-text">Save Time & Reduce Costs</span>
          </h1>
          <p
            className="body-text-large fade-in-delay-1"
            style={{
              maxWidth: "750px",
              margin: "0 auto 48px",
              color: "#666666",
            }}
          >
            Custom AI automation for businesses worldwide. Reduce repetitive tasks,
            improve efficiency, and maintain full control over your systems and data.
          </p>
          <div
            className="fade-in-delay-2"
            style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link href="/contactus" className="btn-primary">
              Request a Consultation
            </Link>
            <Link href="/how-it-helps" className="btn-secondary">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="section-spacing" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center" }}>
            Hidden Problems Holding You Back
          </h2>
          <div className="grid-2">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="hover-lift"
                style={{
                  padding: "48px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "4px",
                  border: "1px solid #e5e5e5",
                }}
              >
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    marginBottom: "16px",
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

      {/* Benefits Section */}
      <section className="section-spacing">
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center" }}>
            The Power of AI Automation
          </h2>
          <div className="grid-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
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
                      fontSize: "20px",
                      fontWeight: 600,
                      marginBottom: "12px",
                    }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="body-text" style={{ color: "#666666", margin: 0 }}>
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why IntelliviaAI */}
      <section className="section-spacing" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center" }}>
            Why IntelliviaAI
          </h2>
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px",
            }}
            className="why-grid"
          >
            <div
              style={{
                padding: "32px",
                backgroundColor: "#FFFFFF",
                borderRadius: "4px",
                borderLeft: "4px solid #0066cc",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  marginBottom: "12px",
                  color: "#1a1a1a",
                }}
              >
                Your Data Stays in Your Control
              </h3>
              <p
                className="body-text"
                style={{ color: "#666666", margin: 0, fontSize: "15px" }}
              >
                All systems run on your servers and accounts. Complete ownership and
                transparency—no black boxes.
              </p>
            </div>
            <div
              style={{
                padding: "32px",
                backgroundColor: "#FFFFFF",
                borderRadius: "4px",
                borderLeft: "4px solid #0066cc",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  marginBottom: "12px",
                  color: "#1a1a1a",
                }}
              >
                Built for Scale, Not Quick Fixes
              </h3>
              <p
                className="body-text"
                style={{ color: "#666666", margin: 0, fontSize: "15px" }}
              >
                Systems designed to grow with your business and deliver long-term
                efficiency gains.
              </p>
            </div>
            <div
              style={{
                padding: "32px",
                backgroundColor: "#FFFFFF",
                borderRadius: "4px",
                borderLeft: "4px solid #0066cc",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  marginBottom: "12px",
                  color: "#1a1a1a",
                }}
              >
                Ongoing Optimization, Not One-Time Delivery
              </h3>
              <p
                className="body-text"
                style={{ color: "#666666", margin: 0, fontSize: "15px" }}
              >
                Weekly maintenance ensures your automation evolves with your business
                needs.
              </p>
            </div>
            <div
              style={{
                padding: "32px",
                backgroundColor: "#FFFFFF",
                borderRadius: "4px",
                borderLeft: "4px solid #0066cc",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  marginBottom: "12px",
                  color: "#1a1a1a",
                }}
              >
                Focus on Real Operational Value
              </h3>
              <p
                className="body-text"
                style={{ color: "#666666", margin: 0, fontSize: "15px" }}
              >
                We reduce invisible inefficiencies most businesses overlook—not just
                automate for automation&apos;s sake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Ecosystem */}
      <section className="section-spacing">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 className="section-header" style={{ marginBottom: "16px" }}>
              Technologies We Work With
            </h2>
            <p className="body-text-large" style={{ color: "#666666" }}>
              Partnering with leading platforms to build robust automation solutions
            </p>
          </div>
        <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "48px",
    maxWidth: "1200px",
    margin: "0 auto",
    alignItems: "center",
  }}
>
  {[
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  ].map((partner, index) => (
    <div
      key={index}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        backgroundColor: "#FFFFFF",
        border: "1px solid #e5e5e5",
        borderRadius: "4px",
        transition: "all 0.3s ease",
        minHeight: "120px",
      }}
      className="partner-logo"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#0066cc";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 102, 204, 0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#e5e5e5";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <img
        src={partner.logo}
        alt={partner.name}
        style={{ maxWidth: "100px", maxHeight: "50px", marginBottom: "12px" }}
      />
      <span
        style={{
          fontSize: "16px",
          fontWeight: 600,
          color: "#1a1a1a",
        }}
      >
        {partner.name}
      </span>
    </div>
  ))}
</div>

          <div
            style={{
              marginTop: "48px",
              textAlign: "center",
            }}
          >
            <p
              className="body-text"
              style={{ color: "#999999", fontSize: "14px", margin: 0 }}
            >
              Technologies and platforms we integrate to build custom automation solutions
            </p>
          </div>
        </div>
      </section>

      {/* Inspirational Quote */}
      <section className="section-spacing" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              textAlign: "center",
              padding: "64px 32px",
            }}
          >
            <div
              style={{
                fontSize: "32px",
                fontWeight: 300,
                lineHeight: 1.6,
                color: "#1a1a1a",
                marginBottom: "24px",
                fontStyle: "italic",
              }}
            >
              &quot;Automation applied to an efficient operation will magnify the
              efficiency.&quot;
            </div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: 500,
                color: "#666666",
              }}
            >
              — Bill Gates
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies - Placeholders */}
      <section className="section-spacing">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 className="section-header" style={{ marginBottom: "16px" }}>
              Results That Matter
            </h2>
            <p className="body-text-large" style={{ color: "#666666" }}>
              Real automation impact across different industries
            </p>
          </div>
          <div className="grid-3">
            {[
              {
                industry: "Professional Services",
                problem: "Manual client onboarding taking 3-4 hours per client",
                solution:
                  "Automated workflow capturing, validating, and routing client information",
                outcome: "85% reduction in onboarding time, 60% fewer errors",
              },
              {
                industry: "E-Commerce Operations",
                problem:
                  "Order processing delays during peak periods causing customer frustration",
                solution:
                  "Intelligent order routing and inventory management automation",
                outcome:
                  "3x order processing capacity, 24/7 operations without additional staff",
              },
              {
                industry: "Financial Services",
                problem:
                  "Compliance reporting requiring 40 hours monthly manual work",
                solution:
                  "Automated data collection, validation, and report generation",
                outcome: "92% time savings, improved accuracy, real-time compliance visibility",
              },
            ].map((study, index) => (
              <div
                key={index}
                className="hover-lift"
                style={{
                  padding: "32px",
                  backgroundColor: "#fafafa",
                  borderRadius: "4px",
                  border: "1px solid #e5e5e5",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#0066cc",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    marginBottom: "16px",
                  }}
                >
                  {study.industry}
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    marginBottom: "12px",
                    color: "#1a1a1a",
                  }}
                >
                  Problem
                </h3>
                <p
                  className="body-text"
                  style={{ color: "#666666", marginBottom: "16px", fontSize: "15px" }}
                >
                  {study.problem}
                </p>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    marginBottom: "12px",
                    color: "#1a1a1a",
                  }}
                >
                  Solution
                </h3>
                <p
                  className="body-text"
                  style={{ color: "#666666", marginBottom: "16px", fontSize: "15px" }}
                >
                  {study.solution}
                </p>
                <div
                  style={{
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
                    RESULT
                  </div>
                  <p
                    className="body-text"
                    style={{ color: "#1a1a1a", margin: 0, fontSize: "15px" }}
                  >
                    {study.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: "32px",
              textAlign: "center",
              padding: "16px",
              backgroundColor: "#fff9e6",
              borderRadius: "4px",
              border: "1px solid #ffd966",
            }}
          >
            <p
              className="body-text"
              style={{ color: "#1a1a1a", margin: 0, fontSize: "14px" }}
            >
              <strong>Note:</strong> Representative examples showing typical automation
              impact. Actual results vary based on business complexity and workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Feedback / Reviews */}
      <section className="section-spacing" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 className="section-header" style={{ marginBottom: "16px" }}>
              What Clients Say
            </h2>
            <p className="body-text-large" style={{ color: "#666666" }}>
              Real feedback from businesses we&apos;ve helped automate
            </p>
          </div>
          <div className="grid-3">
            {[
              {
                role: "Operations Director",
                industry: "Healthcare Technology",
                feedback:
                  "The automation IntelliviaAI built transformed how we handle patient data routing. What used to take our team 2-3 hours daily now happens automatically with zero errors.",
                outcome: "Saved 15+ hours weekly, improved data accuracy to 100%",
              },
              {
                role: "Founder",
                industry: "Digital Marketing Agency",
                feedback:
                  "We were drowning in manual client reporting. IntelliviaAI built a system that pulls data from 6 platforms, validates it, and generates reports automatically. Game-changer for our growth.",
                outcome: "Reduced reporting time by 80%, enabled scaling to 3x clients",
              },
              {
                role: "CFO",
                industry: "Manufacturing",
                feedback:
                  "Before automation, our financial reconciliation process required 2 full-time staff and still had errors. Now it runs 24/7 with alerts for anomalies. The ROI was clear within 2 months.",
                outcome: "92% time savings, identified $47K in missed invoices",
              },
              {
                role: "Head of Customer Success",
                industry: "SaaS Platform",
                feedback:
                  "The onboarding automation they built integrates seamlessly with our existing tools. New customers get set up in minutes instead of days, and our team can focus on relationship building.",
                outcome: "Cut onboarding time from 3 days to 4 hours",
              },
              {
                role: "Supply Chain Manager",
                industry: "E-Commerce",
                feedback:
                  "Inventory forecasting used to be guesswork mixed with spreadsheets. IntelliviaAI's automation analyzes patterns, predicts demand, and alerts us before stockouts. It's like having a dedicated analyst 24/7.",
                outcome: "Reduced stockouts by 67%, improved inventory turnover",
              },
            ].map((review, index) => (
              <div
                key={index}
                style={{
                  padding: "32px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "4px",
                  border: "1px solid #e5e5e5",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#0066cc",
                      marginBottom: "4px",
                    }}
                  >
                    {review.role}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#999999",
                      marginBottom: "16px",
                    }}
                  >
                    {review.industry}
                  </div>
                  <p
                    className="body-text"
                    style={{
                      color: "#1a1a1a",
                      fontStyle: "italic",
                      lineHeight: 1.7,
                      fontSize: "15px",
                      marginBottom: "16px",
                    }}
                  >
                    &quot;`{review.feedback}&quot;`
                  </p>
                </div>
                <div
                  style={{
                    marginTop: "auto",
                    padding: "16px",
                    backgroundColor: "#fafafa",
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
                    {review.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: "32px",
              textAlign: "center",
              padding: "16px",
              backgroundColor: "#FFFFFF",
              borderRadius: "4px",
              border: "1px solid #e5e5e5",
            }}
          >
            <p
              className="body-text"
              style={{ color: "#666666", margin: 0, fontSize: "14px" }}
            >
              <strong>Note:</strong> Representative client feedback. Specific details
              modified to protect confidentiality. Actual results vary based on business
              requirements and workflows.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-spacing" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center" }}>
            How It Works
          </h2>
          <div className="grid-2">
            {steps.map((step, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  gap: "24px",
                }}
              >
                <div
                  style={{
                    fontSize: "48px",
                    fontWeight: 200,
                    color: "#e5e5e5",
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: 600,
                      marginBottom: "12px",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="body-text" style={{ color: "#666666", margin: 0 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={[
          {
            question: "What is AI automation and how does it work for businesses?",
            answer:
              "AI automation uses intelligent systems to handle repetitive tasks, data processing, and workflow management without manual intervention. It works by connecting your existing tools, analyzing patterns, and executing predefined actions based on triggers and conditions. For businesses, this means tasks like data entry, report generation, customer onboarding, and process routing happen automatically—saving time and reducing errors.",
          },
          {
            question: "How does AI automation help companies save time and operational costs?",
            answer:
              "AI automation eliminates hours spent on repetitive manual tasks. For example, a process that takes a team member 3 hours daily can run automatically in minutes. This frees your team to focus on high-value work while reducing the need to hire additional staff as you scale. Most businesses see 60-80% time savings on automated processes within the first few months.",
          },
          {
            question: "What types of business processes can be automated using AI?",
            answer:
              "Almost any repetitive, rule-based process can be automated: customer onboarding, data validation and routing, report generation, inventory management, compliance tracking, email responses, appointment scheduling, invoice processing, and CRM updates. If a process follows consistent steps and doesn't require creative decision-making, automation can handle it.",
          },
          {
            question: "Is AI automation suitable for businesses of all sizes?",
            answer:
              "Yes. Small businesses benefit from automation by doing more with lean teams. Mid-sized companies use it to scale operations without proportional cost increases. Large enterprises leverage it to standardize processes across departments. The key is identifying which workflows consume the most time relative to their value—that's where automation delivers the biggest impact.",
          },
          {
            question: "How quickly can AI automation be implemented?",
            answer:
              "Implementation timelines vary based on complexity. Simple workflow automation (like form submissions or data routing) can be deployed in 1-2 weeks. More complex integrations involving multiple systems typically take 4-8 weeks. We start with high-impact, quick-win automations and build from there, ensuring you see value early while we develop more sophisticated solutions.",
          },
        ]}
      />

      {/* CTA Section */}
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
            Ready to Transform Your Business?
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
            Let&apos;s discuss how AI automation can solve your unique challenges and
            drive growth.
          </p>
          <Link
            href="/contact"
            className="btn-secondary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <CookieConsent/>
      <Chatbot/>
      <Footer/>
      
    </div>
  );
};

export default Home;
