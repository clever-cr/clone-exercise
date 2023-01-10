import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import New from "../components/New";
import Cards from "../components/Cards";
import Corporate from "../components/Corporate";
import Finacial from "../components/Finacial";
import Footer from "../components/Footer";
const index = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <New />
      <Cards />
      <Corporate />
      <Finacial />
      <Footer />
    </div>
  );
};

export default index;
