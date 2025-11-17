import React, { useEffect, useState } from "react";
import { useUserAuthContext } from "../../context/UserAuthContext";
import { useSavedAlbumModalContext } from "../../context/SavedAlbumModalContext";
import TagButton from "../Button/TagButton";
import { TagLabel } from "../Label/TagLabel";
import { SaveButton } from "../Button/SaveButton";

// Values:
// id --> albumID, userID
// album --> artist, genre, id, style[], thumbnail, title, tracklist, year
// userAlbum --> id (above), notes, status, tags[]

function SavedAlbumModal() {
    const { savedAlbumModalVisibility, toggleSavedAlbumModalVisibility,
            userAlbum, setUserAlbum, 
            id, setId, 
            album, setAlbum } = useSavedAlbumModalContext(); 

    useEffect(() => {
            const handleEsc = (e) => {
            if (e.key === "Escape" && savedAlbumModalVisibility) toggleSavedAlbumModalVisibility();
        };
            window.addEventListener("keydown", handleEsc);
            return () => window.removeEventListener("keydown", handleEsc);
        }, [toggleSavedAlbumModalVisibility]);

    const handleClose = () => {
        toggleSavedAlbumModalVisibility();
    }

    function hotAlbum(tags) {
        return tags.includes("Hot🔥")
    }

    const handleNotesChange = (e) => {
        userAlbum.notes = (e.target.value);
        setUserAlbum(current => ({...current, notes: e.target.value}));
    };

    function checkExistingTag(tag) {
        return userAlbum.tags.includes(tag);
    }

    function addTagToList(tag) {
        if (!checkExistingTag(tag)){
            const arr = [...userAlbum.tags];
            arr.push(tag);
            console.log(userAlbum.tags);
            setUserAlbum(current => ({...current, tags: arr}));
        }
    }

    function removeTagFromList(tag) {
        if (checkExistingTag(tag)) {
            const arr = userAlbum.tags.filter((i) => i != tag);
            setUserAlbum(current => ({...current, tags: arr}));
        }
    }

    const handleDropdownSelection = (tag) => {
        addTagToList(tag);
    }

    return (
    <>
        {savedAlbumModalVisibility && (
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "rgba(0,0,0,0.6)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 9999,
                }}
            >
                <div
                    style={{
                        backgroundColor: "#2c2c2c",
                        color: "#f0f0f0",
                        padding: "2rem",
                        borderRadius: "12px",
                        width: "95%",
                        maxWidth: "700px",
                        maxHeight: "90vh",
                        overflowY: "auto",
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
                        border: "1px solid #3a3a3a",
                    }}
                >
                    <button
                        onClick={handleClose}
                        style={{
                            position: "absolute",
                            top: "1rem",
                            right: "1rem",
                            background: "none",
                            border: "1px solid #f0f0f0",
                            color: "#f0f0f0",
                            borderRadius: "4px",
                            padding: "0.25rem 0.5rem",
                            cursor: "pointer",
                        }}
                    >
                        X
                    </button>

                    <div
                        style={{
                            display: "flex",
                            gap: "1rem",
                        }}
                    >
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
                            <h4 style={{ marginTop: "0.5rem", fontWeight: "normal", textAlign: "center" }}>{userAlbum.status}</h4>
                        </div>

                        <div
                            style={{
                                flex: "1 1 auto",
                                minHeight: "300px",
                                backgroundColor: "#3a3a3a",
                                border: "1px solid #555",
                                borderRadius: "6px",
                                padding: "0.5rem",
                                overflowY: "auto",
                            }}
                        >
                            <ul>
                                {album.tracklist && album.tracklist.map((track, index) => (
                                    <li key={index}>{index+1}. {track.title} - {track.duration}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.5rem",
                        }}
                    >
                        <TagButton onSelection={handleDropdownSelection}></TagButton>
                        {userAlbum.tags.map((tag) => (
                            <TagLabel tag={tag} onDeletion={removeTagFromList}/>
                        ))}
                    </div>

                    <textarea
                        placeholder="Notes"
                        value={userAlbum.notes}
                        onChange={handleNotesChange}
                        style={{
                            width: "100%",
                            minHeight: "150px",
                            backgroundColor: "#4a4a4a",
                            color: "#f0f0f0",
                            border: "1px solid #555",
                            borderRadius: "6px",
                            padding: "0.5rem",
                            resize: "vertical",
                        }}
                    />
                    {userAlbum != null && (
                        <SaveButton master={album} tags={userAlbum.tags} notes={userAlbum.notes}/>
                    )}
                </div>
            </div>
        )}
    </>
);


}

export { SavedAlbumModal };
