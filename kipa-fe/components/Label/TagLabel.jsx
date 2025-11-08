import React from "react";

function TagLabel({tag, onDeletion}) {

    const handleDeletion = (e) => {
        onDeletion(tag);
    }

return (
  <div
    style={{
      display: "inline-block",
      position: "relative",
      padding: "0.25rem 0.5rem",
      margin: "0.25rem",
      backgroundColor: "#1c1c1c",
      color: "#f0f0f0",
      borderRadius: "4px",
      fontSize: "0.875rem",
    }}
    onMouseEnter={(e) => {
      const btn = e.currentTarget.querySelector("#delete_tag");
      if (btn) btn.style.opacity = 1;
    }}
    onMouseLeave={(e) => {
      const btn = e.currentTarget.querySelector("#delete_tag");
      if (btn) btn.style.opacity = 0;
    }}
  >
    {tag}
    <button
      id="delete_tag"
      onClick={handleDeletion}
      style={{
        position: "absolute",
        top: "-6px",        // move up outside the box
        right: "-6px",      // move right outside the box
        width: "14px",
        height: "14px",
        padding: "0",
        border: "none",
        backgroundColor: "#f0f0f0",
        color: "#1c1c1c",
        fontSize: "11px",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        lineHeight: "1",
        borderRadius: "50%",
        opacity: 0,
        cursor: "pointer",
        transition: "opacity 0.2s",
      }}
    >
      ×
    </button>
  </div>
);
}

export {TagLabel};