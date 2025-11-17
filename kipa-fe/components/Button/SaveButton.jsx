import React from 'react';
import { useUserAuthContext } from "../../context/UserAuthContext";
import { createUserAlbumConnection, updateUserAlbum } from '../../services/AlbumServices';

function SaveButton({master, tags, notes, userAlbum}) {
    const { username } = useUserAuthContext();
    
    let id = null;
    let personal = null;

    if (master != null) {
        id = {
            userID: username,
            albumID: master.id
        };
    
        personal = {
            status: master.status,
            tags: tags,
            notes: notes
        }
    }

    const handleSaveButtonClick = () => {
        try {
            if (userAlbum == null && id != null && personal != null) {
                createUserAlbumConnection(master, personal, id);
            }
            else if (userAlbum != null && id == null && personal == null) {
                updateUserAlbum(userAlbum);
            }
            else {
                console.log("SaveButton - Edge");
            }
        }
        catch (error) {
            console.error("Error saving UserAlbum: ", error);
        }
    }

    return (
        <>
            <button className="border-2 border-solid"
                onClick={() => handleSaveButtonClick()}>Save</button>
        </>
    )
}

export { SaveButton };