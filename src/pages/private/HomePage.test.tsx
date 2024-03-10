// FILEPATH: /Volumes/Daniel7w7rSSD/programacion/Disney-Plus-2.0-ts/src/pages/private/HomePage.test.tsx

import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { HomePage } from "./HomePage";
import { useHome } from "../../hooks";

jest.mock("../../hooks/private/useHome.tsx");

jest.mock("../../utils/environments.ts", () => ({
  NODE_ENV: "Development",
  KEY: "KEY",
  MESSAGING_SENDER_ID: "MESSAGING_SENDER_ID",
  APP_ID: "APP_ID",
}));

describe("HomePage", () => {
  test("renders HomePage component without crashing", () => {
    (useHome as jest.Mock).mockReturnValue({
      moviesCategories: [],
    });
    render(<HomePage />);
  });
});
