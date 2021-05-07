import React, { useContext } from 'react';
import { Button } from 'primereact/button';
import { AppContext } from '../../../AppContext';


const Carrito = () => {
    const [carrito, setCart] = useContext(AppContext)
    const precioTotal = carrito.reduce((acc, curr) => acc + curr.props.price, 0);

    const eliminarArticulo = (id) => {

    }


    return(
        <div>
            <span>Artículos en carrito: {carrito.length}</span>
            <br />
            <span>Precio: ${precioTotal}</span>
      
            <div>
                {carrito.map (product => {
                    return(
                        <div key={product.props.id} className="card">
                            <a>
                                <img src={product.props.image}/>
                                <h3>{product.props.name}</h3>
                                <p>{product.props.description}</p>  
                                <p>${product.props.price}</p>
                            </a>
                            <p>
                                <Button onClick={() => eliminarArticulo (product.props.id)}>
                                   Eliminar de carrito
                                </Button>
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>

    )
  }



  export default Carrito;