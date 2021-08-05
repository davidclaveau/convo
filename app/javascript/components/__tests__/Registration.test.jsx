/**
 * @jest-environment jsdom
 */

import React from "react";
import { 
  render,
  cleanup
} from "@testing-library/react";
import Registration from "../Registration";

afterEach(cleanup);

describe("Registration", () => {

  test("Renders without crashing", () => {
    render(<Registration />);
  });

  test("Has no name by default", () => {
    const { getByPlaceholderText } = render(<Registration />);

    expect(getByPlaceholderText("Username").value).toEqual("");
  });
  
  test("Has no email by default", () => {
    const { getByPlaceholderText } = render(<Registration />);

    expect(getByPlaceholderText("email@email.com").value).toEqual("");
  });

});
