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
  Phone
} from "lucide-react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import CircularProgress from "@mui/material/CircularProgress";
import Swal from "sweetalert2";

// Mock data (replace with your API data)
const mockProfiles = [
  {
    id: 1,
    name: "Rahul Sharma",
    age: 28,
    gender: "male",
    occupation: "Software Engineer",
    education: "B.Tech",
    city: "Delhi",
    state: "Delhi",
    income: "₹10 LPA",
    height: "5'9\"",
    isActive: true,
    photos: ["https://randomuser.me/api/portraits/men/1.jpg"],
  },
  {
    id: 2,
    name: "Priya Mehta",
    age: 25,
    gender: "female",
    occupation: "Doctor",
    education: "MBBS",
    city: "Mumbai",
    state: "Maharashtra",
    income: "₹12 LPA",
    height: "5'5\"",
    isActive: false,
    photos: ["https://randomuser.me/api/portraits/women/2.jpg"],
  },
];

export default function BookAppointment() {
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
  const [all_booking_details, setall_booking_details] = useState([]);

  const get_all_booking_details = async () => {
    try {
      setLoading(true);
      const resp = await api.get(
        `api/appointment/GetBookingAppointmentDetails?page=${page}&limit=${limit}&search=${searchTerm}`
      );

      setall_booking_details(resp.data.bookingDetails);
      setTotal(resp.data.total);
      setactive_profile(resp.data.active)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  

  useEffect(() => {
    get_all_booking_details();
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

  // delete user

//   const delete_user_profile = async (_id) => {
//   try {
//     const confirmDelete = await Swal.fire({
//       title: "Are you sure?",
//       text: "This action will permanently delete the user profile!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, delete it!",
//       cancelButtonText: "Cancel",
//       reverseButtons: true,
//       customClass: {
//         confirmButton: "swal-confirm-btn",
//         cancelButton: "swal-confirm-btn",
//       },
//     });

//     // If user cancels, stop here
//     if (!confirmDelete.isConfirmed) return;

//     setLoading(true);
//     const resp = await api.delete(`api/user/delete-user/${_id}`);

//     if (resp.status === 200) {
//       await Swal.fire({
//         icon: "success",
//         title: "Profile Deleted!",
//         text: resp.data.message || "User profile deleted successfully.",
//         confirmButtonText: "OK",
//         customClass: {
//           confirmButton: "swal-confirm-btn",
//         },
//       });

//       // Refresh after confirmation closes
//       window.location.reload();
//     }
//   } catch (error) {
//     console.log(error);
//     Swal.fire({
//       icon: "error",
//       title: "Error!",
//       text:
//         error.response?.data?.error ||
//         "Something went wrong! Please try again.",
//       confirmButtonText: "OK",
//       customClass: {
//         confirmButton: "swal-confirm-btn",
//       },
//     });
//   } finally {
//     setLoading(false);
//   }
// };

const toggle_user = async (id) => {
  try {
     const confirmUpdate = await Swal.fire({
      title: "Are you sure?",
      text: "This action will update the user profile!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "Cancel",
      reverseButtons: true,
      customClass: {
        confirmButton: "swal-confirm-btn",
        cancelButton: "swal-confirm-btn",
      },
    });

    // If user cancels, stop here
    if (!confirmUpdate.isConfirmed) return;

    const res = await api.put(`api/user/block-unblock/${id}`);
    if (res.status===200) {
       await Swal.fire({
        icon: "success",
        title: "Profile Updated!",
        text: res.data.message || "User profile updated successfully.",
        confirmButtonText: "OK",
        customClass: {
          confirmButton: "swal-confirm-btn",
        },
      });
      get_all_booking_details(); 
    }
  } catch (error) {
    console.error(error);
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
  }
};


const [exportLoading, setExportLoading] = useState(false);

const exportUserProfiles = async () => {
  try {
    setExportLoading(true);

    let query = "";
    if (user) {
      query = `?bureauId=${user._id}`;
    }

    const response = await api.get(
      `/api/user/export-excel${query}`,
      {
        responseType: "blob", // 🔴 required
      }
    );
    console.log(response);
    

    const blob = new Blob([response.data], {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "user-profiles.xlsx";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Export failed:", error);
    alert("Failed to export data");
  } finally {
    setExportLoading(false);
  }
};

const fileInputRef = useRef(null);

const [loading_import, setloading_import] = useState(false);

 const importFromExcel = async (file) => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setloading_import(true);
      const response = await api.post("/api/user/bulk-upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

       Swal.fire({
        icon: "success",
        title: "Data Imported!",
        text:  "Data uploaded successfully!",
        confirmButtonText: "OK",
        customClass: {
          confirmButton: "swal-confirm-btn",
        },
      }).then(()=>
      {
        window.location.reload()
      });
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed");
       Swal.fire({
        icon: "error",
        title: "Failed!",
        text:  "Data Upload failed!",
        confirmButtonText: "OK",
        customClass: {
          confirmButton: "swal-confirm-btn",
        },
      }).then(()=>
      {
        window.location.reload()
      });
    } finally {
      setloading_import(false);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    importFromExcel(file);
  };

    // delete profile

    const delete_user_profile = async (_id) => {
    try {
      const confirmDelete = await Swal.fire({
        title: "Are you sure?",
        text: "This action will permanently delete the user profile!",
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
      const resp = await api.delete(`api/user/delete-user/${_id}`);

      if (resp.status === 200) {
        await Swal.fire({
          icon: "success",
          title: "Profile Deleted!",
          text: resp.data.message || "User profile deleted successfully.",
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

const [viewType, setViewType] = useState("grid"); // grid | list


  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Booking Appointments</h1>
            <p className="text-gray-600">
              Manage your Booking Appointment's
            </p>
          </div>

        </div>

      <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full mt-4 mb-2 sm:mt-0 gap-2">
  <button
    onClick={() => exportUserProfiles()}
    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center justify-center w-full sm:w-auto"
  >
    <Plus className="mr-2 h-4 w-4" />
    
     {exportLoading?"Exporting Data...":"Export To Excel"}
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
            <p className="text-sm text-gray-600">Total Booking</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-2xl font-bold text-green-600">
              {active_profile || 0}
            </div>
            <p className="text-sm text-gray-600">Today's Appointments</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-2xl font-bold text-purple-600">
              {Array.isArray(all_booking_details)
                ? all_booking_details.filter(
                    (p) => p?.PersonalDetails?.Gender === "Male"
                  ).length
                : 0}
            </div>
            <p className="text-sm text-gray-600">Upcoming Appointments</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-2xl font-bold text-purple-600">
              {Array.isArray(all_booking_details)
                ? all_booking_details.filter(
                    (p) => p?.PersonalDetails?.Gender === "Female"
                  ).length
                : 0}
            </div>
            <p className="text-sm text-gray-600">Complete Meeting</p>
          </div>
        </div>

        {/* Data Grid */}
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
    <>
      {/* ================= GRID VIEW ================= */}
      {viewType === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {all_booking_details?.map((profile) => (
            <div
              key={profile._id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold">{profile?.name}</h2>

                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    {profile?.email}
                  </p>

                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    {profile?.country_code} {profile?.mobile_number}
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  {profile?.date}
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  {profile?.time}
                </div>
                <div className="flex items-center">
                  <StickyNote className="mr-2 h-4 w-4" />
                  {profile?.notes}
                </div>
              </div>

              <div className="flex gap-2 mt-auto pt-4">
                <button
                  onClick={() =>
                    navigate("/view-profiles", {
                      state: { id: profile._id },
                    })
                  }
                  className="border border-gray-300 rounded-md py-2 flex-1 hover:bg-gray-50"
                >
                  Mark as Completed
                </button>

                <button
                  onClick={() => delete_user_profile(profile._id)}
                  className="bg-red-600 hover:bg-red-700 text-white py-2 rounded-md flex-1"
                >
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
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Phone</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Time</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {all_booking_details?.map((profile) => (
                <tr
                  key={profile._id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="px-4 py-3">{profile?.name}</td>
                  <td className="px-4 py-3">{profile?.email}</td>
                  <td className="px-4 py-3">
                    {profile?.country_code} {profile?.mobile_number}
                  </td>
                  <td className="px-4 py-3">{profile?.date}</td>
                  <td className="px-4 py-3">{profile?.time}</td>
                  <td className="px-4 py-3 flex gap-2">
                    <button
                      onClick={() =>
                        navigate("/view-profiles", {
                          state: { id: profile._id },
                        })
                      }
                      className="border px-3 py-1 rounded-md"
                    >
                      Complete
                    </button>

                    <button
                      onClick={() => delete_user_profile(profile._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded-md"
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
        {all_booking_details?.length === 0 && (
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
