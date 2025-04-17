// This retrieves the tracklist of an Album and is only called when adding an album to the database
export const getTracklistByReleaseID = async (id) => {
    console.log(id);
    try {
        const response = await fetch(`http://localhost:8080/master/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })

        if (!response.ok) {
            throw new Error("Fetch tracklist failed");
        }else {
            //const tracklist = await response.json();
            return await response.json();
        }
    }
    catch {
        console.error("Error: ", error);
        return null;
    }
}

// Getting error due to backend expecting a list for Tracklist while this is sending an object
// Shape json or do conversion then verify
export async function addAlbumToDatabase(master) {
    try {
        const response = await fetch("http://localhost:8080/album", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // Consider adding style
                // Update backend for thumbnail & genre (and potentially style)
                // Double-check how to access value - master.VAL???
                id: master.id,
                title: master.title,
                artist: master.artist,
                year: master.year,
                genre: master.year,
                thumb: master.thumb,
                tracklist: getTracklistByReleaseID(master.id)
            }),
        }) 
        if (!response.ok) {
            throw new Error("Adding album to DB failed.")
        }
    }
    catch (error) {
        console.error("Error: ", error);
    }
}

// POST
export const createUserAlbumConnection = async () => {}

// POST
export const updateUserAlbumStatus = async () => {}

// PUT
export const updateUserAlbumTags = async () => {}

// PUT
export const updateUserAlbumNotes = async () => {}
``