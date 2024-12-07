// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home.jsx";
import ErrorPage from "../pages/errorPage.jsx";
import Contact from "../pages/contact.jsx";
import DetailItem from "../pages/detailItem.jsx";
import Items from "../pages/item.jsx"; // Asegúrate de que Items es el componente que filtra por categoría
import Carrito from "../pages/cart.jsx";

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
    </Routes>
  );
}

export default RoutesComponent;
