import React from 'react';

function MasterCard(master) {
    //console.log("TESTING MASTERCARD:" + master.title);
    return (
        <>
            <h1>{master.title}</h1>
            <img src={master.thumb}/>
            <h4>{master.genre} - {master.year}</h4>
        </>
    );

}

export default MasterCard;