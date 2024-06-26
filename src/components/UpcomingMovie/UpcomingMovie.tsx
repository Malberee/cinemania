import { memo, useEffect, useState } from 'react'
import {
  UpcomingMovieWrapper,
  UpcomingTitle,
  UpcomingMovieInner,
  MoviePoster,
  MovieTitle,
  MovieInfo,
  MovieInfoItem,
  MovieAbout,
} from './UpcomingMovie.styled'
import { UpcomingMovieProps } from './UpcomingMovie.types'
import { Movie } from 'types'
import { fetchMovies } from 'services/movies-api'
import Button from 'components/common/Button'
import useGenres from 'hooks/useGenres'
import VoteSpan from 'components/VoteSpan'
import Container from 'components/common/Container'
import Loader from 'components/common/Loader'
import { useAppDispatch } from 'hooks/useAppDispatch'
import useUser from 'hooks/useUser'
import toast from 'react-hot-toast'
import useAppSelector from 'hooks/useAppSelector'
import { selectLibrary } from 'store/user/selectors'
import { userOperations } from 'store/user'

const UpcomingMovie = memo<UpcomingMovieProps>(() => {
  const [upcomingMovie, setUpcomingMovie] = useState<null | Movie>(null)
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useAppDispatch()
  const { isLoggedIn } = useUser()
  const library = useAppSelector(selectLibrary)
  const genres = useGenres(upcomingMovie?.genre_ids || []).join(', ')
  const alreadyInLibrary = !!library.find(
    (item) => item.id === upcomingMovie?.id
  )

  const handleAddToLibrary = () => {
    if (isLoggedIn) {
      toast.promise(
        dispatch(
          userOperations.libraryAction({
            movie: upcomingMovie!,
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

  useEffect(() => {
    const getMovie = async () => {
      try {
        setIsLoading(true)

        const movies = await fetchMovies('upcoming')

        setUpcomingMovie(movies.data.results[1])
      } catch (error) {
        toast.error('Error loading upcoming movie')
      } finally {
        setIsLoading(false)
      }
    }
    getMovie()
  }, [])

  return (
    <UpcomingMovieWrapper>
      <Container>
        <UpcomingTitle>Upcoming this month</UpcomingTitle>
        {(isLoading && <Loader />) ||
          (upcomingMovie && (
            <UpcomingMovieInner>
              <MoviePoster>
                <source
                  srcSet={`https://image.tmdb.org/t/p/original/${upcomingMovie.backdrop_path}`}
                  media="(width >= 768px)"
                />
                <img
                  src={`https://image.tmdb.org/t/p/original/${upcomingMovie.poster_path}`}
                />
              </MoviePoster>
              <div>
                <MovieTitle>{upcomingMovie.title}</MovieTitle>
                <MovieInfo>
                  <MovieInfoItem>Release date</MovieInfoItem>
                  <MovieInfoItem color="accent">
                    {upcomingMovie.release_date.replaceAll('-', '.')}
                  </MovieInfoItem>
                  <MovieInfoItem>Vote / Votes</MovieInfoItem>
                  <MovieInfoItem>
                    <VoteSpan>{upcomingMovie.vote_average.toFixed(1)}</VoteSpan>{' '}
                    / <VoteSpan>{upcomingMovie.vote_count}</VoteSpan>
                  </MovieInfoItem>
                  <MovieInfoItem>Popularity</MovieInfoItem>
                  <MovieInfoItem color="text">
                    {upcomingMovie.popularity.toFixed(1)}
                  </MovieInfoItem>
                  <MovieInfoItem>Genre</MovieInfoItem>
                  <MovieInfoItem color="text">{genres}</MovieInfoItem>
                </MovieInfo>
                <MovieAbout>
                  <h4>About</h4>
                  <p>{upcomingMovie.overview}</p>
                </MovieAbout>
                <Button onClick={handleAddToLibrary}>
                  {alreadyInLibrary
                    ? 'Remove from library'
                    : 'Add to my library'}
                </Button>
              </div>
            </UpcomingMovieInner>
          ))}
      </Container>
    </UpcomingMovieWrapper>
  )
})

export default UpcomingMovie
