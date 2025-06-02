import React from "react";
import { registerNewUser } from "../../services/UserServices";


function RegistrationForm() {
    const [ username, setUsername ] = React.useState("");
    const [ password, setPassword ] = React.useState("");
    const [ email, setEmail ] = React.useState("");
    const [ confirmPassword, setConfirmPassword ] = React.useState("");

    const handleRegistration = async (e) => {
        e.preventDefault();
        if (!checkMatchingPasswords(password, confirmPassword)) {
            alert("Passwords do not match!");
            return;
        }
        registerNewUser(username, password, email)
        // Handle registration logic here
    };

    const checkMatchingPasswords = (password, confirmPassword) => {
        return password === confirmPassword;
    }

    return (
        <form>
            <label htmlFor="email"><b>E-mail</b></label>
            <input 
                type="email" 
                placeholder="E-mail" 
                value={email} required
                minLength="6"
                maxLength="50"
                pattern=".+@example\.com"
                onChange={e => setEmail(e.target.value)}>
            </input>
            <label htmlFor="username"><b>Username</b></label>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} required
                minLength="2"
                maxLength="25"
                onChange={e => setUsername(e.target.value)}>
            </input>

            <label htmlFor="password"><b>Password</b></label>
            <input 
                type="password" 
                placeholder="**********" 
                value={password} required
                minLength="10"
                maxLength="256"
                onChange={e => setPassword(e.target.value)}>
            </input>

            <label htmlFor="confirmPassword"><b>Confirm Password</b></label>
            <input 
                type="password" 
                placeholder="**********" 
                value={confirmPassword} required
                onChange={e => setConfirmPassword(e.target.value)}>
            </input>
            <button onClick={handleRegistration}>Submit</button>
        </form>
    );
}

export default RegistrationForm;