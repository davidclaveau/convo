import React from "react";
import { Link } from "react-router-dom";
import Registration from "./auth/Registration";
import Login from "./auth/Login";

const Home = (props) => {
  const handleSuccessfulAuth = (data) => {
    props.handleLogin(data);
    props.history.push("/users")
  }

  return (
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
          <h1 className="display-4">Convo</h1>
          <h1>Status {props.loggedInStatus}</h1>
          <p className="lead">
            Find your conversation
          </p>
          <hr className="my-4" />
            <Registration handleSuccessfulAuth={(data) => {handleSuccessfulAuth(data)}} />
            <Login handleSuccessfulAuth={(data) => {handleSuccessfulAuth(data)}} />
        </div>
      </div>
    </div>
  );
}

export default Home;