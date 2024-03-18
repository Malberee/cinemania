import React, { FC } from 'react'
import {
  MovieDetailsWrapper,
  MoviePosterWrapper,
  MovieTitle,
  MovieInfoList,
  MovieInfoRow,
  MovieInfoItem,
  VoteSpan,
  AboutTitle,
  About,
} from './MovieDetails.styled'
import { MovieDetailsProps } from './MovieDetails.types'
import { useGenres } from 'hooks/useGenres'
import Button from 'components/Button'

const MovieDetails: FC<MovieDetailsProps> = ({ movie }) => {
  const genres = useGenres(movie.genre_ids).join(' ')

  return (
    <MovieDetailsWrapper>
      <MoviePosterWrapper>
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
      </MoviePosterWrapper>
      <MovieTitle>{movie.title}</MovieTitle>
      <MovieInfoList>
        <MovieInfoRow>
          <MovieInfoItem color="grey">Vote / Votes</MovieInfoItem>
          <MovieInfoItem color="grey">
            <VoteSpan>{movie.vote_average.toFixed(1)}</VoteSpan> /{' '}
            <VoteSpan>{movie.vote_count}</VoteSpan>
          </MovieInfoItem>
        </MovieInfoRow>
        <MovieInfoRow>
          <MovieInfoItem color="grey">Popularity</MovieInfoItem>
          <MovieInfoItem color="white">
            {movie.popularity.toFixed(1)}
          </MovieInfoItem>
        </MovieInfoRow>
        <MovieInfoRow>
          <MovieInfoItem color="grey">Genre</MovieInfoItem>
          <MovieInfoItem color="white">{genres}</MovieInfoItem>
        </MovieInfoRow>
      </MovieInfoList>
      <AboutTitle>About</AboutTitle>
      <About>{movie.overview}</About>
      <Button isBordered>Add to library</Button>
    </MovieDetailsWrapper>
  )
}

export default MovieDetails
