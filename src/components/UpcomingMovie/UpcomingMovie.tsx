import { FC, useEffect, useState } from 'react'
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
import Button from 'components/Button'
import useGenres from 'hooks/useGenres'
import VoteSpan from 'components/VoteSpan'
import Container from 'components/Container'

const UpcomingMovie: FC<UpcomingMovieProps> = () => {
  const [upcomingMovie, setUpcomingMovie] = useState<null | Movie>(null)
  const genres = useGenres(upcomingMovie?.genre_ids || []).join(', ')

  useEffect(() => {
    const getMovie = async () => {
      const movies = await fetchMovies('upcoming')

      setUpcomingMovie(movies.data.results[1])
    }
    getMovie()
  }, [])

  return (
    <UpcomingMovieWrapper>
      <Container>
        <UpcomingTitle>Upcoming this month</UpcomingTitle>
        {upcomingMovie && (
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
                  <VoteSpan>{upcomingMovie.vote_average.toFixed(1)}</VoteSpan> /{' '}
                  <VoteSpan>{upcomingMovie.vote_count}</VoteSpan>
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
              <Button>Add to my library</Button>
            </div>
          </UpcomingMovieInner>
        )}
      </Container>
    </UpcomingMovieWrapper>
  )
}

export default UpcomingMovie
