import React from 'react';


function SavedAlbumCard({ album }) {
    const { albumAlbumID, genre, notes, status,
            style, tags, thumbnail, title, tracklist, year } = album;
    
    // Need to add the logic to cycle through all styles, genres, tags, etc..
    // Determine how tracklist will be implemented --> AlbumModal most likely? More details?
    return (
        <>
            <div className="border-2 border-solid">
                <h1>{title}</h1>
                <img src={thumbnail}/>
                <p>{year}</p>
                <p>{tags}</p>
                <p>{notes}</p>
            </div>
        </>
    )
}

export { SavedAlbumCard };