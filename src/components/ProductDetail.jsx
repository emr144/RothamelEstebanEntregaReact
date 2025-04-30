import { useParams, useLocation } from "react-router-dom";
import './styles/ProductDetail.css';

function ProductDetail() {
  const { id } = useParams(); // Obtiene el parámetro ID de la URL
  const location = useLocation(); // Obtiene el estado pasado desde navigate
  const product = location.state?.product; // Intenta obtener el producto desde el estado

  if (!product) {
    return <p>Producto no encontrado</p>; // Muestra un mensaje si no se encuentra el producto
  }

  return (
    <div className="product-detail-container">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <button className="buy-button">Comprar</button>

    </div>
  );
}

export default ProductDetail;