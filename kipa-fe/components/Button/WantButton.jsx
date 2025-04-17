import React from 'react';
import { useLoginModalContext } from "../../context/LoginModalContext";
import { useUserAuthContext } from "../../context/UserAuthContext";
import { getTracklistByReleaseID, addAlbumToDatabase } from '../../services/AlbumServices';

// CLICKING THIS BUTTON WILL NEED TO TRIGER A LOGIN IF USER IS NOT AUTH

function WantButton(master) {
    const { username } = useUserAuthContext();

    return (
        <>
        <button onClick={() => addAlbumToDatabase(master)}>Want</button>
        </>
    )
}

export { WantButton };