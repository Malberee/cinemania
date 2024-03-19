import React, { FC, useState } from 'react'
import { HomeWrapper } from './Home.styled'
import { HomeProps } from './Home.types'
import HomeSection from 'components/HomeSection'
import Movie from 'components/Movie'
import { useSelector } from 'react-redux'
import { selectIsLoading, selectMovies } from 'store/movies/movies.selectors'
import Modal from 'components/Modal'
import { Movie as MovieType } from 'types'
import MovieDetails from 'components/MovieDetails'

const Home: FC<HomeProps> = () => {
  const [selectedMovie, setSelectedMovie] = useState<null | MovieType>(null)
  const movie = useSelector(selectMovies)[0]
  const isLoading = useSelector(selectIsLoading)

  const selectMovie = (movie: MovieType) => setSelectedMovie(movie)

  return (
    <HomeWrapper>
      <HomeSection title="Weekly trends" link="/catalog">
        {!isLoading && movie && (
          <Movie movie={movie} selectMovie={selectMovie} />
        )}
      </HomeSection>
      <HomeSection title="Upcoming this month">
        {!isLoading && movie && <MovieDetails movie={movie} />}
      </HomeSection>
      {selectedMovie && (
        <Modal onClose={() => setSelectedMovie(null)}>
          <MovieDetails movie={selectedMovie} />
        </Modal>
      )}
    </HomeWrapper>
  )
}

export default Home
