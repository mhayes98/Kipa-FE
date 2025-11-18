import React from "react";
import { LoginModal } from '../components/Modal/LoginModal';
import { LoginModalContextProvider  } from '../context/LoginModalContext';
import { UserAuthContextProvider, useUserAuthContext } from "../context/UserAuthContext";
import { SavedAlbumList } from '../components/List/SavedAlbumsList';
import AuthPromptView from "../components/View/AuthPromptView";
import { processMySavedAlbumsResponse } from "../services/AlbumServices";
import { SavedAlbumModalContextProvider } from "../context/SavedAlbumModalContext";
import { SavedAlbumsContextProvider } from "../context/SavedAlbumsContext";
import { SavedAlbumModal } from "../components/Modal/SavedAlbumModal";

function Home() {
    const { authenticated, username } = useUserAuthContext();

    return (
        <>
            <SavedAlbumModalContextProvider>
                <SavedAlbumsContextProvider>
                    {authenticated ? <SavedAlbumList /> : <AuthPromptView />}
                    <SavedAlbumModal />
                </SavedAlbumsContextProvider>
            </SavedAlbumModalContextProvider>
    
        </>
    );
}

export default Home;