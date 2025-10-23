import React from 'react';
import { searchDiscogsByMaster, searchDiscogsByArtist,
        processMasterSearchResponse,  processArtistSearchResponse } from '../../services/SearchServices.js';
import ArtistSearchResultsList from '../List/ArtistSearchResultsList.jsx';
import MasterSearchResultsList from '../List/MasterSearchResultsList.jsx';


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
                    placeholder="Search for an artist or album..."
                />
                <button type="submit">Search</button>
                <input type="checkbox" id="artist" name="artist" value="artist" />
                <label htmlFor="artist">Include artists</label>
            </form>
            
            <div>
                {artistSearchResults.length > 0 && (
                        // results=... will access a direct array index
                        // {..example} passes the entire array
                        <ArtistSearchResultsList results={artistSearchResults} />
                )}
            </div>

            <div>
                {masterSearchResults.length > 0 && (
                    <MasterSearchResultsList results={masterSearchResults} />
                )}
            </div>

        </div>
    );
}
        
export default SearchBar;