import { FC, memo, useEffect, useState } from 'react'
import { CatalogWrapper } from './Catalog.styled'
import { CatalogProps } from './Catalog.types'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { moviesOperations } from 'store/movies'
import MovieList from 'components/MovieList'
import { selectIsLoading, selectMovies } from 'store/movies/movies.selectors'
import useAppSelector from 'hooks/useAppSelector'
import SearchBar from 'components/SearchBar'
import { useSearchParams } from 'react-router-dom'
import Hero from 'components/Hero'
import Loader from 'components/Loader'
import { Movie } from 'types'
import Modal from 'components/Modal'
import MovieDetails from 'components/MovieDetails'

const Catalog: FC<CatalogProps> = memo(() => {
  const [selectedMovie, setSelectedMovie] = useState<null | Movie>(null)
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
      <Hero openModal={setSelectedMovie} />
      <SearchBar />
      {isLoading ? (
        <Loader />
      ) : (
        <MovieList movies={movies} selectMovie={setSelectedMovie} />
      )}
      {selectedMovie && (
        <Modal onClose={() => setSelectedMovie(null)}>
          <MovieDetails movie={selectedMovie} />
        </Modal>
      )}
    </CatalogWrapper>
  )
})

export default Catalog
