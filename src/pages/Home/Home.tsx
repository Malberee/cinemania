import { HomeWrapper } from './Home.styled'
import WeeklyTrends from 'components/WeeklyTrends'
import UpcomingMovie from 'components/UpcomingMovie'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useEffect } from 'react'
import { moviesOperations } from 'store/movies'

import Hero from 'components/Hero'
import { Outlet, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleSelect = (movieId: number) => {
    navigate(`${movieId}`)
  }

  useEffect(() => {
    dispatch(moviesOperations.fetchMovies({ type: 'popular' }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <Hero selectMovie={handleSelect} />
      <WeeklyTrends selectMovie={handleSelect} />
      <UpcomingMovie />
      <Outlet />
    </HomeWrapper>
  )
}

export default Home
