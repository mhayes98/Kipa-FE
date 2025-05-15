import React from 'react';
import { useUserAuthContext } from "../../context/UserAuthContext";
import { getMySavedAlbums } from '../../services/AlbumServices.js';
import { useLoginModalContext } from "../../context/LoginModalContext";

function SavedAlbumList() {
    const { authenticated, username } = useUserAuthContext();
    const { toggleVisibility } = useLoginModalContext();

    // Authenticated check not working correctly
    // Username passthrough not working correctly
    if(authenticated){
        getMySavedAlbums(username);
    }
    else {
        toggleVisibility;
    }
    // Manuaal call to 'testuser' is functional
    getMySavedAlbums("testuser");

    return(
        <>
        </>
    )
}

export { SavedAlbumList };