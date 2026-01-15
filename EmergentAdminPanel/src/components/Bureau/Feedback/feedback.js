import React, { useEffect, useRef, useState } from "react";
import {
  Plus,
  Search,
  Mail,
  CheckCircle ,
  Eye,
  Calendar,
  Clock,
  StickyNote,
  Briefcase,
  GraduationCap,
  Users,
  Trash,
  Phone,
  Edit
} from "lucide-react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import Swal from "sweetalert2";





export default function Feedback() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [searchTerm, setSearchTerm] = useState("");
  // const [genderFilter, setGenderFilter] = useState("all");
  // const [statusFilter, setStatusFilter] = useState("all");

  const [page, setPage] = useState(1);
  const [limit, setlimit] = useState(6); // items per page
  const [total, setTotal] = useState(0);
  const [active_feedback, setactive_feedback] = useState(0);
  const [pending_feedback, setpending_feedback] = useState(0);
  const [loading, setLoading] = useState(false);
 


 const [all_feedback, setall_feedback] = useState([]);

  const get_all_feedback = async () => {
    try {
      setLoading(true);
      const resp = await api.get(
        `api/feedback/Get-feedback?page=${page}&limit=${limit}`
      );
console.log(resp);

      setall_feedback(resp.data.feedback);
      setTotal(resp.data.total);
      setactive_feedback(resp.data.approved)
      setpending_feedback(resp.data.pending)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  

  useEffect(() => {
    get_all_feedback();
  }, [page, limit,searchTerm]);

  // pagination

  // calculate total pages
  const totalPages = Math.ceil(total / limit);

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handleLimitChange = (e) => {
    setlimit(Number(e.target.value));
    setPage(1); // reset to first page when limit changes
  };



    // delete profile

    const delete_blog = async (_id) => {
    try {
      const confirmDelete = await Swal.fire({
        title: "Are you sure?",
        text: "This action will permanently delete this blog!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
        reverseButtons: true,
        customClass: {
          confirmButton: "swal-confirm-btn",
          cancelButton: "swal-confirm-btn",
        },
      });

      // If user cancels, stop here
      if (!confirmDelete.isConfirmed) return;

      setLoading(true);
      const resp = await api.delete(`api/blog/delete-blog/${_id}`);

      if (resp.status === 200) {
        await Swal.fire({
          icon: "success",
          title: "Blog Deleted!",
          text: resp.data.message || "Blog deleted successfully.",
          confirmButtonText: "OK",
          customClass: {
            confirmButton: "swal-confirm-btn",
          },
        });

        // Refresh after confirmation closes
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text:
          error.response?.data?.error ||
          "Something went wrong! Please try again.",
        confirmButtonText: "OK",
        customClass: {
          confirmButton: "swal-confirm-btn",
        },
      });
    } finally {
      setLoading(false);
    }
  };

 const [open, setOpen] = useState(false);
 const [editData, setEditData] = useState(null);

 const openEditModal=(blog)=>
 {
  setOpen(true)
  setEditData(blog)
 }

const toggleBlogStatus = async (id, currentStatus) => {
  try {
    // Optional: show loading toast
    Swal.fire({
      title: "Updating status...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
      toast: true,
      position: "top-end",
      showConfirmButton: false,
    });

    // Call API
    const res = await api.patch(`/api/feedback/Approved-feedback/${id}`);

    Swal.close();

    if (res.status===200) {
      Swal.fire({
        icon: "success",
        title: "Status Updated",
        text: res.data.data.isApproved ? "Feedback is now Approved" : "Feedback is now Pending",
        timer: 2000,
        showConfirmButton: false,
        toast: true,
        position: "top-end",
      });

      // Refresh blog list or update state locally
      get_all_feedback(); // Or update state: setAllBlog(prev => prev.map(...))
    }
  } catch (err) {
    Swal.close();
    Swal.fire({
      icon: "error",
      title: "Error",
      text: err?.response?.data?.message || "Could not update status",
      toast: true,
      position: "top-end",
    });
  }
};

const [viewBlog, setViewBlog] = useState(null);

useEffect(() => {
  if (viewBlog) {
    Swal.fire({
      title: "Full Blog Content",
      html: viewBlog, // Render HTML safely
      width: "600px",
      showCloseButton: true,
      focusConfirm: false,
    }).then(() => setViewBlog(null)); // reset after close
  }
}, [viewBlog]);

const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < rating ? "text-yellow-400" : "text-gray-300"}>
      ★
    </span>
  ));
};



  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Blog</h1>
            <p className="text-gray-600">
              Manage your blog's
            </p>
          </div>

        </div>




        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search profiles by name or occupation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full border border-gray-300 rounded-md py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-2xl font-bold text-blue-600">
              {total}
            </div>
            <p className="text-sm text-gray-600">Total Feedback</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-2xl font-bold text-green-600">
              {/* {active_profile || 0} */}
            </div>
            <p className="text-sm text-gray-600">Today's Feedback</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-2xl font-bold text-purple-600">
              {pending_feedback}
            </div>
            <p className="text-sm text-gray-600">Pending Feedback's</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-2xl font-bold text-purple-600">
              {active_feedback}
            </div>
            <p className="text-sm text-gray-600">Approved Feedback's</p>
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="w-full">
          {/* Loading Spinner */}
          {loading ? (
            <div className="w-full flex flex-wrap justify-center gap-6">
              {[...Array(limit)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-100 animate-pulse rounded-lg shadow p-4 w-80 h-64"
                >
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-gray-300 mr-3" />
                    <div className="flex flex-col space-y-2 w-2/3">
                      <div className="h-3 bg-gray-300 rounded w-3/4" />
                      <div className="h-3 bg-gray-300 rounded w-1/2" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-300 rounded w-full" />
                    <div className="h-3 bg-gray-300 rounded w-5/6" />
                    <div className="h-3 bg-gray-300 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
  {all_feedback?.map((review) => (
  <div
      key={review._id}
      className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
    >
{/* ⭐ Rating Stars */} 
<div className="flex items-center justify-between mb-3"> 
    <div className="text-lg"> {renderStars(review.rating)}
         </div> <span className="text-sm text-gray-500"> 
            {new Date(review.createdAt).toLocaleDateString()} 
            </span> 
            </div>

      {/* Blog Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold">{review?.full_name || ""}</h2>

        </div>

        {/* Active / Inactive Toggle */}
        <label className="inline-flex relative items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={review.isApproved}
            onChange={() => toggleBlogStatus(review._id, !review.isApproved)}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-600 transition-colors"></div>
          <span className="ml-3 text-sm font-medium text-gray-900">
            {review.isApproved ? "Approved" : "Pending"}
          </span>
        </label>
      </div>

      {/* Blog Description / Info */}
      <div className="space-y-2 text-sm text-gray-600 flex-1">
        <div className="flex items-center gap-2">
          <span>{review?.company_name || ""}</span>

        </div>
              <div className="flex items-center gap-2">
          <span style={{color:"blue",fontWeight:"bold"}}>{review?.industry || ""}</span>

        </div>

    <div className="flex items-center gap-2">
          <span>{review?.feedback || ""}</span>

        </div>

        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-gray-400" />
          <span>{new Date(review?.createdAt).toLocaleDateString()}</span>
        </div>
      </div>

      {/* Feedback Actions */}
      <div className="flex gap-2 mt-4">



        {/* Delete Blog */}
        <button
          onClick={() => delete_blog(review._id)}
          className="bg-red-600 hover:bg-red-700 text-white py-2 rounded-md flex-1 flex items-center justify-center"
        >
          <Trash className="mr-2 h-4 w-4" />
          Delete
        </button>
      </div>
    </div>

  ))}
</div>

          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
              {/* Limit Dropdown */}
              <div className="flex items-center gap-2 text-sm">
                <label htmlFor="limit" className="text-gray-700">
                  Show:
                </label>
                <select
                  id="limit"
                  value={limit}
                  onChange={handleLimitChange}
                  className="border border-gray-300 rounded-md px-2 py-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400"
                >
                  <option value={6}>6</option>
                  <option value={12}>12</option>
                  <option value={24}>24</option>
                  <option value={48}>48</option>
                </select>
                <span className="text-gray-600">per page</span>
              </div>

              {/* Page Controls */}
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrev}
                  disabled={page === 1}
                  className={`px-4 py-2 rounded-md border ${
                    page === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  Prev
                </button>

                <span className="text-sm text-gray-700">
                  Page {page} of {totalPages}
                </span>

                <button
                  onClick={handleNext}
                  disabled={page === totalPages}
                  className={`px-4 py-2 rounded-md border ${
                    page === totalPages
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Empty State */}
        {all_feedback?.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No profiles found
            </h3>
   
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
