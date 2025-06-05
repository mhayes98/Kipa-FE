import React from "react";
import { LoginModal } from '../components/Modal/LoginModal';
import { LoginModalContextProvider  } from '../context/LoginModalContext';
import { UserAuthContextProvider } from "../context/UserAuthContext";
import { SavedAlbumList } from '../components/List/SavedAlbumsList';
import AuthPromptView from "../components/View/AuthPromptView";

function Home() {
    return (
        <>
            <h1>Home</h1>
            <SavedAlbumList />
            <AuthPromptView />
            <LoginModal />
        </>
    );
}

export default Home;