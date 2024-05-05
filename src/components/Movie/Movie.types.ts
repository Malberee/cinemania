import { Movie } from "types";

export interface MovieProps {
  movie: Movie
  selectMovie: (movie: Movie) => void
}