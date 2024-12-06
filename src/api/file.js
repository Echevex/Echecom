import Buzo1 from '../assets/Buzo1.jpg';
import Buzo2 from '../assets/Buzo2.jpg';
import Rem1 from '../assets/Rem1.jpg';
import Rem2 from '../assets/Rem2.jpg';

const products = [
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

// Función para simular una llamada a la API
const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000); // Simula un retraso de 1 segundo
  });
};

export { fetchProducts };
