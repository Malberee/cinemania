import { useSelector } from 'react-redux'
import './App.scss'
import { useEffect } from 'react'
import Button from './Button'
import { moviesOperations, moviesSelectors } from 'store/movies'
import MovieList from './MovieList'
import { useAppDispatch } from 'hooks/useAppDispatch'
import ThemeSwitcher from './ThemeSwitcher'
import Header from './Header'

const App = () => {
  const dispatch = useAppDispatch()
  const movies = useSelector(moviesSelectors.selectMovies)

  useEffect(() => {
    dispatch(moviesOperations.fetchMovies({ type: 'popular' }))
    dispatch(moviesOperations.fetchGenres())
  }, [dispatch])

  return (
    <>
      <Header />
    </>
  )
}

export default App
