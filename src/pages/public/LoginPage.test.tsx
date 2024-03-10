import "@testing-library/jest-dom";

import { LoginPage } from "./LoginPage";
import { useLogin } from "../../hooks/public/useLogin";
import { render, screen } from "../../test";

jest.mock("../../hooks/public/useLogin");

jest.mock("../../utils/environments.ts", () => ({
  NODE_ENV: "Development",
  KEY: "KEY",
  MESSAGING_SENDER_ID: "MESSAGING_SENDER_ID",
  APP_ID: "APP_ID",
}));

describe("LoginPage", () => {
  let mockUseLogin: jest.Mock;

  beforeEach(() => {
    mockUseLogin = useLogin as jest.Mock;
  });

  it("should render login form when isRegister is false", () => {
    mockUseLogin.mockReturnValue({
      isRegister: false,
      formMethodsLogin: {},
      formMethodsRegister: {},
      handleOnChangeIsLogin: jest.fn(),
    });

    render(<LoginPage />);

    expect(
      screen.getByText("Enter your email below to login to your account")
    ).toBeInTheDocument();
  });

  it("should render register form when isRegister is true", () => {
    mockUseLogin.mockReturnValue({
      isRegister: true,
      formMethodsLogin: {},
      formMethodsRegister: {},
      handleOnChangeIsLogin: jest.fn(),
    });

    render(<LoginPage />);

    expect(
      screen.getByText("Enter your email below to login to your account")
    ).toBeInTheDocument();
  });
});
