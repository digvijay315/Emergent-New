import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";


import Dashboard from "./components/Bureau/Dashboard";

import SignIn from "./components/other component/signin";
import ProtectedRoute from "./components/other component/protected_route";

import BookAppointment from "./components/Bureau/BookAppointment/booking_details";
import Enquiry from "./components/Bureau/ContactUs/enquiry";




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

    
        {/* </Route> */}
      </Routes>
     
      
        
    </BrowserRouter>

   
  );
}

export default App;
