import React from 'react';
import { useLoginModalContext } from "../../context/LoginModalContext";
import { useUserAuthContext } from "../../context/UserAuthContext";
import { useAlbumModalContext } from "../../context/AlbumModalContext";
import { getTracklistByReleaseID, addAlbumToDatabase,
     createUserAlbumConnection, handleUserAlbumButtonClick } from '../../services/AlbumServices';


function OwnButton(master) {
    const { username } = useUserAuthContext();
    const { authenticated } = useUserAuthContext();
    const { toggleVisibility: toggleLoginModal } = useLoginModalContext();
    const { toggleVisibility: toggleAlbumModal } = useAlbumModalContext();
    
    const userAlbumOnClickDTO = { master, username, authenticated, status: "Own", toggleLoginModal };

    return (
        <>
        {/* <button className="border-2 border-solid" 
        onClick={() => handleUserAlbumButtonClick(userAlbumOnClickDTO)}>Own</button> */}
            <button className="border-2 border-solid"
                onClick={toggleAlbumModal}>Own</button>
        </>
    )
}

export { OwnButton };