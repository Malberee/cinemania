import { FC } from 'react'
import {
  HeroWrapper,
  MoviePoster,
  HeroInner,
  MovieTitle,
  MovieOverview,
  ButtonsWrapper,
} from './Hero.styled'
import { HeroProps } from './Hero.types'
import useAppSelector from 'hooks/useAppSelector'
import { selectIsLoading, selectMovies } from 'store/movies/movies.selectors'
import Container from 'components/Container'
import Button from 'components/Button'

const Hero: FC<HeroProps> = () => {
  const movies = useAppSelector(selectMovies)
  const isLoading = useAppSelector(selectIsLoading)

  const movie = movies[0]

  return (
    <HeroWrapper>
      {!isLoading && movie && (
        <MoviePoster
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        />
      )}
      <HeroInner>
        <Container>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieOverview>
            {movie.overview.split(' ').slice(0, 25).join(' ')}..
          </MovieOverview>
          <ButtonsWrapper>
              <Button>Watch trailer</Button>
              <Button $isBordered>More details</Button>
          </ButtonsWrapper>
        </Container>
      </HeroInner>
    </HeroWrapper>
  )
}

export default Hero
