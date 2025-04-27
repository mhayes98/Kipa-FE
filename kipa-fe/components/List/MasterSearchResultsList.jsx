import React from 'react';
import MasterSearchResultsCard from '../Card/MasterSearchResultsCard';

function MasterSearchResultsList({results}) {
    return (
        <>
            <div className="grid grid-cols-3 divide-x-3 divide-dashed m-4">
                {results.map((result, index) => (
                    <MasterSearchResultsCard key={index} master={result} />
                ))}
            </div>
        </>
    )
}

export default MasterSearchResultsList;