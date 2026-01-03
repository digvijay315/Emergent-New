"use client"
import React from "react";
import Link from "next/link";
import {
  Eye,
  Users,
  TrendingDown,
  AlertCircle,
  Target,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";

export const HowItHelps = () => {
  const problems = [
    {
      icon: Eye,
      title: "Invisible Bottlenecks",
      description:
        "Your team is productive, but progress feels slow. The problem isn't people—it's the hidden friction between steps. Waiting for approvals, manual handoffs, and information scattered across systems create delays you can't see until you map the entire flow.",
      impact:
        "These bottlenecks compound. A 5-minute delay at each step becomes hours lost per process, multiplied across hundreds of transactions.",
    },
    {
      icon: AlertCircle,
      title: "Reactive Operations",
      description:
        "You're constantly putting out fires instead of preventing them. By the time you know there's a problem, it's already affecting customers or operations. You lack the real-time visibility and predictive insights needed to stay ahead.",
      impact:
        "Reactive mode is expensive. Emergency fixes cost 10x more than preventive measures, and customer trust erodes with each issue.",
    },
    {
      icon: Users,
      title: "Scaling People Instead of Systems",
      description:
        "Growth means hiring more people to handle more volume. But human scaling has limits—quality varies, training takes time, and costs grow linearly with revenue. You're building a business that gets less efficient as it grows.",
      impact:
        "Without automated systems, your profit margins shrink as you scale. The business becomes harder to manage, not easier.",
    },
    {
      icon: TrendingDown,
      title: "Lack of Operational Clarity",
      description:
        "You can't optimize what you can't measure. Critical business data is locked in spreadsheets, scattered across tools, or exists only in people's heads. Making informed decisions requires hours of manual analysis.",
      impact:
        "Blind spots lead to missed opportunities. You're reacting to last month's data instead of responding to today's reality.",
    },
  ];

  const solutions = [
    {
      title: "Reveal Hidden Inefficiencies",
      description:
        "We map your entire operation to expose bottlenecks, redundancies, and opportunities that are invisible in day-to-day work.",
    },
    {
      title: "Build Proactive Systems",
      description:
        "Automated monitoring and predictive analytics that identify issues before they impact your business or customers.",
    },
    {
      title: "Create Scalable Operations",
      description:
        "Systems that handle 10x the volume without 10x the cost. Growth improves efficiency instead of degrading it.",
    },
    {
      title: "Enable Data-Driven Decisions",
      description:
        "Real-time dashboards and automated insights that turn operational data into strategic clarity.",
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
            The Problems You Don&apos;t See
            <br />
            <span className="accent-text">Cost You the Most</span>
          </h1>
          <p
            className="body-text-large"
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              color: "#666666",
            }}
          >
            Most businesses don&apos;t have obvious problems. They have subtle,
            compounding inefficiencies that quietly drain resources and limit
            growth. AI automation makes the invisible visible—and fixable.
          </p>
        </div>
      </section>

      {/* Problems Deep Dive */}
      <section className="section-spacing" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center", marginBottom: "96px" }}>
            Non-Obvious Problems That Hold You Back
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div
                  key={index}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr",
                    gap: "32px",
                  }}
                  className="problem-item"
                >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid #e5e5e5",
                      borderRadius: "4px",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    <Icon size={40} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "28px",
                        fontWeight: 600,
                        marginBottom: "16px",
                      }}
                    >
                      {problem.title}
                    </h3>
                    <p
                      className="body-text"
                      style={{ color: "#1a1a1a", marginBottom: "16px" }}
                    >
                      {problem.description}
                    </p>
                    <div
                      style={{
                        padding: "16px 24px",
                        backgroundColor: "#FFFFFF",
                        borderLeft: "3px solid #0066cc",
                        borderRadius: "0 4px 4px 0",
                      }}
                    >
                      <p
                        className="body-text"
                        style={{ color: "#666666", margin: 0, fontStyle: "italic" }}
                      >
                        <strong>The Real Cost:</strong> {problem.impact}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How AI Automation Solves This */}
      <section className="section-spacing">
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center" }}>
            How AI Automation Solves This
          </h2>
          <div className="grid-2">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="hover-lift"
                style={{
                  padding: "48px",
                  backgroundColor: "#fafafa",
                  borderRadius: "4px",
                  border: "1px solid #e5e5e5",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#0066cc",
                    borderRadius: "4px",
                    marginBottom: "24px",
                  }}
                >
                  <Target size={24} color="#FFFFFF" strokeWidth={2} />
                </div>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  {solution.title}
                </h3>
                <p className="body-text" style={{ color: "#666666", margin: 0 }}>
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Impact */}
      <section className="section-spacing" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <h2 className="section-header">Real-World Impact</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "48px",
                marginTop: "64px",
              }}
              className="stats-grid"
            >
              <div>
                <div
                  style={{
                    fontSize: "48px",
                    fontWeight: 300,
                    color: "#0066cc",
                    marginBottom: "8px",
                  }}
                >
                  60-80%
                </div>
                <p className="body-text" style={{ color: "#666666", margin: 0 }}>
                  Reduction in process completion time
                </p>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "48px",
                    fontWeight: 300,
                    color: "#0066cc",
                    marginBottom: "8px",
                  }}
                >
                  24/7
                </div>
                <p className="body-text" style={{ color: "#666666", margin: 0 }}>
                  Continuous operations without human intervention
                </p>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "48px",
                    fontWeight: 300,
                    color: "#0066cc",
                    marginBottom: "8px",
                  }}
                >
                  10x
                </div>
                <p className="body-text" style={{ color: "#666666", margin: 0 }}>
                  Scale capacity without proportional cost increase
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
            Uncover Your Hidden Opportunities
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
            Let&apos;s analyze your operations and identify where AI automation can
            deliver the biggest impact.
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
            Schedule a Consultation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .problem-item {
            grid-template-columns: 1fr !important;
          }
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <Chatbot/>
      <Footer/>
    </div>
  );
};

export default HowItHelps;
