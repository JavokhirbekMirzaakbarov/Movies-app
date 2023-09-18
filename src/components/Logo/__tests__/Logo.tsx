import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import Logo from "../index";

jest.mock("../../../asset/images/logo.png", () => "mocked-logo-path");

test("renders Logo component", () => {
  const { getByAltText, getByRole } = render(
    <MemoryRouter>
      <Logo />
    </MemoryRouter>
  );
  const linkElement = getByRole("link");
  expect(linkElement).toHaveAttribute("href", "/");
  const imageElement = getByAltText("Netflix logo");
  expect(imageElement).toHaveAttribute("src", "mocked-logo-path");
  expect(imageElement).toHaveClass("logo");
});
