import React, { FC } from 'react'
import {
  MovieDetailsWrapper,
  MoviePoster,
  MovieTitle,
  MovieInfo,
  MovieAbout,
} from './MovieDetails.styled'
import { MovieDetailsProps } from './MovieDetails.types'
import Button from 'components/Button'

const MovieDetails: FC<MovieDetailsProps> = ({ movie }) => {
  return (
    <MovieDetailsWrapper>
      <MoviePoster
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
      />
      <MovieTitle>{movie.title}</MovieTitle>
      <MovieInfo></MovieInfo>
      <MovieAbout>
        <h4>About</h4>
        <p>{movie.overview}</p>
      </MovieAbout>
      <Button>Add to my library</Button>
    </MovieDetailsWrapper>
  )
}

export default MovieDetails
