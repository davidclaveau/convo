import React from "react";
import { render } from "enzyme"
import App from "../../../app/javascript/components/App";

it("renders without crashing", () => {
  render(<App />);
});