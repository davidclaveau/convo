/**
 * @jest-environment jsdom
 */

import React from "react";
import { 
  render,
  cleanup,
  fireEvent
} from "@testing-library/react";
import axios from "axios";
import Login from "../components/Login";

afterEach(cleanup);
jest.mock('axios')

beforeEach(() => {
});

const responseData = {
  data: {
    logged_in: true,
    status: "created",
    user: {
      email: "email53@dev.com",
      username: "bohorvat"
    }
  }
}

describe("Login", () => {

  test("Renders without crashing", () => {
    render(<Login />);
  });
  
  test("Value appears for user email when typed into input", () => {
    const { getByTestId } = render(<Login />);

    const loginEmail = getByTestId("login-email");
    fireEvent.change(loginEmail, { target: { value: "email53@dev.com"}});

    expect(loginEmail.value).toBe("email53@dev.com");
  });

  test("Value appears for user password when typed into input", () => {
    const { getByTestId } = render(<Login />);

    const loginPassword = getByTestId("login-password");
    fireEvent.change(loginPassword, { target: { value: "password"}});

    expect(loginPassword.value).toBe("password");
  });
});
    