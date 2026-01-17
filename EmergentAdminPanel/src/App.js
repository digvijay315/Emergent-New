import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";


import Dashboard from "./components/Bureau/Dashboard";

import SignIn from "./components/other component/signin";
import ProtectedRoute from "./components/other component/protected_route";

import BookAppointment from "./components/Bureau/BookAppointment/booking_details";
import Enquiry from "./components/Bureau/ContactUs/enquiry";
import Blog from "./components/Bureau/Blog/blog";
import GaReport from "./components/Bureau/Report/ga";
import AdminSettings from "./components/Bureau/Settings/settings";
import Feedback from "./components/Bureau/Feedback/feedback";
import Chatbot from "./components/Bureau/Chatbot/chatbot";




function App() {
  return (
   
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<SignIn/>}></Route>
           {/* Protected Area */}
        {/* <Route
          element={<ProtectedRoute />}
        > */}
         <Route path="/dashboard" element={<Dashboard/>}></Route>

        <Route path="/booking-appointment-details" element={<BookAppointment/>}></Route>
        <Route path="/enquiry-details" element={<Enquiry/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/report" element={<GaReport/>}></Route>
        <Route path="/settings" element={<AdminSettings/>}></Route>
        <Route path="/feedback" element={<Feedback/>}></Route>
        <Route path="/chatbot-faq" element={<Chatbot/>}></Route>
    
        {/* </Route> */}
      </Routes>
     
      
        
    </BrowserRouter>

   
  );
}

export default App;
