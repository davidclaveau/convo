/**
 * @jest-environment jsdom
 */

import React from "react";
import { 
  render,
  cleanup,
  waitFor,
  getByText,
  fireEvent,
  getByTestId
} from "@testing-library/react";
import App from "../App";
import axios from 'axios'

afterEach(cleanup);

describe("App", () => {
  let testState;

  beforeEach(() => {
    testState = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {
      }
    }
  });

  test("Renders without crashing", () => {
    render(<App />);
  });

  // test("Can display results when logging in", async () => {

    // const { container } = render(<App />);

    // fireEvent.click(getByTestId(container, "login-email"))
    // fireEvent.change(getByTestId(container, "login-email"), {
    //   target: { value: user.email }
    // })
    
    // fireEvent.click(getByTestId(container, "login-password"))
    // fireEvent.change(getByTestId(container, "login-password"), {
    //   target: { value: user.password }
    // })

    
    // fireEvent.click(getByTestId(container, "login-button"))


    // await waitFor(() => getByText(container, "Status bohorvat"));

    // expect(getByText(container, "Status bohorvat")).toBeInTheDocument();
  // });
  
});
