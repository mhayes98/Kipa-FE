import React from 'react';
import { useLoginModalContext } from "../../context/LoginModalContext";
import { useUserAuthContext } from "../../context/UserAuthContext";


function LoginButton() {
    const {loginModalVisibility, toggleLoginModalVisibility} = useLoginModalContext(); // True = visible, False = hidden
    const { username } = useUserAuthContext();

    // This will need to be changed later
    // Check for user auth & prompt for LoginModal if not auth (look at Want/OwnButton)
    return (
        <>
        {/* <p>__________________________________________</p>
        <button 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={toggleLoginModalVisibility}>Trig Login</button>
        <h1>Username: {username}</h1>
        <p>Visibility: {visibility ? "Visible" : "Hidden"}</p>
        <p>__________________________________________</p>
        <br></br> */}
        </>
    )

}

export { LoginButton };