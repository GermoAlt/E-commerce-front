import { Accordion, AccordionTab } from 'primereact/accordion';
import {InputText} from 'primereact/inputtext'
import { Calendar } from 'primereact/calendar';
import {useState} from "react";

const Step2 = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [dob, setDob] = useState('');

    return (
        <div className={`${props.visible !== 1 ? "hidden" : ""}`}>
            <Accordion className={"checkout-accordion"} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <AccordionTab header="Datos Personales">
                    <InputText id={"name"}/>
                    <label htmlFor="name">Nombre/s</label>
                    <InputText id={"surname"}/>
                    <label htmlFor="surname">Apellido/s</label>
                    <Calendar id={"dob"}/>
                    <label htmlFor="dob">Fecha de Nacimiento</label>
                </AccordionTab>
                <AccordionTab header="Domicilio">
                    Content II
                </AccordionTab>
                <AccordionTab header="Datos de pago">
                </AccordionTab>
            </Accordion>
        </div>
    )
}

export default Step2;