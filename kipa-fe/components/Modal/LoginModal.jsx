import React from "react";
import { useState } from "react";
import { useLoginModalContext } from "../../context/LoginModalContext";
import { LoginButton } from "../Button/LoginButton";

// Refactor to include: close button in the top right, pressing escape to close
// Potentially include clicking outside of the modal to close as well

function LoginModal() {
    const {visibility, toggleVisibility} = useLoginModalContext(); // True = visible, False = hidden
    return (
      <>
        <LoginButton />
        {visibility && (
          <div>
            <label htmlFor="username" ><b>Username</b></label>
            <input type="text" placeholder="Username" name="username" required></input>

            <label htmlFor="password"><b>Password</b></label>
            <input type="password" placeholder="" name="password" required></input>

            <button type="submit">Login</button>
            <button onClick={toggleVisibility}>Close</button>
          </div>
        )}
      </>
    );
  }

export { LoginModal };
