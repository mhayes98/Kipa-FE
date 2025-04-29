import React from 'react';
import ArtistSearchResultsCard from '../Card/ArtistSearchResultsCard';

function ArtistSearchResultsList({results}) {
    return (
        <>
            <div className="grid grid-cols-3 divide-x-3 divide-dashed m-4">
                {results.map((result, index) => (
                    <ArtistSearchResultsCard key={index} artist={result} />
                ))}
            </div>
        </>
    )
}

export default ArtistSearchResultsList;