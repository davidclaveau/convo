import React, { useContext } from "react";
import Registration from "./Registration";
import Login from "./Login";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

const Home = (props) => {
  const {user, setUser} = useContext(UserContext);

  const handleSuccessfulAuth = (data) => {
    props.handleLogin(data);
  };

  const handleLogoutClick = () => {
    axios.delete("http://localhost:3000/logout",
      { withCredentials: true })
    .then(response => {
      props.handleLogout();
    })
    .catch(error => {
      console.log("logout error", error)
    })
  };

  return (
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
          <h1 className="display-4">Convo</h1>
          <h1>Status {user.user.username}</h1>
          <p className="lead">
            Find your conversation
          </p>
          <hr className="my-4" />
            <button onClick={() => handleLogoutClick()}>Logout</button>
            <Registration handleSuccessfulAuth={(data) => handleSuccessfulAuth(data)} />
            <Login handleSuccessfulAuth={(data) => handleSuccessfulAuth(data)} />
        </div>
      </div>
    </div>
  );
}

export default Home;