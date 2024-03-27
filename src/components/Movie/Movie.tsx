import { FC, KeyboardEvent } from 'react'
import {
  MovieWrapper,
  MovieInner,
  StarWrapper,
  InfoWrapper,
  GreyText,
  RatingStars,
} from './Movie.styled'
import useGenres from 'hooks/useGenres'
import { MovieProps } from './Movie.types'
import StarEmpty from 'icons/StarEmpty'
import Star from 'icons/Star'

const Movie: FC<MovieProps> = ({ movie, selectMovie }) => {
  const genres = useGenres(movie.genre_ids)

  const year = new Date(movie.release_date).getFullYear()

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      selectMovie(movie)
    }
  }

  return (
    <MovieWrapper
      onClick={() => selectMovie(movie)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="link"
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt=""
      />
      <MovieInner>
        <InfoWrapper>
          <p>{movie.title.toUpperCase()} </p>
          <GreyText>
            {genres.slice(0, 2).join(', ')} | {year}
          </GreyText>
        </InfoWrapper>
        <RatingStars
          initialValue={Math.round((movie.vote_average / 2) * 2) / 2}
          readonly
          allowFraction
          fillIcon={
            <StarWrapper>
              <Star />
            </StarWrapper>
          }
          emptyIcon={
            <StarWrapper>
              <StarEmpty />
            </StarWrapper>
          }
        />
      </MovieInner>
    </MovieWrapper>
  )
}

export default Movie
