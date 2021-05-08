import React, { useState} from 'react';
import articulosJson from '../../../resources/json/products.json';
import {ProductCard} from './ProductCard';
import {useParams} from "react-router";

const ListaArticulos = () => {
    const [articulos] = useState(articulosJson.data);
    const categoria = useParams().category;
    const art = articulos.filter((item) => item.category.toLowerCase().split(" ")[0] === categoria)
    return (
        <div>
            <div className="grid">
                {art.map (product => {
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