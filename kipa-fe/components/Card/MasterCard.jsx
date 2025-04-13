import React from 'react';

function MasterCard(master) {
    console.log("TESTING MASTERCARD:" + master.artist);
    return (
        <>
            <h1>{master.artist}</h1>
            <img src={master.thumb}/>
            <h4>{master.title} - {master.year}</h4>
        </>
    );

}

export default MasterCard;