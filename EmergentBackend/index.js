const express = require("express");
const cors = require("cors");
const path = require("path");
const connect = require("./connectdb");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

/* ---------- BODY LIMIT ---------- */
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));

/* ---------- STATIC ---------- */
app.use("/images", express.static(path.join(__dirname, "images")));

/* ---------- CORS (VERY IMPORTANT ORDER) ---------- */
const corsOptions = {
  origin: [
    "https://admin.intelliviaai.com",
    "https://intelliviaai.com",
    "http://localhost:3000",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); 

// app.use(cors()); 



/* ---------- DB ---------- */
connect();

/* ---------- ROUTES ---------- */
app.get("/", (req, res) => {
  res.send("welcome to IntelliviaAI");
});

app.use("/api/contactus", require("./routes/enquiry"));
app.use("/api/upload", require("./routes/uploadfiles"));
app.use("/api/msp/signin", require("./routes/sign_in"));
app.use("/api/appointment", require("./routes/book_appointment"));
app.use("/api/blog", require("./routes/blog"));
app.use("/api/ga", require("./routes/ga"));
app.use("/api/feedback", require("./routes/feedback"));

/* ---------- SERVER ---------- */
const server = app.listen(process.env.PORT, () => {
  console.log(`server is running on port:${process.env.PORT}`);
});

server.setTimeout(5 * 60 * 1000);
