import React from "react";
import { LoginModal } from '../components/Modal/LoginModal.jsx';
import { LoginModalContextProvider  } from '../context/LoginModalContext.jsx';
import { UserAuthContextProvider } from '../context/UserAuthContext.jsx';
import { SavedAlbumList } from '../components/List/SavedAlbumsList.jsx';

function Home() {
    return (
        <>
            <UserAuthContextProvider>
                <LoginModalContextProvider>
                    <LoginModal />
                    <SavedAlbumList />
                </LoginModalContextProvider>
            </UserAuthContextProvider>
        </>
    );
}

export default Home;