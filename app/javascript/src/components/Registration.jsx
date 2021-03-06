import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../contexts/user-context";

const Registration = () => {
  const {setUser} = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");

  function register() {
    // Register the user with the form details
    // Log the user into the session on registration
    axios.post("http://localhost:3000/registrations", {
      user: {
        username: username,
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
    },
    { withCredentials: true}
    )
    .then(response => {
      if  (response.data.status === 'created') {
        setUser({
          loggedInStatus: "LOGGED_IN",
          user: response.data.user
        })
      } else {
        console.log("not logged in")
      }
    })
    .catch(error => {
      console.log("error", error)
    });
  };

  return (
    <>
      <div>This is the Registration view for our app.</div>
      <form
        className="user-registration" 
        onSubmit={event => event.preventDefault()}>
        <input 
          className="user-registration__username"
          data-testid="registration-username"
          type="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={event => {setUsername(event.target.value);}}
          required 
          />
        <input 
          className="user-registration__email"
          data-testid="registration-email"
          type="email"
          name="email"
          placeholder="email@email.com"
          value={email}
          onChange={event => {setEmail(event.target.value);}}
          required 
          />
        <input 
          className="user-registration__password"
          data-testid="registration-password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={event => {setPassword(event.target.value);}}
          required 
          />
        <input
          className="user-registration__password-confirmation"
          data-testid="registration-password-confirmation"
          type="password"
          name="password_confirmation"
          placeholder="Password"
          value={password_confirmation}
          onChange={event => {setPassword_confirmation(event.target.value);}}
          required 
        />
        <button
          className="user-registration__button"
          type="submit"
          onClick={() => register()}>
            Register
        </button>
      </form>
    </>
  );
};

export default Registration;