/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MovieCard from "../index";
import { Movie } from "../../../constants";

jest.mock("../../../asset/images/no-image.png", () => "no-image-path");

const mockMovie: Movie = {
  id: "1",
  title: "Test Movie",
  release_date: "2023-01-01",
  vote_average: 7.5,
  runtime: 120,
  genres: ["Action", "Adventure"],
  poster_path: "test-movie-poster.jpg",
  tagline: "Tagline",
  overview: "Overview",
  budget: 2300000,
  vote_count: 200,
  revenue: 200000,
};

describe("MovieCard component", () => {
  it("should render the MovieCard component with movie details", () => {
    const onEditMock = jest.fn();
    const onDeleteMock = jest.fn();
    const onClickMock = jest.fn();

    render(
      <MovieCard
        movie={mockMovie}
        onEdit={onEditMock}
        onDelete={onDeleteMock}
        onClick={onClickMock}
      />
    );

    const movieTitle = screen.getByTestId("movie-title");
    expect(movieTitle).toBeInTheDocument();
    expect(movieTitle).toHaveTextContent("Test Movie");

    const editButton = screen.getByTestId("edit-btn");
    expect(editButton).toBeInTheDocument();
    fireEvent.click(editButton);
    expect(onEditMock).toHaveBeenCalledWith("1");

    const deleteButton = screen.getByTestId("delete-btn");
    expect(deleteButton).toBeInTheDocument();
    fireEvent.click(deleteButton);
    expect(onDeleteMock).toHaveBeenCalledWith("1");

    const card = screen.getByTestId("card");
    fireEvent.click(card);
    expect(onClickMock).toHaveBeenCalledWith("1");
  });

  it("should handle image loading error", () => {
    const invalidPosterMovie: Movie = {
      ...mockMovie,
      poster_path: "no-image-path",
    };
    render(
      <MovieCard
        movie={invalidPosterMovie}
        onEdit={() => {}}
        onDelete={() => {}}
        onClick={() => {}}
      />
    );

    const imageElement = screen.getByAltText("green iguana");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "no-image-path");
  });
});
