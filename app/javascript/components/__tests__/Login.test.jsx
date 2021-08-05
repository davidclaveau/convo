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
import Login from "../Login";

afterEach(cleanup);

jest.mock('axios')

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
   
  //  test("Shows correct data when logging in", () => {
  //   axios.post.mockResolvedValue(responseData);

  //   const { getByTestId, findByText } = render(<Login />);

  //   const loginButton = getByTestId('login-button')

  //   fireEvent.click(loginButton)

  //   return findByText('bohorvart');
  //  });

  });
    