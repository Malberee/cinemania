import { memo } from 'react'
import {
  MovieListWrapper,
  MovieListContainer,
  NotFoundText,
} from './MovieList.styled'
import Movie from '../common/Movie/Movie'
import { MovieListProps } from './MovieList.types'

const MovieList = memo<MovieListProps>(({ movies, selectMovie }) => {
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
            OOPS... <br /> We are very sorry! <br /> We don’t have any results
            matching your search.
          </NotFoundText>
        )}
      </MovieListContainer>
    </>
  )
})

export default MovieList
