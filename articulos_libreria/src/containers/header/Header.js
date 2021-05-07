import '../../App.css';
import React, {useContext, useState} from "react";
import { MegaMenu } from 'primereact/megamenu';
import { Menubar } from 'primereact/menubar';
import { Toolbar } from 'primereact/toolbar';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom'
import classNames from "classnames";

import logo from '../../resources/images/logo.svg';
import Login from "../mainContent/login/Login";
import { AppContext } from '../../AppContext';


export default function Header(props) {
    const [carritoCantidad, setCart] = useContext(AppContext)

    const menuItemTemplate = (icon, path, item, options) => {
        return (
            <li className={"p-menuitem"}>
                <Link to={`${path}`} className={"p-menuitem-link"}>
                    <span className={classNames(options.iconClassName, `pi pi-fw ${icon}`)}/>
                    <span className={options.labelClassName}>{item.label}</span>
                </Link>
            </li>
        )
    }

    const menuItemAdminTemplate = (icon, path, item, options) => {
        console.log(props)
        console.log(props.isLoggedIn)
        return (
            <li className={`p-menuitem ${props.isLoggedIn === "admin" ? "" : "hidden"}`}>
                <Link to={`${path}`} className={"p-menuitem-link"}>
                    <span className={classNames(options.iconClassName, `pi pi-fw ${icon}`)}/>
                    <span className={options.labelClassName}>{item.label}</span>
                </Link>
            </li>
        )
    }

    const menuCategories = [{
            "label": "Inicio",
            template: (item, options) => {
                return menuItemTemplate("pi-home", "/", item, options);
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
            template: (item, options) => {
                return menuItemTemplate("pi-tags", "/ofertas", item, options);
            }
        },
        {
            "label": "Transacciones",
            template: (item, options) => {
                return menuItemAdminTemplate("pi-book", "/transacciones", item, options);
            }
        },
        {
            "label": "Modificar Productos",
            template: (item, options) => {
                return menuItemAdminTemplate("pi-sliders-v", "/gestionProductos", item, options);
            }
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
            <Link to="/carrito" className="p-button-rounded p-mr-2">
                <Button label={"Carrito"} icon="pi pi-shopping-cart" className="p-button-rounded p-mr-2">
                    <Badge className={`${carritoCantidad.length === 0 ? "hidden" : ""}`} value={carritoCantidad.length}/>
                </Button>
            </Link>
            <Login isLoggedIn={props.isLoggedIn} setIsLoggedIn={(value) => {props.setIsLoggedIn(value)}}/>
        </React.Fragment>
    );


    return (
        <div className="app-header p-d-flex">
            <Toolbar left={leftContents} right={rightContents} />
        </div>
    );
}