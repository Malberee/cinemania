import { Movie } from "types";

export interface MovieListProps {
    movies: Movie[]
    selectMovie: (movie: Movie) => void
}