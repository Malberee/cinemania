import { useDispatch, useSelector } from 'react-redux'
import './App.scss'
import { useEffect } from 'react'
import { fetchMovies } from '../redux/movies/movies.operations'
import { selectMovies } from '../redux/movies/movies.selectors'

const App = () => {
  const dispatch = useDispatch()
  const movies = useSelector(selectMovies)

  useEffect(() => {
    console.log(movies)
  }, [movies])

  useEffect(() => {
    dispatch(fetchMovies({ type: 'byQuery', query: 'marvel' }))
  }, [dispatch])

  return <></>
}

export default App
