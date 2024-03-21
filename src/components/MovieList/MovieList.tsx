import { FC, useState } from 'react'
import { MovieListWrapper } from './MovieList.styled'
import Movie from '../Movie/Movie'
import { MovieListProps } from './MovieList.types'
import { Movie as IMovie } from 'types'
import Modal from 'components/Modal'
import MovieDetails from 'components/MovieDetails'
import Container from 'components/Container'

const MovieList: FC<MovieListProps> = ({ movies }) => {
  const [currentMovie, setCurrentMovie] = useState<null | IMovie>(null)

  const selectMovie = (movie: IMovie) => setCurrentMovie(movie)

  return (
    <Container>
      <MovieListWrapper>
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.id} selectMovie={selectMovie} />
        ))}
        {currentMovie && (
          <Modal onClose={() => setCurrentMovie(null)}>
            <MovieDetails movie={currentMovie} />
          </Modal>
        )}
      </MovieListWrapper>
    </Container>
  )
}

export default MovieList
