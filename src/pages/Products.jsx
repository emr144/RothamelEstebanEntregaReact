import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Categorias from "../components/Categorias";
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
  const [filteredProducts, setFilteredProducts] = useState([]); // Estado para productos filtrados
  const navigate = useNavigate(); // Hook para la navegación

  // Simula una llamada a una API con useEffect y Promises
  useEffect(() => {
    const fetchProducts = async () => {
      const fakeProducts = [
        { id: 1, title: "Martillo", image: martillo, price: 150, description: "Martillo de acero con mango de madera, ideal para trabajos de carpintería.", category: "Herramientas Manuales" },
        { id: 2, title: "Destornillador", image: destornillador, price: 200, description: "Destornillador de punta plana, perfecto para ajustes y reparaciones.", category: "Herramientas Manuales" },
        { id: 3, title: "Llave Inglesa", image: llaveInglesa, price: 300, description: "Llave ajustable para apretar o aflojar tuercas y tornillos.", category: "Herramientas Manuales" },
        { id: 4, title: "Taladro Eléctrico", image: taladro, price: 400, description: "Taladro eléctrico de alta potencia para perforar madera, metal y concreto.", category: "Herramientas Eléctricas" },
        { id: 5, title: "Sierra Manual", image: sierra, price: 500, description: "Sierra manual para cortes precisos en madera y plástico.", category: "Herramientas Manuales" },
        { id: 6, title: "Cinta Métrica", image: cintaMetrica, price: 600, description: "Cinta métrica de 5 metros para medir con precisión.", category: "Instrumentos de Medición" },
        { id: 7, title: "Alicate", image: alicate, price: 700, description: "Alicate multiusos para cortar y sujetar cables y alambres.", category: "Herramientas Manuales" },
        { id: 8, title: "Nivel de Burbuja", image: nivelBurbuja, price: 800, description: "Nivel de burbuja para asegurar superficies perfectamente niveladas.", category: "Instrumentos de Medición" },
        { id: 9, title: "Llave de Tubo", image: llaveTubo, price: 900, description: "Llave de tubo para trabajos de plomería y ajustes en tuberías.", category: "Herramientas Manuales" },
        { id: 10, title: "Caja de Herramientas", image: cajaHerramientas, price: 1000, description: "Caja de herramientas con compartimentos para organizar tus herramientas.", category: "Almacenamiento" },
        { id: 11, title: "Cutter", image: cutter, price: 1100, description: "Cutter con hoja retráctil para cortes precisos en papel y cartón.", category: "Herramientas de Corte" },
        { id: 12, title: "Pistola de Silicona", image: pistolaSilicona, price: 1200, description: "Pistola de silicona para trabajos de pegado y sellado.", category: "Herramientas Manuales" },
        { id: 13, title: "Brocha", image: brocha, price: 1300, description: "Brocha de cerdas suaves para pintar y barnizar superficies.", category: "Pintura y Acabados" },
        { id: 14, title: "Lija", image: lija, price: 1400, description: "Lija de grano fino para acabados en madera y metal.", category: "Pintura y Acabados" },
        { id: 15, title: "Guantes de Trabajo", image: guantesTrabajo, price: 1500, description: "Guantes resistentes para proteger tus manos durante el trabajo.", category: "Protección Personal" },
        { id: 16, title: "Mascarilla de Protección", image: mascarilla, price: 1600, description: "Mascarilla para protegerte del polvo y partículas durante el trabajo.", category: "Protección Personal" },
        { id: 17, title: "Linterna", image: linterna, price: 1700, description: "Linterna LED de alta potencia para iluminar áreas oscuras.", category: "Iluminación" },
        { id: 18, title: "Cerradura", image: cerradura, price: 1800, description: "Cerradura de seguridad para puertas y ventanas.", category: "Seguridad" },
        { id: 19, title: "Tornillos", image: tornillos, price: 1900, description: "Set de tornillos de diferentes tamaños para múltiples usos.", category: "Fijación" },
        { id: 20, title: "Clavos", image: clavos, price: 2000, description: "Clavos de acero para trabajos de carpintería y construcción.", category: "Fijación" },
        { id: 21, title: "Espátula", image: espatula, price: 2100, description: "Espátula de acero inoxidable para aplicar y alisar masilla.", category: "Pintura y Acabados" },
        { id: 22, title: "Cerrucho", image: cerrucho, price: 2200, description: "Cerrucho de dientes afilados para cortes rápidos en madera.", category: "Herramientas de Corte" },
        { id: 23, title: "Flexómetro", image: flexometro, price: 2300, description: "Flexómetro de 10 metros para medir grandes distancias.", category: "Instrumentos de Medición" },
        { id: 24, title: "Compresor de Aire", image: compresorAire, price: 2400, description: "Compresor de aire portátil para inflar y limpiar herramientas.", category: "Herramientas Eléctricas" },
      ];
      setProducts(fakeProducts);  // Inicializa los productos con los productos simulados
      setFilteredProducts(fakeProducts); // Inicializa los productos filtrados con todos los productos
      // Simula un retraso
      await new Promise((resolve) => setTimeout(resolve, 500));
      setProducts(fakeProducts);
    };

    fetchProducts(); // Llama a la función para obtener productos
  }, []);

  const handleViewProduct = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="products">
      <h1>Productos</h1>
      <Categorias
        items={products}
        onFilter={(filtered) => setFilteredProducts(filtered)}
      />
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewProduct={() => handleViewProduct(product)}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;