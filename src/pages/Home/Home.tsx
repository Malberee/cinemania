import { HomeWrapper } from './Home.styled'
import WeeklyTrends from 'components/WeeklyTrends'
import UpcomingMovie from 'components/UpcomingMovie'

import Hero from 'components/Hero'
import { Outlet, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleSelect = (movieId: number) => {
    navigate(`${movieId}`)
  }

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
