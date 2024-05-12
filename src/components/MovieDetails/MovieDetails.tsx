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
import Button from 'components/common/Button'
import VoteSpan from 'components/VoteSpan'
import useGenres from 'hooks/useGenres'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { libraryAction } from 'store/user/operation'
import useUser from 'hooks/useUser'

const MovieDetails: FC<MovieDetailsProps> = ({ movie }) => {
  const dispatch = useAppDispatch()
  const { userId, library, isLoggedIn } = useUser()
  const genres = useGenres(movie.genre_ids).join(' ')
  const alreadyInLibrary = !!library.find((item) => item.id === movie.id)

  const handleClick = () => {
    if (isLoggedIn && userId) {
      dispatch(
        libraryAction({
          userId,
          movie,
          action: alreadyInLibrary ? 'remove' : 'add',
        })
      )

      return
    }

    console.log('you are not logged in')
  }

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
        <Button $isBordered onClick={handleClick}>
          {alreadyInLibrary ? 'Remove from library' : 'Add to library'}
        </Button>
      </div>
    </MovieDetailsWrapper>
  )
}

export default MovieDetails
