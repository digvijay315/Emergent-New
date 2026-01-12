import React from "react";
import Link from "next/link";
import { Mail, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#000000",
        color: "#FFFFFF",
        padding: "96px 0 48px",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "48px",
            marginBottom: "64px",
          }}
        >
          {/* Company Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <img
                src="/image1.png"
                alt="IntelliviaAI Logo"
                style={{
                  height: "42px",
                  width: "auto",
                }}
              />
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                IntelliviaAI
              </h3>
            </div>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#a0a0a0",
                marginBottom: "24px",
              }}
            >
              Powering Businesses Through AI Automation
            </p>
            <div style={{ marginBottom: "16px" }}>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  marginBottom: "12px",
                }}
              >
                Connect with IntelliviaAI
              </p>
              <div style={{ display: "flex", gap: "16px" }}>
                <a
                  href="mailto:info@intelliviaai.com"
                  style={{
                    color: "#FFFFFF",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#0066cc")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/110916391/admin/dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#FFFFFF",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#0066cc")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://x.com/intelliviaai?s=21"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#FFFFFF",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#0066cc")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://www.facebook.com/share/1BuyWzPxbE/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#FFFFFF",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#0066cc")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/intelliviaai?igsh=OTBlbWNzcTZiY2tn&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#FFFFFF",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#0066cc")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Quick Links
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Link
                href="/services"
                style={{
                  fontSize: "14px",
                  color: "#a0a0a0",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#a0a0a0")}
              >
                Services
              </Link>
              <Link
                href="/pricing"
                style={{
                  fontSize: "14px",
                  color: "#a0a0a0",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#a0a0a0")}
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                style={{
                  fontSize: "14px",
                  color: "#a0a0a0",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#a0a0a0")}
              >
                Blog
              </Link>
              <Link
                href="/how-it-helps"
                style={{
                  fontSize: "14px",
                  color: "#a0a0a0",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#a0a0a0")}
              >
                How It Helps
              </Link>
              <Link
                href="/security"
                style={{
                  fontSize: "14px",
                  color: "#a0a0a0",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#a0a0a0")}
              >
                Security
              </Link>
              <Link
                href="/about"
                style={{
                  fontSize: "14px",
                  color: "#a0a0a0",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#a0a0a0")}
              >
                About
              </Link>
              <Link
                href="/support"
                style={{
                  fontSize: "14px",
                  color: "#a0a0a0",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#a0a0a0")}
              >
                Support Policy
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              Get in Touch
            </h4>
            <p
              style={{
                fontSize: "14px",
                color: "#a0a0a0",
                lineHeight: 1.7,
                marginBottom: "16px",
              }}
            >
              Ready to transform your business with AI automation?
            </p>
            <Link href="/contactus" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid #333333",
            paddingTop: "32px",
          }}
        >
          {/* Trust Statement */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "24px",
              padding: "16px",
              backgroundColor: "#1a1a1a",
              borderRadius: "4px",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#a0a0a0",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              🌍 <strong style={{ color: "#FFFFFF" }}>Serving Businesses Worldwide</strong> | 
              Your systems run on your infrastructure | 
              Full data ownership guaranteed | 
              No hidden fees or forced subscriptions
            </p>
          </div>

          {/* Copyright & Links */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#666666",
                margin: 0,
              }}
            >
              © {currentYear} IntelliviaAI. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "24px" }}>
              <Link
                href="/privacy"
                style={{
                  fontSize: "14px",
                  color: "#666666",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#666666")}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                style={{
                  fontSize: "14px",
                  color: "#666666",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#666666")}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
