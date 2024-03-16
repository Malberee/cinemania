import React, { FC } from 'react'
import { Rating } from 'react-simple-star-rating'
import { MovieWrapper, MovieInner } from './Movie.styled'
import { useGenres } from 'hooks/useGenres'
import { MovieProps } from './Movie.types'

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
        {genres.join(', ').slice(0, -1)}
        <Rating
          size={15}
          initialValue={Math.round((movie.vote_average / 2) * 2) / 2}
          allowHover={false}
          allowFraction
        />
      </MovieInner>
    </MovieWrapper>
  )
}

export default Movie
