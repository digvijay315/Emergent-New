"use client";
import { useEffect, useState } from "react";

const SECTIONS = [
  "hero",
  "problems",
  "benefits",
  "whyUs",
  "partners",
  "quots",
  "case",
  "howItWorks",
  "cta",
];

// convert id → readable tooltip
const formatName = (id) =>
  id.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());

export default function ScrollIndicator() {
  const [active, setActive] = useState("hero");
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        position: "fixed",
        right: "24px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: "0px",
      }}
    >
      {SECTIONS.map((section) => (
        <div
          key={section}
          style={{ position: "relative" }}
          onMouseEnter={() => setHovered(section)}
          onMouseLeave={() => setHovered(null)}
        >
          {/* DOT */}
          <button
            onClick={() => scrollTo(section)}
            style={{
              width: active === section ? "14px" : "10px",
              height: active === section ? "14px" : "10px",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              backgroundColor:
                active === section ? "#2563eb" : "#d1d5db",
              transition: "all 0.3s ease",
            }}
          />

          {/* TOOLTIP */}
          {hovered === section && (
            <div
              style={{
                position: "absolute",
                right: "22px",
                top: "50%",
                transform: "translateY(-50%)",
                whiteSpace: "nowrap",
                padding: "6px 10px",
                backgroundColor: "#111827",
                color: "#ffffff",
                fontSize: "12px",
                borderRadius: "6px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              {formatName(section)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
