import { useGetPopularMoviesQuery } from '../store'
import './App.scss'

const App = () => {
  const { data = [], isLoading } = useGetPopularMoviesQuery()

  return <></>
}

export default App
