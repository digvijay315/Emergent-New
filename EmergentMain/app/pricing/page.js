"use client"
import React from "react";
import Link from "next/link";
import {
  CheckCircle,
  Settings,
  TrendingUp,
  Shield,
  Info,
  ArrowRight,
} from "lucide-react";
import Chatbot from "@/components/Chatbot";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const Pricing = () => {
  const setupFeatures = [
    "Deep strategy and workflow analysis",
    "Custom AI automation design",
    "Full system development and integration",
    "Comprehensive testing and validation",
    "Deployment on your infrastructure",
    "Complete documentation and training",
    "No templates—built for your business",
  ];

  const maintenanceFeatures = [
    "Continuous monitoring and health checks",
    "Bug fixes and system updates",
    "Performance optimization",
    "Workflow improvements as needs evolve",
    "Priority support and issue resolution",
    "Regular system audits",
    "Adaptation to new requirements",
  ];

  const transparencyPoints = [
    {
      title: "Your Accounts, Your Control",
      description:
        "All third-party AI services (ChatGPT, Claude, Gemini, etc.) connect through your own API accounts.",
    },
    {
      title: "Direct Billing",
      description:
        "API usage costs are billed directly to you by service providers (OpenAI, Anthropic, Google).",
    },
    {
      title: "Zero Markup",
      description:
        "We don't mark up or resell third-party usage. You pay providers directly at their standard rates.",
    },
    {
      title: "Full Transparency",
      description:
        "You have complete visibility into what services are used and their associated costs.",
    },
  ];

  return (
    <div>
        <Header/>
      {/* Hero */}
      <section
        className="section-spacing"
        style={{
          paddingTop: "160px",
          paddingBottom: "96px",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <h1 className="hero-headline" style={{ marginBottom: "24px" }}>
            Clear, Honest
            <br />
            <span className="accent-text">Pricing</span>
          </h1>
          <p
            className="body-text-large"
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              color: "#666666",
            }}
          >
            No hidden fees, no surprises. Custom solutions priced based on your
            specific needs and complexity.
          </p>
        </div>
      </section>

      {/* Pricing Components */}
      <section className="section-spacing" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "48px",
              marginBottom: "96px",
            }}
            className="pricing-grid"
          >
            {/* One-Time Setup */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "48px",
                borderRadius: "4px",
                border: "1px solid #e5e5e5",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#0066cc",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              >
                <Settings size={32} color="#FFFFFF" strokeWidth={1.5} />
              </div>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: 600,
                  marginBottom: "12px",
                }}
              >
                One-Time Setup
              </h2>
              <p
                className="body-text"
                style={{ color: "#666666", marginBottom: "32px" }}
              >
                Complete system design, development, and deployment built
                specifically for your business.
              </p>

              <div
                style={{
                  padding: "24px",
                  backgroundColor: "#fafafa",
                  borderRadius: "4px",
                  marginBottom: "32px",
                }}
              >
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    marginBottom: "8px",
                  }}
                >
                  Custom Quote
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666666",
                    margin: 0,
                  }}
                >
                  Pricing based on project scope and complexity
                </p>
              </div>

              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                What&apos;s Included
              </h3>
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
                {setupFeatures.map((feature, idx) => (
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
                    <span
                      className="body-text"
                      style={{ color: "#1a1a1a", fontSize: "16px" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Weekly Maintenance */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "48px",
                borderRadius: "4px",
                border: "1px solid #e5e5e5",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#000000",
                  borderRadius: "4px",
                  marginBottom: "24px",
                }}
              >
                <TrendingUp size={32} color="#FFFFFF" strokeWidth={1.5} />
              </div>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: 600,
                  marginBottom: "12px",
                }}
              >
                Weekly Maintenance
              </h2>
              <p
                className="body-text"
                style={{ color: "#666666", marginBottom: "32px" }}
              >
                Ongoing support, optimization, and evolution as your business
                grows and changes.
              </p>

              <div
                style={{
                  padding: "24px",
                  backgroundColor: "#fafafa",
                  borderRadius: "4px",
                  marginBottom: "32px",
                }}
              >
                <div
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    marginBottom: "8px",
                  }}
                >
                  Custom Quote
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666666",
                    margin: 0,
                  }}
                >
                  Pricing based on system complexity and support needs
                </p>
              </div>

              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                What&apos;s Included
              </h3>
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
                {maintenanceFeatures.map((feature, idx) => (
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
                    <span
                      className="body-text"
                      style={{ color: "#1a1a1a", fontSize: "16px" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="section-spacing">
        <div className="container">
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              textAlign: "center",
              marginBottom: "64px",
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
                backgroundColor: "#fafafa",
                borderRadius: "4px",
              }}
            >
              <Info size={32} strokeWidth={1.5} />
            </div>
            <h2 className="section-header">About Third-Party Costs</h2>
            <p
              className="body-text-large"
              style={{ color: "#666666", maxWidth: "800px", margin: "0 auto" }}
            >
              We believe in complete transparency about costs. Here&apos;s how
              third-party AI services work with our solutions.
            </p>
          </div>

          <div className="grid-2">
            {transparencyPoints.map((point, index) => (
              <div
                key={index}
                style={{
                  padding: "32px",
                  backgroundColor: "#fafafa",
                  borderRadius: "4px",
                  border: "1px solid #e5e5e5",
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    marginBottom: "12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <Shield size={20} color="#0066cc" strokeWidth={2} />
                  {point.title}
                </h3>
                <p className="body-text" style={{ color: "#666666", margin: 0 }}>
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "48px",
              padding: "32px",
              backgroundColor: "#fff9e6",
              borderRadius: "4px",
              border: "1px solid #ffd966",
              textAlign: "center",
            }}
          >
            <p
              className="body-text"
              style={{ color: "#1a1a1a", margin: 0, fontWeight: 500 }}
            >
              <strong>Simple Truth:</strong> You pay us for strategy, development,
              and maintenance. You pay service providers (OpenAI, Google, etc.)
              directly for their API usage. No middleman markups.
            </p>
          </div>
        </div>
      </section>

      {/* Why Custom Pricing */}
      <section className="section-spacing" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            <h2
              className="section-header"
              style={{ textAlign: "center", marginBottom: "48px" }}
            >
              Why Custom Pricing?
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "48px",
              }}
              className="custom-pricing-grid"
            >
              <div
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
                  }}
                >
                  Every Business Is Different
                </h3>
                <p className="body-text" style={{ color: "#666666", margin: 0 }}>
                  Automating a 5-person team&apos;s workflows is fundamentally different
                  from a 500-person operation. We price based on actual complexity,
                  not arbitrary tiers.
                </p>
              </div>
              <div
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
                  }}
                >
                  Value Over Hours
                </h3>
                <p className="body-text" style={{ color: "#666666", margin: 0 }}>
                  We price based on the value delivered to your business, not just
                  development hours. ROI-focused, not time-tracking focused.
                </p>
              </div>
              <div
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
                  }}
                >
                  No Template Pricing
                </h3>
                <p className="body-text" style={{ color: "#666666", margin: 0 }}>
                  Since we don&apos;t use templates or off-the-shelf solutions, fixed
                  pricing would either overcharge simple projects or undervalue
                  complex ones.
                </p>
              </div>
              <div
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
                  }}
                >
                  Transparent Breakdown
                </h3>
                <p className="body-text" style={{ color: "#666666", margin: 0 }}>
                  Every quote includes a detailed breakdown of what you&apos;re paying
                  for and why. No mysterious line items.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Pricing Works - For Decision Makers */}
      <section className="section-spacing">
        <div className="container">
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <h2 className="section-header">How Pricing Works</h2>
            <p
              className="body-text-large"
              style={{ color: "#666666", marginBottom: "48px" }}
            >
              A straightforward explanation for founders and decision-makers.
            </p>

            <div
              style={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: "32px",
              }}
            >
              <div
                style={{
                  padding: "32px",
                  backgroundColor: "#fafafa",
                  borderRadius: "4px",
                  borderLeft: "4px solid #0066cc",
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  One-Time Setup = Building It Right from Day One
                </h3>
                <p className="body-text" style={{ color: "#666666", margin: 0 }}>
                  This covers the strategy, design, development, testing, and
                  deployment of your custom AI automation system. We build it
                  specifically for your business workflows—no templates, no
                  shortcuts. You pay once, and the system is yours.
                </p>
              </div>

              <div
                style={{
                  padding: "32px",
                  backgroundColor: "#fafafa",
                  borderRadius: "4px",
                  borderLeft: "4px solid #000000",
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  Weekly Maintenance = Keeping It Reliable and Optimized
                </h3>
                <p className="body-text" style={{ color: "#666666", margin: 0 }}>
                  Technology changes, businesses evolve, and systems need ongoing
                  attention. Weekly maintenance ensures your automation stays
                  updated, performs optimally, and adapts to your changing needs.
                  It&apos;s predictable, ongoing support—not surprise invoices.
                </p>
              </div>

              <div
                style={{
                  padding: "32px",
                  backgroundColor: "#fff9e6",
                  borderRadius: "4px",
                  border: "1px solid #ffd966",
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
                  You Pay Only for Our Work
                </h3>
                <p className="body-text" style={{ color: "#1a1a1a", margin: 0 }}>
                  <strong>All AI usage costs remain under your control.</strong> You
                  connect your own OpenAI, Google, or Anthropic accounts. Their
                  usage charges go directly to you at their standard rates. We don&apos;t
                  mark up, resell, or touch that money. You pay us for strategy,
                  development, and maintenance—nothing else.
                </p>
              </div>
            </div>

            <div
              style={{
                marginTop: "48px",
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
                  marginBottom: "16px",
                }}
              >
                What You Get
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  textAlign: "left",
                }}
                className="pricing-benefits-grid"
              >
                {[
                  "No hidden fees or surprise charges",
                  "No long-term lock-in or contracts",
                  "Full ownership of your systems",
                  "Complete transparency on all costs",
                  "Pricing based on complexity, not company size",
                  "Detailed breakdown in every quote",
                ].map((benefit, idx) => (
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
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2
              className="section-header"
              style={{ textAlign: "center", marginBottom: "64px" }}
            >
              Pricing FAQs
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* FAQ 1 */}
              <div
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
                  Why is there a one-time setup cost?
                </h3>
                <p className="body-text" style={{ color: "#666666", margin: 0 }}>
                  Because we build custom systems from scratch, not off-the-shelf
                  templates. The setup cost covers strategy, workflow analysis,
                  custom development, testing, and deployment—everything needed to
                  build automation that fits your business perfectly. Once built, the
                  system is yours.
                </p>
              </div>

              {/* FAQ 2 */}
              <div
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
                  What does the weekly maintenance cover?
                </h3>
                <p className="body-text" style={{ color: "#666666", margin: 0 }}>
                  Weekly maintenance includes system monitoring, bug fixes, performance
                  optimization, security updates, workflow improvements, and adapting
                  to changes in your business. It ensures your automation continues
                  running reliably and evolves as your needs change.
                </p>
              </div>

              {/* FAQ 3 */}
              <div
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
                  Can maintenance be paused or cancelled?
                </h3>
                <p className="body-text" style={{ color: "#666666", margin: 0 }}>
                  Yes. There are no long-term contracts or lock-in periods. If you
                  need to pause or cancel maintenance, you can do so at any time. Your
                  systems remain fully functional and under your control—you simply
                  won&apos;t have ongoing support and optimization.
                </p>
              </div>

              {/* FAQ 4 */}
              <div
                style={{
                  padding: "32px",
                  backgroundColor: "#fff9e6",
                  borderRadius: "4px",
                  border: "2px solid #ffd966",
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
                  Do you charge for AI tools like ChatGPT, Gemini, Claude, or APIs?
                </h3>
                <p
                  className="body-text"
                  style={{ color: "#1a1a1a", margin: "0 0 12px 0" }}
                >
                  <strong>No. We do not charge for third-party AI usage.</strong>
                </p>
                <p className="body-text" style={{ color: "#1a1a1a", margin: 0 }}>
                  All AI tools and APIs connect through your own accounts (OpenAI,
                  Google, Anthropic, etc.). Their usage fees are billed directly to
                  you by those providers at their standard rates. IntelliviaAI does
                  not mark up, resell, or touch that money. You pay us only for
                  strategy, development, and maintenance.
                </p>
              </div>

              {/* FAQ 5 */}
              <div
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
                  Will I have full access to my systems and data?
                </h3>
                <p className="body-text" style={{ color: "#666666", margin: 0 }}>
                  Absolutely. Everything we build runs on your infrastructure (your
                  servers, cloud accounts, databases). You own the systems, the code,
                  and all the data. We provide transparent documentation so you
                  understand exactly how everything works.
                </p>
              </div>

              {/* FAQ 6 */}
              <div
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
                  What happens if my business workflows change?
                </h3>
                <p className="body-text" style={{ color: "#666666", margin: 0 }}>
                  That&apos;s what weekly maintenance is for. As your business evolves, we
                  adapt the automation to match your new processes. Small adjustments
                  are included in maintenance. Major changes that require significant
                  rebuilding would be quoted separately, but we always discuss this
                  with you first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Get Your Custom Quote
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
            Tell us about your business and automation needs. We&apos;ll provide a
            detailed, transparent pricing breakdown tailored to your specific
            requirements.
          </p>
          <Link
            href="/contactus"
            className="btn-secondary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Request a Pricing Breakdown
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
          .custom-pricing-grid {
            grid-template-columns: 1fr !important;
          }
          .pricing-benefits-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <Chatbot/>
    <Footer/>
    </div>
  );
};

export default Pricing;
