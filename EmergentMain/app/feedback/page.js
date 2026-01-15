"use client";

import React, { useState, useEffect } from "react";
import { Star, Send, CheckCircle, User, Building2 } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import api from "../../components/api"


export const Feedback = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    company_name: "",
    industry: "",
    rating: 0,
    feedback: "",
    isApproved:false
  });
  const [hoveredStar, setHoveredStar] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [approvedReviews, setApprovedReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApprovedReviews();
  }, []);

  const fetchApprovedReviews = async () => {
    try {
      const response = await api.get(`api/feedback/Get-approved-feedback`);

      if ( response.status===200) {
        setApprovedReviews(response.data.feedback);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };
  console.log(approvedReviews);
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleStarClick = (rating) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.rating === 0) {
      toast.error("Please select a star rating");
      return;
    }


    setIsSubmitting(true);

    try {
 const response = await toast.promise(
       api.post("api/feedback/Save-feedback", formData),
       {
         loading: "Feedback Submitting...",
         success: (res) =>
           res.data.message || "Feedback Submitted successfully!",
         error: (err) =>
           err.response?.data?.message ||
           err.response?.data?.errors?.[0] ||
           "Something went wrong. Please try again.",
       }
     );
console.log(response);


        setFormData({
          full_name: "",
          company_name: "",
          industry: "",
          rating: 0,
          feedback: "",
        });
      
    } catch (error) {
      toast.error("Failed to submit feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const StarRating = ({ rating, interactive = false, size = 24 }) => (
    <div style={{ display: "flex", gap: "4px" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={interactive ? () => handleStarClick(star) : undefined}
          onMouseEnter={interactive ? () => setHoveredStar(star) : undefined}
          onMouseLeave={interactive ? () => setHoveredStar(0) : undefined}
          style={{
            background: "none",
            border: "none",
            cursor: interactive ? "pointer" : "default",
            padding: "2px",
            transition: "transform 0.2s ease",
            transform:
              interactive && (hoveredStar >= star || formData.rating >= star)
                ? "scale(1.1)"
                : "scale(1)",
          }}
          disabled={!interactive}
        >
          <Star
            size={size}
            fill={
              (interactive ? hoveredStar || formData.rating : rating) >= star
                ? "#FFB800"
                : "none"
            }
            color={
              (interactive ? hoveredStar || formData.rating : rating) >= star
                ? "#FFB800"
                : "#CCCCCC"
            }
            strokeWidth={1.5}
          />
        </button>
      ))}
    </div>
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div>
      <Header/>
      {/* Hero */}
      <section
        style={{
          paddingTop: "160px",
          paddingBottom: "96px",
          backgroundColor: "#000000",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 className="hero-headline" style={{  marginBottom: "24px",color:"white" }}>
            Share Your
            <br />
            <span className="hero-headline" style={{ color: "#2563eb" }}>Experience</span>
          </h1>
          <p style={{ fontSize: "1.125rem", color: "#aaaaaa", maxWidth: "700px", margin: "0 auto" }}>
            We value your feedback. Help us improve by sharing your experience working with IntelliviaAI.
          </p>
        </div>
      </section>

      {/* Feedback Form */}
      <section
        style={{
          padding: "64px 16px",
          backgroundColor: "#0f0f0f",
          display: "flex",
          justifyContent: "center",
          
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "700px",
            backgroundColor: "#1a1a1a",
            padding: "48px",
            borderRadius: "12px",
            border: "1px solid #333333",
          }}
        >
          {submitted ? (
            <div style={{ textAlign: "center" }}>
              <CheckCircle size={64} color="#22c55e" style={{ marginBottom: "24px" }} />
              <h2 style={{ fontSize: "2rem", fontWeight: "600", color: "#ffffff", marginBottom: "16px" }}>
                Thank You for Your Feedback
              </h2>
              <p style={{ color: "#aaaaaa", marginBottom: "32px", lineHeight: "1.6" }}>
                We value transparency and continuous improvement. Your feedback will be reviewed and may be featured on our website after approval.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#2563eb",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Submit Another Review
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "16px", color: "#ffffff" }}>
                Leave a Review
              </h2>
              <p style={{ color: "#aaaaaa", marginBottom: "32px" }}>
                Your honest feedback helps us serve you better
              </p>

              {/* Star Rating */}
              <div style={{ marginBottom: "24px" }}>
                <label style={{ color: "#ffffff", display: "block", fontWeight: "600", marginBottom: "8px" }}>
                  Your Rating *
                </label>
                <StarRating rating={formData.rating} interactive={true} size={32} />
                <p style={{ color: "#888888", fontSize: "0.875rem", marginTop: "8px" }}>
                  {formData.rating === 0 && "Click to rate"}
                  {formData.rating === 1 && "Poor"}
                  {formData.rating === 2 && "Fair"}
                  {formData.rating === 3 && "Good"}
                  {formData.rating === 4 && "Very Good"}
                  {formData.rating === 5 && "Excellent"}
                </p>
              </div>

              {/* Full Name */}
              <div style={{ marginBottom: "24px" }}>
                <label style={{ color: "#ffffff", display: "block", fontWeight: "600", marginBottom: "8px" }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                  placeholder="John Smith"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    fontSize: "16px",
                    borderRadius: "6px",
                    border: "1px solid #333333",
                    outline: "none",
                    backgroundColor: "#0f0f0f",
                    color: "#ffffff",
                  }}
                />
              </div>

              {/* Company Name */}
              <div style={{ marginBottom: "24px" }}>
                <label style={{ color: "#ffffff", display: "block", fontWeight: "600", marginBottom: "8px" }}>
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  placeholder="Your Company Ltd."
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    fontSize: "16px",
                    borderRadius: "6px",
                    border: "1px solid #333333",
                    outline: "none",
                    backgroundColor: "#0f0f0f",
                    color: "#ffffff",
                  }}
                />
              </div>

              {/* Industry */}
              <div style={{ marginBottom: "24px" }}>
                <label style={{ color: "#ffffff", display: "block", fontWeight: "600", marginBottom: "8px" }}>
                  Industry *
                </label>
                <input
                  type="text"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Healthcare, Finance, E-commerce"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    fontSize: "16px",
                    borderRadius: "6px",
                    border: "1px solid #333333",
                    outline: "none",
                    backgroundColor: "#0f0f0f",
                    color: "#ffffff",
                  }}
                />
              </div>

              {/* Feedback */}
              <div style={{ marginBottom: "32px" }}>
                <label style={{ color: "#ffffff", display: "block", fontWeight: "600", marginBottom: "8px" }}>
                  Your Feedback *
                </label>
                <textarea
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Share your experience working with IntelliviaAI..."
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    fontSize: "16px",
                    borderRadius: "6px",
                    border: "1px solid #333333",
                    outline: "none",
                    backgroundColor: "#0f0f0f",
                    color: "#ffffff",
                    resize: "vertical",
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: "100%",
                  padding: "12px",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#ffffff",
                  backgroundColor: isSubmitting ? "#2563eb99" : "#2563eb",
                  borderRadius: "6px",
                  border: "none",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                {isSubmitting ? "Submitting..." : "Submit Feedback"}
                <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Approved Reviews */}
      <section style={{ padding: "64px 16px", backgroundColor: "#f5f5f5" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "600", textAlign: "center", marginBottom: "48px" }}>
            What Our Clients Say
          </h2>

          {loading ? (
            <div style={{ textAlign: "center", padding: "48px 0" }}>
              <p style={{ color: "#888888" }}>Loading reviews...</p>
            </div>
          ) : approvedReviews?.length === 0 ? (
            <div style={{ textAlign: "center", padding: "48px 0" }}>
              <p style={{ color: "#888888" }}>Be the first to leave a review!</p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
              }}
            >
              {approvedReviews?.map((review) => (
                <div
                  key={review.id}
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "24px",
                    borderRadius: "12px",
                    border: "1px solid #e5e5e5",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <StarRating rating={review.rating} size={20} />
                  <p style={{ color: "#111111", fontStyle: "italic" }}>&quot;{review.feedback}&quot;</p>
                  <div style={{ borderTop: "1px solid #e5e5e5", paddingTop: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                      <User size={16} color="#0066cc" />
                      <span style={{ fontWeight: "600", color: "#111111" }}>{review.full_name}</span>
                    </div>
                    {review.company_name && (
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                        <Building2 size={16} color="#666666" />
                        <span style={{ color: "#666666", fontSize: "0.75rem" }}>{review.company_name}</span>
                      </div>
                    )}
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px" }}>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "#2563eb",
                          backgroundColor: "#ebf4ff",
                          padding: "2px 6px",
                          borderRadius: "4px",
                        }}
                      >
                        {review.industry}
                      </span>
                  <span style={{ fontSize: "0.75rem", color: "#888888" }}>
                      {new Date(review.createdAt).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Chatbot/>
      <Footer/>
    </div>
  );
};

export default Feedback;
