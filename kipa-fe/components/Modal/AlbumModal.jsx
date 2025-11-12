import React, { useEffect, useRef, useState } from "react";
// import { TagTextBox } from "../../components/TextBox";
// import { Notes } from "../../components/TextBox";
import { useAlbumModalContext } from "../../context/AlbumModalContext";
import { processMasterTracklistResponse, getMasterTracklist } from "../../services/SearchServices";
import TagButton from "../Button/TagButton";
import { TagLabel } from "../Label/TagLabel";
import { SaveButton } from "../Button/SaveButton";

function AlbumModal() {
    const { albumModalVisibility, toggleAlbumModalVisibility, master } = useAlbumModalContext();
    // Destrcturing the object to access values directly
    const { artist, thumb, title, year, genre, id, status } = master;
    const [tracklist, setTracklist] = useState();
    const [tags, setTags] = useState([]);
    const [notes, setNotes] = useState("");
    const [masterWithTracklist, setMasterWithTracklist] = useState(null);

    useEffect(() => {
        async function getTracklist() {
            const tracklistResponse = await processMasterTracklistResponse(master.id);
            setTracklist(tracklistResponse);
            setMasterWithTracklist({...master, tracklist: tracklistResponse});
        }

        getTracklist();
    }, [master.id]);

    const handleNotesChange = (e) => {
        setNotes(e.target.value);
    };

    // Close modal on ESC
    useEffect(() => {
        const handleEsc = (e) => {
        if (e.key === "Escape" && albumModalVisibility) toggleAlbumModalVisibility();
    };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [toggleAlbumModalVisibility]);


    function checkExistingTag(tag) {
        return tags.includes(tag);
    }

    function addTagToList(tag) {
        // Make sure tag is not already in list prior to adding it
        if (!checkExistingTag(tag)){
            const arr = [...tags];
            arr.push(tag);
            setTags(arr);
        }
    }

    function removeTagFromList(tag) {
        // Make sure tag exists in list prior to removal attempt
        if (checkExistingTag(tag)) {
            const arr = tags.filter((i) => i != tag);
            setTags(arr);
        }
    }

    const handleDropdownSelection = (tag) => {
        addTagToList(tag);
    }

   return (
    <>
        {albumModalVisibility && (
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
                                src={thumb}
                                alt={title}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: "8px",
                                    border: "2px solid #555",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                                    padding: "2px",
                                }}
                            />
                            <h3 style={{ marginTop: "1rem", marginBottom: "0.25rem", textAlign: "center" }}>{artist}</h3>
                            <h2 style={{ margin: 0, textAlign: "center" }}>
                                {title} - {year}
                            </h2>
                            <h4 style={{ marginTop: "0.5rem", fontWeight: "normal", textAlign: "center" }}>{genre}</h4>
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
                                {tracklist && tracklist.map((track, index) => (
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
                        {tags.map((tag) => (
                            <TagLabel tag={tag} onDeletion={removeTagFromList}/>
                        ))}
                    </div>

                    <textarea
                        placeholder="Notes"
                        value = {notes}
                        onChange = {handleNotesChange}
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
                    {masterWithTracklist != null && (
                        <SaveButton master={masterWithTracklist} tags={tags} notes={notes}/>
                    )}
                </div>
            </div>
        )}
    </>
);
}

export { AlbumModal };