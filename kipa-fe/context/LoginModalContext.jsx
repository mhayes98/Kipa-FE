import { createContext, useState, useContext } from "react";

export const LoginModalContext = createContext({
    loginModalVisibility: false,
    toggleLoginModalVisibility: () => {}
});

function LoginModalContextProvider({ children }) {
    const [loginModalVisibility, setLoginModalVisibility] = useState(false);

    // Toggles visibility of the login modal
    const toggleLoginModalVisibility = () => {
        setLoginModalVisibility(loginModalVisibility => loginModalVisibility ? false : true);
    };

    return (
        <LoginModalContext.Provider value={{ loginModalVisibility, toggleLoginModalVisibility }}>
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