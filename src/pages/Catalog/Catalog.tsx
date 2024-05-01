import { FC, useEffect } from 'react'
import { CatalogWrapper } from './Catalog.styled'
import { CatalogProps } from './Catalog.types'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { moviesOperations } from 'store/movies'
import MovieList from 'components/MovieList'
import { selectIsLoading, selectMovies } from 'store/movies/movies.selectors'
import useAppSelector from 'hooks/useAppSelector'
import SearchBar from 'components/SearchBar'
import { Outlet, useSearchParams } from 'react-router-dom'
import Hero from 'components/Hero'
import Loader from 'components/Loader'

const Catalog: FC<CatalogProps> = () => {
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()
  const movies = useAppSelector(selectMovies)
  const isLoading = useAppSelector(selectIsLoading)
  const page = Number(searchParams.get('page')) || 1

  const query = searchParams.get('query')
  const year = searchParams.get('year')?.split(',')
  const genre = searchParams.get('genre')?.split(',')


  useEffect(() => {
    if (!query && !year?.length && !genre?.length) {
      dispatch(moviesOperations.fetchMovies({ type: 'popular', page }))
      return
    }

    dispatch(
      moviesOperations.fetchMovies({
        type: 'byQuery',
        filters: { query: query || '', year, genre },
        page,
      })
    )
  }, [searchParams, dispatch])

  return (
    <CatalogWrapper>
      <Hero />
      <SearchBar />
      {isLoading ? <Loader /> : <MovieList movies={movies} />}
      <Outlet />
    </CatalogWrapper>
  )
}

export default Catalog
