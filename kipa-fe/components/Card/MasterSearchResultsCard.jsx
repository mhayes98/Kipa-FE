import React from 'react';
import { WantButton } from '../Button/WantButton';
import { OwnButton } from '../Button/OwnButton';

function MasterSearchResultsCard({ master }) {
    // Destrcturing the object to access values directly
    const { artist, thumb, title, year } = master;
    return (
        <>
            <div className="border-2 border-solid">
                <h1>{artist}</h1>
                <img src={thumb}/>
                <WantButton{...master}/>
                <OwnButton{...master}/>
                <h4>{title} - {year}</h4>
            </div>
        </>
    );
}

export default MasterSearchResultsCard;