import { FC, useEffect } from 'react'
import { CatalogWrapper } from './Catalog.styled'
import { CatalogProps } from './Catalog.types'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { moviesOperations } from 'store/movies'
import MovieList from 'components/MovieList'
import { selectIsLoading, selectMovies } from 'store/movies/movies.selectors'
import useAppSelector from 'hooks/useAppSelector'

const Catalog: FC<CatalogProps> = () => {
  const dispatch = useAppDispatch()
  const movies = useAppSelector(selectMovies)
  const isLoading = useAppSelector(selectIsLoading)

  useEffect(() => {
    dispatch(moviesOperations.fetchMovies({ type: 'popular' }))
    dispatch(moviesOperations.fetchGenres())
  }, [dispatch])

  return (
    <CatalogWrapper>
      {isLoading ? 'LOADING' : <MovieList movies={movies} />}
    </CatalogWrapper>
  )
}

export default Catalog
