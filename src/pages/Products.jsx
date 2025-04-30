import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductCard2 from "../components/ProductCard2";
import "../components/styles/Products.css";


import martillo from '../assets/images/martillo.jpg';
import destornillador from '../assets/images/destornillador.jpg';
import llaveInglesa from '../assets/images/llave_inglesa.jpg';
import taladro from '../assets/images/teladro.jpg';
import sierra from '../assets/images/sierra_manual.jpg';
import cintaMetrica from '../assets/images/cinta_metrica.jpg';
import alicate from '../assets/images/alicate.jpg';
import nivelBurbuja from '../assets/images/nivel_de_burbuja.jpg';
import llaveTubo from '../assets/images/llave_de_tubo.jpg';
import cajaHerramientas from '../assets/images/caja_de_herramientas.jpg';
import cutter from '../assets/images/cutter.jpg';
import pistolaSilicona from '../assets/images/pistola_de_silicona.jpg';
import brocha from '../assets/images/brocha.jpg';
import lija from '../assets/images/lija.jpg';
import guantesTrabajo from '../assets/images/guantes_de_trabajo.jpg';
import mascarilla from '../assets/images/mascarilla.jpg';
import linterna from '../assets/images/linterna.jpg';
import cerradura from '../assets/images/cerradura.jpg';
import tornillos from '../assets/images/tornillos.jpg';
import clavos from '../assets/images/clavos.jpg';
import espatula from '../assets/images/espatula.jpg';
import cerrucho from '../assets/images/cerrucho.jpg';
import flexometro from '../assets/images/flexometro.jpg';
import compresorAire from '../assets/images/compresor_de_aire.jpg';


function Products() {
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const navigate = useNavigate(); // Hook para la navegación

  // Simula una llamada a una API con useEffect y Promises
  useEffect(() => {
    const fetchProducts = async () => {
      const fakeProducts = [
          { id: 1, title: "Martillo", image: martillo, price: 150, description: "Martillo de acero con mango de madera, ideal para trabajos de carpintería." },
          { id: 2, title: "Destornillador", image: destornillador, price: 200, description: "Destornillador de punta plana, perfecto para ajustes y reparaciones." },
          { id: 3, title: "LlaveInglesa", image: llaveInglesa, price: 300, description: "Llave ajustable para apretar o aflojar tuercas y tornillos." },
          { id: 4, title: "TaladroEléctrico", image: taladro, price: 400, description: "Taladro eléctrico de alta potencia para perforar madera, metal y concreto." },
          { id: 5, title: "Sierra Manual", image: sierra, price: 500, description: "Sierra manual para cortes precisos en madera y plástico." },
          { id: 6, title: "Cinta Métrica", image: cintaMetrica, price: 600, description: "Cinta métrica de 5 metros para medir con precisión." },
          { id: 7, title: "Alicate", image: alicate, price: 700, description: "Alicate multiusos para cortar y sujetar cables y alambres." },
          { id: 8, title: "Nivel de Burbuja", image: nivelBurbuja, price: 800, description: "Nivel de burbuja para asegurar superficies perfectamente niveladas." },
          { id: 9, title: "Llave de Tubo", image: llaveTubo, price: 900, description: "Llave de tubo para trabajos de plomería y ajustes en tuberías." },
          { id: 10, title: "Caja de Herramientas", image: cajaHerramientas, price: 1000, description: "Caja de herramientas con compartimentos para organizar tus herramientas." },
          { id: 11, title: "Cutter", image: cutter, price: 1100, description: "Cutter con hoja retráctil para cortes precisos en papel y cartón." },
          { id: 12, title: "Pistola de Silicona", image: pistolaSilicona, price: 1200, description: "Pistola de silicona para trabajos de pegado y sellado." },
          { id: 13, title: "Brocha", image: brocha, price: 1300, description: "Brocha de cerdas suaves para pintar y barnizar superficies." },
          { id: 14, title: "Lija", image: lija, price: 1400, description: "Lija de grano fino para acabados en madera y metal." },
          { id: 15, title: "Guantes de Trabajo", image: guantesTrabajo, price: 1500, description: "Guantes resistentes para proteger tus manos durante el trabajo." },
          { id: 16, title: "Mascarilla de Protección", image: mascarilla, price: 1600, description: "Mascarilla para protegerte del polvo y partículas durante el trabajo." },
          { id: 17, title: "Linterna", image: linterna, price: 1700, description: "Linterna LED de alta potencia para iluminar áreas oscuras." },
          { id: 18, title: "Cerradura", image: cerradura, price: 1800, description: "Cerradura de seguridad para puertas y ventanas." },
          { id: 19, title: "Tornillos", image: tornillos, price: 1900, description: "Set de tornillos de diferentes tamaños para múltiples usos." },
          { id: 20, title: "Clavos", image: clavos, price: 2000, description: "Clavos de acero para trabajos de carpintería y construcción." },
          { id: 21, title: "Espátula", image: espatula, price: 2100, description: "Espátula de acero inoxidable para aplicar y alisar masilla." },
          { id: 22, title: "Cerrucho", image: cerrucho, price: 2200, description: "Cerrucho de dientes afilados para cortes rápidos en madera." },
          { id: 23, title: "Flexómetro", image: flexometro, price: 2300, description: "Flexómetro de 10 metros para medir grandes distancias." },
          { id: 24, title: "Compresor de Aire", image: compresorAire, price: 2400, description: "Compresor de aire portátil para inflar y limpiar herramientas." },
      ];
      // Simula un retraso
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setProducts(fakeProducts);
    };

    fetchProducts();        // Llama a la función para obtener productos
  }, []);

  const handleViewProduct = (product) => {
    navigate(`/products/${product.title}`, { state: { product } });
  };


  return (
    <div>
      <h1>Productos</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard
              title={product.title}
              image={product.image}
              price={product.price}
              
            />
            <button onClick={() => handleViewProduct(product)}>Ver Producto</button>
          </div>
        ))}
      </div>
      <Routes>
        <Route path="/products/:productName" element={<ProductCard2 />} />
      </Routes>
    </div>
  );
}

export default Products;

// Este componente simula una llamada a una API para obtener productos y los muestra en una cuadrícula utilizando el componente ProductCard.
// Los productos son simulados y se cargan con un retraso para simular una llamada a la API.
//Usa map para renderizar múltiples tarjetas en Products.jsx