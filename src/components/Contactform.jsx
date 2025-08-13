"use client";
import React from "react";
//fake commit
const Contactform = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      {/* Heading */}
      <h2 className="playfairDisplay text-[#282e3f] text-[2.3rem] md:text-[2.8rem] font-medium mb-6">
        Our Contacts
      </h2>

      {/* Description Paragraph */}
      <p className="openSans text-[#666666] mb-8 leading-relaxed text-[16px] md:text-[18px]">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old.
      </p>

      {/* Info Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Address */}
        <div>
          <h3 className="playfairDisplay text-2xl font-medium mb-1 text-[#666666]">
            Address
          </h3>
          <p className="openSans text-[#333333] text-[14px] md:text-[15px]">
            245 King Street, Touterie Victoria 8520 Australia
          </p>
        </div>

        {/* Phone */}
        <div>
          <h3 className="playfairDisplay text-2xl font-medium mb-1 text-[#666666]">
            Phone
          </h3>
          <p className="openSans text-[#333333] text-[14px] md:text-[15px]">
            0-123-456-7890
          </p>
          <p className="openSans text-[#333333] text-[14px] md:text-[15px]">
            0-123-456-7890
          </p>
        </div>

        {/* Email */}
        <div>
          <h3 className="playfairDisplay text-2xl font-medium mb-1 text-[#666666]">
            Email
          </h3>
          <p className="openSans text-[#333333] text-[14px] md:text-[15px]">
            sample@gmail.com
          </p>
        </div>
      </div>

      {/* Quick Contact Form */}
      <div className="mt-12">
        <h2 className="playfairDisplay text-[#282e3f] text-[2.1rem] md:text-[2.5rem] font-medium mb-6">
          Quick Contact Form
        </h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 bg-[#eee] placeholder-gray-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-full p-4 bg-[#eee] placeholder-gray-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 bg-[#eee] placeholder-gray-500 focus:outline-none sm:col-span-2"
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full p-4 bg-[#eee] placeholder-gray-500 focus:outline-none sm:col-span-2"
          />
          <textarea
            rows="6"
            placeholder="Case Description..."
            className="w-full p-4 bg-[#eee] placeholder-gray-500 focus:outline-none sm:col-span-2"
          />
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="bg-[#c0b596] text-white py-3 px-8 rounded-md font-semibold openSans text-[15px] hover:bg-[#ada282] transition"
            >
              Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactform;
