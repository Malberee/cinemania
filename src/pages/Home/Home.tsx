import { HomeWrapper } from './Home.styled'
import WeeklyTrends from 'components/WeeklyTrends'
import UpcomingMovie from 'components/UpcomingMovie'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useEffect } from 'react'
import { moviesOperations } from 'store/movies'
import Hero from 'components/Hero'

const Home = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(moviesOperations.fetchMovies({ type: 'popular' }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <Hero />
      <WeeklyTrends />
      <UpcomingMovie />
    </HomeWrapper>
  )
}

export default Home
