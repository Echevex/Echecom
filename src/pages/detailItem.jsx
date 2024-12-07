import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./detailProduct.css";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/Footer.jsx";

const DetailProduct = () => {
  const { id } = useParams(); // Obtenemos el id del producto desde la URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const selectedProduct = storedProducts.find((item) => item.id === parseInt(id));
    
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productInCart = cart.find((item) => item.id === product.id);

    if (productInCart) {
      productInCart.quantity += 1; // Si el producto ya está en el carrito, aumentamos la cantidad
    } else {
      cart.push({ ...product, quantity: 1 }); // Si el producto no está en el carrito, lo agregamos con cantidad 1
    }

    localStorage.setItem("cart", JSON.stringify(cart)); // Guardamos el carrito actualizado en localStorage
    alert(`${product.name} añadido al carrito`);
  };

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div className="detail-product-container">
      <Navbar />
      <div className="detail-product">
        <div className="detail-product-image">
          <img src={product.image} alt={product.name} className="product-image" />
        </div>
        <div className="detail-product-info">
          <h2>{product.name}</h2>
          <p><strong>Precio:</strong> ${product.price}</p>
          <p><strong>Categoría:</strong> {product.category}</p>
          <p><strong>Descripción:</strong> {product.description}</p>
          <button className="btn-add-to-cart" onClick={addToCart}>
            Añadir al carrito
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailProduct;
