import React, { FC, useState } from 'react'
import {
  WeeklyTrendsWrapper,
  TrendsHeader,
  TrendsTitle,
  Link,
  TrendsList,
} from './WeeklyTrends.styled'
import { WeeklyTrendsProps } from './WeeklyTrends.types'
import useAppSelector from 'hooks/useAppSelector'
import { selectMovies } from 'store/movies/movies.selectors'
import Movie from 'components/Movie'
import Modal from 'components/Modal'
import { Movie as IMovie } from 'types'
import MovieDetailsModal from 'components/MovieDetailsModal'

const WeeklyTrends: FC<WeeklyTrendsProps> = () => {
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null)
  const movies = useAppSelector(selectMovies).slice(0, 3)

  const handleSelect = (movie: IMovie) => {
    setSelectedMovie(movie)
  }

  return (
    <WeeklyTrendsWrapper>
      <TrendsHeader>
        <TrendsTitle>Weekly trends</TrendsTitle>
        <Link to="/catalog">See all</Link>
      </TrendsHeader>
      <TrendsList>
        {movies.map((movie) => (
          <Movie movie={movie} selectMovie={handleSelect} key={movie.id} />
        ))}
      </TrendsList>
      {selectedMovie && (
        <Modal onClose={() => setSelectedMovie(null)}>
          <MovieDetailsModal movie={selectedMovie} />
        </Modal>
      )}
    </WeeklyTrendsWrapper>
  )
}

export default WeeklyTrends
