import { LoginPage } from "./LoginPage";
import { useLogin } from "../../hooks/public/useLogin";
import { render, screen } from "../../test";
import { useForm } from "react-hook-form";
import { LoginCredentials } from "../../types/auth";
import { yupValidations } from "../../utils";
import { yupResolver } from "@hookform/resolvers/yup";

jest.mock("../../hooks/public/useLogin");

jest.mock("../../utils/environments.ts", () => ({
  NODE_ENV: "Development",
  KEY: "KEY",
  MESSAGING_SENDER_ID: "MESSAGING_SENDER_ID",
  APP_ID: "APP_ID",
}));
jest.mock("react-hook-form", () => ({
  useForm: jest.fn(),
}));
describe("LoginPage", () => {
  let mockUseLogin: jest.Mock;

  beforeEach(() => {
    mockUseLogin = useLogin as jest.Mock;
    (useForm as jest.Mock).mockReturnValue({
      register: jest.fn(),
      handleSubmit: jest.fn(),
      formState: { errors: {} },
    });
  });

  it("should render login form when isRegister is false", () => {
    mockUseLogin.mockReturnValue({
      isRegister: false,
      formMethodsLogin: useForm<LoginCredentials>({
        resolver: yupResolver(yupValidations.validateLogin),
      }),
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
