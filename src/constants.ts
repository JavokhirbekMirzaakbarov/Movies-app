export interface Movie {
  id: string;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  genres: string[];
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  runtime: number;
}

export type ButtonProps = {
  text: string;
  className?: string;
  onClick?: () => void;
};

export const genres = ["adventure", "action", "fantasy", "comedy", "romance", "drama", "thriller"];
