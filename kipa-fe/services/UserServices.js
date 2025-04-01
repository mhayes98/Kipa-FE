export const authorizeLoginAttempt = async (username, password) => {
    try {
        const response = await fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
            credentials: "include"
        })
        
        if (!response.ok) {
            throw new Error("Login failed - Invalid credentials");
        }
        return response.json();
    }
    catch (error) {
        console.error("Error: ", error);
        return null;
    }
}


export const registerNewUser = async (username, password, email) => {
    try {
        const response = await fetch("http://localhost:8080/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password,
                email: email
            }),
            credentials: "include"
        })
        
        // 404 error
        // make validate function in component for field lengths
        if (!response.ok) {
            const data = await response.json();
            if (data.error === "EMAIL_TAKEN") {
                console.log("Email already in use");
            }
            else if (data.error === "USERNAME_TAKEN") {
                console.log("Username already in use");
            }
            else {
                console.log("Unknown error occured");
            }
            return null;
        }
        return response.json();
    }
    catch (error) {
        console.error("Error: ", error);
        return null;
    }
}