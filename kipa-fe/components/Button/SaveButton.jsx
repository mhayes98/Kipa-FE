import React, { useState } from 'react';
import { useUserAuthContext } from "../../context/UserAuthContext";
import { createUserAlbumConnection, updateUserAlbum } from '../../services/AlbumServices';

function SaveButton({master, tags, notes, userAlbum}) {
    const { username } = useUserAuthContext();
    const [clicked, setClicked] = useState(false);
    
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
            setClicked(true);
            setTimeout(() => setClicked(false), 200);
        }
        catch (error) {
            console.error("Error saving UserAlbum: ", error);
        }
    }

    return (
            <>
                 <button
            onClick={handleSaveButtonClick}
            style={{
                padding: "0.25rem 0.5rem",
                fontSize: "0.9rem",
                fontWeight: clicked ? "bold" : "normal",
                backgroundColor: clicked ? "#1a4b8c" : "#123366",
                color: "#fff",
                border: "2px solid #0d264d",
                borderRadius: "4px",
                cursor: "pointer",
                boxShadow: clicked ? "0 4px 10px rgba(0,0,0,0.5)" : "0 2px 4px rgba(0,0,0,0.3)",
                transform: clicked ? "translateY(2px)" : "translateY(0)",
                transition: "all 0.1s ease-in-out",
            }}
        >
            Save
        </button>
            </>
  );
}

export { SaveButton };