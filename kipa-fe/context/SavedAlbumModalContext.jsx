import { createContext, useState, useContext } from "react";
import { processGetUserAlbumResponse } from "../services/AlbumServices";

export const SavedAlbumModalContext = createContext({
    savedAlbumModalVisibility: false,
    toggleSavedAlbumModalVisibility: () => {}
});

function SavedAlbumModalContextProvider({ children }) {
    const [savedAlbumModalVisibility, setSavedAlbumModalVisibility] = useState(false);
    const [userAlbum, setUserAlbum] = useState("");
    const [id, setId] = useState("");
    const [album, setAlbum] = useState("");

    const toggleSavedAlbumModalVisibility = () => {
        setSavedAlbumModalVisibility(savedAlbumModalVisibility => savedAlbumModalVisibility ? false : true);
    };

    async function openSavedAlbumModalWithUserAlbumData(userId, albumID) {
        try {
            const response = await processGetUserAlbumResponse(userId, albumID);

            setUserAlbum(response.userAlbum);
            setId(response.id);
            setAlbum(response.album);

            response.album.tracklist = parseTracklist(response.album.tracklist);
            toggleSavedAlbumModalVisibility();
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    function parseTracklist(tracklist) {
        const parsed_data = JSON.parse(tracklist);
        parsed_data.map(track => ({ title: track.title, duration: track.duration }));
        return parsed_data;
    }

    return (
        <SavedAlbumModalContext.Provider value={{ savedAlbumModalVisibility, toggleSavedAlbumModalVisibility, 
                            userAlbum, setUserAlbum, id, setId, album, setAlbum, 
                            openSavedAlbumModalWithUserAlbumData }} >
            {children}
        </SavedAlbumModalContext.Provider>
    );
}

function useSavedAlbumModalContext() {
    const context = useContext(SavedAlbumModalContext);
    if (!context) {
        throw new Error("useSavedAlbumModalContext must be used within a SavedAlbumModalContextProvider")
    }
    return context
}

export { SavedAlbumModalContextProvider, useSavedAlbumModalContext };