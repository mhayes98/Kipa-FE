import React from 'react';
import { searchDiscogsByMaster } from '../../services/SearchServices.js';

function SearchBar() {
    searchDiscogsByMaster("nirv");
}

export default SearchBar;