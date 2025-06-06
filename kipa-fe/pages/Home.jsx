import React from "react";
import { LoginModal } from '../components/Modal/LoginModal';
import { LoginModalContextProvider  } from '../context/LoginModalContext';
import { UserAuthContextProvider, useUserAuthContext } from "../context/UserAuthContext";
import { SavedAlbumList } from '../components/List/SavedAlbumsList';
import AuthPromptView from "../components/View/AuthPromptView";
import { processMySavedAlbumsResponse } from "../services/AlbumServices";

function Home() {
    const { authenticated, username } = useUserAuthContext();


    return (
        <>
            <div>
            {authenticated && (
                <SavedAlbumList />
            )}
            </div>
            {!authenticated && (
                <AuthPromptView />
            )}
        </>
    );
}

export default Home;