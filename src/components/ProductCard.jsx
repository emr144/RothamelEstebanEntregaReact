import React from "react";
import './styles/Products.css';

function ProductCard({ product, onViewProduct }) {
  if (!product) {
    return <div>Producto no disponible</div>; // Manejo de error si product es undefined
  }

  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.title} 
        style={{ maxWidth: "400px", maxHeight: "400px" }} 
      /> <h3>{product.title}</h3>
      <p>Precio: ${product.price}</p>
      <button className="view-details-button" onClick={onViewProduct}>Ver Detalles</button>
    </div>
  );
}

export default ProductCard;