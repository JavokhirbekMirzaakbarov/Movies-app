import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../index";

jest.mock("../../../asset/images/logo.png", () => "logo-path");

test("renders Navbar component", () => {
  const openModal = jest.fn();
  const toggle = jest.fn();

  const { getByText, getByTestId } = render(
    <MemoryRouter>
      <Navbar openModal={openModal} toggle={toggle} />
    </MemoryRouter>
  );

  const addButton = getByText("+ADD MOVIE");
  fireEvent.click(addButton);
  expect(openModal).toHaveBeenCalled();

  const searchIcon = getByTestId("close-movie-detail");
  fireEvent.click(searchIcon);

  expect(toggle).toHaveBeenCalledWith(false);
});
