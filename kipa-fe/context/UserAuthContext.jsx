import { createContext, useState, useContext } from "react";

export const UserAuthContext = createContext({
    authenticated: false,
    toggleAuthenticated: () => {},
    username: "g",
    setUsernameValue: () => {}
});


function UserAuthContextProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState("");

    const toggleAuthenticated = () => {
        console.log("Toggling authenticated state");
        setAuthenticated(authenticated => authenticated ? false : true);
    }

    const setUsernameValue = (value) => {
        console.log("Setting username to:", value);
        if (value) {
            setUsername(value);
        } else {
            console.warn("Attempted to set username with empty value");
        }
    }
    
    console.log("UserAuthContextProvider rendered", username, authenticated);
        
    return (
        <UserAuthContext.Provider value={{ authenticated, toggleAuthenticated, username, setUsernameValue }}>
            {children}
        </UserAuthContext.Provider>
    );
}

function useUserAuthContext() {
    const context = useContext(UserAuthContext);
    if (!context) {
        throw new Error("useUserAuthContext must be used within a UserAuthContextProvider");
    }
    return context
}

export { UserAuthContextProvider, useUserAuthContext };