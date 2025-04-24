import React from 'react';

function ItemListContainer({ renderButton }) {
    return (
        <div className="item-list-container">
            <h3>Item List Container</h3>
            {renderButton(() => console.log("Botón clickeado"))}
        </div>
    );
}

export default ItemListContainer;