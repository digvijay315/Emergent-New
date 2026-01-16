"use client"
import React, { useState,useEffect } from "react";
import { Calendar, ArrowRight, Mail } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import api from "@/components/api"
import { useRouter } from "next/navigation";

export const Blog = () => {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);

    // Mock subscription - will be replaced with backend
    setTimeout(() => {
      toast.success("Successfully subscribed! Check your email for confirmation.");
      setEmail("");
      setIsSubscribing(false);
    }, 1000);
  };



  const [page, setPage] = useState(1);
  const [limit, setlimit] = useState(6);

   const [blogPosts, setblogPosts] = useState([]);

  const get_all_blogs = async () => {
    try {
    
      const resp = await api.get(
        `api/blog/all-blogs?page=${page}&limit=${limit}`
      );

      setblogPosts(resp.data.Blog);
      setTotal(resp.data.total);
      setactive_profile(resp.data.active)
    } catch (error) {
      console.log(error);
    } 
  }

console.log(blogPosts);

  

  useEffect(() => {
    get_all_blogs();
  }, [page, limit]);

  const stripHtml = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};


  return (
    <div>
      <Header/>
      {/* Hero */}
      <section className="section-spacing" style={{ paddingTop: "160px", paddingBottom: "96px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 className="hero-headline" style={{ marginBottom: "24px" }}>
            AI Automation
            <br />
            <span className="accent-text">Insights & Updates</span>
          </h1>
          <p className="body-text-large" style={{ maxWidth: "700px", margin: "0 auto", color: "#666666" }}>
            Practical insights on AI automation, workflow optimization, and building scalable operations.
          </p>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="section-spacing" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", padding: "64px 32px", backgroundColor: "#FFFFFF", borderRadius: "4px", border: "1px solid #e5e5e5" }}>
            <Mail size={48} color="#0066cc" style={{ margin: "0 auto 24px" }} />
            <h2 style={{ fontSize: "32px", fontWeight: 600, marginBottom: "16px", color: "#1a1a1a" }}>
              Subscribe for AI Insights & Automation Updates
            </h2>
            <p className="body-text" style={{ color: "#666666", marginBottom: "32px" }}>
              Get practical automation strategies, industry insights, and case studies delivered to your inbox. No spam, unsubscribe anytime.
            </p>
            <form onSubmit={handleSubscribe} style={{ display: "flex", gap: "12px", maxWidth: "500px", margin: "0 auto" }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@company.com"
                required
                style={{ flex: 1, padding: "14px 20px", fontSize: "16px", border: "1px solid #e5e5e5", borderRadius: "4px", outline: "none" }}
              />
              <button type="submit" disabled={isSubscribing} className="btn-primary" style={{ opacity: isSubscribing ? 0.7 : 1 }}>
                {isSubscribing ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            <p style={{ fontSize: "13px", color: "#999999", marginTop: "16px", margin: "16px 0 0 0" }}>
              By subscribing, you agree to receive emails from IntelliviaAI. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-spacing">
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center", marginBottom: "64px" }}>
            Latest Articles
          </h2>
          <div className="grid-3">
            {blogPosts?.map((post, index) => (
              <article
                key={index}
                className="hover-lift"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #e5e5e5",
                  borderRadius: "4px",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <div style={{ height: "200px", overflow: "hidden", backgroundColor: "#f5f5f5" }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
             
                    <span style={{ fontSize: "13px", color: "#999999", display: "flex", alignItems: "center", gap: "6px" }}>
                      <Calendar size={14} />
                      {new Date(post.createdAt).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px", color: "#1a1a1a", lineHeight: 1.4 }}>
                    {post.title}
                  </h3>
                  <p className="body-text" style={{ color: "#666666", marginBottom: "16px", fontSize: "15px" }}>
                    {post.description}
                  </p>
                      <p
                        className="text-gray-600 text-[15px] line-clamp-3"
                      >
                        {stripHtml(post.fullBlog)}
                      </p>


                  <div onClick={() => router.push(`/blog/${post._id}`)} style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#0066cc", fontWeight: 500, fontSize: "14px" }}>
                    Read More
                    <ArrowRight size={16} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-spacing" style={{ backgroundColor: "#fafafa" }}>
        <div className="container">
          <h2 className="section-header" style={{ textAlign: "center", marginBottom: "48px" }}>
            Explore by Topic
          </h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            {["AI Automation", "Business Strategy", "Productivity", "Case Studies", "AI Agents"].map((category) => (
              <button
                key={category}
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #e5e5e5",
                  borderRadius: "4px",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#1a1a1a",
                  cursor: "pointer",
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
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      <Chatbot/>
      <Footer/>
    </div>
  );
};

export default Blog;
