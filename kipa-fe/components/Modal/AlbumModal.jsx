import React, { useEffect, useRef, useState } from "react";
// import { TagTextBox } from "../../components/TextBox";
// import { Notes } from "../../components/TextBox";
import { useAlbumModalContext } from "../../context/AlbumModalContext";
import { processMasterTracklistResponse, getMasterTracklist } from "../../services/SearchServices";

function AlbumModal() {
    const { albumModalVisibility, toggleAlbumModalVisibility, master } = useAlbumModalContext();
    // Destrcturing the object to access values directly
    const { artist, thumb, title, year, genre, id } = master;
    const [tracklist, setTracklist] = useState();

    // Logs a promise pending object - unable to access tracklist
    //const tracklist = processMasterTracklistResponse(master.id);
    //console.log( tracklist);

    useEffect(() => {
        async function getTracklist() {
            const tracklistResponse = await processMasterTracklistResponse(master.id);
            console.log(tracklistResponse);
            setTracklist(tracklistResponse);
        }

        getTracklist();
    }, [master.id]);


    // Close modal on ESC
    useEffect(() => {
        const handleEsc = (e) => {
        if (e.key === "Escape" && albumModalVisibility) toggleAlbumModalVisibility();
    };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [toggleAlbumModalVisibility]);



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
                                {tracklist.map((track, index) => (
                                    <li key={index}>{track.title} - {track.duration}</li>
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
                        <p>Placeholder - TagTextBox</p>
                    </div>

                    <textarea
                        placeholder="Notes"
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

                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <button
                            style={{
                                background: "none",
                                border: "1px solid #f0f0f0",
                                color: "#f0f0f0",
                                borderRadius: "4px",
                                padding: "0.5rem 1rem",
                                cursor: "pointer",
                            }}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        )}
    </>
);
}

export { AlbumModal };