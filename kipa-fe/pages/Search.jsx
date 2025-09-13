import React from "react";
import { UserAuthContextProvider } from "../context/UserAuthContext";
import SearchBar from "../components/Bar/SearchBar";
import { LoginModalContextProvider } from "../context/LoginModalContext";
import { LoginModal } from "../components/Modal/LoginModal";
import { AlbumModalContextProvider } from '../context/AlbumModalContext.jsx';
import { AlbumModal } from "../components/Modal/AlbumModal";

function Search() {
    return( 
        <>
            <AlbumModalContextProvider>
                <h1>Search</h1>
                <SearchBar/>
                <LoginModal/>
                <AlbumModal/>
            </AlbumModalContextProvider>
        </>
    )
}

export default Search;