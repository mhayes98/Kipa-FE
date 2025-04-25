import React from 'react';
import { useLoginModalContext } from "../../context/LoginModalContext";
import { useUserAuthContext } from "../../context/UserAuthContext";
import { getTracklistByReleaseID, addAlbumToDatabase, createUserAlbumConnection } from '../../services/AlbumServices';

// CLICKING THIS BUTTON WILL NEED TO TRIGER A LOGIN IF USER IS NOT AUTH

function WantButton(master) {
    const { username } = useUserAuthContext();
    const { isAuthenticated } = useUserAuthContext();
    const { toggleVisibility } = useLoginModalContext();

    const handleClick = () => {
        console.log(isAuthenticated);
        if (isAuthenticated) {
            createUserAlbumConnection(master, username, "Want");
            console.log("TEST - TRUE");
        }
        else {
            console.log("TEST - FALSE");
            toggleVisibility();
        }
    }

    return (
        <>
        <button onClick={handleClick}>Want</button>
        </>
    )
}

export { WantButton };