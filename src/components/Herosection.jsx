"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";

import homeimg1 from "../assets/homeimg1.jpg";
import homeimg2 from "../assets/homeimg2.jpg";

const slides = [
  {
    src: homeimg1,
    alt: "Slide 1",
    subheading: "The Most Talented Law Firm",
    heading: "We Fight For Justice As Like A Friend",
  },
  {
    src: homeimg2,
    alt: "Slide 2",
    subheading: "The Most Talented Law Firm",
    heading: "We Fight For Justice As Like A Friend",
  },
];

const Herosection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full h-screen relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 4000 }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              {/* Background Image */}
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority
                className="object-cover z-0"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-opacity-30 z-10"></div>

              {/* Animated Content */}
              {activeIndex === index && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 flex items-center justify-center z-20 px-4 text-center text-white flex-col gap-6"
                >
                  {/* Subheading */}
                  <motion.p
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="openSans text-lg md:text-xl font-light"
                  >
                    {slide.subheading}
                  </motion.p>

                  {/* Heading */}
                  <motion.h1
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="playfairDisplay text-3xl sm:text-4xl md:text-5xl font-medium leading-tight max-w-[90%] mx-auto"
                  >
                    {slide.heading}
                  </motion.h1>

                  {/* Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="openSans bg-[#c0b596] hover:bg-[#ada282] text-black px-6 py-2 rounded-full transition w-fit"
                  >
                    Contact Us
                  </motion.button>
                </motion.div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper arrows style fix */}
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: white !important;
          width: 40px !important;
          height: 40px !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          z-index: 50 !important;
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 20px !important;
        }
      `}</style>
    </div>
  );
};

export default Herosection;
