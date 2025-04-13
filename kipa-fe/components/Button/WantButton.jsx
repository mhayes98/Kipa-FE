import React from 'react';
import { useLoginModalContext } from "../../context/LoginModalContext";
import { useUserAuthContext } from "../../context/UserAuthContext";

// CLICKING THIS BUTTON WILL NEED TO TRIGER A LOGIN IF USER IS NOT AUTH

function WantButton(master) {
    const { username } = useUserAuthContext();


    async function placeholder(id, username) {
        console.log("PLACEHOLDER --> WANT");
    }

    return (
        <>
            <button onClick={placeholder(master.id, username)}>Own</button>
        </>
    )
}

export { WantButton };