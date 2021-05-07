import React, {useContext} from "react";
import { AppContext } from '../../../AppContext';

const Step1 = (props) => {


    const [products, setProducts] = useContext(AppContext)

    const precioTotal = products.reduce((acc, curr) => acc + curr.price, 0);

    return (

        <div className={`${props.visible !== 0 ? "hidden" : ""}`}>
            <div>
                {products.map (product => {
                    return(
                        <div key={product.id} className="tarjeta">
                            <a>
                                <img src={product.image}/>
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>  
                                <p>${product.price}</p>
                            </a>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default Step1;