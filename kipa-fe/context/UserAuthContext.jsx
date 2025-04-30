import { createContext, useState, useContext } from "react";

export const UserAuthContext = createContext({
    authenticated: false,
    setAuthState: () => {},
    username: "",
    setUsernameValue: () => {}
});


function UserAuthContextProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState("");

    // Refactor later to work off cookie value from login API?
    const setAuthState = (authState) => {
        setAuthenticated(authState);
    }

    const setUsernameValue = (value) => {
        if (value) {
            setUsername(value);
        }
    }
        
    return (
        <UserAuthContext.Provider value={{ authenticated, setAuthState, username, setUsernameValue }}>
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