export const searchDiscogsByMaster = async (searchQuery) => {
    try {
        const response = await fetch(`http://localhost:8080/search/master?q=${searchQuery}&type=master&per_page=20`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            console.error('Error fetching data from Discogs:', response.statusText);
        }
        else {
            const data = await response.json();
            return data;
        }
    }
    catch (error){
        console.error('Error fetching data from Discogs:', error);
    }
}

export async function processMasterSearchResponse(searchQuery){
    return searchDiscogsByMaster(searchQuery).then((response) => {
        if (response) {
            return response.map((master) => {
                return {
                    // Title response contains artist name & album name, separated by a hyphen
                    // THIS NEEDS TO BE REVISITED --> BUGS ON ARTISTS LIKE WU-TANG CLAN
                    // LOOK INTO DISCOGS API VALUES
                    // MAYBE HYPHEN SEP. BY SPACES?
                    id: master.id,
                    artist: master.title.split(" - ")[0],
                    title: master.title.split(" - ")[1],
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


export const searchDiscogsByArtist = async (searchQuery) => {
    try {
        const response = await fetch(`http://localhost:8080/search/artist?q=${searchQuery}&type=artist&per_page=10`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            console.error('Error fetching data from Discogs:', response.statusText);
        }
        else {
            const data = await response.json();
            return data;
        }
    }
    catch (error){
        console.error('Error fetching data from Discogs:', error);
    }
}

export async function processArtistSearchResponse(searchQuery){
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