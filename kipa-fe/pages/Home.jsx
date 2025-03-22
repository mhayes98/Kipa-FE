import { react } from 'react';
import { useState } from 'react';
import { LoginModal } from '../components/Modal/LoginModal';

function Home() {
    return (
        <>
            <h1>Welcome to Kipa!</h1>
            <LoginModal />
        </>
    );
}

export default Home;