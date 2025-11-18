import { createContext, useState, useContext, useEffect } from "react";

export const SavedAlbumsContext = createContext({
    albumRefresher: 0,
    setAlbumRefresher: () => {}
});


function SavedAlbumsContextProvider({ children }) {
    const [albumRefresher, setAlbumRefresher] = useState(0);

    return (
        <SavedAlbumsContext.Provider value={{ albumRefresher, setAlbumRefresher }}>
            {children}
        </SavedAlbumsContext.Provider>
    );
}

function useSavedAlbumsContext() {
    const context = useContext(SavedAlbumsContext);
    if (!context) {
        throw new Error("useuseSavedAlbumsContext must be used within a useSavedAlbumsContextProvider");
    }
    return context;
}

export { SavedAlbumsContextProvider, useSavedAlbumsContext };