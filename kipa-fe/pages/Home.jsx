import React from "react";
import { LoginModal } from '../components/Modal/LoginModal.jsx';
import { LoginModalContextProvider  } from '../context/LoginModalContext.jsx';
import { UserAuthContextProvider } from '../context/UserAuthContext.jsx';

function Home() {
    return (
        <>
            <UserAuthContextProvider>
                <LoginModalContextProvider>
                    <LoginModal />
                </LoginModalContextProvider>
            </UserAuthContextProvider>
        </>
    );
}

export default Home;