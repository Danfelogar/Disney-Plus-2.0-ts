import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { WelcomePage } from "./WelcomePage";
jest.mock("../../utils/environments.ts", () => ({
  NODE_ENV: "Development",
  KEY: "KEY",
  MESSAGING_SENDER_ID: "MESSAGING_SENDER_ID",
  APP_ID: "APP_ID",
}));
describe("WelcomePage", () => {
  test("renders WelcomePage component without crashing", () => {
    render(<WelcomePage />);
  });

  test("renders the correct images", () => {
    render(<WelcomePage />);
    const img1 = screen.getByAltText("logo1");
    const img2 = screen.getByAltText("logo2");
    expect(img1).toBeInTheDocument();
    expect(img2).toBeInTheDocument();
  });

  test("renders the correct text", () => {
    render(<WelcomePage />);
    const linkElement = screen.getByText("GET ALL THERE");
    const paragraphElement = screen.getByText(
      "Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/24, the price of Disney+ and The Disney Bundle will increase by $1."
    );
    expect(linkElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
  });
});
