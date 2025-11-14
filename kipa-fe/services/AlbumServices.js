// This retrieves the tracklist of an Album and is only called when adding an album to the database
export const getTracklistByReleaseID = async (id) => {
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
            const tracklist = await response.json();
            return tracklist;
        }
    }
    catch {
        console.error("Error: ", error);
        return null;
    }
}

export async function addAlbumToDatabase(master) {
    try {
        const response = await fetch("http://localhost:8080/album", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: master.id,
                title: master.title,
                artist: master.artist,
                year: master.year,
                genre: master.genre,
                style: master.style,
                thumbnail: master.thumb,
                // Array will processed in the backend and stored as raw text
                tracklistAsArray: await getTracklistByReleaseID(master.id)
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
export async function createUserAlbumConnection(master, personal, id) {
    try {
        const response = await fetch("http://localhost:8080/useralbum-save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userAlbum: {
                    id: {
                        userID: id.userID,
                        albumID: id.albumID
                    },
                    status: personal.status,
                    tags: personal.tags,
                    notes: personal.notes
                },
                album: {
                    id: master.id,
                    title: master.title,
                    artist: master.artist,
                    year: master.year,
                    genre: master.genre,
                    style: master.style,
                    thumbnail: master.thumb,
                    tracklistAsArray: master.tracklist
                }
            })
        })
        if (!response.ok) {
            throw new Error("Creating UserAlbum failed")
        }
    }
    catch (error) {
        console.error("Error: ", error)
    }
}

export const getUserAlbum = async (userID, albumID) => {
    try {
        const response = await fetch(`http://localhost:8080/${userID}/${albumID}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })

        if (!response.ok) {
            throw new Error("Fetch UserAlbum failed");
        } else {
            const user_album_details = await response.json();
            return user_album_details;
        }
    }
    catch {
        console.error("Error: ", error);
        return null;
    }
}

export async function processGetUserAlbumResponse(userID, albumID) {
    return getUserAlbum(userID, albumID).then((response) => {
        if (response) {
           return {
                userAlbum: response.userAlbum,
                id: response.userAlbum.id,
                album: response.album
           };
        } else {
            throw new Error ("Invalid response format");
        }
    })
}

export const handleUserAlbumButtonClick = (userAlbumOnClickDTO) => {
    if (userAlbumOnClickDTO.authenticated) {
        createUserAlbumConnection(userAlbumOnClickDTO.master, 
                                userAlbumOnClickDTO.username, 
                                userAlbumOnClickDTO.status);
    }
    else {
        userAlbumOnClickDTO.toggleLoginModalVisibility();
    }
}

export const getMySavedAlbums = async (username) => {
    try {
        const response = await fetch(`http://localhost:8080/user-albums/${username}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })

        if (!response.ok) {
            throw new Error("Fetch my UserAlbums error");
        }else {
            const myUserAlbums = await response.json();
            return myUserAlbums;
        }
    }
    catch {
        console.error("Error: ", error);
        return null;
    }
}

export async function processMySavedAlbumsResponse(username) {
    return getMySavedAlbums(username).then((response) => {
        if (response) {
            return response.map((userAlbum) => {
                return {
                    albumID: userAlbum.albumAlbumid,
                    artist: userAlbum.artist,
                    genre: userAlbum.genre,
                    notes: userAlbum.notes,
                    status: userAlbum.status,
                    style: userAlbum.style,
                    tags: userAlbum.tags,
                    thumbnail: userAlbum.thumbnail,
                    title: userAlbum.title,
                    tracklist: userAlbum.tracklist,
                    year: userAlbum.year
                };
            });
        } else {
            throw new error ("Invalid response format");
        }
    })
}

// POST
export const updateUserAlbumStatus = async () => {}

// PUT
export const updateUserAlbumTags = async () => {}

// PUT
export const updateUserAlbumNotes = async () => {}
``