import { FC } from 'react'
import {
  MovieDetailsWrapper,
  MoviePoster,
  MovieTitle,
  MovieInfoList,
  MovieInfoRow,
  MovieInfoItem,
  AboutTitle,
  About,
} from './MovieDetails.styled'
import { MovieDetailsProps } from './MovieDetails.types'
import Button from 'components/Button'
import VoteSpan from 'components/VoteSpan'

const MovieDetails: FC<MovieDetailsProps> = ({ movie }) => {
  const genres = movie.genres?.map((genre) => genre.name).join(' ')

  return (
    <MovieDetailsWrapper>
      <MoviePoster
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
      />
      <div>
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
        <Button $isBordered>Add to library</Button>
      </div>
    </MovieDetailsWrapper>
  )
}

export default MovieDetails
