import React from "react";
import { useUserAuthContext } from "../../context/UserAuthContext";
import { useSavedAlbumModalContext } from "../../context/SavedAlbumModalContext";

// Values:
// id --> albumID, userID
// album --> artist, genre, id, style[], thumbnail, title, tracklist, year
// userAlbum --> id (above), notes, status, tags[]

function SavedAlbumModal() {
    const { savedAlbumModalVisibility, toggleSavedAlbumModalVisibility,
                userAlbum, id, album } = useSavedAlbumModalContext(); 

                <> NEED TO ADD ALBUM CSS / VALUES ! MAYBE COPY OFF AlbumModal
                    MIGHT NEED TO MOVE SOME FUNCTIONS TO A CENTRAL LOCATION i.e. 'HandleNotes' </>

    return (
        <>
            {savedAlbumModalVisibility && (
                <p>TESTING</p>
            )}
        </>
    )
}

export { SavedAlbumModal };
