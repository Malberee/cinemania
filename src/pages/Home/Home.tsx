import { HomeWrapper } from './Home.styled'
import WeeklyTrends from 'components/WeeklyTrends'
import UpcomingMovie from 'components/UpcomingMovie'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useEffect, useState } from 'react'
import { moviesOperations } from 'store/movies'
import { Movie as IMovie } from 'types'

import Hero from 'components/Hero'
import Modal from 'components/Modal'
import MovieDetails from 'components/MovieDetails'

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null)

  const dispatch = useAppDispatch()

  const handleSelect = (movie: IMovie) => {
    setSelectedMovie(movie)
  }

  useEffect(() => {
    dispatch(moviesOperations.fetchMovies({ type: 'popular' }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <Hero selectMovie={handleSelect} />
      <WeeklyTrends selectMovie={handleSelect} />
      <UpcomingMovie />
      {selectedMovie && (
        <Modal onClose={() => setSelectedMovie(null)}>
          <MovieDetails movie={selectedMovie} />
        </Modal>
      )}
    </HomeWrapper>
  )
}

export default Home
