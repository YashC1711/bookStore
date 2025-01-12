import React from "react";
import Home from "./components/Home/Home";
import Cource from "./components/Cource/Cource";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import ContactPage from "./components/Contact/ContactPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cource" element={<Cource />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default App;
