const express = require("express");
const { addBlog, getBlogs, deleteBlog, updateBlog, toggleBlogStatus } = require("../controllers/Blog/blog");



const router = express.Router();

router.post("/add-blog", addBlog);

router.get("/all-blogs", getBlogs);

router.delete("/delete-blog/:id", deleteBlog);

router.put("/update-blog/:id", updateBlog);

router.patch("/toggle-status/:id", toggleBlogStatus);




module.exports = router;
