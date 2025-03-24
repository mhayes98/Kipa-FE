import { createContext, useState, useContext } from "react";

export const LoginModalContext = createContext({
    visibility: false,
    toggleVisibility: () => {}
});

function LoginModalContextProvider({ children }) {
    const [visibility, setVisibility] = useState(false);

    const toggleVisibility = () => {
        setVisibility(visibility => visibility ? false : true);
    };

    return (
        <LoginModalContext.Provider value={{ visibility, toggleVisibility }}>
            {children}
        </LoginModalContext.Provider>
    );
}

function useLoginModalContext() {
    const context = useContext(LoginModalContext);
    if (!context) {
        throw new Error("useLoginModalContext must be used within a LoginModalContextProvider");
    }
    return context
}

export { LoginModalContextProvider, useLoginModalContext };