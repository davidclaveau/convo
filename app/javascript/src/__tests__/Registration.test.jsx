/**
 * @jest-environment jsdom
 */

import React from "react";
import { 
  render,
  cleanup,
  fireEvent
} from "@testing-library/react";
import Registration from "../components/Registration";

afterEach(cleanup);

describe("Registration", () => {

  test("Renders without crashing", () => {
    render(<Registration />);
  });

  test("Value appears for user username when typed into input", () => {
    const { getByTestId } = render(<Registration />);

    const registrationUsername = getByTestId("registration-username");
    fireEvent.change(registrationUsername, { target: { value: "bohorvat"}});

    expect(registrationUsername.value).toBe("bohorvat");
  });
  
  test("Value appears for user email when typed into input", () => {
    const { getByTestId } = render(<Registration />);

    const registrationEmail = getByTestId("registration-email");
    fireEvent.change(registrationEmail, { target: { value: "email53@dev.com"}});

    expect(registrationEmail.value).toBe("email53@dev.com");
  });
  
  test("Value appears for user password when typed into input", () => {
    const { getByTestId } = render(<Registration />);

    const registrationPassword = getByTestId("registration-password");
    fireEvent.change(registrationPassword, { target: { value: "password"}});

    expect(registrationPassword.value).toBe("password");
  });
  
  test("Value appears for user password confirmation when typed into input", () => {
    const { getByTestId } = render(<Registration />);

    const registrationPasswordConfirm = getByTestId("registration-password-confirmation");
    fireEvent.change(registrationPasswordConfirm, { target: { value: "password"}});

    expect(registrationPasswordConfirm.value).toBe("password");
  });

});
