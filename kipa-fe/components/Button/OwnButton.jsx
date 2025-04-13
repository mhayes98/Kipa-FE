import React from 'react';
import { useLoginModalContext } from "../../context/LoginModalContext";
import { useUserAuthContext } from "../../context/UserAuthContext";

// CLICKING THIS BUTTON WILL NEED TO TRIGER A LOGIN IF USER IS NOT AUTH

function OwnButton(albumID) {
    const { username } = useUserAuthContext();


    async function placeholder(albumID, username) {
        console.log("PLACEHOLDER");
    }

    return (
        <>
            <button onClick={placeholder(123, username)}>Own</button>
        </>
    )
}

export { OwnButton };