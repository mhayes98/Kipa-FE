import React from "react";
import { UserAuthContextProvider } from "../context/UserAuthContext";
import RegistrationForm from "../components/Form/RegistrationForm";

function Register() {
    return( 
        <>
            <RegistrationForm/>
        </>
    )
}

export default Register;