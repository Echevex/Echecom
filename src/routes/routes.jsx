
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home.jsx";
import ErrorPage from "../pages/errorPage.jsx";
import Contact from "../pages/contact.jsx";
import DetailItem from "../pages/detailItem.jsx";
import Items from "../pages/item.jsx"; 
import Carrito from "../pages/cart.jsx";
import Pago from "../pages/pago.jsx";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/catalogo" element={<Items />} />
      <Route path="/catalogo/:category" element={<Items />} />
      <Route path="/detailItem/:id" element={<DetailItem />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/pago" element={<Pago />} /> 

    </Routes>
  );
}

export default RoutesComponent;
