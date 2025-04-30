import React from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer({ products }) {
    const { productName } = useParams();
    const product = products.find((p) => p.name === productName);

    if (!product) {
        return <p>Producto no encontrado</p>;
    }

    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', maxWidth: '400px', margin: '0 auto' }}>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
            <p><strong>Precio:</strong> ${product.price}</p>
            <p><strong>Descripción:</strong> {product.description}</p>
        </div>
    );
}

export default ItemDetailContainer;
