import React from "react";
import { useState } from "react";

function LoginModal() {
    const [visibility, setVisibility] = useState(true); // True = visible, False = hidden
    return (
      <>
        {visibility && (
          <div>
            <label for="username" ><b>Username</b></label>
            <input type="text" placeholder="Username" name="username" required></input>

            <label for="password"><b>Password</b></label>
            <input type="password" placeholder="" name="password" required></input>

            <button type="submit">Login</button>
            <button onClick={() => setVisibility(false)}>Close</button>
          </div>
        )}
      </>
    );
  }

export default LoginModal;
