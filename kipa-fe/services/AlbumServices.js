export const getTracklistByReleaseID = async (id) => {
    try {
        const response = await fetch(`https://localhost:8080/master/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })

        if (!response.ok) {
            throw new Error("Fetch tracklist failed");
        }

        const tracklist = await response.json();
        return tracklist;
    }
    catch {
        console.error("Error: ", error);
        return null;
    }
}

export const addAlbumToDatabase = async (master) => {
    const tracklist = getTracklistByReleaseID(master.id);
    try {
        const response = await fetch("https://localhost:8080/album" {
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
                tracklist: tracklist
            }),
        }) 

        if (!response.ok) {
            throw new Error("Adding album to DB failed.")
        }
    }
    catch (error) {
        console.error("Erorr: ", error);
        return null;
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