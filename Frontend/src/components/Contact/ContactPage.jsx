import React from "react";
import Contact from "../Contact";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ContactPage = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Navbar />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
