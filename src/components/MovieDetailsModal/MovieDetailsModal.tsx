import { FC } from 'react'
import {
  MovieDetailsModalWrapper,
  MoviePoster,
  MovieTitle,
  MovieInfoList,
  MovieInfoRow,
  MovieInfoItem,
  AboutTitle,
  About,
} from './MovieDetailsModal.styled'
import { MovieDetailsModalProps } from './MovieDetailsModal.types'
import { useGenres } from 'hooks/useGenres'
import Button from 'components/Button'
import VoteSpan from 'components/VoteSpan'

const MovieDetailsModal: FC<MovieDetailsModalProps> = ({ movie }) => {
  const genres = useGenres(movie.genre_ids).join(' ')

  return (
    <MovieDetailsModalWrapper>
        <MoviePoster
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        />
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
    </MovieDetailsModalWrapper>
  )
}

export default MovieDetailsModal
