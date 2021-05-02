import React from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';


import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

const Topbar = () => {
    const items = [
        {
           
            icon: 'pi pi-shopping-cart',
            items: [
                {
                    label: 'Articulo 1',
                    icon: 'pi pi-pencil',

                },
                {
                    label: 'Articulo 2',
                    icon: 'pi pi-pencil'
                },
                {
                    label: 'Articulo 3',
                    icon: 'pi pi-pencil'
                },
                {
                    label: 'Articulo 4',
                    icon: 'pi pi-pencil'
                }
            ]
        },
        {
            label: 'Usuario',
            icon: 'pi pi-fw pi-user'
        },

        {
            label: 'Salir',
            icon: 'pi pi-fw pi-power-off'
        }
    ];

    const start = <img alt="logo" src="showcase/images/logo.png" height="40" className="p-mr-2"></img>;
    const end = <div><span className="p-input-icon-left"><i className="pi pi-search" /><InputText placeholder="Buscar" type="text"/> </span></div> ; 


    return (
        <div>
            <div className="card">
                <Menubar model={items} start={start} end={end}/>
            </div>
        </div>
    );
}

export default Topbar;