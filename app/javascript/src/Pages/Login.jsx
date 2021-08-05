import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../contexts/user-context";

const Login = (props) => {
  const {user, setUser} = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    axios.post("http://localhost:3000/sessions", {
      user: {
        email: email,
        password: password,
      }
    },
    { withCredentials: true}
    )
    .then(response => {
      console.log("response from login", response)
      if  (response.data.logged_in) {
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

  const handleLogoutClick = () => {
    axios.delete("http://localhost:3000/logout",
      { withCredentials: true })
    .then(response => {
      setUser({
        loggedInStatus: "NOT_LOGGED_IN",
        user: {}
      })
    })
    .catch(error => {
      console.log("logout error", error)
    })
  };

  return (
    <>
      <h1>User: { user.user.username }</h1>
      <div>This is the Login view for our app.</div>
      <form onSubmit={event => event.preventDefault()}>
        <input 
          data-testid="login-email"
          type="email"
          name="email"
          placeholder="email@email.com"
          value={email}
          onChange={event => {setEmail(event.target.value);}}
          required 
        />
        <input 
          data-testid="login-password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={event => {setPassword(event.target.value);}}
          required 
          />
        <button
          data-testid="login-button"
          type="submit"
          onClick={() => handleLogin()}>
            Login
        </button>
      </form>
      <button onClick={() => handleLogoutClick()}>Logout</button>
    </>
  );
};

export default Login;