import React from "react";
import Header from "./Components/Header";

import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Homepage from "./Components/Homepage";
import BookingForm from "./Components/BookingForm";
import BookingPage from "./Components/BookingPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Booking" element={<BookingPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
