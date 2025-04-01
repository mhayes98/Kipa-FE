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
        setAuthenticated(authenticated => authenticated ? false : true);
    }

    const setUsernameValue = (value) => {
        if (value) {
            setUsername(value);
        }
    }
        
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