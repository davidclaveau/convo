import React from "react";
import Registration from "./Registration";
import Login from "./Login";

const Dashboard = () => {
  return (
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
          <h1 className="display-4">Convo</h1>
          <p className="lead">
            Find your conversation
          </p>
          <hr className="my-4" />
            <Registration />
            <Login />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;