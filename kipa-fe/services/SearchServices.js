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
            //console.log('Data fetched from Discogs:', data);
            return data;
        }
    }
    catch (error){
        console.error('Error fetching data from Discogs:', error);
    }
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