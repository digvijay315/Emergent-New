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
import CircularProgress from "@mui/material/CircularProgress";
import Swal from "sweetalert2";
import BlogModal from "./add_new_blog";




export default function Blog() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [searchTerm, setSearchTerm] = useState("");
  // const [genderFilter, setGenderFilter] = useState("all");
  // const [statusFilter, setStatusFilter] = useState("all");

  const [page, setPage] = useState(1);
  const [limit, setlimit] = useState(6); // items per page
  const [total, setTotal] = useState(0);
  const [active_profile, setactive_profile] = useState(0);
  const [loading, setLoading] = useState(false);
 


 const [all_blog, setall_blog] = useState([]);

  const get_all_blogs = async () => {
    try {
      setLoading(true);
      const resp = await api.get(
        `api/blog/all-blogs?page=${page}&limit=${limit}&search=${searchTerm}`
      );

      setall_blog(resp.data.Blog);
      setTotal(resp.data.total);
      setactive_profile(resp.data.active)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  

  useEffect(() => {
    get_all_blogs();
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
    const res = await api.patch(`/api/blog/toggle-status/${id}`);

    Swal.close();

    if (res.data.success) {
      Swal.fire({
        icon: "success",
        title: "Status Updated",
        text: res.data.isActive ? "Blog is now Active" : "Blog is now Inactive",
        timer: 2000,
        showConfirmButton: false,
        toast: true,
        position: "top-end",
      });

      // Refresh blog list or update state locally
      get_all_blogs(); // Or update state: setAllBlog(prev => prev.map(...))
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

const [viewType, setViewType] = useState("grid"); // grid | list

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


      <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full mt-4 mb-2 sm:mt-0 gap-2">

  <button
    onClick={() => setOpen(true)}
    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center justify-center w-full sm:w-auto"
  >
    <Plus className="mr-2 h-4 w-4" />
    
     Add New Blog
  </button>
           <div className="flex justify-end gap-2 mb-4">
  <button
    onClick={() => setViewType("grid")}
    className={`px-3 py-2 rounded-md border ${
      viewType === "grid"
        ? "bg-gray-900 text-white"
        : "bg-white hover:bg-gray-100"
    }`}
  >
    Grid View
  </button>

  <button
    onClick={() => setViewType("list")}
    className={`px-3 py-2 rounded-md border ${
      viewType === "list"
        ? "bg-gray-900 text-white"
        : "bg-white hover:bg-gray-100"
    }`}
  >
    List View
  </button>
</div>
{open && (
  <BlogModal
    open={open}
    handleClose={() => setOpen(false)}
    editData={editData}
  />
)}

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
            <p className="text-sm text-gray-600">Total Blog</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-2xl font-bold text-green-600">
              {active_profile || 0}
            </div>
            <p className="text-sm text-gray-600">Today's Blog</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-2xl font-bold text-purple-600">
              {Array.isArray(all_blog)
                ? all_blog.filter(
                    (p) => p?.PersonalDetails?.Gender === "Male"
                  ).length
                : 0}
            </div>
            <p className="text-sm text-gray-600">Post Blog's</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-2xl font-bold text-purple-600">
              {Array.isArray(all_blog)
                ? all_blog.filter(
                    (p) => p?.PersonalDetails?.Gender === "Female"
                  ).length
                : 0}
            </div>
            <p className="text-sm text-gray-600">Pending Blog's</p>
          </div>
        </div>

        {/* Profiles Grid */}
   <div className="w-full">


  {/* ================= LOADING ================= */}
  {loading ? (
    viewType === "grid" ? (
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
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full">
          <tbody>
            {[...Array(limit)].map((_, i) => (
              <tr key={i} className="animate-pulse border-t">
                {[...Array(6)].map((_, j) => (
                  <td key={j} className="px-4 py-3">
                    <div className="h-3 bg-gray-300 rounded w-full"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  ) : all_blog?.length === 0 ? (
    <div className="text-center py-20 text-gray-500">
      No blogs found
    </div>
  ) : (
    <>
      {/* ================= GRID VIEW ================= */}
      {viewType === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {all_blog?.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
            >
              <div className="w-full mb-4 overflow-hidden rounded-lg shadow-lg">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-lg transform transition duration-300 hover:scale-105"
                />
              </div>

              {/* Blog Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold">{blog?.title || ""}</h2>
                </div>

                {/* Active / Inactive Toggle */}
                <label className="inline-flex relative items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={blog.isActive}
                    onChange={() => toggleBlogStatus(blog._id, !blog.isActive)}
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-600 transition-colors"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900">
                    {blog.isActive ? "Active" : "Inactive"}
                  </span>
                </label>
              </div>

              {/* Blog Description / Info */}
              <div className="space-y-2 text-sm text-gray-600 flex-1">
                <div className="flex items-center gap-2">
                  <StickyNote className="h-4 w-4 text-gray-400" />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: blog?.fullBlog?.substring(0, 100) + "...",
                    }}
                  />
                  {/* View Full Blog Icon */}
                  <button
                    onClick={() => setViewBlog(blog.fullBlog)}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                    title="View Full Blog"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span>{new Date(blog?.createdAt).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Blog Actions */}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => openEditModal(blog)}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md flex-1 flex items-center justify-center"
                >
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </button>

                <button
                  onClick={() => delete_blog(blog._id)}
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

      {/* ================= LIST VIEW ================= */}
      {viewType === "list" && (
      <div className="overflow-x-auto bg-white rounded-lg shadow">
    <table className="min-w-full">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-3 text-left">Title</th>
          <th className="px-4 py-3 text-left">Date</th>
          <th className="px-4 py-3 text-left">Status</th>
          <th className="px-4 py-3 text-left">Full Blog</th>
          <th className="px-4 py-3 text-left">Actions</th>
        </tr>
      </thead>

      <tbody>
        {all_blog?.map((blog) => (
          <tr key={blog._id} className="border-t hover:bg-gray-50">
            {/* Title */}
            <td className="px-4 py-3 font-medium">{blog.title}</td>

            {/* Date */}
            <td className="px-4 py-3 text-sm text-gray-500">
              {new Date(blog.createdAt).toLocaleDateString()}
            </td>

            {/* Status Toggle */}
            <td className="px-4 py-3">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={blog.isActive}
                  onChange={() =>
                    toggleBlogStatus(blog._id, !blog.isActive)
                  }
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-600 transition-colors"></div>
                <span className="ml-2 text-sm">
                  {blog.isActive ? "Active" : "Inactive"}
                </span>
              </label>
            </td>

            {/* Full Blog */}
            <td className="px-4 py-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span>
                  {blog.fullBlog?.substring(0, 100)}...
                </span>
                <button
                  onClick={() => setViewBlog(blog.fullBlog)}
                  className="text-blue-600 hover:text-blue-800"
                  title="View Full Blog"
                >
                  <Eye className="h-4 w-4" />
                </button>
              </div>
            </td>

            {/* Actions */}
            <td className="px-4 py-3 flex gap-2">
              <button
                onClick={() => openEditModal(blog)}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => delete_blog(blog._id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
      )}
    </>
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
        {all_blog?.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No profiles found
            </h3>
            {/* <p className="text-gray-600 mb-4">
              {searchTerm || genderFilter !== "all" || statusFilter !== "all"
                ? "Try adjusting your search criteria"
                : "Get started by adding your first profile"}
            </p> */}
            {/* {!searchTerm &&
              genderFilter === "all" &&
              statusFilter === "all" && (
                <a href="/profiles/new">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md flex items-center mx-auto">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Your First Profile
                  </button>
                </a>
              )} */}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}



