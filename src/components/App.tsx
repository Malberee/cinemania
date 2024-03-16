import { useSelector } from 'react-redux'
import './App.scss'
import { useEffect } from 'react'
import Button from './Button'
import { moviesOperations, moviesSelectors } from 'store/movies'
import MovieList from './MovieList'
import { useAppDispatch } from 'hooks/useAppDispatch'

const App = () => {
  const dispatch = useAppDispatch()
  const movies = useSelector(moviesSelectors.selectMovies)

  useEffect(() => {
    console.log(movies)
  }, [movies])

  useEffect(() => {
    dispatch(moviesOperations.fetchMovies({ type: 'popular' }))
    dispatch(moviesOperations.fetchGenres())
  }, [dispatch])

  return (
    <>
      {/* <MovieList movies={movies} /> */}
      <Button isBordered>Button</Button>
    </>
  )
}

export default App
