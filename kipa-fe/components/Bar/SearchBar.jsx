import React from 'react';
import { searchDiscogsByMaster } from '../../services/SearchServices.js';

function SearchBar() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const results = await searchDiscogsByMaster(searchQuery);
            setSearchResults(results);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

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
            </form>
            {searchQuery.length > 0 && (
                <ul>
                    {searchResults.map((result) => (
                        <li key={result.id}>{result.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SearchBar;