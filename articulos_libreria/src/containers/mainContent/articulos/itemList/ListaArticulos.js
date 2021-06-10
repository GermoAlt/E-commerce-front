import './itemList.css'

import React, { useState} from 'react';
import articulosJson from '../../../../resources/json/products.json';
import {useParams} from "react-router";
import ItemPanel from "./ItemPanel";

const ListaArticulos = () => {
    const [articulos] = useState(articulosJson.data);
    const categoria = useParams().category;
    const art = articulos.filter((item) => item.category.toLowerCase().split(" ")[0] === categoria)
    return (
        <div>
            <ItemPanel products={art} title={art[0].category}/>
        </div>
    )
}

export default ListaArticulos;