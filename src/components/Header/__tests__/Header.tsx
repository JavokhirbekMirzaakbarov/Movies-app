import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import Header from "../index";
import { BrowserRouter } from "react-router-dom";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("testing header", () => {
  test("renders correctly", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(
      screen.getByPlaceholderText("What do you want to watch?")
    ).toBeInTheDocument();
  });

  it("changes value when types", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const input = screen.getByPlaceholderText("What do you want to watch?");
    fireEvent.change(input, { target: { value: "Test search" } });
    expect(input).toHaveValue("Test search");
  });

  it("callback is called when clicked", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const input = screen.getByPlaceholderText("What do you want to watch?");
    fireEvent.change(input, { target: { value: "test" } });
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("../search/test");
  });
});
