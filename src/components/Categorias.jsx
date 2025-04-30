import React, { useState } from "react";

const Categorias = ({ items, onFilter }) => { // Recibe `items` y `onFilter` como props
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    if (category === "") {
      onFilter(items); // Mostrar todos los productos si no hay filtro
    } else {
      onFilter(items.filter((item) => item.category === category)); // Filtrar por categoría
    }
  };

  // Extraer categorías únicas de los productos
  const categories = [...new Set(items.map((item) => item.category))];

  return (
    <div>
      <h1>Filtrar por Categorías</h1>
      <select
        className="category-dropdown"
        value={selectedCategory}
        onChange={(e) => handleFilterChange(e.target.value)}
      >
        <option value="">Todas</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categorias;