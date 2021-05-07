import React, { useState, useContext} from 'react';
import { Button } from 'primereact/button';
import { AppContext, useStateValue } from '../../../AppContext';


export const Cuadernos = (props) => {
    const [cart, setCart] = useContext(AppContext)

    /*const[{carrito}, dispatch] = useStateValue()
    const agregarCarrito = () => {
        dispatch ({
            type: 'AGREGAR_CARRITO',
            item: {
                id: cuaderno.id,
                image: cuaderno.image,
                name: cuaderno.name,
                description: cuaderno.description,
                price: cuaderno.price   
            }
        }) */
    
    const agregarCarrito = () => {
      const cuaderno = {props};
        setCart(carritoActual => [...carritoActual, cuaderno])
    }
    return (
        <div>
                <div id={props.id} className="card">
                    <a>
                        <img src={props.image}/>
                        <h3>{props.name}</h3>
                        <p>{props.description}</p>  
                        <p>${props.price}</p>
                    </a>
                            
                    <p>
                        <Button onClick={agregarCarrito}>
                            Añadir a carrito
                        </Button>
                    </p>
                </div>
        </div>
    )
}


