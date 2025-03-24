import React from "react";
import { LoginModal } from '../components/Modal/LoginModal.jsx';
import { LoginModalContextProvider  } from '../context/LoginModalContext.jsx';

function Home() {
    return (
        <>
            <LoginModalContextProvider>
                 <LoginModal />
            </LoginModalContextProvider>
        </>
    );
}

export default Home;