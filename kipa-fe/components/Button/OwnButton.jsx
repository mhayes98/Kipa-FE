import React from 'react';
import { useLoginModalContext } from "../../context/LoginModalContext";
import { useUserAuthContext } from "../../context/UserAuthContext";
import { getTracklistByReleaseID, addAlbumToDatabase, createUserAlbumConnection } from '../../services/AlbumServices';

// CLICKING THIS BUTTON WILL NEED TO TRIGER A LOGIN IF USER IS NOT AUTH

function OwnButton(master) {
    const { username } = useUserAuthContext();

    return (
        <>
        <button onClick={() => createUserAlbumConnection(master, username, "Own")}>Want</button>
        </>
    )
}

export { OwnButton };