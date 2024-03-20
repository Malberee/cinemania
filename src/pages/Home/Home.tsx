import { HomeWrapper } from './Home.styled'
import Container from 'components/Container'
import WeeklyTrends from 'components/WeeklyTrends'
import UpcomingMovie from 'components/UpcomingMovie'

const Home = () => {
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
