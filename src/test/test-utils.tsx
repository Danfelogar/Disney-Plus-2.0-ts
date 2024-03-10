import { FC, ReactElement, ReactNode } from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

import { store } from "../redux/store";

type Options = Parameters<typeof rtlRender>[1];

jest.mock("redux-persist/lib/storage", () => ({
  getItem: jest.fn(() => Promise.resolve(null)),
  setItem: jest.fn(() => Promise.resolve(null)),
  removeItem: jest.fn(() => Promise.resolve(null)),
}));

const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

const customRender = (ui: ReactElement, options?: Options) =>
  rtlRender(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
