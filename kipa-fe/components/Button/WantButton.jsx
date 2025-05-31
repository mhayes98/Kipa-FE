import React from 'react';
import { useLoginModalContext } from "../../context/LoginModalContext";
import { useUserAuthContext } from "../../context/UserAuthContext";
import { handleUserAlbumButtonClick } from '../../services/AlbumServices';


function WantButton(master) {
    const { username } = useUserAuthContext();
    const { isAuthenticated } = useUserAuthContext();
    const { toggleVisibility } = useLoginModalContext();

    const userAlbumOnClickDTO = { master, username, isAuthenticated, status: "Want", toggleVisibility };

    return (
            <>
            <button className="border-2 border-solid" 
            onClick={() => handleUserAlbumButtonClick(userAlbumOnClickDTO)}>Want</button>
            </>
        )
}

export { WantButton };