import { FC, useState } from 'react'
import { HomeWrapper } from './Home.styled'
import { HomeProps } from './Home.types'
import HomeSection from 'components/HomeSection'
import Movie from 'components/Movie'
import { selectIsLoading, selectMovies } from 'store/movies/movies.selectors'
import Modal from 'components/Modal'
import { Movie as MovieType } from 'types'
import MovieDetails from 'components/MovieDetails'
import useAppSelector from 'hooks/useAppSelector'

const Home: FC<HomeProps> = () => {
  const [selectedMovie, setSelectedMovie] = useState<null | MovieType>(null)
  const movie = useAppSelector(selectMovies)[0]
  const isLoading = useAppSelector(selectIsLoading)

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
