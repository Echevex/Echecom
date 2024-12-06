// eslint-disable-next-line no-unused-vars
import React, {component} from "react";
import { Route, Link, Routes } from 'react-router-dom';
import Home from "../pages/home.jsx";
import ErrorPage from "../pages/errorPage.jsx";

function RoutesComponent() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default RoutesComponent;
