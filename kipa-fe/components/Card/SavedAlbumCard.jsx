import React from 'react';
import { useSavedAlbumModalContext } from "../../context/SavedAlbumModalContext";
import { useUserAuthContext } from "../../context/UserAuthContext";
import { getUserAlbum } from "../../services/AlbumServices";


function SavedAlbumCard({ album }) {
    const { albumID, genre, notes, status,
            style, tags, thumbnail, title, tracklist, year } = album;
    const { toggleSavedAlbumModalContext, openSavedAlbumModalWithUserAlbumData } = useSavedAlbumModalContext();
    const { username } = useUserAuthContext();
    
    
    // Need to add the logic to cycle through all styles, genres, tags, etc..
    // Determine how tracklist will be implemented --> AlbumModal most likely? More details?


    const handleClick = () => {
        openSavedAlbumModalWithUserAlbumData(username, albumID);
    }

    function checkHot(tags) {
            return tags.includes("Hot🔥")
        }
    
    return (
        <>
            <div className="border-2 border-solid" onClick={handleClick}>
                <h1>{title}</h1>
                <img src={thumbnail}/>
                <p>{year}</p>
                <div>

                {checkHot(tags) && (
                            <p>🔥</p>
                        )}
                </div>
                <p>{notes}</p>
            </div>
        </>
    )
}

export { SavedAlbumCard };