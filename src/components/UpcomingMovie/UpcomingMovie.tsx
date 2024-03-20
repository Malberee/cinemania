import { FC, useEffect, useState } from 'react'
import {
  UpcomingMovieWrapper,
  UpcomingTitle,
  MoviePoster,
  MovieTitle,
  MovieInfo,
  MovieAbout,
} from './UpcomingMovie.styled'
import { UpcomingMovieProps } from './UpcomingMovie.types'
import { Movie } from 'types'
import { fetchMovies } from 'services/movies-api'
import Button from 'components/Button'

const UpcomingMovie: FC<UpcomingMovieProps> = () => {
  const [upcomingMovie, setUpcomingMovie] = useState<null | Movie>(null)

  useEffect(() => {
    const getMovie = async () => {
      const movies = await fetchMovies('upcoming')

      setUpcomingMovie(movies.data.results[0])
    }
    getMovie()
  }, [])

  return (
    <UpcomingMovieWrapper>
      <UpcomingTitle>Upcoming this month</UpcomingTitle>
      {upcomingMovie && (
        <div>
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
            <MovieInfo></MovieInfo>
            <MovieAbout>
              <h4>About</h4>
              <p>{upcomingMovie.overview}</p>
            </MovieAbout>
            <Button>Add to my library</Button>
          </div>
        </div>
      )}
    </UpcomingMovieWrapper>
  )
}

export default UpcomingMovie
