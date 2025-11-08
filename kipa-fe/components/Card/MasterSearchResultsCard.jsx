import React from 'react';
import { WantButton } from '../Button/WantButton';
import { OwnButton } from '../Button/OwnButton';

function MasterSearchResultsCard({ master }) {
    // Destrcturing the object to access values directly
    const { artist, thumb, title, year, status } = master;
    return (
        <>
            <div className="border-2 border-solid">
                <h1>{artist}</h1>
                <img src={thumb}/>
                <OwnButton{...master}/>
                <WantButton{...master}/>
                <h4>{title} - {year}</h4>
            </div>
        </>
    );
}

export default MasterSearchResultsCard;


<> Add a status to master in this page and designate it as 'Want' or 'Own' in the OwnButton component in the Auth check??</>