import { FC, useEffect, useState } from 'react'
import { TrailerPlayerWrapper, ErrorMessage } from './TrailerPlayer.styled'
import { TrailerPlayerProps } from './TrailerPlayer.types'
import YouTube from 'react-youtube'
import { fetchMovieVideos } from 'services/movies-api'
import Loader from 'components/common/Loader'
import Backdrop from '../Backdrop'
import useOutsideClick from 'hooks/useOutsideClick'
import Modal from '../Modal'

const TrailerPlayer: FC<TrailerPlayerProps> = ({ movieId, closeTrailer }) => {
  const [trailerId, setTrailerId] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const ref = useOutsideClick(closeTrailer)

  useEffect(() => {
    // Such a decision is related to this problem: https://stackoverflow.com/questions/62025911/redux-hooks-usedispatch-in-useeffect-calling-action-twice

    const fetch = setTimeout(() => {
      const fetchMovieTrailer = async () => {
        try {
          setIsError(false)
          setIsLoading(true)

          const movieVideos = await fetchMovieVideos(movieId)

          const movieTrailer = movieVideos.find(
            (video) => video.type === 'Trailer'
          )

          setTrailerId(movieTrailer?.key || '')
        } catch (error) {
          setIsError(true)
        } finally {
          setIsLoading(false)
        }
      }

      fetchMovieTrailer()
    }, 0)

    return () => clearTimeout(fetch)
  }, [])

  return (
    <Backdrop>
      <TrailerPlayerWrapper ref={ref}>
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <Modal onClose={closeTrailer}>
            <ErrorMessage>
              OOPS... <br /> We are very sorry! <br /> We don't have any
              trailers for this film.
            </ErrorMessage>
          </Modal>
        ) : (
          <YouTube videoId={trailerId} iframeClassName="player" />
        )}
      </TrailerPlayerWrapper>
    </Backdrop>
  )
}

export default TrailerPlayer
