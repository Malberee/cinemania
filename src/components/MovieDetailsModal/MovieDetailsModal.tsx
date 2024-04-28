import { FC, useEffect, useState } from 'react'
import { LoaderWrapper, LoadingText } from './MovieDetailsModal.styled'
import { MovieDetailsModalProps } from './MovieDetailsModal.types'
import Modal from 'components/Modal'
import MovieDetails from 'components/MovieDetails'
import { Navigate, useParams } from 'react-router-dom'
import { Movie } from 'types'
import { fetchMovieById } from 'services/movies-api'
import { Oval } from 'react-loader-spinner'
import { useTheme } from 'styled-components'
import Loader from 'components/Loader'

const MovieDetailsModal: FC<MovieDetailsModalProps> = () => {
  const [movie, setMovie] = useState<null | Movie>(null)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { movieId } = useParams()
  const theme = useTheme()

  useEffect(() => {
    const fetchMovie = async () => {
      setIsLoading(true)

      try {
        const _movie = await fetchMovieById(movieId as string)
        setMovie(_movie)
      } catch (error) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMovie()
  }, [movieId])

  return (
    <Modal>
      {(isLoading && (
        <Loader>
          <LoadingText>Loading...</LoadingText>
        </Loader>
      )) ||
        (isError && <Navigate to="/" />) ||
        (movie && <MovieDetails movie={movie} />)}
    </Modal>
  )
}

export default MovieDetailsModal
