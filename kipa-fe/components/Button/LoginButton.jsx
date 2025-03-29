import React from 'react';
import { useLoginModalContext } from "../../context/LoginModalContext";
import { useUserAuthContext } from "../../context/UserAuthContext";


function LoginButton() {
    const {visibility, toggleVisibility} = useLoginModalContext(); // True = visible, False = hidden
    const { username } = useUserAuthContext();
    return (
        <>
        <button onClick={toggleVisibility}>Trig Login</button>
        <h1>Username: {username}</h1>
        <p>Visibility: {visibility ? "Visible" : "Hidden"}</p>
        </>
    )

}

export { LoginButton };