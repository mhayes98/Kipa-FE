import React from 'react';
import { WantButton } from '../Button/WantButton';
import { OwnButton } from '../Button/OwnButton';

function ArtistSearchResultsCard(master) {
    return (
        <>
            <div className="border-2 border-solid">
                <h1>{master.title}</h1>
                <img src={master.thumb}/>
                <WantButton{...master}/>
                <OwnButton{...master}/>
                <h4>{master.genre} - {master.style}</h4>
            </div>
        </>
    );

}

export default ArtistSearchResultsCard;