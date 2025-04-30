import React from 'react';
import { WantButton } from '../Button/WantButton';
import { OwnButton } from '../Button/OwnButton';

function ArtistSearchResultsCard(artist) {
    const { title, thumb, genre, style } = artist;
    return (
        <>
            <div className="border-2 border-solid">
                <h1>{title}</h1>
                <img src={thumb}/>
                <h4>{genre}</h4>
            </div>
        </>
    );

}

export default ArtistSearchResultsCard;