import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotFound from "../index";

jest.mock("../../../asset/images/not-found.png", () => "not-found-path");

describe("NotFound component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
  });

  it("should render the 'not found' message", () => {
    const messageElement = screen.getByText(
      "The page you are looking for is not found!"
    );
    expect(messageElement).toBeInTheDocument();
  });

  it("should render a link to the home page", () => {
    const linkElement = screen.getByRole("link", { name: "Home Page" });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
  });

  it("should render an image", () => {
    const imageElement = screen.getByAltText("Not Found");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "not-found-path");
  });
});
