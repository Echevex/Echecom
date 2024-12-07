import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./routes/routes.jsx";

import { saveProductsToLocalStorage, products } from './api/file';

saveProductsToLocalStorage(products);

function App() {
  return (
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
  );
}

export default App;
