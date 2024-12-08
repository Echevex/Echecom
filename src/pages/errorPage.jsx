import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import React from "react";

const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20vh" }}>
      <Navbar/>
      <h1>Error 404</h1>
      <p>La página que buscas no se encuentra disponible.</p>
      <Footer/>
    </div>
  );
};

export default ErrorPage;
