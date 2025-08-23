import React, { useEffect, useRef, useState } from "react";
// import { TagTextBox } from "../../components/TextBox";
// import { Notes } from "../../components/TextBox";
import { useAlbumModalContext } from "../../context/AlbumModalContext";

function AlbumModal() {
    const { visibility, toggleVisibility, master } = useAlbumModalContext();
    // Destrcturing the object to access values directly
    const { artist, thumb, title, year, genre } = master;


    // Close modal on ESC
    useEffect(() => {
        const handleEsc = (e) => {
        if (e.key === "Escape") toggleVisibility();
    };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [toggleVisibility]);

    // Close modal when clicking outside - Maybe not use? Make closing intentional via escape or close button?
    // const handleClickOutside = (e) => {
    //     if (modalRef.current && !modalRef.current.contains(e.target)) {
    //         toggleVisibility();
    //     }
    // };

    console.log("AlbumModal triggered");

    const styles = {
        border: '3px black'
    };

    return (
        <>
            {visibility && (
                <div style={{styles}}>
                    <h1>{artist}</h1>
                    <img src={thumb}/>
                    <h2>{title} - {year}</h2>
                    <h4>{genre}</h4>
                    {/* Tags will go here - Function needs to parse tags*/}
                    {/* <TagTextBox/> */}
                    <p>Placeholder - TagTextBox</p>

                    {/* Notes go here */}
                    {/* <Notes/> */}
                    <p>Placeholder - Notes</p>

                    {/* Potentially track list? */}
                    <p>Placeholder - Track List?</p>

                    {/*Save button goes here */}
                    <p>Placeholder - Save Button</p>

                    {/*Close button goes here */}
                    <p>Placeholder - Close Button</p>
                </div>
            )}
        </>
    )
}

export { AlbumModal };