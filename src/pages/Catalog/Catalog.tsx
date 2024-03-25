import { FC, useEffect } from 'react'
import { CatalogWrapper } from './Catalog.styled'
import { CatalogProps } from './Catalog.types'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { moviesOperations } from 'store/movies'
import MovieList from 'components/MovieList'
import {
  selectGenreList,
  selectIsLoading,
  selectMovies,
} from 'store/movies/movies.selectors'
import useAppSelector from 'hooks/useAppSelector'
import SearchBar from 'components/SearchBar'
import { useSearchParams } from 'react-router-dom'

const Catalog: FC<CatalogProps> = () => {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const movies = useAppSelector(selectMovies)
  const isLoading = useAppSelector(selectIsLoading)

  const query = searchParams.get('query')
  const year = searchParams.get('year')?.split(',')
  const genre = searchParams.get('genre')?.split(',')

  useEffect(() => {
    if (!query && !year?.length && !genre?.length) {
      dispatch(moviesOperations.fetchMovies({ type: 'popular' }))
    }
  }, [dispatch])

  useEffect(() => {
    if (!query || !year?.length || !genre?.length) return

    dispatch(
      moviesOperations.fetchMovies({
        type: 'byQuery',
        filters: { query, year, genre },
      })
    )
  }, [searchParams])

  return (
    <CatalogWrapper>
      <SearchBar />
      {isLoading ? 'LOADING' : <MovieList movies={movies} />}
    </CatalogWrapper>
  )
}

export default Catalog
