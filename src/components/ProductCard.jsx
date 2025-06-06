function ProductCard({ title, image, price }) {
  return (
    <div className="product-card">
      <h2>{title}</h2>
      <img src={image} alt={title} className="product-card__image" />
      <p className="product-card__price">${price}</p>
    </div>
  );
}

export default ProductCard;

//Este componente será reutilizable 
// y recibirá las propiedades (props)
// necesarias para mostrar el título,
// la imagen y el precio.
