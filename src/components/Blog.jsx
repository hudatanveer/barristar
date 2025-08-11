"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import blog1 from "@/assets/casestudy4.jpg";
import blog2 from "@/assets/blog2.jpg";
import blog3 from "@/assets/blog3.jpg";
import blogminiimg from "@/assets/blogminiimg.jpg";


const blogData = [
  {
    image: blog1,
    title: "Justice May Be For You If You Are Innocent",
    author: "Aliza",
    authorImage: blogminiimg,
    date: "Oct 12, 2018",
    link: "/blog/justice-article",
  },
  {
    image: blog2,
    title: "Understanding Legal Rights in Modern Society",
    author: "Aliza",
    authorImage: blogminiimg,
    date: "Feb 22, 2021",
    link: "/blog/legal-rights",
  },
  {
    image: blog3,
    title: "How to Prepare for Your First Court Appearance",
    author: "Aliza",
    authorImage: blogminiimg,
    date: "May 10, 2024",
    link: "/blog/court-prep",
  },
];

const Blog = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-[1600px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="openSans text-[#ada282] text-[16px]">From Our Blog</p>
          <h1 className="playfairDisplay text-[#333] text-[28px] sm:text-[32px] md:text-[36px] mb-4 leading-snug">
            Latest News
          </h1>
          <div className="h-[1px] w-14 bg-[#c0b596] mx-auto"></div>
        </div>

        {/* Blog Cards Grid */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center">
          {blogData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded overflow-hidden w-full sm:w-[48%] lg:w-[30%]"
            >
              <Image
                src={item.image}
                alt="Blog Thumbnail"
                className="w-full object-cover"
                width={500}
                height={350}
              />
              <div className="p-6">
                <Link href={item.link}>
                  <h2 className="playfairDisplay text-xl text-[#1a1a1a] mb-4 leading-snug hover:text-[#c0b596] transition-colors duration-300 cursor-pointer">
                    {item.title}
                  </h2>
                </Link>

                <div className="flex items-center text-sm text-gray-600">
                  <Image
                    src={item.authorImage}
                    alt="Author"
                    width={30}
                    height={30}
                    className="rounded-full mr-2"
                  />
                  <p className="mr-2">By {item.author}</p>
                  <span className="text-gray-400">|</span>
                  <p className="ml-2">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
