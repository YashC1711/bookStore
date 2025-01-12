import React from "react";
import Navbar from "../Navbar";
import CourcePage from "../../CourcePage";
import Footer from "../Footer";

const Cource = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Navbar />
        <div className="min-h-screen dark:bg-slate-900 dark:text-white">
          <CourcePage />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Cource;
