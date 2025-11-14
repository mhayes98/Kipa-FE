import React from "react";
import { LoginModal } from '../components/Modal/LoginModal';
import { LoginModalContextProvider  } from '../context/LoginModalContext';
import { UserAuthContextProvider, useUserAuthContext } from "../context/UserAuthContext";
import { SavedAlbumList } from '../components/List/SavedAlbumsList';
import AuthPromptView from "../components/View/AuthPromptView";
import { processMySavedAlbumsResponse } from "../services/AlbumServices";
import { SavedAlbumModalContextProvider } from "../context/SavedAlbumModalContext";
import { SavedAlbumModal } from "../components/Modal/SavedAlbumModal";

function Home() {
    const { authenticated, username } = useUserAuthContext();


    return (
        <>
            <SavedAlbumModalContextProvider>
                <div>
                {authenticated && (
                    <SavedAlbumList />
                )}
                </div>
                {!authenticated && (
                    <AuthPromptView />
                )}
                <SavedAlbumModal/>
            </SavedAlbumModalContextProvider>
        </>
    );
}

export default Home;