import React from "react";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
