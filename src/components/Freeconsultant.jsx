"use client";

import Image from "next/image";
import React from "react";
import consultantbg from "@/assets/consultantbg.jpg";

const Freeconsultant = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-fixed bg-cover bg-center px-6 py-16"
      style={{
        backgroundImage: `url(${consultantbg.src})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-[rgba(21,26,48,0.9)]"></div>

      {/* Content Wrapper */}
      <div className="relative z-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 text-white">
        {/* Left Content */}
        <div>
          <p className="openSans text-[#ada282] text-[16px]">
            For Our Honorable Clients
          </p>

          <h2 className="playfairDisplay text-[#fff] text-[35px] mb-2">
            Free Consulting
          </h2>

          <p className="openSans text-[#ada282] text-[16px]">
            Call us 24/7 at (888)123-4567 or fill out the form.
          </p>

          <p className="openSans text-[#ddd] text-[15px] mt-8 leading-8 mb-8">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less able English.
          </p>
        </div>

        {/* Right Form */}
        <div className="max-w-md w-full mb-10">
          <form>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-[#ffffff1a] border border-white/20 placeholder-white text-white rounded outline-none text-[13px] mb-6"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full px-4 py-3 bg-[#ffffff1a] border border-white/20 placeholder-white text-white rounded outline-none text-[13px] mb-6"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-[#ffffff1a] border border-white/20 placeholder-white text-white rounded outline-none text-[13px] mb-6"
            />
            <select className="w-full px-4 py-3 bg-[#ffffff1a] border border-white/20 text-white rounded outline-none text-[13px] mb-6">
              <option>Family Law</option>
              <option>Criminal Law</option>
              <option>Civil Law</option>
              <option>Corporate Law</option>
            </select>

            <textarea
              placeholder="Case Description..."
              rows="4"
              className="w-full px-4 py-3 bg-[#ffffff1a] border border-white/20 placeholder-white text-white rounded outline-none text-[13px] mb-6 overflow-y-auto resize-none h-32"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#e8ddc3] text-[#151a30] px-6 py-3 font-bold rounded hover:opacity-90 transition"
            >
              Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Freeconsultant;
