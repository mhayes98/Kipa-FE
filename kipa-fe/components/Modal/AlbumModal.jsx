import React, { useEffect, useRef, useState } from "react";
// import { TagTextBox } from "../../components/TextBox";
// import { Notes } from "../../components/TextBox";
import { useAlbumModalContext } from "../../context/AlbumModalContext";

function AlbumModal() {
    const { albumModalVisibility, toggleAlbumModalVisibility, master } = useAlbumModalContext();
    // Destrcturing the object to access values directly
    const { artist, thumb, title, year, genre } = master;


    console.log("AlbumModal re-rendered, visible?", albumModalVisibility);

    // Close modal on ESC
    useEffect(() => {
        const handleEsc = (e) => {
        if (e.key === "Escape" && albumModalVisibility) toggleAlbumModalVisibility();
    };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [toggleAlbumModalVisibility]);

    // Close modal when clicking outside - Maybe not use? Make closing intentional via escape or close button?
    // const handleClickOutside = (e) => {
    //     if (modalRef.current && !modalRef.current.contains(e.target)) {
    //         toggleAlbumModalVisibility();
    //     }
    // };

    //console.log("AlbumModal triggered");
    console.log("Album Modal Visibility State (Modal): ", albumModalVisibility);

    const styles = {
        border: '3px black'
    };

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
                        backgroundColor: "rgba(0,0,0,0.6)", // semi-transparent backdrop
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 9999, // make sure it's above everything
                    }}
                    >
                    <div
                        style={{
                        backgroundColor: "#fff",
                        padding: "2rem",
                        borderRadius: "8px",
                        maxWidth: "500px",
                        width: "90%",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                        textAlign: "center",
                        }}
                    >
                        <h1>{artist}</h1>
                        <img src={thumb} alt={title} />
                        <h2>
                        {title} - {year}
                        </h2>
                        <h4>{genre}</h4>
                        <p>Placeholder - TagTextBox</p>
                        <p>Placeholder - Notes</p>
                        <p>Placeholder - Track List?</p>
                        <p>Placeholder - Save Button</p>
                        <p>Placeholder - Close Button</p>
                    </div>
                    </div>
            )}
        </>
    )
}

export { AlbumModal };