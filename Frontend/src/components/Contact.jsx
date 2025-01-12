import React from "react";

const Contact = () => {
  return (
    <>
      <div className="flex h-screen justify-center items-center flex-col space-3">
        <div className="border p-10 rounded-xl">
          <h1 className="text-3xl font-bold text-white-100">Contact Us</h1>
          {/* Name */}
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              className="w-80 px-3 py-1 border rounded-md outline-none"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          {/* Email */}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              className="w-80 px-3 py-1 border rounded-md outline-none"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          {/* Message */}
          <div className="mt-4 space-y-2">
            <span>Message</span>
            <br />
            <textarea
              rows="5"
              cols="30"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              type="text"
              placeholder="Enter your Message"
            />
          </div>
          <div className="mt-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-500 hover:text-white-100 transition duration-300 ease-in-out">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
