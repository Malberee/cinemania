import { memo } from 'react'
import {
  MovieListWrapper,
  MovieListContainer,
  NotFoundText,
} from './MovieList.styled'
import Movie from '../common/Movie/Movie'
import { MovieListProps } from './MovieList.types'

const MovieList = memo<MovieListProps>(
  ({ movies, selectMovie, errorMessage }) => {
    return (
      <>
        <MovieListContainer>
          {movies.length > 0 ? (
            <MovieListWrapper>
              {movies.map((movie) => (
                <Movie movie={movie} key={movie.id} selectMovie={selectMovie} />
              ))}
            </MovieListWrapper>
          ) : (
            <NotFoundText>
              OOPS... <br /> We are very sorry! <br /> {errorMessage}
            </NotFoundText>
          )}
        </MovieListContainer>
      </>
    )
  }
)

export default MovieList
