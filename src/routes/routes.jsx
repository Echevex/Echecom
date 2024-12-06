// eslint-disable-next-line no-unused-vars
import React, {component} from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/home.jsx";

import ErrorPage from "../pages/errorPage.jsx";
import Contact from "../pages/contact.jsx";
import DetailItem from "../pages/detailItem.jsx";
import Items from "../pages/item.jsx";

function RoutesComponent() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/item" element={<Items />} />
        <Route path="/detailItem/:id" element={<DetailItem />} />
    </Routes>
  );
}

export default RoutesComponent;
