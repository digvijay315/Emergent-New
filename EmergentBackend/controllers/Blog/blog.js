const Blog = require("../../models/Blog/blog");
const blogValidationSchema=require('../../Validation/blog')





/* ➕ Add Blog */
exports.addBlog = async (req, res) => {
  try {

         // ✅ Validate request body
    const { error, value } = blogValidationSchema.validate(req.body, {
      abortEarly: false, // return all validation errors
    });

    if (error) {
      return res.status(400).json({
        status: "error",
        errors: error.details.map(err => err.message),
      });
    }

    const blog = await Blog.create(req.body);
    res.status(201).json({ success: true, blog });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* ✏️ Edit Blog */
exports.updateBlog = async (req, res) => {
  try {

             // ✅ Validate request body
    const { error, value } = blogValidationSchema.validate(req.body, {
      abortEarly: false, // return all validation errors
    });

    if (error) {
      return res.status(400).json({
        status: "error",
        errors: error.details.map(err => err.message),
      });
    }

    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ success: true, blog });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* 🗑 Delete Blog */
exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* 🔄 Active / Inactive */
exports.toggleBlogStatus = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    blog.isActive = !blog.isActive;
    await blog.save();

    res.json({ success: true, isActive: blog.isActive });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

/* 📄 Get Blogs */
exports.getBlogs = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Fetch total count for pagination
    const total = await Blog.countDocuments();

    const exitingDetails = await Blog
      .find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    res
      .status(200)
      .send({
        message: "Blog details found successfully",
        Blog: exitingDetails,
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        totalPages: Math.ceil(total / limit),
      });
  } catch (error) {
    console.error("Error getting Blog details:", error);
    res.status(500).send({
      message: "Error occurred while getting Blog details",
      error: error.message,
    });
  }
};

exports.getBlogsById = async (req, res) => {
  try {
    const id  = req.params.id;

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    res.status(200).json({
      message: "Blog details found successfully",
      blog,
    });

  } catch (error) {
    console.error("Error getting Blog details:", error);
    res.status(500).json({
      message: "Error occurred while getting Blog details",
      error: error.message,
    });
  }
};

