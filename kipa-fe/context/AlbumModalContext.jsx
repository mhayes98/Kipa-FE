import { createContext, useState, useContext } from "react";

export const AlbumModalContext = createContext({
    visibility: false,
    toggleVisibility: () => {}
});

function AlbumModalContextProvider({ children }) {
    const [visibility, setVisibility] = useState(false);
    const [master, setMaster] = useState("");

    const toggleVisibility = () => {
        setVisibility(visibility => visibility ? false : true);
    };

    return (
        <AlbumModalContext.Provider value={{ visibility, toggleVisibility, setMaster, master }}>
            {children}
        </AlbumModalContext.Provider>
    );
}

function useAlbumModalContext() {
    const context = useContext(AlbumModalContext);
    if (!context) {
        throw new Error("useAlbumModalContext must be used within a AlbumModalContextProvider")
    }
    return context
}

export { AlbumModalContextProvider, useAlbumModalContext };