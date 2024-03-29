import { FC } from 'react'
import {
  WeeklyTrendsWrapper,
  TrendsHeader,
  TrendsTitle,
  Link,
  TrendsList,
} from './WeeklyTrends.styled'
import { WeeklyTrendsProps } from './WeeklyTrends.types'
import useAppSelector from 'hooks/useAppSelector'
import { selectMovies } from 'store/movies/movies.selectors'
import Movie from 'components/Movie'
import Container from 'components/Container'

const WeeklyTrends: FC<WeeklyTrendsProps> = ({ selectMovie }) => {
  const movies = useAppSelector(selectMovies).slice(0, 3)

  return (
    <WeeklyTrendsWrapper>
      <Container>
        <TrendsHeader>
          <TrendsTitle>Weekly trends</TrendsTitle>
          <Link to="/catalog">See all</Link>
        </TrendsHeader>
        <TrendsList>
          {movies.map((movie) => (
            <Movie movie={movie} selectMovie={selectMovie} key={movie.id} />
          ))}
        </TrendsList>
      </Container>
    </WeeklyTrendsWrapper>
  )
}

export default WeeklyTrends
