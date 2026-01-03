import React, { useState, useEffect } from "react";
import { X, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    advertising: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Load saved preferences
      const savedPrefs = JSON.parse(localStorage.getItem("cookiePreferences") || "{}");
      setPreferences(prev => ({ ...prev, ...savedPrefs }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      advertising: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookiePreferences", JSON.stringify(allAccepted));
    setShowBanner(false);
    // Initialize tracking scripts here
    initializeTracking(allAccepted);
  };

  const handleRejectAll = () => {
    const rejected = {
      necessary: true,
      analytics: false,
      advertising: false,
    };
    setPreferences(rejected);
    localStorage.setItem("cookieConsent", "rejected");
    localStorage.setItem("cookiePreferences", JSON.stringify(rejected));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", "custom");
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    setShowBanner(false);
    setShowPreferences(false);
    // Initialize only accepted tracking
    initializeTracking(preferences);
  };

  const initializeTracking = (prefs) => {
    // Initialize tracking scripts based on preferences
    if (prefs.analytics) {
      // Initialize analytics (e.g., Google Analytics)
      console.log("Analytics enabled");
    }
    if (prefs.advertising) {
      // Initialize Meta Pixel and other ad tracking
      console.log("Advertising tracking enabled");
    }
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#FFFFFF",
          borderTop: "1px solid #e5e5e5",
          boxShadow: "0 -4px 12px rgba(0, 0, 0, 0.1)",
          zIndex: 10000,
          padding: "24px",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            flexWrap: "wrap",
          }}
          className="cookie-banner-content"
        >
          <div style={{ flex: 1, minWidth: "300px" }}>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 600,
                marginBottom: "8px",
                color: "#1a1a1a",
              }}
            >
              🍪 We Value Your Privacy
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#666666",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              We use cookies to improve your experience, analyze site traffic, and
              measure advertising effectiveness. By clicking "Accept All," you consent
              to our use of cookies.{" "}
              <Link
                to="/privacy"
                style={{
                  color: "#0066cc",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                Privacy Policy
              </Link>
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => setShowPreferences(true)}
              style={{
                padding: "10px 20px",
                fontSize: "14px",
                fontWeight: 500,
                backgroundColor: "#FFFFFF",
                color: "#666666",
                border: "1px solid #e5e5e5",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "all 0.2s ease",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#0066cc";
                e.currentTarget.style.color = "#0066cc";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e5e5e5";
                e.currentTarget.style.color = "#666666";
              }}
            >
              <Settings size={16} />
              Preferences
            </button>
            <button
              onClick={handleRejectAll}
              style={{
                padding: "10px 20px",
                fontSize: "14px",
                fontWeight: 500,
                backgroundColor: "#FFFFFF",
                color: "#1a1a1a",
                border: "1px solid #e5e5e5",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f5f5f5";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FFFFFF";
              }}
            >
              Reject All
            </button>
            <button
              onClick={handleAcceptAll}
              style={{
                padding: "10px 24px",
                fontSize: "14px",
                fontWeight: 500,
                backgroundColor: "#0066cc",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#0052a3";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#0066cc";
              }}
            >
              Accept All
            </button>
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      {showPreferences && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 10001,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
          onClick={() => setShowPreferences(false)}
        >
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              maxWidth: "600px",
              width: "100%",
              maxHeight: "80vh",
              overflow: "auto",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              style={{
                padding: "24px",
                borderBottom: "1px solid #e5e5e5",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  margin: 0,
                  color: "#1a1a1a",
                }}
              >
                Cookie Preferences
              </h2>
              <button
                onClick={() => setShowPreferences(false)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px",
                  color: "#666666",
                }}
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div style={{ padding: "24px" }}>
              {/* Necessary Cookies */}
              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      margin: 0,
                      color: "#1a1a1a",
                    }}
                  >
                    Necessary Cookies
                  </h3>
                  <div
                    style={{
                      padding: "4px 12px",
                      backgroundColor: "#e5e5e5",
                      borderRadius: "4px",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#666666",
                    }}
                  >
                    Always Active
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666666",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Essential for the website to function properly. These cookies enable
                  basic features like page navigation and access to secure areas.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      margin: 0,
                      color: "#1a1a1a",
                    }}
                  >
                    Analytics Cookies
                  </h3>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          analytics: e.target.checked,
                        })
                      }
                      style={{
                        width: "20px",
                        height: "20px",
                        cursor: "pointer",
                      }}
                    />
                  </label>
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666666",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Help us understand how visitors interact with our website by
                  collecting and reporting anonymous information.
                </p>
              </div>

              {/* Advertising Cookies */}
              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      margin: 0,
                      color: "#1a1a1a",
                    }}
                  >
                    Advertising Cookies
                  </h3>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={preferences.advertising}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          advertising: e.target.checked,
                        })
                      }
                      style={{
                        width: "20px",
                        height: "20px",
                        cursor: "pointer",
                      }}
                    />
                  </label>
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666666",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Used to track visitors across websites and measure advertising
                  campaign effectiveness. Includes Meta Pixel and similar tools.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div
              style={{
                padding: "24px",
                borderTop: "1px solid #e5e5e5",
                display: "flex",
                justifyContent: "flex-end",
                gap: "12px",
              }}
            >
              <button
                onClick={() => setShowPreferences(false)}
                style={{
                  padding: "10px 20px",
                  fontSize: "14px",
                  fontWeight: 500,
                  backgroundColor: "#FFFFFF",
                  color: "#666666",
                  border: "1px solid #e5e5e5",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleSavePreferences}
                style={{
                  padding: "10px 24px",
                  fontSize: "14px",
                  fontWeight: 500,
                  backgroundColor: "#0066cc",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .cookie-banner-content {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </>
  );
};

export default CookieConsent;
