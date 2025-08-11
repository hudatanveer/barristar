"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import lawyer from "@/assets/lawyer.png";
import scale from "@/assets/scale-of-justice.png";
import team from "@/assets/team.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

const Afterhero = () => {
  const items = [
    { img: lawyer, alt: "lawyer", small: "Book Your", big: "Appointment" },
    { img: scale, alt: "scale", small: "Get Free", big: "Expert Advice" },
    { img: team, alt: "team", small: "You Can Easily", big: "Join Our Team" },
  ];

  return (
    <div className="bg-[#f1f1f1] px-6 md:px-8 lg:px-20 py-12 lg:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:gap-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="flex mb-8 lg:mb-0 lg:h-[8rem]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            custom={i}
          >
            {/* Icon */}
            <div className="bg-[#c0b596] p-4 lg:flex items-center justify-center lg:w-[8rem]">
              <Image
                src={item.img}
                alt={item.alt}
                className="h-14 w-14 lg:w-16 lg:h-16"
              />
            </div>

            {/* Text */}
            <div className="bg-[#ffffff] w-[80%] lg:w-full flex flex-col justify-center pl-6">
              <p className="openSans text-[#ada282] lg:text-[17px]">{item.small}</p>
              <h2 className="playfairDisplay text-[#333333] text-[23px] lg:text-[28px]">
                {item.big}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Afterhero;
