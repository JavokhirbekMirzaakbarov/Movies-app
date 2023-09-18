import React from "react";
import { render } from "@testing-library/react";
import Footer from "../index";

jest.mock("../../../asset/images/logo.png", () => "mocked-logo-path");

test("renders footer component", () => {
  const { getByAltText } = render(<Footer />);
  const footerElement = getByAltText("logo image");
  expect(footerElement).toHaveAttribute("src", "mocked-logo-path");
});
