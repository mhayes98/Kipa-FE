import { createContext, useState, useContext } from "react";

export const UserAuthContext = createContext({
    authenticated: false,
    toggleAuthenticated: () => {}
});

function UserAuthContextProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false);

    const toggleAuthenticated = () => {
        setAuthenticated(authenticated => authenticated ? false : true);
    }

    const setAuthenticatedTrue = () => {
        setAuthenticated(true);
    }

    const setAuthenticatedFalse = () => {
        setAuthenticated(false);
    }

    return (
        <UserAuthContext.Provider value={{ authenticated, setAuthenticated }}>
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