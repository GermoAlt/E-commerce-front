import React, {useContext, useRef} from "react";
import { Button } from "primereact/button";
import {TieredMenu} from "primereact/tieredmenu"
import {Link} from "react-router-dom";
import classNames from "classnames";
import useUser from "../../../hooks/useUser";



const AuthButton = props => {
    const menu = useRef(null);
    const {user, changeUser} = useUser();

    const items = [
        {
            label: 'Panel de Control',
            template: (item, options) => {
                return adminOptionTemplate("pi-sliders-v", "", "login-dropdown-option-top", item, options)
            },
            items:[
                {
                    label:'ABM de Productos',
                    template: (item, options) => {
                        return adminOptionTemplate("pi-power-off", "/gestionProductos", "login-dropdown-option-nested", item, options)
                    }
                },
                {
                    label: 'Log de Transacciones',
                    template: (item, options) => {
                        return adminOptionTemplate("pi-power-off", "/transacciones", "login-dropdown-option-nested", item, options)
                    }
                }
            ]
        },
        {
            label: 'Perfil',
            template: (item, options) => {
                return userOptionTemplate("pi-power-off", "/perfil", item, options)
            }
        },
        {
            separator:true
        },
        {
            label:'Log out',
            command: () => {
                changeUser({type:"guest"})
            },
            template: (item, options) => {
                return logoutTemplate("pi-power-off", "", item, options)
            }
        }
    ];

    const adminOptionTemplate = (icon, path, nameClass, item, options) => {
        return (
            <div className={` ${nameClass} ${user.type === "admin" ? "" : "hidden"}`}>
                <Link to={`${path}`} className={`p-menuitem-link`}>
                    <span className={classNames(options.iconClassName, `pi pi-fw ${icon}`)}/>
                    <span className={options.labelClassName}>{item.label}</span>
                </Link>
            </div>
        )
    }



    const userOptionTemplate = (icon, path, item, options) => {
        return (
            <li className={`p-menuitem ${user.type === "admin" ? "hidden" : ""}`}>
                <Link to={`${path}`} className={"p-menuitem-link"}>
                    <span className={classNames(options.iconClassName, `pi pi-fw ${icon}`)}/>
                    <span className={options.labelClassName}>{item.label}</span>
                </Link>
            </li>
        )
    }

    const logoutTemplate = (icon, path, item, options) => {
        return (
            <li className={`login-dropdown-option-logout-container`}>
                <Button label="Logout" icon="pi pi-sign-out" className="login-dropdown-option-logout p-button-danger p-button-text" onClick={() => changeUser({type:"guest"})}/>
            </li>
        )
    }
    if (user.type !== "guest") {
        return (
            <div>
                <TieredMenu model={items} className={"pull-left"} popup ref={menu} />
                <Button label="Show" icon="pi pi-bars" className="p-button-rounded p-mr-2" onClick={(event) => menu.current.toggle(event)}/>
            </div>
        )
    } else {
        return <Button label="Login" icon="pi pi-sign-in" className="p-button-rounded p-mr-2" onClick={() => props.onClick('displayBasic')} />
    }
}

export default AuthButton;