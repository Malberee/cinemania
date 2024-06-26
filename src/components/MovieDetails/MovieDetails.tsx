import { FC, useState } from 'react'
import {
  MovieDetailsWrapper,
  MoviePoster,
  MovieTitle,
  MovieInfoList,
  MovieInfoRow,
  MovieInfoItem,
  AboutTitle,
  About,
  ButtonsWrapper,
} from './MovieDetails.styled'
import { MovieDetailsProps } from './MovieDetails.types'
import Button from 'components/common/Button'
import VoteSpan from 'components/VoteSpan'
import useGenres from 'hooks/useGenres'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { libraryAction } from 'store/user/operation'
import useUser from 'hooks/useUser'
import toast from 'react-hot-toast'
import TrailerPlayer from 'components/common/TrailerPlayer'

const MovieDetails: FC<MovieDetailsProps> = ({ movie }) => {
  const [showTrailer, setShowTrailer] = useState(false)
  const dispatch = useAppDispatch()
  const { library, isLoggedIn } = useUser()
  const genres = useGenres(movie.genre_ids).join(' ')
  const alreadyInLibrary = !!library.find((item) => item.id === movie.id)

  const handleClick = () => {
    if (isLoggedIn) {
      toast.promise(
        dispatch(
          libraryAction({
            movie,
            action: alreadyInLibrary ? 'remove' : 'add',
          })
        ).unwrap(),
        {
          loading: alreadyInLibrary
            ? 'Removing from the library...'
            : 'Adding to the library...',
          success: alreadyInLibrary
            ? 'Successfully removed from the library'
            : 'Successfully added to library',
          error: 'Error!',
        }
      )

      return
    }

    toast.error('You are not logged in')
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
        <ButtonsWrapper>
          <Button onClick={() => setShowTrailer(true)}>Watch trailer</Button>
          <Button $isBordered={!alreadyInLibrary} onClick={handleClick}>
            {alreadyInLibrary ? 'Remove from library' : 'Add to library'}
          </Button>
        </ButtonsWrapper>
      </div>
      {showTrailer && (
        <TrailerPlayer
          movieId={movie.id}
          closeTrailer={() => setShowTrailer(false)}
        />
      )}
    </MovieDetailsWrapper>
  )
}

export default MovieDetails
