import '../../App.css';
import React, {useState,useContext} from "react";
import { MegaMenu } from 'primereact/megamenu';
import { Menubar } from 'primereact/menubar';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom'
import classNames from "classnames";

import logo from '../../resources/images/logo.svg';
import Login from "../mainContent/login/login";
import { AppContext } from '../../AppContext';


    export default function Header() {

    const [carritoCantidad, setCart] = useContext(AppContext)

    const menuItemTemplate = (icon, path, item, options) => {
        return (
            <li className={"p-menuitem"}>
                <Link to={`${path}`} className={"p-menuitem-link"}>
                    <span className={classNames(options.iconClassName, `pi ${icon}`)}/>
                    <span className={options.labelClassName}>{item.label}</span>
                </Link>
            </li>
        )
    }

    const menuCategories = [{
            "label": "Inicio",
            template: (item, options) => {
                return menuItemTemplate("pi-home", "/home", item, options);
            }
        },
        {
            "label": "Artículos",
            "icon": "pi pi-fw pi-th-large",
            "items": [
                {
                    "label": "Cuadernos",
                    "icon": "pi pi-book",
                    template: (item, options) => {
                        return menuItemTemplate("pi-book", "/articulos", item, options);
                    }
                }
            ]
        },
        {
            "label": "Ofertas",
            "icon": "pi pi-fw pi-tags"
        },
        {
            "label": "Transacciones",
            "icon": "pi pi-fw pi-book"
        },
        {
            "label": "Modificar Productos",
            "icon": "pi pi-fw pi-sliders-v"
        }]

    const leftContents = (
        <React.Fragment >
            <img src={logo} className='logo' alt='Webquill'/>
            <MegaMenu className="menu-categorias">
                <Menubar className={"menu-categorias-content"} model={menuCategories}>

                </Menubar>
            </MegaMenu>
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
            <Link to="/carrito" className="p-button-rounded p-mr-2">Carrito </Link>
            <span>Artículos en carrito: {carritoCantidad.length}</span>
            <Login />
        </React.Fragment>
    );


    return (
        <div className="app-header p-d-flex">
            <Toolbar left={leftContents} right={rightContents} />
        </div>
    );
}