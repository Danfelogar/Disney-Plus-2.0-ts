import "@testing-library/jest-dom";
import { FC, ReactElement, ReactNode } from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../redux/store";

type Options = Parameters<typeof rtlRender>[1];

jest.mock("redux-persist", () => {
  const real = jest.requireActual("redux-persist");
  return {
    ...real,
    persistReducer: jest.fn().mockImplementation((_, reducers) => reducers),
  };
});

const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

const customRender = (ui: ReactElement, options?: Options) =>
  rtlRender(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
