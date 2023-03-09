import React from "react";
import { screen, render } from "@testing-library/react";
import SearchBar from "../index";

describe("testing search bar", () => {
  test("renders correctly", () => {
    render(<SearchBar searchValue="some value" setSearchValue={() => ({})} />);
    expect(screen.getByDisplayValue("some value")).toBeInTheDocument();
  });

  it("does not change", () => {
    const { asFragment } = render(
      <SearchBar searchValue="some value" setSearchValue={() => ({})} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
