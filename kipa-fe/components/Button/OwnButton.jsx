import React from 'react';
import { useLoginModalContext } from "../../context/LoginModalContext";
import { useUserAuthContext } from "../../context/UserAuthContext";
import { getTracklistByReleaseID, addAlbumToDatabase,
     createUserAlbumConnection, handleUserAlbumButtonClick } from '../../services/AlbumServices';


function OwnButton(master) {
    const { username } = useUserAuthContext();
    const { authenticated } = useUserAuthContext();
    const { toggleVisibility } = useLoginModalContext();
    
    const userAlbumOnClickDTO = { master, username, authenticated, status: "Own", toggleVisibility };

    return (
        <>
        <button className="border-2 border-solid" 
        onClick={() => handleUserAlbumButtonClick(userAlbumOnClickDTO)}>Own</button>
        </>
    )
}

export { OwnButton };