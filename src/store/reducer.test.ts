import reducer, {
  sortByDuration,
  MoviesState,
  filterByGenre,
} from "./moviesSlice";

const prevState: MoviesState = {
  movies: [
    {
      id: "1",
      title: "Movie title",
      tagline: "Movie tagline",
      vote_average: 7,
      vote_count: 20,
      release_date: "20 Nov 2022",
      genres: ["action", "comedy"],
      poster_path: "Some path",
      overview: "Movie overview",
      budget: 1000000,
      revenue: 10000000,
      runtime: 100,
    },
    {
      id: "2",
      title: "Movie title 2",
      tagline: "Movie tagline 2",
      vote_average: 8,
      vote_count: 20,
      release_date: "20 Nov 2022",
      genres: ["drama", "adventure"],
      poster_path: "Some path 2",
      overview: "Movie overview 2",
      budget: 1000000,
      revenue: 10000000,
      runtime: 200,
    },
  ],
};

test("should sort by duration", () => {
  expect(reducer(prevState, sortByDuration())).toEqual({
    movies: { ...prevState }.movies.reverse(),
  });
});

test("should sort by genre", () => {
  expect(reducer(prevState, filterByGenre("adventure"))).toEqual({
    movies: [
      {
        id: "2",
        title: "Movie title 2",
        tagline: "Movie tagline 2",
        vote_average: 8,
        vote_count: 20,
        release_date: "20 Nov 2022",
        genres: ["drama", "adventure"],
        poster_path: "Some path 2",
        overview: "Movie overview 2",
        budget: 1000000,
        revenue: 10000000,
        runtime: 200,
      },
    ],
  });
});
