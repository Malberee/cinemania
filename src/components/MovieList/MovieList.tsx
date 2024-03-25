import { FC, useState } from 'react'
import {
  MovieListWrapper,
  MovieListContainer,
  NotFoundText,
} from './MovieList.styled'
import Movie from '../Movie/Movie'
import { MovieListProps } from './MovieList.types'
import { Movie as IMovie } from 'types'
import Modal from 'components/Modal'
import MovieDetails from 'components/MovieDetails'

const MovieList: FC<MovieListProps> = ({ movies }) => {
  const [currentMovie, setCurrentMovie] = useState<null | IMovie>(null)

  const selectMovie = (movie: IMovie) => setCurrentMovie(movie)

  return (
    <MovieListContainer>
      {movies.length > 0 ? (
        <MovieListWrapper>
          {movies.map((movie) => (
            <Movie movie={movie} key={movie.id} selectMovie={selectMovie} />
          ))}
          {currentMovie && (
            <Modal onClose={() => setCurrentMovie(null)}>
              <MovieDetails movie={currentMovie} />
            </Modal>
          )}
        </MovieListWrapper>
      ) : (
        <NotFoundText>
          OOPS... <br /> We are very sorry! <br/> We don’t have any results matching
          your search.
        </NotFoundText>
      )}
    </MovieListContainer>
  )
}

export default MovieList
