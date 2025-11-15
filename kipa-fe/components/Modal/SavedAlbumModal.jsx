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

        function hotAlbum(tags) {
            return tags.includes("Hot🔥")
        }

    return (
        <>
            {savedAlbumModalVisibility && (
            <div>
                <div style={{ flex: "0 0 220px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <img
                                src={album.thumbnail}
                                alt={album.title}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: "8px",
                                    border: "2px solid #555",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                                    padding: "2px",
                                }}
                            />
                            <h3 style={{ marginTop: "1rem", marginBottom: "0.25rem", textAlign: "center" }}>{album.artist}</h3>
                            <h2 style={{ margin: 0, textAlign: "center" }}>
                                {album.title} - {album.year}
                            </h2>
                            <h4 style={{ marginTop: "0.5rem", fontWeight: "normal", textAlign: "center" }}>{album.genre}</h4>
                        </div>
                    <div>
                        {hotAlbum(userAlbum.tags) && (
                            <p>🔥</p>
                        )}
                        <p>{userAlbum.status}</p>
                    </div>
                    <div>
                        <p>{userAlbum.notes}</p>
                    </div>
                    <ul>
                        {album.tracklist && album.tracklist.map((track, index) => (
                            <li key={index}>{index+1}. {track.title} - {track.duration}</li>
                        ))}
                    </ul>
            </div>
            )}
        </>
    )
}

export { SavedAlbumModal };
