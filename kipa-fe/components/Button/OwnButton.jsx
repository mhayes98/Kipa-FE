import React from 'react';
import { useLoginModalContext } from "../../context/LoginModalContext";
import { useUserAuthContext } from "../../context/UserAuthContext";
import { getTracklistByReleaseID, addAlbumToDatabase, createUserAlbumConnection } from '../../services/AlbumServices';


function OwnButton(master) {
    const { username } = useUserAuthContext();
    const { isAuthenticated } = useUserAuthContext();
    const { toggleVisibility } = useLoginModalContext();

    // Make this function elsewhere and import it
    // Trigger login modal if user is not authenticated
    const handleClick = () => {
        console.log(isAuthenticated);
        if (isAuthenticated) {
            createUserAlbumConnection(master, username, "Own");
            console.log("TEST - TRUE");
        }
        else {
            console.log("TEST - FALSE");
            toggleVisibility();
        }
    }

    return (
        <>
        <button className="border-2 border-solid" onClick={handleClick}>Own</button>
        </>
    )
}

export { OwnButton };