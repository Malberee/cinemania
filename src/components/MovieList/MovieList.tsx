import { memo } from 'react'
import {
  MovieListWrapper,
  MovieListContainer,
  NotFoundText,
} from './MovieList.styled'
import Movie from '../common/Movie/Movie'
import { MovieListProps } from './MovieList.types'
import Paginate from 'components/Paginate'
import useAppSelector from 'hooks/useAppSelector'
import { selectTotalPages } from 'store/movies/selectors'

const MovieList = memo<MovieListProps>(({ movies, selectMovie }) => {
  const totalPages = useAppSelector(selectTotalPages)

  return (
    <>
      <MovieListContainer>
        {movies.length > 0 ? (
          <MovieListWrapper>
            {movies.map((movie) => (
              <Movie movie={movie} key={movie.id} selectMovie={selectMovie} />
            ))}
          </MovieListWrapper>
        ) : (
          <NotFoundText>
            OOPS... <br /> We are very sorry! <br /> We don’t have any results
            matching your search.
          </NotFoundText>
        )}
      </MovieListContainer>
      <Paginate totalPages={totalPages} />
    </>
  )
})

export default MovieList
