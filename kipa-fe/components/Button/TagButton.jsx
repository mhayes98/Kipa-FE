import { useState } from "react";
//import { addTagToList } from "../Modal/AlbumModal";

export default function TagButton({onSelection}) {
    const [hover, setHover] = useState(false);

    const handleSelection = (e) => {
        onSelection(e.target.value);
    }

    return (
        <div
            style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                cursor: "pointer",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <span
                style={{
                    fontSize: "1.5rem",
                    color: "black", // Tag icon color
                    marginRight: "0.3rem",
                }}
            >
                🔖
            </span>
            <select
                id="tag_dropdown_menu"
                name="tag_dropdown_menu"
                onChange={handleSelection}
                style={{
                    width: hover ? "130px" : "0px",
                    opacity: hover ? 1 : 0,
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    border: hover ? "1px solid #555" : "none",
                    backgroundColor: "#3a3a3a", // Matches tracklist section
                    color: "#d0d0d0", // Medium-light gray text
                    borderRadius: "6px",
                    boxShadow: hover ? "0 2px 6px rgba(0,0,0,0.4)" : "none",
                    padding: hover ? "0.2rem" : "0",
                    fontSize: "0.9rem",
                }}
            >
                <option value="Hot🔥">Hot🔥</option>
                <option value="Signed🖋️">Signed🖋️</option>
                <option value="Limited💎">Limited💎</option>
                <option value="Damaged💔">Damaged💔</option>
                <option value="CD💿">CD💿</option>
            </select>
        </div>
    );
}
