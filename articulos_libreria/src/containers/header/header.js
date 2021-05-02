import '../../App.css';
import React from "react";
import { MegaMenu } from 'primereact/megamenu';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import logo from '../../resources/images/logo.svg'

const items = [
    {label: 'Inicio', icon: 'pi pi-fw pi-home'},
    {label: 'Categorías', icon: 'pi pi-fw pi-th-large'},
    {label: 'Ofertas', icon: 'pi pi-fw pi-tags'},
];

const leftContents = (
    <React.Fragment >
        <img src={logo} className='logo' alt='Webquill'/>
        <MegaMenu model={items} className="MenuCategorias"/>
    </React.Fragment>
);

const rightContents = (
    <React.Fragment>
        <div className="searchbar-container">
            <span className="p-input-icon-right" id="searchbar">
                <i className="pi pi-search" />
                <InputText placeholder="Search"/>
            </span>
        </div>
        <Button icon="pi pi-shopping-cart" className="p-button-rounded p-mr-2" />
        <Button icon="pi pi-user" className="p-button-rounded p-mr-2"/>
    </React.Fragment>
);

export default function Header() {
    return (
        <div className="Header p-d-flex">
            <Toolbar left={leftContents} right={rightContents} />
        </div>
    );
}