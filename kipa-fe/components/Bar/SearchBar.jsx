import React from 'react';
import { searchDiscogsByMaster, searchDiscogsByArtist,
    processMasterSearchResponse,  processArtistSearchResponse } from '../../services/SearchServices.js';
import MasterCard from '/components/card/MasterCard.jsx' 


function SearchBar() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);

    /*
    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const results = await searchDiscogsByMaster(searchQuery);
            setSearchResults(results);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };
    */

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            if (event.target.artist.checked) {
                const artist = await processArtistSearchResponse(searchQuery);
                //MasterCard(artist);
                //setSearchResults(artist);
            }
            const master = await processMasterSearchResponse(searchQuery);
            setSearchResults(master);
        }
        catch (error) {
            console.error('Error fetching search results:', error);
        }
    }

    

    // Used values : genre, style, thumb, title, year

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
            {searchResults.length > 0 && (
                <ul>
                    {searchResults.map((result) => (
                        <li key={result.title}>{result.title} + {result.genre}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SearchBar;