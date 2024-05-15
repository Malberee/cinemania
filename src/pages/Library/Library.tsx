import { FC, useEffect, useState } from 'react'
import { LibraryWrapper, SearchMovieButton } from './Library.styled'
import { LibraryProps } from './Library.types'
import useAppSelector from 'hooks/useAppSelector'
import { userSelectors } from 'store/user'
import MovieList from 'components/MovieList'
import Loader from 'components/common/Loader'
import { Movie } from 'types'
import Modal from 'components/common/Modal'
import MovieDetails from 'components/MovieDetails'
import Paginate from 'components/common/Paginate'
import { useNavigate, useSearchParams } from 'react-router-dom'
import chunk from 'lodash.chunk'
import useUser from 'hooks/useUser'
import LibraryHero from 'components/LibraryHero'

const Library: FC<LibraryProps> = () => {
  const [selectedMovie, setSelectedMovie] = useState<null | Movie>(null)
  const isLoading = useAppSelector(userSelectors.selectIsLoading)
  const [searchParams, setSearchParams] = useSearchParams()
  const movies = useAppSelector(userSelectors.selectLibrary)
  const { isLoggedIn } = useUser()
  const navigate = useNavigate()
  const currentPage = Number(searchParams.get('page') || 1)

  const moviesChunks = chunk(movies, 21)
  const params = Object.fromEntries([...searchParams])

  const handlePageChange = (page: number) => {
    setSearchParams({ ...params, page: (page + 1).toString() })
  }

  useEffect(() => {
    if (currentPage < 1) {
      setSearchParams({
        ...params,
        page: '1',
      })
    }

    if (moviesChunks.length < currentPage) {
      setSearchParams({
        ...params,
        page: (moviesChunks.length || 1).toString(),
      })
    }
  }, [movies])

  return (
    <LibraryWrapper>
      <LibraryHero />
      {isLoading ? (
        <Loader />
      ) : (
        isLoggedIn && (
          <>
            <MovieList
              movies={moviesChunks[currentPage - 1] || []}
              selectMovie={setSelectedMovie}
              errorMessage={
                <>
                  You don’t have any movies at your library.
                  <SearchMovieButton onClick={() => navigate('/catalog')}>
                    Search movie
                  </SearchMovieButton>
                </>
              }
            />
            {moviesChunks.length > 1 && (
              <Paginate
                totalPages={moviesChunks.length}
                currentPage={currentPage - 1}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )
      )}
      {selectedMovie && (
        <Modal onClose={() => setSelectedMovie(null)}>
          <MovieDetails movie={selectedMovie} />
        </Modal>
      )}
    </LibraryWrapper>
  )
}

export default Library
