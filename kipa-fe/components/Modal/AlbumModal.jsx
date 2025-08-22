import Reach from 'react';
// import { TagTextBox } from "../../components/TextBox";
// import { Notes } from "../../components/TextBox";
import { useAlbumModalContext } from "../../context/AlbumModalContext";

function AlbumModal({ master }) {
    // Destrcturing the object to access values directly
    const { artist, thumb, title, year, genre } = master;
    const { visibility, toggleVisibility } = useAlbumModalContext();


    // Close modal on ESC
    useEffect(() => {
        const handleEsc = (e) => {
        if (e.key === "Escape") toggleVisibility();
    };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [toggleVisibility]);

    // Close modal when clicking outside
    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            toggleVisibility();
        }
    };

    console.log("AlbumModalContext loaded");

    return (
        <>
            <div>
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
            </div>
        </>
    )
}

export { AlbumModal };