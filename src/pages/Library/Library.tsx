import { FC, memo, useEffect, useState } from 'react'
import { LibraryWrapper } from './Library.styled'
import { LibraryProps } from './Library.types'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { fetchLibrary } from 'store/user/operation'
import useAppSelector from 'hooks/useAppSelector'
import { selectId, selectIsLoading, selectLibrary } from 'store/user/selectors'
import MovieList from 'components/MovieList'
import Loader from 'components/common/Loader'
import { Movie } from 'types'
import Modal from 'components/common/Modal'
import MovieDetails from 'components/MovieDetails'

const Library: FC<LibraryProps> = memo(() => {
  const [selectedMovie, setSelectedMovie] = useState<null | Movie>(null)
  const dispatch = useAppDispatch()
  const userId = useAppSelector(selectId)
  const isLoading = useAppSelector(selectIsLoading)
  const movies = useAppSelector(selectLibrary)

  useEffect(() => {
    if (userId) {
      dispatch(fetchLibrary(userId))
    }
  }, [dispatch])

  return (
    <LibraryWrapper>
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
    </LibraryWrapper>
  )
})

export default Library
