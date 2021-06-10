import React from "react";
import { Accordion, AccordionTab } from 'primereact/accordion';
import {InputText} from 'primereact/inputtext'
import { Calendar } from 'primereact/calendar';
import {useState} from "react";
import {Button} from "primereact/button";

const Step2 = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [dob, setDob] = useState('');

    return (
        <div className={`${props.visible !== 1 ? "hidden" : ""}`}>

            <Button className={"checkout-accordion-tab-button p-button-secondary"} icon={"pi pi-arrow-circle-left"} label={"Atrás"}/>
            <Button className={"checkout-accordion-tab-button"} iconPos={"right"} icon={"pi pi-arrow-circle-right"} label={"Siguiente"}/>
            <Accordion className={"checkout-accordion"} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <AccordionTab header="Datos Personales">
                    <div className={"checkout-accordion-tab-content-container"}>
                        <InputText id={"name"} className={"checkout-accordion-input"}/>
                        <label htmlFor="name">Nombre/s</label>
                        <InputText id={"surname"} className={"checkout-accordion-input"}/>
                        <label htmlFor="surname" >Apellido/s</label>
                        <Calendar id={"dob"} className={"checkout-accordion-input"}/>
                        <label htmlFor="dob">Fecha de Nacimiento</label>
                    </div>
                </AccordionTab>
                <AccordionTab header="Domicilio">
                    <div className={"checkout-accordion-tab-content-container"}>
                        <InputText id={"name"} className={"checkout-accordion-input"}/>
                        <label htmlFor="name">Nro Tarjeta</label>
                        <InputText id={"surname"} className={"checkout-accordion-input"}/>
                        <label htmlFor="surname">Codigo de seguridad</label>
                        <Calendar id={"dob"} className={"checkout-accordion-input"}/>
                        <label htmlFor="dob">Fecha de Caducidad</label>
                    </div>
                </AccordionTab>
                <AccordionTab header="Datos de pago">
                    <div className={"checkout-accordion-tab-content-container"}>
                        <InputText id={"name"} className={"checkout-accordion-input"}/>
                        <label htmlFor="name">Nro Tarjeta</label>
                        <InputText id={"surname"} className={"checkout-accordion-input"}/>
                        <label htmlFor="surname">Codigo de seguridad</label>
                        <Calendar id={"dob"} className={"checkout-accordion-input"}/>
                        <label htmlFor="dob">Fecha de Caducidad</label>
                    </div>
                </AccordionTab>
            </Accordion>
        </div>
    )
}

export default Step2;