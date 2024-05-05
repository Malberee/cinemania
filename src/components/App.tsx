import { Route, Routes } from 'react-router-dom'
import GlobalStyles from './global'
import Catalog from 'pages/Catalog'
import Home from 'pages/Home'
import Library from 'pages/Library'
import Layout from './Layout'
import { useEffect } from 'react'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { moviesOperations } from 'store/movies'
import useAppSelector from 'hooks/useAppSelector'
import { selectGenreList } from 'store/movies/movies.selectors'
import { trendingMoviesOperations } from 'store/trendingMovies'

const App = () => {
  const dispatch = useAppDispatch()
  const genres = useAppSelector(selectGenreList)

  useEffect(() => {
    dispatch(trendingMoviesOperations.fetchTrendingMovies())

    if (!genres.length) {
      dispatch(moviesOperations.fetchGenres())
    }
  }, [dispatch])

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="library" element={<Library />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
