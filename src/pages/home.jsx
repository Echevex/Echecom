// eslint-disable-next-line no-unused-vars
import React from "react";
import FondoRojo from "../assets/FondoRojo.jpg";
import Navbar from "../components/navbar.jsx";
import Hero from "../components/hero.jsx";
import CardsContainer from "../components/CardsContainer.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${FondoRojo})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Hero />
      <CardsContainer />
      <Footer />

      <main style={{ flex: 1 }}>{}</main>
    </div>
  );
};

export default Home;
