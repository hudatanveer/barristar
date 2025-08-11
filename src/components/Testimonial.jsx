"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

import testimonialimg from "@/assets/testimonialimg.png";
import userimg from "@/assets/userimg.jpg";

const testimonials = [
  {
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.",
    name: "Sara Smith",
    position: "Marketing Manager, XYZ Ltd",
    image: "/images/testimonial2.jpg",
  },
  {
    quote:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature.",
    name: "Michael Doe",
    position: "CTO of TechFuture",
    image: "/images/testimonial3.jpg",
  },
];

const Testimonial = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="py-16 px-4 sm:px-6 lg:px-20"
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        {/* Left Side Image with slide-in */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="flex justify-center md:justify-end md:w-1/2"
        >
          <Image
            className="w-[20rem] sm:w-[22rem] md:w-[24rem] h-auto"
            src={testimonialimg}
            alt="testimonial"
          />
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="md:w-1/2 w-full"
        >
          <div className="text-center md:text-left mb-6">
            <p className="openSans text-[#ada282] text-[16px]">What People Say</p>
            <h1 className="playfairDisplay text-[#333] text-[28px] sm:text-[32px] md:text-[36px] mb-4 leading-snug">
              Client Testimonial
            </h1>
            <div className="h-[1px] w-14 bg-[#c0b596] mx-auto md:mx-0"></div>
          </div>

          <div className="bg-white text-center md:text-left">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              spaceBetween={30}
              className="pb-12"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: false }}
                    className="max-w-xl mx-auto md:mx-0"
                  >
                    <p className="text-gray-600 text-lg italic mb-6">“{item.quote}”</p>
                    <div className="flex flex-col items-center md:items-start">
                      <Image
                        src={userimg}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="rounded-full grayscale"
                      />
                      <h3 className="mt-4 font-bold text-xl text-gray-800">{item.name}</h3>
                      <p className="text-gray-500">{item.position}</p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Testimonial;
