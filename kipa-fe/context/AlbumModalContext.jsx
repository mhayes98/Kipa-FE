import { createContext, useState, useContext } from "react";

export const AlbumModalContext = createContext({
    albumModalVisibility: false,
    toggleAlbumModalVisibility: () => {},
    master: "",
    setMaster: () => {}
});

function AlbumModalContextProvider({ children }) {
    const [albumModalVisibility, setAlbumModalVisibility] = useState(false);
    const [master, setMaster] = useState("");

    const toggleAlbumModalVisibility = () => {
        setAlbumModalVisibility(albumModalVisibility => albumModalVisibility ? false : true);
    };

    const openAlbumModalWithAlbumData = (master) => {
        setMaster(master);
        toggleAlbumModalVisibility();
    }

    return (
        <AlbumModalContext.Provider value={{ albumModalVisibility, toggleAlbumModalVisibility, 
                                    setMaster, master, openAlbumModalWithAlbumData }}>
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