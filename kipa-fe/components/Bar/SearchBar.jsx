import React from 'react';
import { searchDiscogsByMaster, searchDiscogsByArtist,
        processMasterSearchResponse,  processArtistSearchResponse } from '../../services/SearchServices.js';
import MasterCard from '/components/card/MasterCard.jsx' 


function SearchBar() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [masterSearchResults, setMasterSearchResults] = React.useState([]);
    const [artistSearchResults, setArtistSearchResults] = React.useState([]);

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            if (event.target.artist.checked) {
                setArtistSearchResults(await processArtistSearchResponse(searchQuery));
            }
            setMasterSearchResults(await processMasterSearchResponse(searchQuery));
        }
        catch (error) {
            console.error('Error fetching search results:', error);
        }
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for a master..."
                />
                <button type="submit">Search</button>
                <input type="checkbox" id="artist" name="artist" value="artist" />
                <label htmlFor="artist">Include artists</label>
            </form>
            {masterSearchResults.length > 0 && (
                <ul>
                    {masterSearchResults.map((result) => (
                        <li key={result.title}>{result.title} + {result.genre}</li>
                    ))}
                </ul>
            )}
            {masterSearchResults.length > 0 && (
                <MasterCard {...masterSearchResults[0]} />
            )}
            {masterSearchResults.length > 0 && (
                <MasterCard {...masterSearchResults[1]} />
            )}
        </div>
    );
}

export default SearchBar;