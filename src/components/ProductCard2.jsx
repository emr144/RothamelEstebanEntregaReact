import React from "react";
import { useLocation } from "react-router-dom";

const ProductCard2 = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

return (
    <div className="product-card">
        <h2>{product.title}</h2>
        <img 
            src={product.image} 
            alt={product.title} 
            className="product-card__image" 
            style={{ width: "400px", height: "400px", objectFit: "cover" }} 
        />
        <p className="product-card__price">${product.price}</p>
        <p className="product-card__description">{product.description}</p>
        <button>Comprar</button>
    </div>
);
};

export default ProductCard2;