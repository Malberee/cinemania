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

import Movie from 'components/Movie'
import Container from 'components/Container'
import Loader from 'components/Loader'
import { selectIsLoading, selectTrendingMovies } from 'store/trendingMovies/trendingMovies.selectors'

const WeeklyTrends: FC<WeeklyTrendsProps> = ({ selectMovie }) => {
  const movies = useAppSelector(selectTrendingMovies).slice(0, 3)
  const isLoading = useAppSelector(selectIsLoading)

  return (
    <WeeklyTrendsWrapper>
      <Container>
        <TrendsHeader>
          <TrendsTitle>Weekly trends</TrendsTitle>
          <Link to="/catalog">See all</Link>
        </TrendsHeader>
        {(isLoading && <Loader />) || (
          <TrendsList>
            {movies.map((movie) => (
              <Movie movie={movie} selectMovie={selectMovie} key={movie.id} />
            ))}
          </TrendsList>
        )}
      </Container>
    </WeeklyTrendsWrapper>
  )
}

export default WeeklyTrends
