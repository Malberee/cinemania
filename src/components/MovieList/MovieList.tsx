import React, { FC } from 'react'
import { MovieListWrapper } from './MovieList.styled'
import Movie from '../Movie/Movie'
import { MovieListProps } from './MovieList.types'

const MovieList: FC<MovieListProps> = ({ movies }) => {
  return (
    <MovieListWrapper>
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}
    </MovieListWrapper>
  )
}

export default MovieList
