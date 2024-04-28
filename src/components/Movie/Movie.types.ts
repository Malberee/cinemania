import { Movie } from "types";

export interface MovieProps {
  movie: Movie
  selectMovie: (movieId: number) => void
}