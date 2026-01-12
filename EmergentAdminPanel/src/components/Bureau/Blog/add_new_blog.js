import React, { useEffect, useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import api from '../../../api'
import Swal from "sweetalert2";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  maxHeight: "90vh",   // 👈 important
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  overflowY: "auto",   // 👈 vertical scroll
};


const BlogModal = ({ open, handleClose,editData,refresh }) => {
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    image: "",
    fullBlog: "",
  });



useEffect(() => {
  if (open) {
    if (editData) {
      setBlog({
        title: editData.title || "",
        description: editData.description || "",
        image: editData.image || null,
        fullBlog: editData.fullBlog || "",
      });
    } else {
      setBlog({
        title: "",
        description: "",
        image: null,
        fullBlog: "",
      });
    }
  }
}, [editData, open]);




  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

const[uploading,setuploading]=useState(false)
const handleImageChange = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("files", file); // 👈 must match backend

  try {
    setuploading(true);

    const res = await api.post("api/upload/upload-files",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (res.data.success) {
      setBlog((prev) => ({
        ...prev,
        image: res.data.urls[0], // ✅ Cloudinary URL
      }));
    }
  } catch (error) {
    console.error("Upload error:", error);
    alert("Image upload failed");
  } finally {
    setuploading(false);
  }
};


const handleSubmit = async () => {
  try {
    // 🔄 Loading Alert
    Swal.fire({
      title: editData ? "Updating Blog..." : "Creating Blog...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const apiUrl = editData
      ? `/api/blog/update-blog/${editData._id}`
      : "/api/blog/add-blog";

    const method = editData ? "put" : "post";

    const res = await api({
      method,
      url: apiUrl,
      data: blog,
    });

    handleClose(); // close modal only after success
    // ✅ Success Alert
    await Swal.fire({
      icon: "success",
      title: "Success",
      text: editData
        ? "Blog updated successfully"
        : "Blog added successfully",
      timer: 2000,
      showConfirmButton: true,
    });
    window.location.reload()

  } catch (error) {

    handleClose();
    await Swal.fire({
      icon: "error",
      title: "Error",
      target: document.body,
      text:error?.response?.data?.errors ||"Something went wrong",
      showConfirmButton: true,
    });
    
  }
};


  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" mb={2}>
          {editData ? "Edit Blog" : "Add New Blog"}
        </Typography>

        <TextField
          fullWidth
          label="Blog Title"
          name="title"
          value={blog.title !== "" ? blog.title : editData?.title || ""}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Short Description"
          name="description"
          value={blog.description !== "" ? blog.description : editData?.description || ""}
          onChange={handleChange}
          margin="normal"
        />

        <Button
          variant="outlined"
          component="label"
          fullWidth
          sx={{ mt: 2 }}
        >
          {uploading ? "Uploading..." : "Upload Image"}
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleImageChange}
          />
        </Button>
{(blog.image || editData?.image) && (
  <Box
    sx={{
      mt: 2,
      width: "100%",
      borderRadius: 2,
      overflow: "hidden",
      border: "1px solid #e0e0e0",
    }}
  >
    <img
      src={blog.image || editData.image}
      alt="Uploaded Preview"
      style={{ width: "100%", height: "200px", objectFit: "cover" }}
    />
  </Box>
)}



          {/* 🔥 React Quill Editor */}
        <Typography mt={3} mb={1}>
          Full Blog Content
        </Typography>

        <ReactQuill
          theme="snow"
          value={blog.fullBlog}
          onChange={(value) =>
            setBlog({ ...blog, fullBlog: value })
          }
          style={{ height: "200px", marginBottom: "40px" }}
        />

        <Box sx={{pt: 3,display: "flex",justifyContent: "flex-end",gap: 2,}}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>
            {editData?"Edit Blog" : "Save Blog"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default BlogModal;
