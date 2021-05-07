import React, {useEffect, useState} from "react";
import { Button } from "primereact/button";

const AuthButton = props => {
    if (props.isLoggedIn) {
        return <Button label="Logout" icon="pi pi-sign-out" className="p-button-rounded p-mr-2" onClick={() => props.setIsLoggedIn(null)}/>;
    } else {
        return <Button label="Login" icon="pi pi-sign-in" className="p-button-rounded p-mr-2" onClick={() => props.onClick('displayBasic')} />;
    }
};

export default AuthButton;