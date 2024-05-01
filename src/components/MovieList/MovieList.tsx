import { FC } from 'react'
import {
  MovieListWrapper,
  MovieListContainer,
  NotFoundText,
} from './MovieList.styled'
import Movie from '../Movie/Movie'
import { MovieListProps } from './MovieList.types'
import Paginate from 'components/Paginate'
import useAppSelector from 'hooks/useAppSelector'
import {
  selectTotalPages,
} from 'store/movies/movies.selectors'

const MovieList: FC<MovieListProps> = ({ movies }) => {
  const totalPages = useAppSelector(selectTotalPages)

  return (
    <>
      <MovieListContainer>
        {movies.length > 0 ? (
          <MovieListWrapper>
            {movies.map((movie) => (
              <Movie movie={movie} key={movie.id} />
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
}

export default MovieList
