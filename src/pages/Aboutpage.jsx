import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Abouthero from "@/components/Abouthero";
import React from "react";
import Whyneedus from "@/components/Whyneedus";
import Abouthowcanwehelp from "@/components/Abouthowcanwehelp";
import Aboutafterhero from "@/components/Aboutafterhero";
import Testimonial from "@/components/Testimonial";
import Percentagebox from "@/components/Percentagebox";
import Blog from "@/components/Blog";

const Aboutpage = () => {
  return (
    <>
      <Header />
      <Abouthero />
      <Aboutafterhero/>
      <Whyneedus/>
      <Abouthowcanwehelp/>
      <Testimonial/>
      <Percentagebox/>
      <Blog/>
      <Footer />
    </>
  );
};

export default Aboutpage;
