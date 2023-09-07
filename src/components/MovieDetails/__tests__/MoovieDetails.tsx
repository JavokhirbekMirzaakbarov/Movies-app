import React from "react";
import { render, screen } from "@testing-library/react";
import MovieDetails from "../index";
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
  overview: "Test movie overview",
  revenue: 10000000,
};

describe("MovieDetails component", () => {
  beforeEach(() => {
    render(<MovieDetails movie={mockMovie} />);
  });

  it("should render the MovieDetails component with movie details", () => {
    const movieDetailContainer = screen.getByTestId("movie-detail");
    expect(movieDetailContainer).toBeInTheDocument();

    const movieTitle = screen.getByText("Test Movie");
    expect(movieTitle).toBeInTheDocument();

    const genres = screen.getByText("Action, Adventure");
    expect(genres).toBeInTheDocument();

    const releaseDateAndRuntime = screen.getByText("2023-01-01");
    expect(releaseDateAndRuntime).toBeInTheDocument();

    const moviePoster = screen.getByTestId("image");
    expect(moviePoster).toBeInTheDocument();
    expect(moviePoster).toHaveAttribute("src", "test-movie-poster.jpg");
  });
});
