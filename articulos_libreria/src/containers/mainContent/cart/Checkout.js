import React, { useState, useEffect, useRef, useContext } from 'react';
import {Steps} from 'primereact/steps';
import { Toast } from 'primereact/toast';
import { AppContext } from '../../../AppContext';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./step3";

const Checkout = () =>{
    const [products, setProducts] = useContext(AppContext)

    const precioTotal = products.reduce((acc, curr) => acc + curr.price, 0);


    const [activeIndex, setActiveIndex] = useState(0);
    const toast = useRef(null);
    const items = [
        {
            label: 'Artículos',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Artículos en carrito', detail: event.item.label});
            }
        },
        {
            label: 'Pago',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Métodos de pago', detail: event.item.label });
            }
        },
        {
            label: 'Confirmación',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Finalizar', detail: event.item.label });
            }
        }
    ];

    return (
        
        <div className="steps-demo">
            <div>
                <span>Artículos en carrito: {products.length}</span>
                <br />
                <span>Precio: ${precioTotal}</span>
            </div>
            <Toast ref={toast}></Toast>

            <div className="card">
                <h5>blablablabla</h5>
                <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false}/>
                <Step1 visible={activeIndex}/>
                <Step2 visible={activeIndex}/>
                <Step3 visible={activeIndex}/>
            </div>
        </div>
    );
}

export default Checkout;