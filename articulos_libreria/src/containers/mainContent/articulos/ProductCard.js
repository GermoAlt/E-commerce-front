import React, {useContext} from 'react';
import { Button } from 'primereact/button';
import { AppContext } from '../../../AppContext';


export const ProductCard = (props) => {
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
        setCart(carritoActual => [...carritoActual, cuaderno.props])
    }
    return (
        <div>
                <div id={props.id} className="tarjeta p-card">
                    <a>
                        <img src={props.image}/>
                        <h3>{props.name}</h3>
                        <p>{props.description}</p>  
                        <p>${props.price}</p>
                    </a>
                            
                        <Button label="Ver" style={{marginRight: '.25em'}} className="p-button-secondary"/>
                        <Button label="Agregar al carrito" icon="pi pi-shopping-cart" onClick={agregarCarrito}/>
                </div>
        </div>
    )
}


