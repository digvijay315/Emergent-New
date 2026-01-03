"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import BookAppointment from "./BookAppointment";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/pricing", label: "Pricing" },
    { path: "/how-it-helps", label: "How It Helps" },
    { path: "/security", label: "Security" },
    { path: "/leadership", label: "Leadership" },
    { path: "/about", label: "About" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled ? "1px solid #e5e5e5" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <nav
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "24px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img
            src="image0.png"
            alt="IntelliviaAI Logo"
            style={{
              height: "48px",
              width: "auto",
            }}
          />
          <span
            style={{
              fontSize: "24px",
              fontWeight: 600,
              color: "#000000",
            }}
          >
            IntelliviaAI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
          className="desktop-nav"
        >
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: location === link.path ? "#0066cc" : "#000000",
                  textDecoration: "none",
                  transition: "color 0.2s ease, transform 0.2s ease",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  if (location.pathname !== link.path) {
                    e.currentTarget.style.color = "#0066cc";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  if (location.pathname !== link.path) {
                    e.currentTarget.style.color = "#000000";
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <LanguageSelector />
          <BookAppointment buttonText="Book Appointment" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
          }}
          className="mobile-menu-btn"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderTop: "1px solid #e5e5e5",
            padding: "24px 48px",
          }}
          className="mobile-menu"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  color: location.pathname === link.path ? "#0066cc" : "#000000",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary"
              style={{
                padding: "12px 32px",
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          nav {
            padding: 16px 24px !important;
          }
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
