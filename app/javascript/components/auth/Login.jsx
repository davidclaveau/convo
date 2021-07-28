import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function register() {
    axios.post("http://localhost:3000/sessions", {
      user: {
        // username: username,
        email: email,
        password: password,
      }
    },
    { withCredentials: true}
    )
    .then(response => {
      console.log("response from login", response)
      // if  (response.data.status === 'created') {
      //   props.handleSuccessfulAuth(response.data)
      // } else {
      //   console.log("not logged in")
      // }
    })
    .catch(error => {
      console.log("error", error)
    });
  };

  return (
    <>
      <div>This is the Login view for our app.</div>
      <form onSubmit={event => event.preventDefault()}>
        {/* <input 
          type="username"
          name="username"
          placeholder="Username"
          value={username}
          onChange={event => {setUsername(event.target.value);}}
          required 
        /> */}
        <input 
          type="email"
          name="email"
          placeholder="email@email.com"
          value={email}
          onChange={event => {setEmail(event.target.value);}}
          required 
        />
        <input 
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={event => {setPassword(event.target.value);}}
          required 
        />
        <button type="submit" onClick={() => register()}>Login</button>
      </form>
    </>
  );
};

export default Login;