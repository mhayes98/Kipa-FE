import React from "react";
import { useLoginModalContext } from "../../context/LoginModalContext";
import { NavLink } from 'react-router';

function AuthPromptView() {
    const { toggleVisibility } = useLoginModalContext();

    return (
        <>
            <h2>Login to view your collection!</h2>
            <button type="button"
            onClick={toggleVisibility}
            className="bg-blue-400 text-white px-1.5 py-0.2 rounded hover:bg-blue-600">
                Login
            </button>
            <h2>Don't have an account? Click <NavLink to="/register" className="text-blue-500">here</NavLink> to register!</h2>
        </>
    )
}

export default AuthPromptView;