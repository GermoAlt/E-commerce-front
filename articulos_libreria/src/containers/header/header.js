import '../../App.css';
import React, {useState} from "react";
import { MegaMenu } from 'primereact/megamenu';
import { Menubar } from 'primereact/menubar';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import logo from '../../resources/images/logo.svg'
import Login from "../mainContent/login/Login";
import MenuCategoriesJson from '../../resources/json/menuCategories.json'


    export default function Header() {

    const [menuCategories] = useState(MenuCategoriesJson.data);

    const leftContents = (
        <React.Fragment >
            <img src={logo} className='logo' alt='Webquill'/>
            <MegaMenu className="menu-categorias">
                <Menubar className={"menu-categorias-content"} model={menuCategories}/>
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
            <Button icon="pi pi-shopping-cart" className="p-button-rounded p-mr-2" />
            <Login />
        </React.Fragment>
    );


    return (
        <div className="app-header p-d-flex">
            <Toolbar left={leftContents} right={rightContents} />
        </div>
    );
}