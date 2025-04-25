import React from "react";
import { UserAuthContextProvider } from "../context/UserAuthContext";
import SearchBar from "../components/Bar/SearchBar";
import { LoginModalContextProvider } from "../context/LoginModalContext";
import { LoginModal } from "../components/Modal/LoginModal";

function Search() {
    return( 
        <>
            <UserAuthContextProvider>
                <LoginModalContextProvider>
                    <h1>Search</h1>
                    <SearchBar/>
                    <LoginModal/>
                </LoginModalContextProvider>
            </UserAuthContextProvider>
        </>
    )
}

export default Search;