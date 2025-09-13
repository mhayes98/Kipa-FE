import React from 'react';
import { useLoginModalContext } from "../../context/LoginModalContext";
import { useUserAuthContext } from "../../context/UserAuthContext";
import { useAlbumModalContext } from "../../context/AlbumModalContext";
import { getTracklistByReleaseID, addAlbumToDatabase,
     createUserAlbumConnection, handleUserAlbumButtonClick } from '../../services/AlbumServices';


function OwnButton(master) {
    const { username } = useUserAuthContext();
    const { authenticated } = useUserAuthContext();
    const { toggleLoginModalVisibility } = useLoginModalContext();
    const { toggleAlbumModalVisibility, openAlbumModalWithAlbumData } = useAlbumModalContext();
    
    const userAlbumOnClickDTO = { master, username, authenticated, status: "Own", toggleLoginModalVisibility };

    return (
        <>
        {/* <button className="border-2 border-solid" 
        onClick={() => handleUserAlbumButtonClick(userAlbumOnClickDTO)}>Own</button> */}
            <button className="border-2 border-solid"
                onClick={() => openAlbumModalWithAlbumData(master)}>Own</button>
                
        </>
    )
}

export { OwnButton };