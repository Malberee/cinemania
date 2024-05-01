import { HomeWrapper } from './Home.styled'
import WeeklyTrends from 'components/WeeklyTrends'
import UpcomingMovie from 'components/UpcomingMovie'

import Hero from 'components/Hero'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <HomeWrapper>
      <Hero />
      <WeeklyTrends />
      <UpcomingMovie />
      <Outlet />
    </HomeWrapper>
  )
}

export default Home
