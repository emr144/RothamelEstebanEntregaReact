import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "../components/styles/Products.css";

import caja from '../assets/images/caja.jpg';


function Products() {
  const [products, setProducts] = useState([]);

  // Simula una llamada a una API con useEffect y Promises
  useEffect(() => {
    const fetchProducts = async () => {
      const fakeProducts = [
        { id: 1, title: "Producto 1", image: caja, price: 150 },
        { id: 2, title: "Producto 2", image: caja, price: 200 },
        { id: 3, title: "Producto 3", image: caja, price: 300 },
      ];
      // Simula un retraso
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setProducts(fakeProducts);
    };

    fetchProducts();        // Llama a la función para obtener productos
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;

// Este componente simula una llamada a una API para obtener productos y los muestra en una cuadrícula utilizando el componente ProductCard.
// Los productos son simulados y se cargan con un retraso para simular una llamada a la API.
//Usa map para renderizar múltiples tarjetas en Products.jsx