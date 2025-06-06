import React, { useEffect, useRef, useState } from "react";
import { useLoginModalContext } from "../../context/LoginModalContext";
import { LoginButton } from "../Button/LoginButton";
import { useUserAuthContext } from "../../context/UserAuthContext";
import { authorizeLoginAttempt } from "../../services/UserServices";

function LoginModal() {
  const { setAuthState, setUsernameValue } = useUserAuthContext();
  const { visibility, toggleVisibility } = useLoginModalContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const modalRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLogin = async () => {
    const data = await authorizeLoginAttempt(username, password);
    if (data) {
      setUsernameValue(data.username);
      setAuthState(true);
      toggleVisibility();
      console.log(data.message);
      console.log(username);
    }
  };

  // Close modal on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") toggleVisibility();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [toggleVisibility]);

  // Close modal when clicking outside
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      toggleVisibility();
    }
  };

  return (
    <>
      {visibility && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleClickOutside}
        >
          <form
            ref={modalRef}
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-2xl shadow-xl flex flex-col gap-4 w-96"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Kipa Branding Here</h2>
              <button
                type="button"
                onClick={toggleVisibility}
                className="text-gray-500 hover:text-black"
              >
                ✕
              </button>
            </div>

            <label htmlFor="username" className="font-medium">
              Username
            </label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
              className="border rounded p-2"
            />

            <label htmlFor="password" className="font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="**********"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded p-2"
            />
            <p>Forgot password? ***Functionality needed</p>

            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={handleLogin}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
>
                Login
              </button>
              <button
                type="button"
                onClick={toggleVisibility}
                className="text-gray-500 hover:text-black"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export { LoginModal };
