import React, { FC } from 'react'
import { Rating } from 'react-simple-star-rating'
import { MovieWrapper, MovieInner, StarWrapper } from './Movie.styled'
import { useGenres } from 'hooks/useGenres'
import { MovieProps } from './Movie.types'
import StarEmpty from 'icons/StarEmpty'
import Star from 'icons/Star'

const Movie: FC<MovieProps> = ({ movie }) => {
  const genres = useGenres(movie.genre_ids)

  return (
    <MovieWrapper>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt=""
      />
      <MovieInner>
        <p>{movie.title}</p>
        <p>{genres.join(', ').slice(0, -1)}</p>
        <Rating
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
