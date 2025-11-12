import React from 'react';
import { useUserAuthContext } from "../../context/UserAuthContext";
import { createUserAlbumConnection } from '../../services/AlbumServices';

function SaveButton({master, tags, notes}) {
    const { username } = useUserAuthContext();
    
    const id = {
        userID: username,
        albumID: master.id
    };

    const personal = {
        status: master.status,
        tags: tags,
        notes: notes
    }

    if(personal == null) {
        console.log("T");
    }

    const handleSaveButtonClick = () => {
        try {
            createUserAlbumConnection(master, personal, id);
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