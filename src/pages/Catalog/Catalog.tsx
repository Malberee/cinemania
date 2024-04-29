import { FC, useEffect } from 'react'
import { CatalogWrapper } from './Catalog.styled'
import { CatalogProps } from './Catalog.types'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { moviesOperations } from 'store/movies'
import MovieList from 'components/MovieList'
import { selectIsLoading, selectMovies } from 'store/movies/movies.selectors'
import useAppSelector from 'hooks/useAppSelector'
import SearchBar from 'components/SearchBar'
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import Hero from 'components/Hero'
import Loader from 'components/Loader'

const Catalog: FC<CatalogProps> = () => {
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()
  const movies = useAppSelector(selectMovies)
  const isLoading = useAppSelector(selectIsLoading)
  const navigate = useNavigate()

  const query = searchParams.get('query')
  const year = searchParams.get('year')?.split(',')
  const genre = searchParams.get('genre')?.split(',')

  const handleSelect = (movieId: number) => {
    navigate(`${movieId}`)
  }

  useEffect(() => {
    if (!query && !year?.length && !genre?.length) {
      dispatch(moviesOperations.fetchMovies({ type: 'popular' }))
    }
  }, [dispatch])

  useEffect(() => {
    if (!query && !year?.length && !genre?.length) {
      dispatch(moviesOperations.fetchMovies({ type: 'popular' }))
      return
    }

    dispatch(
      moviesOperations.fetchMovies({
        type: 'byQuery',
        filters: { query: query || '', year, genre },
      })
    )
  }, [searchParams])

  return (
    <CatalogWrapper>
      <Hero selectMovie={handleSelect} />
      <SearchBar />
      {isLoading ? <Loader /> : <MovieList movies={movies} />}
      <Outlet />
    </CatalogWrapper>
  )
}

export default Catalog
