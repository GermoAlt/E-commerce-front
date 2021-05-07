import React, { useState, useContext} from 'react';
import articulosJson from '../../../resources/json/products.json';
import {Cuadernos} from './Cuadernos';

const ListaArticulos = () => {
    const [articulos] = useState(articulosJson.data);

    return (
        <div>
            <div className="grid">
                {articulos.map (product => {
                    return(
                            <Cuadernos
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
                            ></Cuadernos>

                    )

                })}
            </div>
        </div>
    )
}

export default ListaArticulos;