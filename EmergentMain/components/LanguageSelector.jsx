import React, { useState, useEffect } from "react";
import { Globe } from "lucide-react";

export const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("EN");

  // Auto-detect language on mount
  useEffect(() => {
    const languages = [
      // English
      { code: "EN", name: "English (UK)", flag: "🇬🇧", region: "English" },
      { code: "US", name: "English (US)", flag: "🇺🇸", region: "English" },
      
      // European
      { code: "FR", name: "Français", flag: "🇫🇷", region: "European" },
      { code: "DE", name: "Deutsch", flag: "🇩🇪", region: "European" },
      { code: "ES", name: "Español", flag: "🇪🇸", region: "European" },
      { code: "IT", name: "Italiano", flag: "🇮🇹", region: "European" },
      { code: "PT", name: "Português", flag: "🇵🇹", region: "European" },
      { code: "NL", name: "Nederlands", flag: "🇳🇱", region: "European" },
      
      // Asian
      { code: "HI", name: "हिन्दी", flag: "🇮🇳", region: "Asian" },
      { code: "AR", name: "العربية", flag: "🇸🇦", region: "Asian" },
      { code: "ZH", name: "中文", flag: "🇨🇳", region: "Asian" },
      { code: "JA", name: "日本語", flag: "🇯🇵", region: "Asian" },
      { code: "KO", name: "한국어", flag: "🇰🇷", region: "Asian" },
    ];
    
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split("-")[0].toUpperCase();
    
    // Check if detected language is supported
    const supportedCodes = languages.map(l => l.code);
    if (supportedCodes.includes(langCode)) {
      setCurrentLanguage(langCode);
    } else {
      // Default to English
      setCurrentLanguage("EN");
    }
  }, []);

  const languages = [
    // English
    { code: "EN", name: "English (UK)", flag: "🇬🇧", region: "English" },
    { code: "US", name: "English (US)", flag: "🇺🇸", region: "English" },
    
    // European
    { code: "FR", name: "Français", flag: "🇫🇷", region: "European" },
    { code: "DE", name: "Deutsch", flag: "🇩🇪", region: "European" },
    { code: "ES", name: "Español", flag: "🇪🇸", region: "European" },
    { code: "IT", name: "Italiano", flag: "🇮🇹", region: "European" },
    { code: "PT", name: "Português", flag: "🇵🇹", region: "European" },
    { code: "NL", name: "Nederlands", flag: "🇳🇱", region: "European" },
    
    // Asian
    { code: "HI", name: "हिन्दी", flag: "🇮🇳", region: "Asian" },
    { code: "AR", name: "العربية", flag: "🇸🇦", region: "Asian" },
    { code: "ZH", name: "中文", flag: "🇨🇳", region: "Asian" },
    { code: "JA", name: "日本語", flag: "🇯🇵", region: "Asian" },
    { code: "KO", name: "한국어", flag: "🇰🇷", region: "Asian" },
  ];

  const handleLanguageChange = (langCode) => {
    setCurrentLanguage(langCode);
    localStorage.setItem("preferredLanguage", langCode);
    setIsOpen(false);
    // In a real implementation, this would trigger a language change across the app
    console.log("Language changed to:", langCode);
  };

  const groupedLanguages = languages.reduce((acc, lang) => {
    if (!acc[lang.region]) {
      acc[lang.region] = [];
    }
    acc[lang.region].push(lang);
    return acc;
  }, {});

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "8px 12px",
          backgroundColor: "transparent",
          border: "1px solid #e5e5e5",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: 500,
          color: "#1a1a1a",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#0066cc";
          e.currentTarget.style.color = "#0066cc";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "#e5e5e5";
          e.currentTarget.style.color = "#1a1a1a";
        }}
      >
        <Globe size={16} />
        {currentLanguage}
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999,
            }}
          />
          {/* Dropdown */}
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              right: 0,
              backgroundColor: "#FFFFFF",
              border: "1px solid #e5e5e5",
              borderRadius: "4px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              minWidth: "240px",
              maxHeight: "400px",
              overflowY: "auto",
              zIndex: 1000,
            }}
          >
            {Object.entries(groupedLanguages).map(([region, langs]) => (
              <div key={region}>
                <div
                  style={{
                    padding: "8px 16px",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#999999",
                    backgroundColor: "#fafafa",
                    borderBottom: "1px solid #e5e5e5",
                  }}
                >
                  {region}
                </div>
                {langs.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      backgroundColor:
                        currentLanguage === lang.code ? "#f5f5f5" : "#FFFFFF",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "14px",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      color: "#1a1a1a",
                      transition: "background-color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (currentLanguage !== lang.code) {
                        e.currentTarget.style.backgroundColor = "#fafafa";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (currentLanguage !== lang.code) {
                        e.currentTarget.style.backgroundColor = "#FFFFFF";
                      }
                    }}
                  >
                    <span style={{ fontSize: "18px" }}>{lang.flag}</span>
                    <span style={{ fontWeight: 500 }}>{lang.name}</span>
                    {currentLanguage === lang.code && (
                      <span
                        style={{
                          marginLeft: "auto",
                          color: "#0066cc",
                          fontSize: "16px",
                        }}
                      >
                        ✓
                      </span>
                    )}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSelector;
