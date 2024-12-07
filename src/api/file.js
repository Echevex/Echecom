import Buzo1 from '../assets/Buzo1.jpg';
import Buzo2 from '../assets/Buzo2.jpg';
import Rem1 from '../assets/Rem1.jpg';
import Rem2 from '../assets/Rem2.jpg';

export const products = [
  {
    id: 1,
    name: "Buzo Yuyu Hakusho Verde",
    price: "$5500",
    image: Buzo1,
    category: "Buzos",
  },
  {
    id: 2,
    name: "Buzo Madara Bordado Negro",
    price: "$4500",
    image: Buzo2,
    category: "Buzos",
  },
  {
    id: 3,
    name: "Remera Sukuna Oversize Negra",
    price: "$2500",
    image: Rem1,
    category: "Remeras",
  },
  {
    id: 4,
    name: "Remera Mob Psycho 100 Slim-Fit",
    price: "$1800",
    image: Rem2,
    category: "Remeras",
  },
];


export const saveProductsToLocalStorage = (products) => {
  localStorage.setItem("products", JSON.stringify(products));
  console.log("Productos guardados en Local Storage.");
};

export const loadProductsFromLocalStorage = () => {
  const storedProducts = localStorage.getItem("products");
  if (storedProducts) {
    console.log("Productos cargados desde Local Storage.");
    return JSON.parse(storedProducts);
  } else {
    console.log("No hay productos en Local Storage.");
    return [];
  }
};

export const findProductById = (id) => {
  const products = loadProductsFromLocalStorage();
  const product = products.find((item) => item.id === id);
  if (product) {
    console.log(`Producto encontrado: ${product.name}`);
  } else {
    console.log(`No se encontró ningún producto con ID: ${id}`);
  }
  return product;
};
