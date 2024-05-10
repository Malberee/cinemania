import { memo } from 'react'
import {
  WeeklyTrendsWrapper,
  TrendsHeader,
  TrendsTitle,
  Link,
  TrendsList,
} from './WeeklyTrends.styled'
import { WeeklyTrendsProps } from './WeeklyTrends.types'
import useAppSelector from 'hooks/useAppSelector'

import Movie from 'components/common/Movie'
import Container from 'components/common/Container'
import Loader from 'components/common/Loader'
import {
  selectIsLoading,
  selectTrendingMovies,
} from 'store/trendingMovies/selectors'

const WeeklyTrends = memo<WeeklyTrendsProps>(({ selectMovie }) => {
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
              <Movie movie={movie} key={movie.id} selectMovie={selectMovie} />
            ))}
          </TrendsList>
        )}
      </Container>
    </WeeklyTrendsWrapper>
  )
})

export default WeeklyTrends
