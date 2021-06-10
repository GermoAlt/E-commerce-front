import React, {useContext, useRef} from "react";
import { Button } from "primereact/button";
import {TieredMenu} from "primereact/tieredmenu"
import {Link} from "react-router-dom";
import classNames from "classnames";
import LoginContext from "../../../contexts/LoginContext";



const AuthButton = props => {
    const menu = useRef(null);
    const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext)

    const items = [
        {
            label: 'Panel de Control',
            template: (item, options) => {
                return adminOptionTemplate("", "", item, options)
            },
            items:[
                {
                    label:'ABM de Productos',
                    template: (item, options) => {
                        return adminOptionTemplate("", "", item, options)
                    }
                },
                {
                    label: 'Log de Transacciones',
                    template: (item, options) => {
                        return adminOptionTemplate("", "", item, options)
                    }
                }
            ]
        },
        {
            label: 'Perfil',
            template: (item, options) => {
                return userOptionTemplate("", "", item, options)
            }
        },
        {
            separator:true
        },
        {
            label:'Log out',
            template: (item, options) => {
                return logoutTemplate("pi-power-off", "", item, options)
            }
        }
    ];

    const adminOptionTemplate = (icon, path, item, options) => {
        return (
            <li className={`p-menuitem ${props.isLoggedIn === "admin" ? "" : "hidden"}`}>
                <Link to={`${path}`} className={"p-menuitem-link"}>
                    <span className={classNames(options.iconClassName, `pi pi-fw ${icon}`)}/>
                    <span className={options.labelClassName}>{item.label}</span>
                </Link>
            </li>
        )
    }

    const userOptionTemplate = (icon, path, item, options) => {
        return (
            <li className={`p-menuitem ${props.isLoggedIn === "admin" ? "hidden" : ""}`}>
                <Link to={`${path}`} className={"p-menuitem-link"}>
                    <span className={classNames(options.iconClassName, `pi pi-fw ${icon}`)}/>
                    <span className={options.labelClassName}>{item.label}</span>
                </Link>
            </li>
        )
    }

    const logoutTemplate = (icon, path, item, options) => {
        return (
            <li className={`p-menuitem`}>
                <Button label="Logout" icon="pi pi-sign-out" className="p-button-rounded p-mr-2" onClick={() => setIsLoggedIn(null)}/>;
            </li>
        )
    }
    if (isLoggedIn) {
        return (
            <div>
                <TieredMenu model={items} className={"pull-left"} popup ref={menu} />
                <Button label="Show" icon="pi pi-bars" className="p-button-rounded p-mr-2" onClick={(event) => menu.current.toggle(event)}/>
            </div>
        )
    } else {
        return <Button label="Login" icon="pi pi-sign-in" className="p-button-rounded p-mr-2" onClick={() => props.onClick('displayBasic')} />;
    }
};

export default AuthButton;