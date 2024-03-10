import "@testing-library/jest-dom";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { DetailsPage } from "./DetailsPage";
import { useDetails } from "../../hooks";

jest.mock("../../utils/environments.ts", () => ({
  NODE_ENV: "Development",
  KEY: "KEY",
  MESSAGING_SENDER_ID: "MESSAGING_SENDER_ID",
  APP_ID: "APP_ID",
}));

jest.mock("../../hooks/private/useDetails.tsx");

describe("DetailsPage", () => {
  test("renders DetailsPage component without crashing", () => {
    (useDetails as jest.Mock).mockReturnValue({
      movieDetails: null,
      isModalOpen: false,
      changeShowModal: jest.fn(),
    });
    render(<DetailsPage />);
  });

  test("displays loading spinner when movieDetails is null", () => {
    (useDetails as jest.Mock).mockReturnValue({
      movieDetails: null,
      isModalOpen: false,
      changeShowModal: jest.fn(),
    });
    render(<DetailsPage />);
    const spinnerElement = screen.getByRole("progressbar");
    expect(spinnerElement).toBeInTheDocument();
  });

  test("displays movie details when movieDetails is not null", () => {
    const mockMovieDetails = {
      backgroundImgFront: "testBackgroundImg",
      titleFront: "testTitle",
      titleImgFront: "testTitleImg",
      subTitleFront: "testSubTitle",
      descriptionFront: "testDescription",
      urlTrailerFront: "testUrlTrailer",
    };
    (useDetails as jest.Mock).mockReturnValue({
      movieDetails: mockMovieDetails,
      isModalOpen: false,
      changeShowModal: jest.fn(),
    });
    render(<DetailsPage />);
    const titleElement = screen.getByAltText(
      `${mockMovieDetails.titleFront}-title`
    );
    const descriptionElement = screen.getByText(
      mockMovieDetails.descriptionFront
    );
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
