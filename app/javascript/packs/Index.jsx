import React from "react";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from "../components/App";
import { BrowserRouter as Router, Route } from 'react-router-dom';



document.addEventListener("DOMContentLoaded", () => {
  render(
    <Router>
      <Route path="/" component={App} />
    </Router>,
    document.body.appendChild(document.createElement("div"))
  );
});