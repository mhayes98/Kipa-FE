import React from "react";
import { UserAuthContextProvider } from "../context/UserAuthContext";
import SearchBar from "../components/Bar/SearchBar";

function Search() {
    return( 
        <>
            <UserAuthContextProvider>
                <h1>Search</h1>
                <SearchBar/>
            </UserAuthContextProvider>
        </>
    )
}

export default Search;