
const express=require('express')
const cors=require('cors');
const path = require('path');
const connect = require('./connectdb');
const bodyParser = require('body-parser');
require('dotenv').config();


const app=express();

// app.use(bodyParser.json())
// Increase request body size limit
app.use(bodyParser.json({ limit: "50mb" })); // Increase limit for JSON payloads
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true })); // Increase limit for form data
// Allow up to 50MB of JSON data (adjust as needed)
app.use(express.json({ limit: '50mb' }));

// app.use('/images', express.static('images'));
app.use('/images', express.static(path.join(__dirname, 'images')));
// app.use(cors())
app.use(
  cors({
    origin: [
      "https://admin.intelliviaai.com", // admin panel
      "https://intelliviaai.com"        // main website (optional)
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);
app.options("*", cors());
connect();
app.get('/',(req,res)=>
{
    res.send("welcome to IntelliviaAI")
})


app.use('/api/contactus',require('./routes/enquiry'));

app.use('/api/upload',require('./routes/uploadfiles'));

app.use('/api/msp/signin',require('./routes/sign_in'));

app.use('/api/appointment',require('./routes/book_appointment'));

app.use('/api/blog',require('./routes/blog'));

app.use('/api/ga',require('./routes/ga'));



const server=app.listen(process.env.PORT,()=>
{
    console.log(`server is running on port:${process.env.PORT}`);
})
server.setTimeout(5 * 60 * 1000); // 300000 ms = 5 minutes

