import React from "react";
import { useState } from "react";
import { useLoginModalContext } from "../../context/LoginModalContext";
import { LoginButton } from "../Button/LoginButton";
import { useUserAuthContext } from "../../context/UserAuthContext";
import { authorizeLoginAttempt } from "../../services/UserServices";

// Refactor to include: close button in the top right, pressing escape to close
// Potentially include clicking outside of the modal to close as well

function LoginModal() {
    const { toggleAuthenticated, setUsernameValue } = useUserAuthContext();
    const { visibility, toggleVisibility } = useLoginModalContext(); // True = visible, False = hidden
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Username: ", username);
      console.log("Password: ", password);
    };

    const handleLogin = async () => {
      const data = await authorizeLoginAttempt(username, password);
      if (data) {
        setUsernameValue(data.username);
        toggleAuthenticated();
        toggleVisibility();
        console.log(data.message);
      }
    }


    return (
      <>
        <LoginButton />
        {visibility && (
          <form>
            <label htmlFor="username"><b>Username</b></label>
            <input 
              type="text" 
              placeholder="Username" 
              value={username} required
              onChange={e => setUsername(e.target.value)}>
            </input>

            <label htmlFor="password"><b>Password</b></label>
            <input 
              type="password" 
              placeholder="**********" 
              value={password} required
              onChange={e => setPassword(e.target.value)}>
            </input>

            <button type="button" onClick={handleLogin}>Login</button>
            <button onClick={toggleVisibility}>Close</button>
          </form>
        )}
      </>
    );
  }

export { LoginModal };