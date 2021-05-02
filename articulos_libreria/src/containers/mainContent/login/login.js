import React, {useState} from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import logo from "../../../resources/images/logo.svg";
import AuthButton from "../../../components/AuthButton";

const Login = () => {
    const [displayBasic, setDisplayBasic] = useState(false);
    const [username, setUsermame] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const dialogFuncMap = {
        'displayBasic': setDisplayBasic,
    }

    const onClick = (name) => {
        dialogFuncMap[`${name}`](true);
    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }

    const footer = (
        <div>
            <Button label="Cancelar" className="p-button-rounded p-mr-2 p-button-secondary" onClick={() => onHide('displayBasic')} />
            <Button label="Login" className="p-button-rounded p-mr-2" onClick={() => onClick('displayBasic')} />
        </div>
    )
    return (
        <div className={"login"}>
            <AuthButton onClick={onClick}/>
            <Dialog className={"login-dialog"} footer={footer} visible={displayBasic} onHide={() => onHide('displayBasic')}
                    resizable={false} draggable={false} dismissableMask closable={false} showHeader={false}>
                <div className={"login-dialog-content-container"}>
                    <img src={logo} className='login-dialog-logo' alt='Webquill'/>
                    <div className={"login-dialog-header-text"}>
                        <h2>Acceder al sitio</h2>
                    </div>
                    <span className="login-dialog-input">
                        <InputText id="in" value={username} onChange={(e) => setUsermame(e.target.value)} placeholder={"Usuario"}/>
                    </span>
                    <span className="login-dialog-input">
                        <InputText id="in" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={"Contraseña"}/>
                    </span>
                </div>
            </Dialog>
        </div>
    );
}

export default Login;