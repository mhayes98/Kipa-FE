import React from "react";
import { useState } from "react";
import { useLoginModalContext } from "../../context/LoginModalContext";
import { LoginButton } from "../Button/LoginButton";

// Refactor to include: close button in the top right, pressing escape to close
// Potentially include clicking outside of the modal to close as well

function LoginModal() {
    const { visibility, toggleVisibility } = useLoginModalContext(); // True = visible, False = hidden
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Username: ", username);
      console.log("Password: ", password);
    };

    const postLogin = async () => {
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
        });
        
        if (response.ok) {
          console.log("Login successful");
        } else {
          console.log("Login failed");
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    }

    // Visibility needs to be set to false if user login is successful

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
              type="text" 
              placeholder="********" 
              value={password} required
              onChange={e => setPassword(e.target.value)}>
            </input>

            <button type="button" onClick={postLogin}>Login</button>
            <button onClick={toggleVisibility}>Close</button>
          </form>
        )}
      </>
    );
  }


export { LoginModal };
