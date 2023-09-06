import React from "react";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Homepage from "./Components/Homepage";
import BookingForm from "./Components/BookingForm";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Booking" element={<BookingForm />} />
      </Routes>
    </>
  );
}

export default App;
