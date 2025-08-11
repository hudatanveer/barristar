"use client";
import Image from "next/image";
import React from "react";
import aboutherobg from "@/assets/aboutherobg.jpg";

const Casehero = () => {
  return (
    <div className="w-full h-[60vh] lg:h-[70vh] relative">
      {/* Background Image */}
      <Image
        src={aboutherobg}
        alt="About Hero Background"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,_#1f243fbb_50%,_transparent_90%)]"></div>

      {/* Text Overlay */}
      <div className="absolute top-[45%] left-8 lg:left-20  transform -translate-y-1/2 text-white z-10">
        <h1 className="font-bold playfairDisplay text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem]">
          Case Studies
        </h1>

        <div
          className="mt-2 text-[0.95rem] sm:text-[1.1rem] md:text-[1.25rem] lg:text-[1.35rem] font-light leading-3"
          style={{ fontFamily: '"Open Sans", sans-serif' }}
        >
          <span className="text-white cursor-pointer">Home</span>
          <span className="text-white px-2">/</span>
          <span className="text-[#c0b596]">Recent Case Studies</span>
        </div>
      </div>
    </div>
  );
};

export default Casehero;
