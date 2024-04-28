import { FC, useState } from 'react'
import {
  MovieListWrapper,
  MovieListContainer,
  NotFoundText,
} from './MovieList.styled'
import Movie from '../Movie/Movie'
import { MovieListProps } from './MovieList.types'

const MovieList: FC<MovieListProps> = ({ movies }) => {
  return (
    <MovieListContainer>
      {movies.length > 0 ? (
        <MovieListWrapper>
          {movies.map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </MovieListWrapper>
      ) : (
        <NotFoundText>
          OOPS... <br /> We are very sorry! <br /> We don’t have any results
          matching your search.
        </NotFoundText>
      )}
    </MovieListContainer>
  )
}

export default MovieList
