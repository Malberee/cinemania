import { FC, memo, useState } from 'react'
import { LibraryWrapper } from './Library.styled'
import { LibraryProps } from './Library.types'
import useAppSelector from 'hooks/useAppSelector'
import { userSelectors } from 'store/user'
import MovieList from 'components/MovieList'
import Loader from 'components/common/Loader'
import { Movie } from 'types'
import Modal from 'components/common/Modal'
import MovieDetails from 'components/MovieDetails'
import Paginate from 'components/common/Paginate'
import { useSearchParams } from 'react-router-dom'
import chunk from 'lodash.chunk'
import useUser from 'hooks/useUser'

const Library: FC<LibraryProps> = memo(() => {
  const [selectedMovie, setSelectedMovie] = useState<null | Movie>(null)
  const isLoading = useAppSelector(userSelectors.selectIsLoading)
  const { isLoggedIn } = useUser()
  const movies = useAppSelector(userSelectors.selectLibrary)
  console.log('movies: ', movies)
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = Number(searchParams.get('page') || 1)

  const moviesChunks = chunk(movies, 21)
  console.log('moviesChunks: ', moviesChunks)
  const params = Object.fromEntries([...searchParams])

  if (moviesChunks.length < currentPage) {
    setSearchParams({ ...params, page: moviesChunks.length.toString() })
  }

  const handlePageChange = (page: number) => {
    setSearchParams({ ...params, page: (page + 1).toString() })
  }

  return (
    <LibraryWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        isLoggedIn &&
        moviesChunks.length > 0 && (
          <>
            <MovieList
              movies={moviesChunks[currentPage - 1]}
              selectMovie={setSelectedMovie}
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
})

export default Library
