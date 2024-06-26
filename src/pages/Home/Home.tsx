import { HomeWrapper } from './Home.styled'
import WeeklyTrends from 'components/WeeklyTrends'
import UpcomingMovie from 'components/UpcomingMovie'

import Hero from 'components/Hero'
import { useCallback, useState } from 'react'
import { Movie } from 'types'
import Modal from 'components/common/Modal'
import MovieDetails from 'components/MovieDetails'

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState<null | Movie>(null)

  const toggleModal = useCallback((movie?: Movie) => {
    setSelectedMovie(movie || null)
  }, [])

  return (
    <HomeWrapper>
      <Hero openModal={toggleModal} />
      <WeeklyTrends selectMovie={toggleModal} />
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
