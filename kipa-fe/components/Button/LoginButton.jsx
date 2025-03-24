import React from 'react';
import { useLoginModalContext } from "../../context/LoginModalContext";
//import { LoginModal } from '../components/Modal/LoginModal.jsx';


function LoginButton() {
    const {visibility, toggleVisibility} = useLoginModalContext(); // True = visible, False = hidden
    return (
        <>
        <button onClick={toggleVisibility}>Trig Login</button>
        <p>Visibility: {visibility ? "Visible" : "Hidden"}</p>
        </>
    )

}

export { LoginButton };