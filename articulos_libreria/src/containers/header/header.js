import '../../App.css';
import React from "react";
import { Menubar } from 'primereact/menubar';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import logo from '../../resources/logo.svg'

const items = [
    {label: 'Home', icon: 'pi pi-fw pi-home'},
    {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
    {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
    {label: 'Documentation', icon: 'pi pi-fw pi-file'},
    {label: 'Settings', icon: 'pi pi-fw pi-cog'}
];

const leftContents = (
    <React.Fragment >
        <img src={logo} className='logo' alt='Webquill'/>
        <Menubar model={items} className="MenuCategorias"/>
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