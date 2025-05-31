import React from 'react';
import { useUserAuthContext } from "../../context/UserAuthContext";
import { getMySavedAlbums } from '../../services/AlbumServices';
import { useLoginModalContext } from "../../context/LoginModalContext";

function SavedAlbumList() {
    const { username } = useUserAuthContext();
    const { isAuthenticated } = useUserAuthContext();
    const { toggleVisibility } = useLoginModalContext();

    // Authenticated check not working correctly
    // Username passthrough not working correctly
    if(isAuthenticated){
        console.log("AUTH");
        getMySavedAlbums(username);
    }
    else {
        console.log(isAuthenticated);
        toggleVisibility;
    }

    // Manuaal call to 'testuser' is functional
    //getMySavedAlbums("testuser");

    return(
        <>
        </>
    )
}

export { SavedAlbumList };