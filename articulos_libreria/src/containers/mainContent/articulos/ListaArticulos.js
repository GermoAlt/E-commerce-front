import React, { useState} from 'react';
import articulosJson from '../../../resources/json/products.json';
import {ProductCard} from './ProductCard';

const ListaArticulos = () => {
    const [articulos] = useState(articulosJson.data);

    return (
        <div>
            <div className="grid">
                {articulos.map (product => {
                    return(
                            <ProductCard
                                id={product.id}
                                code={product.code}
                                name={product.name}
                                description={product.description}
                                image={product.image}
                                price={product.price}
                                category={product.category}
                                quantity={product.quantity}
                                inventoryStatus={product.inventoryStatus}
                                rating={product.rating}
                                />
                    )

                })}
            </div>
        </div>
    )
}

export default ListaArticulos;