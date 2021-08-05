import React, { useContext } from "react";
import Registration from "./Registration";
import Login from "./Login";
import axios from "axios";
import { UserContext } from "../contexts/user-context";

const Dashboard = (props) => {
  return (
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
          <h1 className="display-4">Convo</h1>
          <p className="lead">
            Find your conversation
          </p>
          <hr className="my-4" />
            <Registration handleSuccessfulAuth={(data) => handleSuccessfulAuth(data)} />
            <Login handleSuccessfulAuth={(data) => handleSuccessfulAuth(data)} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard
;