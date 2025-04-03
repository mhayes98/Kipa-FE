import React from "react";
import { UserAuthContextProvider } from "../context/UserAuthContext";
import RegistrationForm from "../components/Form/RegistrationForm";

function Register() {
    return( 
        <>
            <UserAuthContextProvider>
                <RegistrationForm/>
            </UserAuthContextProvider>
        </>
    )
}

export default Register;