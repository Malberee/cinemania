import { HomeWrapper } from './Home.styled'
import Container from 'components/Container'
import WeeklyTrends from 'components/WeeklyTrends'
import UpcomingMovie from 'components/UpcomingMovie'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useEffect } from 'react'
import { moviesOperations } from 'store/movies'

const Home = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(moviesOperations.fetchMovies({ type: 'popular' }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <Container>
        <WeeklyTrends />
        <UpcomingMovie />
      </Container>
    </HomeWrapper>
  )
}

export default Home
