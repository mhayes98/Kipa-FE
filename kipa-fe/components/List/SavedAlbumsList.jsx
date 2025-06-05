import React from 'react';
import { useUserAuthContext } from "../../context/UserAuthContext";
import { getMySavedAlbums, processMySavedAlbumsResponse } from '../../services/AlbumServices';
import { useLoginModalContext } from "../../context/LoginModalContext";
import { SavedAlbumCard } from '../Card/SavedAlbumCard';

function SavedAlbumList() {
    const { username, authenticated } = useUserAuthContext();
    const { toggleVisibility } = useLoginModalContext();

    if(authenticated){
        console.log(`Authenticated = True. Username - ${username}`);
        processMySavedAlbumsResponse(username);
    }
    else {
        console.log("Not authenticated");
        //toggleVisibility();
    }

    /*  
        Need to figure out how we want this page to look/work
            - How do we want a non-authenticated page to look?
                - Login screen? Modal? Do we want to bother with that now or later?
            - I think we need a higher level component that directs the page content based on auth state
                - render login/registration content if not auth
                - render list/card content if auth
                - Decision is based on the above question - need to decide before proceeding.
    */

    return(
        <>
            {/* <div className="grid grid-cols-3 divide-x-3 divide-dashed m-4">
                {results.map((result, index) => (
                    <SavedAlbumCard key={index} master={result} />
                ))}
            </div> */}
        </>
    )
}

export { SavedAlbumList };