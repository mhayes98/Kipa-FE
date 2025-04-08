export const searchDiscogsByMaster = async (searchQuery) => {
    try {
        const response = await fetch(`http://localhost:8080/search/master?q=${searchQuery}&type=master`, {
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
            console.log('Data fetched from Discogs:', data);
        }
    }
    catch (error){
        console.error('Error fetching data from Discogs:', error);
    }
    console.log("TEST");
}