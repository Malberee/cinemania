import { useSelector } from 'react-redux'
import './App.scss'
import { useEffect } from 'react'
import Button from './Button'
import { moviesOperations, moviesSelectors } from 'store/movies'
import MovieList from './MovieList'
import { useAppDispatch } from 'hooks/useAppDispatch'
import ThemeSwitcher from './ThemeSwitcher'

const App = () => {
  const dispatch = useAppDispatch()
  const movies = useSelector(moviesSelectors.selectMovies)

  useEffect(() => {
    dispatch(moviesOperations.fetchMovies({ type: 'popular' }))
    dispatch(moviesOperations.fetchGenres())
  }, [dispatch])

  return (
    <>
      {/* <MovieList movies={movies} /> */}
      <Button size="lg" isBordered>
        Button
      </Button>
      <ThemeSwitcher />
    </>
  )
}

export default App
