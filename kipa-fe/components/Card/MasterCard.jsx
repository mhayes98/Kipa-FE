import React from 'react';
import { WantButton } from '../Button/WantButton';

function MasterCard(master) {
    return (
        <>
            <h1>{master.artist}</h1>
            <img src={master.thumb}/>
            <WantButton{...master}/>
            <h4>{master.title} - {master.year}</h4>
        </>
    );

}

export default MasterCard;