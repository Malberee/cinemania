import { FC } from 'react'
import {
  MovieWrapper,
  MovieInner,
  StarWrapper,
  InfoWrapper,
  GreyText,
  RatingStar,
} from './Movie.styled'
import { useGenres } from 'hooks/useGenres'
import { MovieProps } from './Movie.types'
import StarEmpty from 'icons/StarEmpty'
import Star from 'icons/Star'

const Movie: FC<MovieProps> = ({ movie, selectMovie }) => {
  const genres = useGenres(movie.genre_ids)

  const year = new Date(movie.release_date).getFullYear()

  return (
    <MovieWrapper>
      <a onClick={() => selectMovie(movie)}>
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
          <RatingStar
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
      </a>
    </MovieWrapper>
  )
}

export default Movie
