import React from 'react';
import { searchDiscogsByMaster, searchDiscogsByArtist } from '../../services/SearchServices.js';


function callMasterSearch(searchQuery){
    return searchDiscogsByMaster(searchQuery).then((response) => {
        console.log("MASTER RESPONSE: ", response);
        if (response) {
            return response.map((master) => {
                return {
                    title: master.title,
                    year: master.year,
                    thumb: master.thumb,
                    genre: master.genre,
                    style: master.style
                };
            });
        } else {
            throw new Error('Invalid response format');
        }
    });
}

function callArtistSearch(searchQuery){
    return searchDiscogsByArtist(searchQuery).then((response) => {
        console.log("ARTIST RESPONSE: ", response);
        if (response) {
            return response.map((artist) => {
                return {
                    title: artist.title,
                    thumb: artist.thumb,
                    genre: artist.genre,
                    style: artist.style
                };
            });
        } else {
            throw new Error('Invalid response format');
        }
    });
}

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
                const artist = await callArtistSearch(searchQuery);
                //setSearchResults(artist);
            }
            const master = await callMasterSearch(searchQuery);
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