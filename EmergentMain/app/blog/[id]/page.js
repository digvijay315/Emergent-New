// app/blog/[id]/page.js
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import api from "@/components/api";
import Header from "@/components/Header";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";

export default function BlogDetails() {
  const { id } = useParams(); // get _id from URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);


    const fetchBlog = async () => {
      try {
        const res = await api.get(`api/blog/blog-by-id/${id}`);
        setBlog(res.data.blog);
      } catch (err) {
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    }; 
    console.log(blog);
    

    useEffect(()=>
    {
        fetchBlog()
    },[])

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!blog) return <div className="text-center py-10 text-red-500">Blog not found</div>;

  return (
    <div>
    <Header/>
              {/* Hero */}
             
      <article className="section-spacing" style={{ paddingTop: "160px", paddingBottom: "96px" }}>
        <div className="container" style={{ textAlign: "center" }}>
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

        <p className="text-sm text-gray-500 mb-6">
          {new Date(blog.createdAt).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
      

        {blog.image && (
          <img
  src={blog.image}
  alt={blog.title}
  className="w-full max-w-full rounded-lg mb-4 object-contain"
  style={{borderRadius:"10px"}}
/>

        )}
  </div>
        <div
          className="container"
          dangerouslySetInnerHTML={{ __html: blog.fullBlog }}
        />
      </article>
      <Chatbot/>
      <Footer/>
    </div>
  );
}
